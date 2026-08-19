import { sl } from '@greycat/web';

const DEFAULT_WEIGHTS = () => new gc.mengplaz.ScoringWeights(4.0, 3.0, 3.0, 1.0, 3.0);
const DEFAULT_GEO_PARAMS = () => new gc.mengplaz.GeoParameters(0, 1000);
const DEFAULT_PARAMS = () => new gc.mengplaz.SearchParameters(0.7, 0.7, 0.4, 0.7, 10, 200, DEFAULT_WEIGHTS(), DEFAULT_GEO_PARAMS(), false);

export class SearchParametersDialog extends HTMLElement {
  private dialog: sl.SlDialog;
  private resolve?: (value: gc.mengplaz.SearchParameters | null) => void;

  // Threshold inputs
  private citySimilarityInput?: sl.SlInput;
  private streetSimilarityInput?: sl.SlInput;
  private postcodeSimilarityInput?: sl.SlInput;
  private coordinatesSimilarityInput?: sl.SlInput;
  private maxCandidatesInput?: sl.SlInput;
  private postcodeMaxDistanceInput?: sl.SlInput;

  // Weight inputs
  private cityWeightInput?: sl.SlInput;
  private streetWeightInput?: sl.SlInput;
  private postcodeWeightInput?: sl.SlInput;
  private numberWeightInput?: sl.SlInput;
  private geoWeightInput?: sl.SlInput;

  // Geo parameter inputs
  private minDistanceInput?: sl.SlInput;
  private maxDistanceInput?: sl.SlInput;

  // Deep search toggle
  private deepSearchCheckbox?: sl.SlCheckbox;

  private _value: gc.mengplaz.SearchParameters = DEFAULT_PARAMS();

  set value(v: gc.mengplaz.SearchParameters) {
    this._value = v;
    this.render();
  }

  get value(): gc.mengplaz.SearchParameters {
    return this._value;
  }

  constructor() {
    super();
    this.dialog = (<sl-dialog label="Search Parameters" style={{ '--width': '500px' }} />) as sl.SlDialog;
  }

  connectedCallback() {
    this.render();
  }

  show(): Promise<gc.mengplaz.SearchParameters | null> {
    return new Promise<gc.mengplaz.SearchParameters | null>((resolve) => {
      this.resolve = resolve;
      this.render();
      this.dialog.show();
    });
  }

  private getResult(): gc.mengplaz.SearchParameters {
    const weights = new gc.mengplaz.ScoringWeights(
      parseFloat(this.cityWeightInput?.value ?? '4.0'),
      parseFloat(this.streetWeightInput?.value ?? '3.0'),
      parseFloat(this.postcodeWeightInput?.value ?? '3.0'),
      parseFloat(this.numberWeightInput?.value ?? '1.0'),
      parseFloat(this.geoWeightInput?.value ?? '3.0'),
    );

    const geoParams = new gc.mengplaz.GeoParameters(
      parseInt(this.minDistanceInput?.value ?? '0'),
      parseInt(this.maxDistanceInput?.value ?? '1000'),
    );

    return new gc.mengplaz.SearchParameters(
      parseFloat(this.citySimilarityInput?.value ?? '0.7'),
      parseFloat(this.streetSimilarityInput?.value ?? '0.7'),
      parseFloat(this.postcodeSimilarityInput?.value ?? '0.4'),
      parseFloat(this.coordinatesSimilarityInput?.value ?? '0.7'),
      parseInt(this.maxCandidatesInput?.value ?? '10'),
      parseInt(this.postcodeMaxDistanceInput?.value ?? '200'),
      weights,
      geoParams,
      this.deepSearchCheckbox?.checked ?? false,
    );
  }

  private handleReset() {
    this._value = DEFAULT_PARAMS();
    this.render();
  }

