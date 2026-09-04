import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js';

const DEFAULT_WEIGHTS = () => new gc.mengplaz.ScoringWeights(4.0, 3.0, 3.0, 1.0, 3.0);
const DEFAULT_GEO_PARAMS = () => new gc.mengplaz.GeoParameters(0, 1000);
export const DEFAULT_SEARCH_PARAMS = () =>
  new gc.mengplaz.SearchParameters(0.7, 0.7, 0.4, 0.7, 10, 200, DEFAULT_WEIGHTS(), DEFAULT_GEO_PARAMS(), false);

interface NumField {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  value: (p: gc.mengplaz.SearchParameters) => number | bigint;
}

const THRESHOLDS: NumField[] = [
  { id: 'city-sim', label: 'Locality Threshold', min: 0, max: 1, step: 0.1, value: (p) => p.citySimilarityThreshold },
  { id: 'street-sim', label: 'Street Threshold', min: 0, max: 1, step: 0.1, value: (p) => p.streetSimilarityThreshold },
  {
    id: 'post-sim',
    label: 'Postcode Threshold',
    min: 0,
    max: 1,
    step: 0.1,
    value: (p) => p.postcodeSimilarityThreshold,
  },
  {
    id: 'coord-sim',
    label: 'Coordinates Threshold',
    min: 0,
    max: 1,
    step: 0.1,
    value: (p) => p.coordinatesSimilarityThreshold,
  },
  { id: 'max-cand', label: 'Max Candidates', min: 1, max: 100, step: 1, value: (p) => p.maxCandidatesPerItem },
  { id: 'post-dist', label: 'Postcode Max Distance', min: 1, max: 1000, step: 10, value: (p) => p.postcodeMaxDistance },
];

const WEIGHTS: NumField[] = [
  { id: 'w-city', label: 'Locality', min: 0, max: 10, step: 0.5, value: (p) => p.weights.cityWeight },
  { id: 'w-street', label: 'Street', min: 0, max: 10, step: 0.5, value: (p) => p.weights.streetWeight },
  { id: 'w-post', label: 'Postcode', min: 0, max: 10, step: 0.5, value: (p) => p.weights.postcodeWeight },
  { id: 'w-num', label: 'Number', min: 0, max: 10, step: 0.5, value: (p) => p.weights.numberWeight },
  { id: 'w-geo', label: 'Geo', min: 0, max: 10, step: 0.5, value: (p) => p.weights.geoWeight },
];

const GEO: NumField[] = [
  { id: 'geo-min', label: 'Min Distance (m)', min: 0, max: 10000, step: 10, value: (p) => p.geoParams.minDistance },
  { id: 'geo-max', label: 'Max Distance (m)', min: 0, max: 10000, step: 100, value: (p) => p.geoParams.maxDistance },
];

/**
 * The matching parameters a reconcile run uses: per-field similarity thresholds,
 * the weights that combine them into one score, and the geographic window.
 * `show()` resolves with the chosen parameters, or null if cancelled.
 */
