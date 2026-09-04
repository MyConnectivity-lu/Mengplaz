import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
import '@awesome.me/webawesome/dist/components/spinner/spinner.js';
import { ICONS } from '~/lib/icons';

const SEARCH_MIN_LENGTH = 3;
const SEARCH_DEBOUNCE_MS = 250;
const SEARCH_MAX_RESULTS = 10;

export interface AddressSelectEvent {
  record: gc.mengplaz.POIRecordRef;
}

/**
 * A type-ahead over `gc.api.searchAddress`, rendering a listbox of matches below
 * the input. Selecting one fires `address-select`.
 *
 * Every keystroke supersedes the previous query: the debounce timer is cleared
 * and the in-flight request aborted, so a slow response for an old prefix can
 * never overwrite the results for the current one.
 */
@customElement('mp-address-search')
export class MpAddressSearch extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 100%;
    }
    .results {
      position: absolute;
      top: calc(100% + 0.25rem);
      left: 0;
      right: 0;
      z-index: 20;
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      max-height: calc(100vh - 120px);
      overflow-y: auto;
    }
    .item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.6rem;
      background: var(--gc-surface);
      border: 1px solid var(--gc-border);
      border-radius: var(--gc-radius);
      box-shadow: var(--gc-shadow);
      cursor: pointer;
      transition:
        background-color 0.15s ease,
        border-color 0.15s ease;
      text-align: left;
      font: inherit;
      color: inherit;
      width: 100%;
      box-sizing: border-box;
    }
    /* An opaque surface, not the translucent --gc-hover tint: the list floats over
       the map with nothing opaque behind it, so a tint lets the map show through.
       No translateX either - the row would overflow the scroll container and add a
       horizontal scrollbar. */
    .item:hover:not(.disabled) {
      background: var(--gc-surface-2);
      border-color: var(--gc-accent);
    }
    .item.disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }
    .item.disabled .ico {
      color: var(--gc-warn);
    }
    .ico {
      width: 18px;
      height: 18px;
      flex: none;
      color: var(--gc-accent);
    }
    .info {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .title {
      font-weight: 600;
      color: var(--gc-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sub {
      font-size: var(--wa-font-size-xs);
      color: var(--gc-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .empty {
      padding: 0.5rem 0.7rem;
      background: var(--gc-surface);
      border: 1px solid var(--gc-border);
      border-radius: var(--gc-radius);
      box-shadow: var(--gc-shadow);
      color: var(--gc-text);
      text-align: center;
    }
    .hint {
      margin-top: 0.3rem;
      font-size: var(--wa-font-size-xs);
      color: var(--gc-muted);
    }
  `;

  @property() placeholder = 'Search address...';
  /** Restrict the search to one data source. Changing it clears the field. */
  @property() source?: string;
  /** Grey out results that carry no coordinates - they cannot be shown on a map. */
  @property({ type: Boolean, attribute: 'disable-no-coords' }) disableNoCoords = false;

  @state() private results: gc.mengplaz.POIRecordRef[] = [];
  @state() private searched = false;
  @state() private loading = false;

  @query('wa-input') private input?: HTMLInputElement & { value: string };

  private debounceTimer: number | null = null;
  private searchAbort: AbortController | null = null;

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.cancelPending();
    this.loading = false;
  }

  protected override updated(changed: Map<string, unknown>) {
    if (changed.has('source') && changed.get('source') !== undefined) {
      this.clear();
    }
  }

  /** Empty the field and drop any results. */
  clear() {
    if (this.input) {
      this.input.value = '';
    }
    this.clearResults();
  }

  private onInput() {
    const value = this.input?.value?.trim() ?? '';
    this.cancelPending();
    if (value.length < SEARCH_MIN_LENGTH) {
      this.clearResults();
      this.loading = false;
      return;
    }
    this.loading = true;
    this.debounceTimer = window.setTimeout(() => void this.runSearch(value), SEARCH_DEBOUNCE_MS);
  }

  private async runSearch(query: string) {
    this.searchAbort?.abort();
    const controller = new AbortController();
    this.searchAbort = controller;
    let results: gc.mengplaz.POIRecordRef[] = [];
    try {
      results =
        (await gc.api.searchAddress(query, SEARCH_MAX_RESULTS, this.source, undefined, controller.signal)) ?? [];
    } catch {
      // An aborted request has been superseded: the newer call owns the UI state.
      if (controller.signal.aborted) {
        return;
      }
      this.searchAbort = null;
      this.loading = false;
      return;
    }
    if (controller.signal.aborted) {
      return;
    }
    this.searchAbort = null;
    this.results = results;
    this.searched = true;
    this.loading = false;
  }

  private cancelPending() {
    if (this.debounceTimer != null) {
      window.clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
    this.searchAbort?.abort();
    this.searchAbort = null;
  }

  private clearResults() {
    this.cancelPending();
    this.results = [];
    this.searched = false;
  }

  private select(r: gc.mengplaz.POIRecordRef) {
    this.dispatchEvent(
      new CustomEvent<AddressSelectEvent>('address-select', {
        detail: { record: r },
        bubbles: true,
        composed: true,
      }),
    );
    this.clear();
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

  private renderResults() {
    if (!this.searched) {
      return '';
    }
    if (this.results.length === 0) {
      return html`<div class="results">
        <div class="empty">
          <div>No results</div>
          <div class="hint">
            Try format: <em>number street, postcode locality</em><br />
            e.g. <em>5 Rue de l'Industrie, 1811 Luxembourg</em>
          </div>
        </div>
      </div>`;
    }
    return html`<div class="results" role="listbox">
      ${this.results.map((r) => {
      const disabled = this.disableNoCoords && r.record.primaryLocation == null;
      return html`<button
          type="button"
          role="option"
          aria-selected="false"
          aria-disabled=${disabled ? 'true' : 'false'}
          class="item ${disabled ? 'disabled' : ''}"
          title=${disabled ? 'Cannot be selected on the map: this item has no coordinates associated.' : ''}
          @click=${() => (disabled ? undefined : this.select(r))}
        >
          ${this.icon(disabled ? ICONS.info : ICONS.pin)}
          <span class="info">
            <span class="title">${r.record.number} ${r.record.street}</span>
            <span class="sub">L-${r.record.postcode} ${r.record.locality} ${r.record.commune}</span>
          </span>
        </button>`;
    })}
    </div>`;
  }

  render() {
    return html`
      <wa-input
        placeholder=${this.placeholder}
        size="m"
        with-clear
        @input=${() => this.onInput()}
        @wa-clear=${() => this.clearResults()}
      >
        ${this.loading ? html`<wa-spinner slot="start"></wa-spinner>` : ''}
      </wa-input>
      ${this.renderResults()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-address-search': MpAddressSearch;
  }
}
