import '../../address-field/address-content';
import './master-record-panel.css';

export interface PromoteEvent {
  sourceRecord: gc.POIFullRecordRef;
}

export interface SearchCandidateEvent {
  sourceRecord: gc.POIFullRecordRef;
}

export interface ReconcileEvent {
  sourceRecord: gc.POIFullRecordRef;
}

export class MasterRecordPanel extends HTMLElement {
  private _record: gc.POIFullRecordRef | null = null;
  private _showActions = true;

  // Accepts full record data directly - no internal API calls needed
  set record(value: gc.POIFullRecordRef | null) {
    this._record = value;
    this.render();
  }

  get record() {
    return this._record;
  }

  set showActions(value: boolean) {
    this._showActions = value;
    this.render();
  }

  get showActions() {
    return this._showActions;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this._record) {
      this.replaceChildren(<div className="master-record-panel">No record selected</div>);
      return;
    }

    this.replaceChildren(
      <div className="card" style={{ height: '100%' }}>
        <div className="master-record-fields">
          <address-content value={this._record.record} />
        </div>

        {this._showActions ? (
          <div className="master-record-footer">
            <sl-button variant="default" size="medium" onclick={() => this.handleSearchCandidate()}>
              <sl-icon slot="prefix" name="search"></sl-icon>
              Search Candidate
            </sl-button>
            <sl-button variant="default" size="medium" onclick={() => this.handleReconcile()}>
              <sl-icon slot="prefix" name="arrow-repeat"></sl-icon>
              Reconcile
            </sl-button>
            <sl-button variant="default" size="medium" onclick={() => this.handlePromote()}>
              Promote to Golden
            </sl-button>
          </div>
        ) : null}
      </div>,
    );
  }

  private handleSearchCandidate() {
    if (this._record != null) {
      const event = new CustomEvent<SearchCandidateEvent>('search-candidate', {
        detail: {
          sourceRecord: this._record,
        },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }
  }

  private handlePromote() {
    if (this._record != null) {
      const event = new CustomEvent<PromoteEvent>('promote', {
        detail: {
          sourceRecord: this._record,
        },
        bubbles: true,
        composed: true,
      });

      this.dispatchEvent(event);
    }
  }

  private handleReconcile() {
    if (this._record != null) {
      const event = new CustomEvent<ReconcileEvent>('reconcile', {
        detail: {
          sourceRecord: this._record,
        },
        bubbles: true,
        composed: true,
      });

      this.dispatchEvent(event);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'master-record-panel': MasterRecordPanel;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'master-record-panel': GreyCat.Element<MasterRecordPanel>;
      }
    }
  }
}

if (!customElements.get('master-record-panel')) {
  customElements.define('master-record-panel', MasterRecordPanel);
}
