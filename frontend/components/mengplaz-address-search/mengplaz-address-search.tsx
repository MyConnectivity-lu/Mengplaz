import type * as sl from '@shoelace-style/shoelace';
import './mengplaz-address-search.css';

const SEARCH_MIN_LENGTH = 3;
const SEARCH_DEBOUNCE_MS = 250;
const SEARCH_MAX_RESULTS = 10;

export interface AddressSelectEvent {
  record: gc.mengplaz.POIRecordRef;
}

export class MengplazAddressSearch extends HTMLElement {
  private searchInput: sl.SlInput;
  private searchSpinner: sl.SlSpinner;
  private resultsContainer: HTMLDivElement;
  private debounceTimer: number | null = null;
  private searchAbort: AbortController | null = null;
  private _source: string | undefined = undefined;
  private _placeholder = 'Search address...';
  private _disableNoCoords = false;

  constructor() {
    super();
    this.searchSpinner = (<sl-spinner slot="prefix" style={{ visibility: 'hidden' }} />) as sl.SlSpinner;
    this.searchInput = (
      <sl-input placeholder={this._placeholder} size="medium" clearable>
        {this.searchSpinner}
      </sl-input>
    ) as sl.SlInput;
    this.resultsContainer = (<div className="address-search-results"></div>) as HTMLDivElement;
  }

  set placeholder(v: string) {
    this._placeholder = v;
    this.searchInput.placeholder = v;
  }
  get placeholder(): string {
    return this._placeholder;
  }

  set source(v: string | undefined) {
    if (this._source === v) return;
    this._source = v;
    this.clear();
  }
  get source(): string | undefined {
    return this._source;
  }

  set disableNoCoords(v: boolean) {
    this._disableNoCoords = v;
  }
  get disableNoCoords(): boolean {
    return this._disableNoCoords;
  }

  connectedCallback() {
    this.replaceChildren(this.searchInput, this.resultsContainer);
    this.searchInput.addEventListener('sl-input', () => this.onSearchInput());
    this.searchInput.addEventListener('sl-clear', () => this.clearResults());
  }

  clear() {
    this.searchInput.value = '';
    this.clearResults();
  }

  private onSearchInput() {
    const value = this.searchInput.value?.trim() ?? '';
    if (this.debounceTimer != null) {
      window.clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
    if (value.length < SEARCH_MIN_LENGTH) {
      this.clearResults();
      return;
    }
    this.setLoading(true);
    this.debounceTimer = window.setTimeout(() => this.runSearch(value), SEARCH_DEBOUNCE_MS);
  }

  private async runSearch(query: string) {
    this.searchAbort?.abort();
    const controller = new AbortController();
    this.searchAbort = controller;
    let results: gc.mengplaz.POIRecordRef[] = [];
    try {
      results = (await gc.api.searchAddress(query, SEARCH_MAX_RESULTS, this._source, undefined, controller.signal)) ?? [];
    } catch (_e) {
      return;
    }
    if (controller.signal.aborted) return;
    this.renderResults(results);
    this.setLoading(false);
  }

  private setLoading(loading: boolean) {
    this.searchSpinner.style.visibility = loading ? 'visible' : 'hidden';
  }

  private clearResults() {
    this.searchAbort?.abort();
    this.searchAbort = null;
    this.resultsContainer.replaceChildren();
  }

  private renderResults(results: gc.mengplaz.POIRecordRef[]) {
    if (results.length === 0) {
      this.resultsContainer.replaceChildren(
        <div className="address-search-empty">
          <div>No results</div>
          <div className="address-search-empty-hint">
            Try format: <em>number street, postcode locality</em>
            <br />
            e.g. <em>5 Rue de l'Industrie, 1811 Luxembourg</em>
          </div>
        </div>,
      );
      return;
    }
    const items = results.map((r) => {
      const disabled = this._disableNoCoords && r.record.primaryLocation == null;
      return (
        <div
          className={['address-search-item', disabled ? 'address-search-item-disabled' : 'a']}
          title={disabled ? 'Cannot be selected on the map: this item has no coordinates associated.' : undefined}
          onclick={disabled ? undefined : () => this.onResultClick(r)}
        >
          <sl-icon name={disabled ? 'exclamation-triangle' : 'geo-alt'}></sl-icon>
          <div className="address-search-item-info">
            <span className="address-search-item-title">
              {r.record.number} {r.record.street}
            </span>
            <span className="address-search-item-sub">
              L-{r.record.postcode} {r.record.locality} {r.record.commune}
            </span>
          </div>
        </div>
      );
    });
    this.resultsContainer.replaceChildren(...items);
  }

  private onResultClick(r: gc.mengplaz.POIRecordRef) {
    this.dispatchEvent(
      new CustomEvent<AddressSelectEvent>('address-select', {
        detail: { record: r },
        bubbles: true,
        composed: true,
      }),
    );
    this.clear();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-address-search': MengplazAddressSearch;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'mengplaz-address-search': GreyCat.Element<MengplazAddressSearch>;
      }
    }
  }
}

if (!customElements.get('mengplaz-address-search')) {
  customElements.define('mengplaz-address-search', MengplazAddressSearch);
}
