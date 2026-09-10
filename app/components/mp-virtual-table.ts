import { LitElement, html, css, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  Virtualizer,
  elementScroll,
  observeElementOffset,
  observeElementRect,
  type VirtualizerOptions,
} from '@tanstack/virtual-core';
import type { Column } from '~/lib/columns';
import { align, compareCell, formatCell } from '~/lib/columns';

type Row = Record<string, unknown>;

/**
 * A row-virtualized table backed by TanStack Virtual: only the visible rows plus
 * an overscan are in the DOM. Use it where a list can run to thousands of rows -
 * the reconcile workspace's per-tab record lists - and `mp-data-table` below that.
 *
 * Unlike the project-template's fetch-windowed equivalent, this takes the rows
 * outright: MengPlaz already holds the full id list for a tab in memory and
 * fetches the heavy per-record detail separately, on selection.
 *
 * Clicking a row fires `row-click` with `{ row, index }`.
 *
 * Columns marked `sortable` get a clickable header. Sorting is a view over
 * `rows`, never a reordering of it: `row-click` and `selected-index` keep
 * addressing rows by their index in the array the host passed in.
 *
 * A host whose rows come from the backend a page at a time sets `server-sort` and
 * `has-more`: the sort then travels with the query instead of being applied here,
 * and nearing the end of the loaded rows fires `load-more` for the next page.
 */
