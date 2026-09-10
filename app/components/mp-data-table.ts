import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Column } from '~/lib/columns';
import { align, formatCell } from '~/lib/columns';

type Row = Record<string, unknown>;

/**
 * A plain, non-virtualized table driven by the declarative `Column` model. Sized
 * for the hundreds-of-rows case; `table-layout: fixed` plus `content-visibility`
 * keep it cheap without windowing. Use `mp-virtual-table` beyond a few thousand.
 *
 * Clicking a row fires `row-click` with `{ row, index }` - the replacement for
 * `GuiTable`'s `gui-table-click`.
 *
 * `--mp-table-max-height` caps the scroll region so a long result set scrolls
 * inside the table instead of pushing the rest of the page out of view.
 */
@customElement('mp-data-table')
export class MpDataTable extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .scroll {
      overflow: auto;
      max-height: var(--mp-table-max-height, none);
      border: 1px solid var(--gc-border);
      border-radius: var(--gc-radius);
      background: var(--gc-surface);
    }
    table {
      width: 100%;
      min-width: var(--mp-table-min-width, 0);
      border-collapse: collapse;
      table-layout: fixed;
      font-size: var(--wa-font-size-s);
    }
    thead th {
      position: sticky;
      top: 0;
      background: var(--gc-surface-2);
      color: var(--gc-muted);
      font-weight: 600;
      text-align: left;
      padding: 0.32rem 0.6rem;
      border-bottom: 1px solid var(--gc-border);
      white-space: nowrap;
    }
    tbody tr {
      content-visibility: auto;
      contain-intrinsic-size: auto 30px;
      cursor: pointer;
    }
    tbody tr:nth-child(even) {
      background: var(--gc-zebra);
    }
    tbody tr:hover {
      background: var(--gc-hover);
    }
    tbody tr[aria-selected='true'] {
      background: var(--gc-selected);
    }
    td {
      padding: 0.3rem 0.6rem;
      border-bottom: 1px solid var(--gc-hair);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--gc-text);
    }
    td.num {
      font-variant-numeric: tabular-nums;
      font-family: var(--gc-mono);
    }
    .empty {
      padding: 2rem;
      text-align: center;
      color: var(--gc-muted);
    }
  `;

  @property({ attribute: false }) columns: Column<Row>[] = [];
  @property({ attribute: false }) rows: Row[] = [];
  /** Index of the highlighted row, or -1 for none. */
  @property({ type: Number, attribute: 'selected-index' }) selectedIndex = -1;
  /** Shown in place of the table body when there are no rows. */
  @property({ attribute: 'empty-text' }) emptyText = 'No rows';

  private select(row: Row, index: number) {
    this.dispatchEvent(new CustomEvent('row-click', { detail: { row, index }, bubbles: true, composed: true }));
  }

  render() {
    const cols = this.columns;
    return html`
      <div class="scroll">
        <table>
          <colgroup>
            ${cols.map((c) => html`<col style=${c.width ? `width:${c.width}` : ''} />`)}
          </colgroup>
          <thead>
            <tr>
              ${cols.map((c) => html`<th style="text-align:${align(c)}">${c.label}</th>`)}
            </tr>
          </thead>
          <tbody>
            ${this.rows.map(
              (row, i) => html`<tr
                aria-selected=${i === this.selectedIndex ? 'true' : 'false'}
                @click=${() => this.select(row, i)}
              >
                ${cols.map(
                  (c) => html`<td class=${c.kind === 'num' ? 'num' : ''} style="text-align:${align(c)}">
                    ${formatCell(c, row)}
                  </td>`,
                )}
              </tr>`,
            )}
          </tbody>
        </table>
        ${this.rows.length === 0 ? html`<div class="empty">${this.emptyText}</div>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-data-table': MpDataTable;
  }
}
