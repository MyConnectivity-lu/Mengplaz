import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
import '@awesome.me/webawesome/dist/components/badge/badge.js';
import '@awesome.me/webawesome/dist/components/spinner/spinner.js';
import { initMode } from '~/lib/theme';
import { GcPage } from '~/lib/gc-page';
import type { Column } from '~/lib/columns';
import '~/components/mengplaz-app-shell';
import '~/components/mp-panel';
import '~/components/mp-data-table';
import '~/components/mp-address-card';

initMode();

const SEARCH_DEBOUNCE_MS = 250;

interface StreetRow extends Record<string, unknown> {
  street: string;
  city: string;
}

const COLUMNS: Column<StreetRow>[] = [
  { key: 'street', label: 'Street' },
  { key: 'city', label: 'Locality', width: '16rem' },
];

/**
 * Free-text street search: type a street, pick one from the results, then pick a
 * house number to see the full golden record for that address.
 */
@customElement('mengplaz-search-page')
export class MengplazSearchPage extends GcPage {
  static styles = css`
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--gc-gap);
    }
    .lead {
      color: var(--gc-muted);
      font-size: var(--wa-font-size-s);
      margin: 0;
    }
    /* Cap the result list so the street numbers and the record card below it
       stay on screen: the page is meant to be read without scrolling. */
    mp-data-table {
      --mp-table-max-height: min(34vh, 22rem);
    }
    .numbers {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
      padding: 0.6rem;
      max-height: min(22vh, 11rem);
      overflow-y: auto;
    }
    .numbers wa-badge {
      cursor: pointer;
    }
    .error {
      color: var(--gc-bad);
    }
    .hint {
      color: var(--gc-muted);
      padding: 1rem;
      text-align: center;
      font-size: var(--wa-font-size-s);
    }
  `;

  @state() private streets: gc.mengplaz.StreetRecordRef[] = [];
  @state() private selectedStreet = -1;
  @state() private pois: gc.mengplaz.AddressRecordRef[] = [];
  @state() private selectedPoi?: gc.mengplaz.AddressRecordRef;
  @state() private searching = false;
  @state() private query = '';

  private debounceTimer: number | null = null;

  protected async onInit() {
    // Nothing to preload: the page is driven entirely by the search box.
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this.debounceTimer != null) {
      window.clearTimeout(this.debounceTimer);
    }
  }

  private onInput(e: Event) {
    this.query = (e.target as HTMLInputElement).value.trim();
    if (this.debounceTimer != null) {
      window.clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = window.setTimeout(() => void this.search(), SEARCH_DEBOUNCE_MS);
  }

  private async search() {
    const query = this.query;
    if (query.length === 0) {
      this.streets = [];
      this.resetSelection();
      return;
    }
    this.searching = true;
    this.loadError = '';
    try {
      this.streets = await gc.api.searchStreet(query);
      this.resetSelection();
    } catch (err) {
      this.loadError = err instanceof Error ? err.message : String(err);
    } finally {
      this.searching = false;
    }
  }

  private resetSelection() {
    this.selectedStreet = -1;
    this.pois = [];
    this.selectedPoi = undefined;
  }

  private async selectStreet(index: number) {
    const street = this.streets[index];
    if (!street) {
      return;
    }
    this.selectedStreet = index;
    this.selectedPoi = undefined;
    try {
      const pois = await gc.api.getPoisInStreet(street.id);
      // House numbers are strings on the record but order numerically.
      this.pois = [...pois].sort((a, b) => Number(a.record.number) - Number(b.record.number));
    } catch (err) {
      this.loadError = err instanceof Error ? err.message : String(err);
    }
  }

  private get rows(): StreetRow[] {
    return this.streets.map((s) => ({ street: s.record.street, city: s.record.city }) as StreetRow);
  }

  render() {
    return html`
      <mengplaz-app-shell page-title="Search">
        <div class="stack">
          <p class="lead">Find any address</p>
          <wa-input label="Street" with-label placeholder="Type a street name" @input=${(e: Event) => this.onInput(e)}>
            ${this.searching ? html`<wa-spinner slot="end"></wa-spinner>` : ''}
          </wa-input>

          ${this.loadError ? html`<p class="error">${this.loadError}</p>` : ''}

          <mp-panel heading="Search Results">
            <mp-data-table
              .columns=${COLUMNS}
              .rows=${this.rows}
              selected-index=${this.selectedStreet}
              empty-text=${this.query.length === 0 ? 'Type a street name to search' : 'No matching streets'}
              @row-click=${(e: CustomEvent<{ index: number }>) => void this.selectStreet(e.detail.index)}
            ></mp-data-table>
          </mp-panel>

          ${this.pois.length > 0
        ? html`<mp-panel heading="Street Numbers">
                  <div class="numbers">
                    ${this.pois.sort((a, b) => a.record.number?.localeCompare(b.record.number ?? '0', undefined, { numeric: true }) ?? 0).map(
          (p) => html`<wa-badge
                        variant=${this.selectedPoi?.ref === p.ref ? 'brand' : 'neutral'}
                        pill
                        data-ref=${String(p.ref)}
                        @click=${() => {
              this.selectedPoi = p;
            }}
                        >${p.record.number}</wa-badge
                      >`,
        )}
                  </div>
                </mp-panel>`
        : ''
      }
          ${this.selectedPoi ? html`<mp-address-card .value=${this.selectedPoi} show-go-to></mp-address-card>` : ''}
        </div>
      </mengplaz-app-shell>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-search-page': MengplazSearchPage;
  }
}
