import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '~/components/address-field/mp-address-content';
import '~/components/mp-minimap';
import { ICONS } from '~/lib/icons';
import { getMatchQuality } from '~/lib/format';
import { recordHref } from '~/lib/routing';
import type { LinkEvent } from '~/components/comparison/events';

/**
 * Side-by-side detail for one source record and one golden candidate: both field
 * lists, the per-dimension score breakdown behind the overall match probability,
 * and the two positions on a map.
 */
@customElement('mp-record-comparison-view')
export class MpRecordComparisonView extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .grid {
      display: grid;
      gap: var(--gc-gap);
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      align-items: start;
    }
    .section {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--gc-border);
      border-radius: var(--gc-radius);
      background: var(--gc-surface);
      overflow: hidden;
    }
    .head {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem 0.6rem;
      background: var(--gc-surface-2);
      border-bottom: 1px solid var(--gc-border);
      font-family: var(--gc-mono);
      font-size: var(--wa-font-size-2xs);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gc-muted);
    }
    .head .spring {
      flex: 1;
    }
    .body {
      padding: 0.3rem 0.4rem;
    }
    .body.map {
      padding: 0;
      height: 240px;
    }
    .ico {
      width: 15px;
      height: 15px;
      flex: none;
    }
    .overall {
      display: grid;
      justify-items: center;
      gap: 0.3rem;
      padding: 0.8rem 0;
    }
    .circle {
      display: grid;
      place-items: center;
      width: 84px;
      height: 84px;
      border-radius: 50%;
      border: 3px solid currentColor;
      font-family: var(--gc-display);
      font-size: var(--wa-font-size-xl);
      font-weight: 700;
    }
    .circle-exact,
    .circle-good {
      color: var(--gc-good);
    }
    .circle-partial {
      color: var(--gc-warn);
    }
    .circle-poor {
      color: var(--gc-bad);
    }
    .overall .label {
      color: var(--gc-muted);
      font-size: var(--wa-font-size-xs);
    }
    .breakdown {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      padding: 0 0.2rem 0.6rem;
    }
    .row {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0.4rem;
      border-bottom: 1px solid var(--gc-hair);
      font-size: var(--wa-font-size-s);
    }
    .row .name {
      color: var(--gc-muted);
    }
    .row .val {
      font-variant-numeric: tabular-nums;
      font-weight: 600;
    }
    .val-exact,
    .val-good {
      color: var(--gc-good);
    }
    .val-partial {
      color: var(--gc-warn);
    }
    .val-poor {
      color: var(--gc-bad);
    }
    .actions {
      padding: 0 0.5rem 0.6rem;
    }
    .none {
      padding: 2rem;
      text-align: center;
      color: var(--gc-muted);
    }
  `;

  @property({ attribute: false }) sourceRecord: gc.AddressFullRecordRef | null = null;
  @property({ attribute: false }) candidate: gc.privateApi.MatchedCandidateDetail | null = null;
  @property({ type: Boolean, attribute: 'show-link-button' }) showLinkButton = true;

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

  private link() {
    if (!this.sourceRecord || !this.candidate) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent<LinkEvent>('link', {
        detail: { sourceRecord: this.sourceRecord.ref, goldenCandidate: this.candidate.ref },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private scoreRow(label: string, score: number) {
    const quality = getMatchQuality(score);
    return html`<div class="row">
      <span class="name">${label}</span>
      <span class="val val-${quality.variant}">${Math.round(score)}%</span>
    </div>`;
  }

  render() {
    const source = this.sourceRecord;
    const candidate = this.candidate;
    if (!source || !candidate) {
      return html`<div class="none">Select a record to compare</div>`;
    }
    const overall = getMatchQuality(candidate.overallScore);
    const hasGeo = source.record.primaryLocation || candidate.record.primaryLocation;
    return html`
      <div class="grid">
        <div class="section">
          <div class="head">${this.icon(ICONS.database)}<span>Source Record</span></div>
          <div class="body"><mp-address-content .value=${source.record}></mp-address-content></div>
        </div>

        <div class="section">
          <div class="head">${this.icon(ICONS.graphUp)}<span>Analysis</span></div>
          <div class="overall">
            <div class="circle circle-${overall.variant}">${Math.round(candidate.overallScore)}%</div>
            <span class="label">Match Probability</span>
          </div>
          <div class="breakdown">
            ${this.scoreRow('Number', candidate.numberScore)} ${this.scoreRow('Street', candidate.streetScore)}
            ${this.scoreRow('Locality', candidate.cityScore)} ${this.scoreRow('Postcode', candidate.postcodeScore)}
            ${candidate.geoScore != null ? this.scoreRow('Geo', candidate.geoScore) : ''}
          </div>
          ${
            this.showLinkButton
              ? html`<div class="actions">
                  <wa-button variant="brand" size="s" @click=${() => this.link()}>
                    ${this.icon(ICONS.link, 'start')} Link Records
                  </wa-button>
                </div>`
              : ''
          }
        </div>

        <div class="section">
          <div class="head">
            ${this.icon(ICONS.document)}<span>Golden Record</span>
            <span class="spring"></span>
            <wa-button size="s" appearance="plain" href=${recordHref(String(candidate.record.uid))}>
              Go to Record
            </wa-button>
          </div>
          <div class="body"><mp-address-content .value=${candidate.record}></mp-address-content></div>
        </div>

        <div class="section">
          <div class="head">${this.icon(ICONS.pin)}<span>Map</span></div>
          <div class="body map">
            ${
              hasGeo
                ? html`<mp-minimap
                    .source=${source.record.primaryLocation}
                    .golden=${candidate.record.primaryLocation}
                    show-distance
                    hide-attribution
                  ></mp-minimap>`
                : html`<div class="none">No Coordinates found</div>`
            }
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-record-comparison-view': MpRecordComparisonView;
  }
}
