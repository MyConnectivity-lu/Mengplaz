import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/callout/callout.js';
import '@awesome.me/webawesome/dist/components/spinner/spinner.js';
import { initMode } from '~/lib/theme';
import { GcPage } from '~/lib/gc-page';
import { getQueryParam } from '~/lib/routing';
import { hasPermission } from '~/lib/gc';
import { ICONS } from '~/lib/icons';
import '~/components/mengplaz-app-shell';
import '~/components/mp-address-card';

initMode();

/**
 * One golden record and every source record linked to it, grouped by source.
 * Where a source contributes more than one record the group becomes a small
 * carousel rather than a wall of near-identical cards.
 */
@customElement('mengplaz-record-page')
export class MengplazRecordPage extends GcPage {
  static styles = css`
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--gc-gap);
    }
    .sources {
      display: grid;
      gap: var(--gc-gap);
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      align-items: start;
    }
    .group {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .pager {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.35rem;
    }
    .counter {
      font-variant-numeric: tabular-nums;
      color: var(--gc-muted);
      font-size: var(--wa-font-size-s);
    }
    .ico {
      width: 16px;
      height: 16px;
    }
    /* wa-button does not forward aria-label to its inner <button>, so an
       icon-only button would be nameless to assistive tech. Ship real text and
       hide it visually instead. */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    }
    .center {
      display: grid;
      place-items: center;
      gap: 0.5rem;
      padding: 3rem 1rem;
      color: var(--gc-muted);
    }
  `;

  @state() private details?: gc.api.GoldenRecordDetails;
  @state() private guid: string | null = null;
  /** Index of the visible card within each multi-record source group. */
  @state() private groupIndex: Record<string, number> = {};

  private isAdmin = false;

  protected async onInit() {
    this.isAdmin = hasPermission('admin');
    // An unlink inside a card invalidates the whole grouping, so refetch.
    this.addEventListener('update', (e) => {
      e.stopPropagation();
      void this.load();
    });
    this.guid = getQueryParam('guid');
    if (this.guid === null) {
      return;
    }
    await this.load();
  }

  private async load() {
    if (this.guid === null) {
      return;
    }
    this.loadError = '';
    try {
      this.details = await gc.api.getGoldenRecordDetails(this.guid);
    } catch (err) {
      this.details = undefined;
      this.loadError = err instanceof Error ? err.message : String(err);
    }
  }

  /** Source records grouped by their source name, in first-seen order. */
  private get groups(): Map<string, gc.mengplaz.AddressFullRecordRef[]> {
    const groups = new Map<string, gc.mengplaz.AddressFullRecordRef[]>();
    for (const r of this.details?.associated ?? []) {
      const key = r.record.sourceName;
      const list = groups.get(key);
      if (list) {
        list.push(r);
      } else {
        groups.set(key, [r]);
      }
    }
    return groups;
  }

  private step(source: string, total: number, delta: number) {
    const current = this.groupIndex[source] ?? 0;
    this.groupIndex = { ...this.groupIndex, [source]: (current + delta + total) % total };
  }

  private icon(inner: string, slot = '') {
    return html`<svg
      slot=${slot}
      class="ico"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      ${unsafeSVG(inner)}
    </svg>`;
  }

  private renderGroup(source: string, records: gc.mengplaz.AddressFullRecordRef[]) {
    if (records.length === 1) {
      return html`<mp-address-card .value=${records[0]} ?show-unlink=${this.isAdmin}></mp-address-card>`;
    }
    const index = this.groupIndex[source] ?? 0;
    return html`<div class="group">
      <div class="pager">
        <wa-button size="s" appearance="plain" @click=${() => this.step(source, records.length, -1)}>
          ${this.icon(ICONS.chevronLeft, 'start')}<span class="sr-only">Previous ${source} record</span>
        </wa-button>
        <span class="counter">${index + 1} / ${records.length}</span>
        <wa-button size="s" appearance="plain" @click=${() => this.step(source, records.length, 1)}>
          ${this.icon(ICONS.chevronRight, 'start')}<span class="sr-only">Next ${source} record</span>
        </wa-button>
      </div>
      <mp-address-card .value=${records[index]} ?show-unlink=${this.isAdmin}></mp-address-card>
    </div>`;
  }

  private renderBody() {
    if (this.guid === null) {
      return html`<div class="center">
        <wa-callout variant="neutral">No record selected. Open a record from the map, search or index.</wa-callout>
      </div>`;
    }
    if (this.loadError) {
      return html`<div class="center">
        <wa-callout variant="danger">Record not found: ${this.loadError}</wa-callout>
      </div>`;
    }
    if (this.loading || !this.details) {
      return html`<div class="center"><wa-spinner></wa-spinner></div>`;
    }
    return html`
      <mp-address-card .value=${this.details.golden} show-quick-link show-map></mp-address-card>
      <div class="sources">${[...this.groups].map(([source, records]) => this.renderGroup(source, records))}</div>
    `;
  }

  render() {
    return html`
      <mengplaz-app-shell page-title="Golden Record">
        <div class="stack">${this.renderBody()}</div>
      </mengplaz-app-shell>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-record-page': MengplazRecordPage;
  }
}
