import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '~/components/address-field/mp-address-content';
import { ICONS } from '~/lib/icons';
import type { PromoteEvent, ReconcileEvent, SearchCandidateEvent } from '~/components/comparison/events';

/**
 * The source record under review, with the three actions a reviewer can take on
 * it: hunt for a candidate by hand, re-run reconciliation, or promote it to a
 * golden record of its own.
 */
@customElement('mp-master-record-panel')
export class MpMasterRecordPanel extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
    }
    .panel {
      display: flex;
      flex-direction: column;
      height: 100%;
      border: 1px solid var(--gc-border);
      border-radius: var(--gc-radius);
      background: var(--gc-surface);
      overflow: hidden;
    }
    .fields {
      flex: 1;
      overflow: auto;
      padding: 0.3rem 0.4rem;
    }
    .footer {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
      padding: 0.5rem;
      border-top: 1px solid var(--gc-hair);
    }
    .empty {
      padding: 2rem;
      text-align: center;
      color: var(--gc-muted);
    }
    .ico {
      width: 15px;
      height: 15px;
    }
  `;

  @property({ attribute: false }) record: gc.AddressFullRecordRef | null = null;
  @property({ type: Boolean, attribute: 'show-actions' }) showActions = true;

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

  private emit(name: 'search-candidate' | 'promote' | 'reconcile') {
    if (!this.record) {
      return;
    }
    const detail: SearchCandidateEvent | PromoteEvent | ReconcileEvent = { sourceRecord: this.record };
    this.dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
  }

  render() {
    if (!this.record) {
      return html`<div class="panel"><div class="empty">No record selected</div></div>`;
    }
    return html`
      <div class="panel">
        <div class="fields">
          <mp-address-content .value=${this.record.record}></mp-address-content>
        </div>
        ${
          this.showActions
            ? html`<div class="footer">
                <wa-button size="s" appearance="outlined" @click=${() => this.emit('search-candidate')}>
                  ${this.icon(ICONS.search, 'start')} Search Candidate
                </wa-button>
                <wa-button size="s" appearance="outlined" @click=${() => this.emit('reconcile')}>
                  ${this.icon(ICONS.refresh, 'start')} Reconcile
                </wa-button>
                <wa-button size="s" appearance="outlined" @click=${() => this.emit('promote')}>
                  Promote to Golden
                </wa-button>
              </div>`
            : ''
        }
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-master-record-panel': MpMasterRecordPanel;
  }
}
