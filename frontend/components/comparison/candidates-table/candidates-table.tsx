import './candidates-table.css';
import { createCandidateRow } from '../candidate-row/candidate-row';

export class CandidatesTable extends HTMLElement {
  private _candidates: gc.privateApi.MatchedCandidateDetail[] = [];
  private _sourceRecord: gc.POIFullRecordRef | null = null;
  private _showLinkButton = true;

  set showLinkButton(value: boolean) {
    this._showLinkButton = value;
    this.render();
  }

  get showLinkButton() {
    return this._showLinkButton;
  }

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

  connectedCallback() {
    this.render();
  }

  render() {
    if (this._candidates.length === 0) {
      this.replaceChildren(
        <div className="candidates-table">
          <div className="no-candidates">No Golden found</div>
        </div>,
      );
      return;
    }

    this.replaceChildren(
      <table className="candidates-table">
        <thead>
          <tr>
            <th style={{ width: '40px' }}>MATCH SCORE</th>
            <th style={{ width: '90px' }}>NUMBER</th>
            <th style={{ width: '210px' }}>STREET</th>
            <th style={{ width: '170px' }}>LOCALITY</th>
            <th style={{ width: '110px' }}>POSTCODE</th>
            <th style={{ width: '160px' }}>GEO</th>
            <th style={{ width: '100px' }}></th>
          </tr>
        </thead>
        <tbody>{this._candidates.map((candidate) => createCandidateRow(candidate, this._sourceRecord, this._showLinkButton))}</tbody>
      </table>,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'candidates-table': CandidatesTable;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'candidates-table': GreyCat.Element<CandidatesTable>;
      }
    }
  }
}

if (!customElements.get('candidates-table')) {
  customElements.define('candidates-table', CandidatesTable);
}