@customElement('mp-search-parameters-dialog')
export class MpSearchParametersDialog extends LitElement {
  static styles = css`
    wa-dialog {
      --width: 560px;
    }
    .stack {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .lead {
      color: var(--gc-muted);
      font-size: var(--wa-font-size-s);
      margin: 0;
    }
    .lead a {
      color: var(--gc-accent);
    }
    h4 {
      margin: 0 0 0.4rem;
      color: var(--gc-muted);
      font-family: var(--gc-mono);
      font-size: var(--wa-font-size-2xs);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .grid2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
    }
    .grid5 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 0.5rem;
    }
    @media (max-width: 639px) {
      .grid5 {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;

  /**
   * Undefined until `show()` supplies it. The `gc.mengplaz.*` constructors are
   * built by `gc.sdk.init()`, so a default constructed in a field initializer
   * would run before the session gate resolves and throw.
   */
  @property({ attribute: false }) value?: gc.mengplaz.SearchParameters;

  @state() private open = false;

  @query('#deep-search') private deepSearch?: HTMLInputElement;

  private resolve?: (value: gc.mengplaz.SearchParameters | null) => void;

  show(value?: gc.mengplaz.SearchParameters): Promise<gc.mengplaz.SearchParameters | null> {
    this.value = value ?? DEFAULT_SEARCH_PARAMS();
    this.open = true;
    return new Promise((resolve) => {
      this.resolve = resolve;
    });
  }

  private num(id: string, fallback: number): number {
    const el = this.renderRoot.querySelector<HTMLInputElement>(`#${id}`);
    const parsed = Number.parseFloat(el?.value ?? String(fallback));
    return Number.isNaN(parsed) ? fallback : parsed;
  }

  private collect(): gc.mengplaz.SearchParameters {
    const weights = new gc.mengplaz.ScoringWeights(
      this.num('w-city', 4),
      this.num('w-street', 3),
      this.num('w-post', 3),
      this.num('w-num', 1),
      this.num('w-geo', 3),
    );
    const geo = new gc.mengplaz.GeoParameters(this.num('geo-min', 0), this.num('geo-max', 1000));
    return new gc.mengplaz.SearchParameters(
      this.num('city-sim', 0.7),
      this.num('street-sim', 0.7),
      this.num('post-sim', 0.4),
      this.num('coord-sim', 0.7),
      this.num('max-cand', 10),
      this.num('post-dist', 200),
      weights,
      geo,
      this.deepSearch?.checked ?? false,
    );
  }

  private finish(value: gc.mengplaz.SearchParameters | null) {
    this.open = false;
    this.resolve?.(value);
    this.resolve = undefined;
  }

  private reset() {
    this.value = DEFAULT_SEARCH_PARAMS();
  }

  private field(f: NumField, value: gc.mengplaz.SearchParameters) {
    return html`<wa-input
      id=${f.id}
      label=${f.label}
      with-label
      type="number"
      min=${f.min}
      max=${f.max}
      step=${f.step}
      value=${String(f.value(value))}
    ></wa-input>`;
  }

  render() {
    const value = this.value;
    // One stable template: an early return with a different shape makes Lit tear
    // down and recreate the wa-dialog, and a dialog created with `open` already
    // set never runs its show transition, so it stays hidden. The *body* is what
    // waits for `value` - rendering the fields early would read the
    // ABI-generated parameter type before the SDK has created it.
    return html`
      <wa-dialog
        label="Search Parameters"
        ?open=${this.open}
        @wa-hide=${() => {
          if (this.resolve) {
            this.finish(null);
          }
        }}
      >
        <div class="stack">
          ${
            value === undefined
              ? ''
              : html`
                  <p class="lead">
                    Learn more about the reconcile logic
                    <a
                      href="https://gitlab.com/myconnectivity/mengplaz/-/wikis/Reconcile-Logic"
                      target="_blank"
                      rel="noopener"
                      >here</a
                    >.
                  </p>
                  <div>
                    <h4>Similarity Thresholds</h4>
                    <div class="grid2">${THRESHOLDS.map((f) => this.field(f, value))}</div>
                  </div>
                  <div>
                    <h4>Scoring Weights</h4>
                    <div class="grid5">${WEIGHTS.map((f) => this.field(f, value))}</div>
                  </div>
                  <div>
                    <h4>Geo Distance</h4>
                    <div class="grid2">${GEO.map((f) => this.field(f, value))}</div>
                  </div>
                  <wa-checkbox id="deep-search" ?checked=${value.deepSearch}>
                    Deep search (global POI fallback, slow)
                  </wa-checkbox>
                `
          }
        </div>
        <wa-button slot="footer" appearance="outlined" @click=${() => this.reset()}>Reset to Default</wa-button>
        <wa-button slot="footer" variant="brand" @click=${() => this.finish(this.collect())}>Reconcile</wa-button>
        <wa-button slot="footer" appearance="outlined" @click=${() => this.finish(null)}>Cancel</wa-button>
      </wa-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-search-parameters-dialog': MpSearchParametersDialog;
  }
}
