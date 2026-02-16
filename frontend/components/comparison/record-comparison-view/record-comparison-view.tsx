import { getMatchQuality } from '~/common/utils';
import '../../minimap/minimap';
import '../../address-field/address-field';
import '../../address-field/address-content';
import './record-comparison-view.css';

export interface LinkEvent {
  sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>;
  goldenCandidate: gc.core.node<gc.mengplaz.POIRecordProvider>;
}

export class RecordComparisonView extends HTMLElement {
  private _sourceRecord: gc.POIFullRecordRef | null = null;
  private _candidate: gc.privateApi.MatchedCandidateDetail | null = null;
  private _showLinkButton: boolean = true;

  // Set comparison data from the consolidated API response
  set sourceRecord(value: gc.POIFullRecordRef | null) {
    this._sourceRecord = value;
    this.render();
  }

  get sourceRecord() {
    return this._sourceRecord;
  }

  set candidate(value: gc.privateApi.MatchedCandidateDetail | null) {
    this._candidate = value;
    this.render();
  }

  get candidate() {
    return this._candidate;
  }

  set showLinkButton(value: boolean) {
    this._showLinkButton = value;
    this.render();
  }

  get showLinkButton() {
    return this._showLinkButton;
  }

  connectedCallback() {
    this.render();
  }

  private handleLink() {
    if (!this._sourceRecord || !this._candidate) return;

    const event = new CustomEvent<LinkEvent>('link', {
      detail: {
        sourceRecord: this._sourceRecord.ref,
        goldenCandidate: this._candidate.ref,
      },
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }

  render() {
    if (!this.isConnected) return;

    if (!this._sourceRecord || !this._candidate) {
      this.replaceChildren(<div className="record-comparison-view">Select a record to compare</div>);
      return;
    }

    const overallQuality = getMatchQuality(this._candidate.overallScore);
    const overallPercent = Math.round(this._candidate.overallScore);

    this.replaceChildren(
      <div className="record-comparison-view">
        <div className="section">
          <div className="section-header">
            <sl-icon name="database"></sl-icon>
            <span>Source Record</span>
          </div>
          <div className="section-panel">
            <address-content value={this._sourceRecord.record} />
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <sl-icon name="graph-up"></sl-icon>
            <span>Analysis</span>
          </div>
          <div className={['section-panel', 'panel-analysis']}>
            <div className="overall-score">
              <div className={['score-circle', `score-circle-${overallQuality.variant}`]}>
                <span className="score-number">{overallPercent}%</span>
              </div>
              <span className="score-label">Match Probability</span>
            </div>

            <div className="score-breakdown">
              {this.renderScoreRow('Number', this._candidate.numberScore)}
              {this.renderScoreRow('Street', this._candidate.streetScore)}
              {this.renderScoreRow('City', this._candidate.cityScore)}
              {this.renderScoreRow('Postcode', this._candidate.postcodeScore)}
              {this._candidate.geoScore != null ? this.renderScoreRow('Geo', this._candidate.geoScore) : ''}
            </div>

            {this._showLinkButton ? (
              <div className="analysis-actions">
                <sl-button variant="primary" onclick={() => this.handleLink()}>
                  <sl-icon slot="prefix" name="link-45deg"></sl-icon>
                  Link Records
                </sl-button>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <sl-icon name="file-earmark-text"></sl-icon>
            <span>Candidate Record</span>
            <sl-button variant="text" size="small" href={`?page=record&guid=${this._candidate.record.uid}`}>
              Go to Record
            </sl-button>
          </div>
          <div className="section-panel">
            <address-content value={this._candidate.record} />
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            <sl-icon name="geo-alt"></sl-icon>
            <span>Map</span>
          </div>
          <div className={['section-panel', 'panel-map']}>
            {this._sourceRecord.record.primaryLocation || this._candidate.record.primaryLocation ? (
              <div className="map-container">
                <mengplaz-minimap primary={this._sourceRecord.record.primaryLocation} secondary={this._candidate.record.primaryLocation} />
              </div>
            ) : (
              <span className="no-coordinates">No Coordinates found</span>
            )}
          </div>
        </div>
      </div>,
    );
  }

  private renderScoreRow(label: string, score: number) {
    const quality = getMatchQuality(score);
    const percent = Math.round(score);

    return (
      <div className="score-row">
        <span className="score-row-label">{label}</span>
        <span className={['score-row-value', `score-${quality.variant}`]}>{percent}%</span>
      </div>
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'record-comparison-view': RecordComparisonView;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'record-comparison-view': GreyCat.Element<RecordComparisonView>;
      }
    }
  }
}

if (!customElements.get('record-comparison-view')) {
  customElements.define('record-comparison-view', RecordComparisonView);
}