  render() {
    // Threshold inputs
    this.citySimilarityInput = (
      <sl-input label="Locality Threshold" type="number" min={0} max={1} step={0.1} value={this._value.citySimilarityThreshold.toString()} />
    ) as sl.SlInput;

    this.streetSimilarityInput = (
      <sl-input label="Street Threshold" type="number" min={0} max={1} step={0.1} value={this._value.streetSimilarityThreshold.toString()} />
    ) as sl.SlInput;

    this.postcodeSimilarityInput = (
      <sl-input label="Postcode Threshold" type="number" min={0} max={1} step={0.1} value={this._value.postcodeSimilarityThreshold.toString()} />
    ) as sl.SlInput;

    this.coordinatesSimilarityInput = (
      <sl-input label="Coordinates Threshold" type="number" min={0} max={1} step={0.1} value={this._value.coordinatesSimilarityThreshold.toString()} />
    ) as sl.SlInput;

    this.maxCandidatesInput = (
      <sl-input label="Max Candidates" type="number" min={1} max={100} step={1} value={this._value.maxCandidatesPerItem.toString()} />
    ) as sl.SlInput;

    this.postcodeMaxDistanceInput = (
      <sl-input label="Postcode Max Distance" type="number" min={1} max={1000} step={10} value={this._value.postcodeMaxDistance.toString()} />
    ) as sl.SlInput;

    // Weight inputs
    this.cityWeightInput = (
      <sl-input label="Locality" type="number" min={0} max={10} step={0.5} value={this._value.weights.cityWeight.toString()} />
    ) as sl.SlInput;

    this.streetWeightInput = (
      <sl-input label="Street" type="number" min={0} max={10} step={0.5} value={this._value.weights.streetWeight.toString()} />
    ) as sl.SlInput;

    this.postcodeWeightInput = (
      <sl-input label="Postcode" type="number" min={0} max={10} step={0.5} value={this._value.weights.postcodeWeight.toString()} />
    ) as sl.SlInput;

    this.numberWeightInput = (
      <sl-input label="Number" type="number" min={0} max={10} step={0.5} value={this._value.weights.numberWeight.toString()} />
    ) as sl.SlInput;

    this.geoWeightInput = (
      <sl-input label="Geo" type="number" min={0} max={10} step={0.5} value={this._value.weights.geoWeight.toString()} />
    ) as sl.SlInput;

    // Geo parameter inputs
    this.minDistanceInput = (
      <sl-input label="Min Distance (m)" type="number" min={0} max={10000} step={10} value={this._value.geoParams.minDistance.toString()} />
    ) as sl.SlInput;

    this.maxDistanceInput = (
      <sl-input label="Max Distance (m)" type="number" min={0} max={10000} step={100} value={this._value.geoParams.maxDistance.toString()} />
    ) as sl.SlInput;

    this.deepSearchCheckbox = (
      <sl-checkbox checked={this._value.deepSearch}>Deep search (global POI fallback, slow)</sl-checkbox>
    ) as sl.SlCheckbox;

    this.dialog.replaceChildren(
      <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sl-spacing-large)' }}>
          <p style={{ color: 'var(--sl-color-neutral-500)' }}>
            Learn more about the reconcile logic{' '}
            <a href="https://gitlab.com/myconnectivity/mengplaz/-/wikis/Reconcile-Logic" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
          <div>
            <h4 style={{ margin: '0 0 var(--sl-spacing-small) 0', color: 'var(--secondary)' }}>Similarity Thresholds</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sl-spacing-small)' }}>
              {this.citySimilarityInput}
              {this.streetSimilarityInput}
              {this.postcodeSimilarityInput}
              {this.coordinatesSimilarityInput}
              {this.maxCandidatesInput}
              {this.postcodeMaxDistanceInput}
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 var(--sl-spacing-small) 0', color: 'var(--secondary)' }}>Scoring Weights</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: 'var(--sl-spacing-small)' }}>
              {this.cityWeightInput}
              {this.streetWeightInput}
              {this.postcodeWeightInput}
              {this.numberWeightInput}
              {this.geoWeightInput}
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 var(--sl-spacing-small) 0', color: 'var(--secondary)' }}>Geo Distance</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sl-spacing-small)' }}>
              {this.minDistanceInput}
              {this.maxDistanceInput}
            </div>
          </div>
          <div>
            {this.deepSearchCheckbox}
          </div>
        </div>
        <sl-button
          slot="footer"
          variant="default"
          onclick={() => {
            this.handleReset();
          }}
        >
          Reset to Default
        </sl-button>
        <sl-button
          slot="footer"
          variant="primary"
          onclick={() => {
            this._value = this.getResult();
            this.dialog.hide();
            this.resolve?.(this._value);
          }}
        >
          Reconcile
        </sl-button>
        <sl-button
          slot="footer"
          variant="default"
          onclick={() => {
            this.dialog.hide();
            this.resolve?.(null);
          }}
        >
          Cancel
        </sl-button>
      </>,
    );
    this.replaceChildren(this.dialog);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'search-parameters-dialog': SearchParametersDialog;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'search-parameters-dialog': GreyCat.Element<SearchParametersDialog>;
      }
    }
  }
}

if (!customElements.get('search-parameters-dialog')) {
  customElements.define('search-parameters-dialog', SearchParametersDialog);
}
