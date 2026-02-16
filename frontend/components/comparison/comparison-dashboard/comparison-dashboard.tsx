import '../../comparison/master-record-panel/master-record-panel';
import '../../comparison/candidates-panel/candidates-panel';
import '../../comparison/record-comparison-view/record-comparison-view';
import './comparison-dashboard.css';
import { MasterRecordPanel } from '../../comparison/master-record-panel/master-record-panel';
import { CandidatesPanel } from '../../comparison/candidates-panel/candidates-panel';
import type { RecordComparisonView } from '../../comparison/record-comparison-view/record-comparison-view';
import type { ViewCandidateEvent } from '../../comparison/candidate-row/candidate-row';

export class ComparisonDashboard extends HTMLElement {
  private _comparisonData: gc.privateApi.ComparisonViewData | null = null;
  private _showActions = true;
  private _viewCandidateHandler: ((e: Event) => void) | null = null;
  private _comparisonViewContainer: HTMLElement | null = null;

  // Set consolidated comparison data - single prop for all data
  set comparisonData(value: gc.privateApi.ComparisonViewData | null) {
    this._comparisonData = value;
    this.render();
  }

  get comparisonData() {
    return this._comparisonData;
  }

  set showActions(value: boolean) {
    this._showActions = value;
    this.render();
  }

  get showActions() {
    return this._showActions;
  }

  connectedCallback() {
    this._viewCandidateHandler = (e: Event) => {
      const customEvent = e as CustomEvent<ViewCandidateEvent>;
      this.showComparisonView(customEvent.detail);
    };

    this.addEventListener('view-candidate', this._viewCandidateHandler);
    this.render();
  }

  disconnectedCallback() {
    if (this._viewCandidateHandler) {
      this.removeEventListener('view-candidate', this._viewCandidateHandler);
      this._viewCandidateHandler = null;
    }
  }

  private showComparisonView(detail: ViewCandidateEvent) {
    if (!this._comparisonViewContainer || !this._comparisonData) return;

    const comparisonView = (<record-comparison-view />) as RecordComparisonView;
    comparisonView.sourceRecord = this._comparisonData.sourceRecord;
    comparisonView.candidate = detail.candidate;
    comparisonView.showLinkButton = this._showActions;

    const closeButton = (
      <div className="comparison-view-header">
        <span>Detailed Comparison</span>
        <sl-icon-button name="x-lg" label="Close" onclick={() => this.hideComparisonView()}></sl-icon-button>
      </div>
    );

    this._comparisonViewContainer.replaceChildren(
      <div className="comparison-view-wrapper">
        {closeButton}
        {comparisonView}
      </div>,
    );
  }

  private hideComparisonView() {
    if (this._comparisonViewContainer) {
      this._comparisonViewContainer.replaceChildren();
    }
  }

  render() {
    if (!this.isConnected || !this._comparisonData) return;

    const masterPanel = (<master-record-panel />) as MasterRecordPanel;
    masterPanel.record = this._comparisonData.sourceRecord;
    masterPanel.showActions = this._showActions;

    const candidatesPanel = (<candidates-panel />) as CandidatesPanel;
    candidatesPanel.candidates = this._comparisonData.candidates;
    candidatesPanel.sourceRecord = this._comparisonData.sourceRecord;
    candidatesPanel.showLinkButton = this._showActions;

    this._comparisonViewContainer = (<div className="comparison-view-container"></div>) as HTMLElement;

    this.replaceChildren(
      <div className="comparison-dashboard">
        <div className="dashboard-panels">
          {masterPanel}
          {candidatesPanel}
        </div>
        {this._comparisonViewContainer}
      </div>,
    );

    // Auto-show detailed view when there's exactly one candidate
    if (this._comparisonData.candidates.length === 1) {
      this.showComparisonView({
        candidate: this._comparisonData.candidates[0],
        sourceRecord: this._comparisonData.sourceRecord,
      });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'comparison-dashboard': ComparisonDashboard;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'comparison-dashboard': GreyCat.Element<ComparisonDashboard>;
      }
    }
  }
}

if (!customElements.get('comparison-dashboard')) {
  customElements.define('comparison-dashboard', ComparisonDashboard);
}
