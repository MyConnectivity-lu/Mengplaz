import '../candidates-table/candidates-table';
import type { CandidatesTable } from '../candidates-table/candidates-table';
import './candidates-panel.css';

export interface NavigateRecordEvent {
  direction: 'prev' | 'next';
}

export class CandidatesPanel extends HTMLElement {
  private _candidates: gc.privateApi.MatchedCandidateDetail[] = [];
  private _sourceRecord: gc.POIFullRecordRef | null = null;
  private _showLinkButton = true;
  private _recordIndex: number = 1;
  private _totalRecords: number = 0;

  set candidates(value: gc.privateApi.MatchedCandidateDetail[]) {
    this._candidates = value;
    this.render();
  }

  get candidates() {
    return this._candidates;
  }

  set sourceRecord(value: gc.POIFullRecordRef | null) {
    this._sourceRecord = value;
    this.render();
  }

  get sourceRecord() {
    return this._sourceRecord;
  }

  set recordIndex(value: number) {
    this._recordIndex = value;
    this.render();
  }

  get recordIndex() {
    return this._recordIndex;
  }

  set totalRecords(value: number) {
    this._totalRecords = value;
    this.render();
  }

  get totalRecords() {
    return this._totalRecords;
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

  // private handlePrevious() {
  //   if (this._recordIndex <= 1) return;

  //   const event = new CustomEvent<NavigateRecordEvent>('navigate-record', {
  //     detail: { direction: 'prev' },
  //     bubbles: true,
  //     composed: true,
  //   });
  //   this.dispatchEvent(event);
  // }

  // private handleNext() {
  //   if (this._recordIndex >= this._totalRecords) return;

  //   const event = new CustomEvent<NavigateRecordEvent>('navigate-record', {
  //     detail: { direction: 'next' },
  //     bubbles: true,
  //     composed: true,
  //   });
  //   this.dispatchEvent(event);
  // }

  render() {
    if (!this.isConnected) return;
    const candidateCount = this._candidates.length;
    const candidatesTable = (<candidates-table />) as CandidatesTable;
    candidatesTable.sourceRecord = this._sourceRecord;
    candidatesTable.showLinkButton = this._showLinkButton;
    candidatesTable.candidates = this._candidates;

    // const isPrevDisabled = this._recordIndex <= 1;
    // const isNextDisabled = this._recordIndex >= this._totalRecords;

    // const prevButton = (
    //   <sl-button variant="default" size="medium" disabled={isPrevDisabled} onclick={() => this.handlePrevious()}>
    //     <sl-icon slot="prefix" name="chevron-left"></sl-icon>
    //     Previous
    //   </sl-button>
    // );

    // const nextButton = (
    //   <sl-button variant="default" size="medium" disabled={isNextDisabled} onclick={() => this.handleNext()}>
    //     Next
    //     <sl-icon slot="suffix" name="chevron-right"></sl-icon>
    //   </sl-button>
    // );

    this.replaceChildren(
      <div className={['card', 'candidates-panel']}>
        <div className="candidates-panel-header">
          <div className="header-title">
            <p className="header-subtitle">
              {candidateCount} golden{candidateCount !== 1 ? 's' : ''} found for comparison
            </p>
          </div>
        </div>

        <div className="candidates-panel-content">{candidatesTable}</div>

        {/* <div className="candidates-panel-footer">
            <div className="pagination-info">
              Showing 1 to {candidateCount} of {candidateCount} candidates
            </div>
            <div className="pagination-controls">
              {prevButton}
              <span className="page-indicator">
                Page {this._recordIndex} of {this._totalRecords}
              </span>
              {nextButton}
            </div>
          </div> */}
      </div>,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'candidates-panel': CandidatesPanel;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'candidates-panel': GreyCat.Element<CandidatesPanel>;
      }
    }
  }
}

if (!customElements.get('candidates-panel')) {
  customElements.define('candidates-panel', CandidatesPanel);
}
