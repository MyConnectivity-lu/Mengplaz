import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '~/components/comparison/mp-master-record-panel';
import '~/components/comparison/mp-candidates-table';
import '~/components/comparison/mp-record-comparison-view';
import { ICONS } from '~/lib/icons';
import type { ViewCandidateEvent } from '~/components/comparison/events';

/**
 * One source record beside its golden candidates, with the detailed side-by-side
 * comparison below. The detail opens on the best candidate automatically - a
 * reviewer working a queue wants it already open, not one click away - and the
 * eye button on any other row switches it.
 */
@customElement('mp-comparison-dashboard')
export class MpComparisonDashboard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .panels {
      display: grid;
      gap: var(--gc-gap);
      grid-template-columns: minmax(280px, 1fr) minmax(0, 2fr);
      align-items: stretch;
    }
    @media (max-width: 1023px) {
      .panels {
        grid-template-columns: 1fr;
      }
    }
    .candidates {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--gc-border);
      border-radius: var(--gc-radius);
      background: var(--gc-surface);
      overflow: hidden;
      min-width: 0;
    }
    .candidates-head {
      padding: 0.4rem 0.6rem;
      background: var(--gc-surface-2);
      border-bottom: 1px solid var(--gc-border);
      color: var(--gc-muted);
      font-size: var(--wa-font-size-s);
    }
    .detail {
      margin-top: var(--gc-gap);
      border: 1px solid var(--gc-border);
      border-radius: var(--gc-radius);
      background: var(--gc-surface);
      overflow: hidden;
    }
    .detail:first-child {
      margin-top: 0;
    }
    .detail-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.4rem 0.6rem;
      background: var(--gc-surface-2);
      border-bottom: 1px solid var(--gc-border);
      font-family: var(--gc-mono);
      font-size: var(--wa-font-size-2xs);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gc-muted);
    }
    .detail-body {
      padding: 0.5rem;
    }
    .ico {
      width: 15px;
      height: 15px;
    }
    /* wa-button does not forward aria-label to its inner <button>, so an
       icon-only button would be nameless to assistive tech. Ship real text and
       hide it visually instead. */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    }
  `;

  @property({ attribute: false }) comparisonData: gc.privateApi.ComparisonViewData | null = null;
  @property({ type: Boolean, attribute: 'show-actions' }) showActions = true;
  /** A linked record has a single golden, so the comparison is all there is to show. */
  @property({ type: Boolean, attribute: 'detail-only' }) detailOnly = false;

  @state() private detail: gc.privateApi.MatchedCandidateDetail | null = null;

  protected override willUpdate(changed: Map<string, unknown>) {
    if (!changed.has('comparisonData')) {
      return;
    }
    // New record: open the detail on the best candidate rather than making the
    // reviewer click into it for every single row.
    this.detail = this.comparisonData?.candidates[0] ?? null;
  }

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('view-candidate', this.onViewCandidate as EventListener);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('view-candidate', this.onViewCandidate as EventListener);
  }

  private onViewCandidate = (e: CustomEvent<ViewCandidateEvent>) => {
    this.detail = e.detail.candidate;
  };

  render() {
    const data = this.comparisonData;
    if (!data) {
      return html``;
    }
    const count = data.candidates.length;
    return html`
      ${
        this.detailOnly
          ? ''
          : html`<div class="panels">
              <mp-master-record-panel
                .record=${data.sourceRecord}
                ?show-actions=${this.showActions}
              ></mp-master-record-panel>
              <div class="candidates">
                <div class="candidates-head">${count} golden${count === 1 ? '' : 's'} found for comparison</div>
                <mp-candidates-table
                  .candidates=${data.candidates}
                  .sourceRecord=${data.sourceRecord}
                  ?show-link-button=${this.showActions}
                ></mp-candidates-table>
              </div>
            </div>`
      }
      ${
        this.detail
          ? html`<div class="detail">
              <div class="detail-head">
                <span>Detailed Comparison</span>
                ${
                  this.detailOnly
                    ? ''
                    : html`<wa-button
                        size="s"
                        appearance="plain"
                        @click=${() => {
                          this.detail = null;
                        }}
                      >
                        <svg
                          slot="start"
                          class="ico"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                        >
                          ${unsafeSVG(ICONS.close)}
                        </svg>
                        <span class="sr-only">Close detailed comparison</span>
                      </wa-button>`
                }
              </div>
              <div class="detail-body">
                <mp-record-comparison-view
                  .sourceRecord=${data.sourceRecord}
                  .candidate=${this.detail}
                  ?show-link-button=${this.showActions}
                ></mp-record-comparison-view>
              </div>
            </div>`
          : ''
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-comparison-dashboard': MpComparisonDashboard;
  }
}