@customElement('mp-virtual-table')
export class MpVirtualTable extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .wrap {
      border: 1px solid var(--gc-border);
      border-radius: var(--gc-radius);
      background: var(--gc-surface);
      overflow: hidden;
    }
    .head,
    .row {
      display: grid;
      align-items: center;
    }
    .head {
      background: var(--gc-surface-2);
      color: var(--gc-muted);
      font-weight: 600;
      font-size: var(--wa-font-size-s);
      border-bottom: 1px solid var(--gc-border);
    }
    .head > div,
    .row > div {
      padding: 0.3rem 0.6rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .scroll {
      overflow: auto;
      position: relative;
    }
    .inner {
      position: relative;
      width: 100%;
    }
    .row {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      font-size: var(--wa-font-size-s);
      border-bottom: 1px solid var(--gc-hair);
      box-sizing: border-box;
      color: var(--gc-text);
      cursor: pointer;
    }
    .row:hover {
      background: var(--gc-hover);
    }
    .row.zebra {
      background: var(--gc-zebra);
    }
    .row.selected {
      background: var(--gc-selected);
    }
    .num {
      font-variant-numeric: tabular-nums;
      font-family: var(--gc-mono);
    }
    .sort {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      width: 100%;
      padding: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: 0;
      cursor: pointer;
    }
    .sort:hover,
    .sort.active {
      color: var(--gc-text);
    }
    .sort:focus-visible {
      outline: 2px solid var(--gc-accent);
      outline-offset: 1px;
    }
    .sort.right {
      justify-content: flex-end;
    }
    /* The idle chevrons only show on hover / focus so unsorted headers stay
       quiet, but they hold their width either way to keep the label steady. */
    .arrow {
      flex: none;
      font-size: 0.75em;
      line-height: 1;
      opacity: 0;
    }
    .sort:hover .arrow,
    .sort:focus-visible .arrow,
    .sort.active .arrow {
      opacity: 1;
    }
    .sort.active .arrow {
      color: var(--gc-accent);
    }
    .empty {
      padding: 2rem;
      text-align: center;
      color: var(--gc-muted);
    }
  `;

  @property({ attribute: false }) columns: Column<Row>[] = [];
  @property({ attribute: false }) rows: Row[] = [];
  @property({ type: Number, attribute: 'row-height' }) rowHeight = 32;
  /** Height of the scroll viewport. */
  @property() height = '60vh';
  @property({ type: Number, attribute: 'selected-index' }) selectedIndex = -1;
  @property({ attribute: 'empty-text' }) emptyText = 'No rows';
  /** Key of the column the view is sorted on; empty for the host's own order. */
  @property({ attribute: 'sort-key' }) sortKey = '';
  /** Direction of that sort. */
  @property({ attribute: 'sort-dir' }) sortDir: 'asc' | 'desc' = 'asc';
  /**
   * Leave the ordering to the host: headers still emit `sort-change`, but the rows
   * are rendered in the order they arrive. For a table whose host pages a sorted
   * result out of the backend, sorting the loaded prefix locally would be a lie.
   */
  @property({ type: Boolean, attribute: 'server-sort' }) serverSort = false;
  /** Whether rows beyond the ones passed in exist; enables `load-more`. */
  @property({ type: Boolean, attribute: 'has-more' }) hasMore = false;
  /** How many rows from the end a `load-more` fires at. */
  @property({ type: Number, attribute: 'load-more-threshold' }) loadMoreThreshold = 50;

  // Bumped by the virtualizer's onChange to drive a re-render; the virtualizer
  // itself is not reactive state.
  @state() private version = 0;

  private virtualizer?: Virtualizer<HTMLElement, HTMLElement>;
  private cleanup?: () => void;

  /** Rows in display order, each carrying its index in `rows`. */
  private view: { row: Row; index: number }[] = [];

  /** `rows.length` the last `load-more` was fired at, so one page is asked for once. */
  private requestedAt = -1;

  private get scrollEl(): HTMLElement {
    return this.renderRoot.querySelector('.scroll') as HTMLElement;
  }

  private options(): VirtualizerOptions<HTMLElement, HTMLElement> {
    return {
      count: this.rows.length,
      getScrollElement: () => this.scrollEl,
      estimateSize: () => this.rowHeight,
      overscan: 16,
      scrollToFn: elementScroll,
      observeElementRect,
      observeElementOffset,
      onChange: () => {
        this.version++;
        this.maybeLoadMore();
      },
    };
  }

  /**
   * Rebuild the sorted view only when its inputs move. Scrolling re-renders via
   * `version`, and re-sorting thousands of rows on every scroll frame would be
   * the one thing that undoes virtualization.
   */
  protected override willUpdate(changed: PropertyValues) {
    if (changed.has('rows') || changed.has('columns') || changed.has('sortKey') || changed.has('sortDir')) {
      this.view = this.rows.map((row, index) => ({ row, index }));
      const col = this.serverSort ? undefined : this.columns.find((c) => c.sortable && c.key === this.sortKey);
      if (col) {
        const dir = this.sortDir === 'desc' ? -1 : 1;
        // Array.sort is stable, so ties keep the host's original order.
        this.view.sort((a, b) => compareCell(col, a.row, b.row, dir));
      }
    }
  }

  protected override firstUpdated() {
    this.virtualizer = new Virtualizer(this.options());
    this.cleanup = this.virtualizer._didMount();
    this.virtualizer._willUpdate();
    this.version++;
  }

  protected override updated(changed: Map<string, unknown>) {
    if (this.virtualizer && changed.has('rows')) {
      this.virtualizer.setOptions(this.options());
      this.virtualizer._willUpdate();
      // A shorter list is a new result, not more of the old one; ask again from there.
      if (this.rows.length < this.requestedAt) {
        this.requestedAt = -1;
      }
      // The page that just arrived may not even fill the viewport.
      this.maybeLoadMore();
    }
  }

  /**
   * Ask the host for the next page once the rendered window comes within
   * `loadMoreThreshold` rows of the end - with the default 50 and pages of 1000,
   * that is row 950, then 1950, and so on. Fired at most once per `rows` length,
   * so the scroll frames that follow stay quiet while the fetch is in flight.
   */
  private maybeLoadMore() {
    if (!this.hasMore || this.rows.length === this.requestedAt) {
      return;
    }
    const items = this.virtualizer?.getVirtualItems() ?? [];
    const last = items[items.length - 1]?.index ?? -1;
    if (last < 0 || last < this.rows.length - this.loadMoreThreshold) {
      return;
    }
    this.requestedAt = this.rows.length;
    this.dispatchEvent(new CustomEvent('load-more', { bubbles: true, composed: true }));
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanup?.();
  }

  /**
   * A three-state cycle on one column: first click sorts (high-to-low for
   * numbers, A-Z for text), second click flips it, third clears the sort and
   * hands the rows back in the host's own order.
   */
  private toggleSort(key: string, kind: string | undefined) {
    const first = kind === 'num' ? 'desc' : 'asc';
    if (this.sortKey !== key) {
      this.sortKey = key;
      this.sortDir = first;
    } else if (this.sortDir === first) {
      this.sortDir = first === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = '';
      this.sortDir = 'asc';
    }
    this.dispatchEvent(
      new CustomEvent('sort-change', {
        detail: { key: this.sortKey, dir: this.sortDir },
        bubbles: true,
        composed: true,
      }),
    );
    // The old scroll offset means nothing under the new order; show the top.
    void this.updateComplete.then(() => {
      this.scrollEl.scrollTop = 0;
    });
  }

  /** What the next click on this header will do. */
  private sortTitle(c: Column<Row>, active: boolean): string {
    const first = c.kind === 'num' ? 'desc' : 'asc';
    if (!active) {
      return first === 'desc' ? `Sort by ${c.label}, highest first` : `Sort by ${c.label}, A-Z`;
    }
    return this.sortDir === first ? `Reverse the ${c.label} sort` : 'Clear the sort';
  }

  private renderHead(c: Column<Row>) {
    const a = align(c);
    if (!c.sortable) {
      return html`<div style="text-align:${a}">${c.label}</div>`;
    }
    const active = this.sortKey === c.key;
    const arrow = active ? (this.sortDir === 'asc' ? '▲' : '▼') : '⇅';
    return html`<div>
      <button
        class="sort ${active ? 'active' : ''} ${a === 'right' ? 'right' : ''}"
        title=${this.sortTitle(c, active)}
        @click=${() => this.toggleSort(c.key, c.kind)}
      >
        <span>${c.label}</span><span class="arrow" aria-hidden="true">${arrow}</span>
      </button>
    </div>`;
  }

  private select(row: Row, index: number) {
    this.dispatchEvent(new CustomEvent('row-click', { detail: { row, index }, bubbles: true, composed: true }));
  }

  render() {
    const grid = this.columns.map((c) => c.width ?? '1fr').join(' ');
    this.virtualizer?._willUpdate();
    const items = this.virtualizer?.getVirtualItems() ?? [];
    const totalSize = this.virtualizer?.getTotalSize() ?? 0;
    return html`
      <div class="wrap">
        <div class="head" style="grid-template-columns:${grid}">${this.columns.map((c) => this.renderHead(c))}</div>
        <div class="scroll" style="height:${this.height}">
          <div class="inner" style="height:${totalSize}px">
            ${items.map((it) => {
              const entry = this.view[it.index];
              if (entry === undefined) {
                return '';
              }
              const { row, index } = entry;
              const classes = ['row'];
              if (it.index % 2) {
                classes.push('zebra');
              }
              if (index === this.selectedIndex) {
                classes.push('selected');
              }
              return html`<div
                class=${classes.join(' ')}
                style="height:${it.size}px;transform:translateY(${it.start}px);grid-template-columns:${grid}"
                @click=${() => this.select(row, index)}
              >
                ${this.columns.map(
                  (c) => html`<div class=${c.kind === 'num' ? 'num' : ''} style="text-align:${align(c)}">
                    ${formatCell(c, row)}
                  </div>`,
                )}
              </div>`;
            })}
          </div>
        </div>
        ${this.rows.length === 0 ? html`<div class="empty">${this.emptyText}</div>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-virtual-table': MpVirtualTable;
  }
}
