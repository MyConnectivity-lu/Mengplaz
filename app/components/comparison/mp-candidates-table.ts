import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/divider/divider.js';
import { ICONS } from '~/lib/icons';
import { getMatchQuality } from '~/lib/format';
import { recordHref } from '~/lib/routing';
import type { LinkEvent, ViewCandidateEvent } from '~/components/comparison/events';

/** A field scoring below this is shown as a mismatch. */
const EXACT = 100;

/**
 * The golden candidates matched against one source record, one row each, with a
 * per-field score so a reviewer can see exactly which part of the address
 * disagrees. Fields at 100% read as matches; anything else is flagged.
 */
@customElement('mp-candidates-table')
export class MpCandidatesTable extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .empty {
      padding: 2rem;
      text-align: center;
      color: var(--gc-muted);
    }
    .scroll {
      overflow: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: var(--wa-font-size-s);
    }
    th {
      position: sticky;
      top: 0;
      background: var(--gc-surface-2);
      color: var(--gc-muted);
      font-weight: 600;
      text-align: left;
      padding: 0.32rem 0.6rem;
      border-bottom: 1px solid var(--gc-border);
      white-space: nowrap;
      font-family: var(--gc-mono);
      font-size: var(--wa-font-size-2xs);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    td {
      padding: 0.35rem 0.6rem;
      border-bottom: 1px solid var(--gc-hair);
      vertical-align: top;
      color: var(--gc-text);
    }
    tr:hover td {
      background: var(--gc-hover);
    }
    .badge {
      display: inline-block;
      padding: 0.1rem 0.4rem;
      border-radius: var(--gc-radius-s);
      font-variant-numeric: tabular-nums;
      font-weight: 700;
      font-size: var(--wa-font-size-xs);
    }
    .badge-exact {
      background: color-mix(in srgb, var(--gc-good) 20%, transparent);
      color: var(--gc-good);
    }
    .badge-good {
      background: var(--gc-accent-soft);
      color: var(--gc-accent);
    }
    .badge-partial {
      background: color-mix(in srgb, var(--gc-warn) 20%, transparent);
      color: var(--gc-warn);
    }
    .badge-poor {
      background: color-mix(in srgb, var(--gc-bad) 20%, transparent);
      color: var(--gc-bad);
    }
    .score {
      color: var(--gc-muted);
      font-variant-numeric: tabular-nums;
      margin-left: 0.25rem;
      font-size: var(--wa-font-size-2xs);
    }
    .match {
      color: var(--gc-text);
    }
    .mismatch {
      color: var(--gc-warn);
    }
    .aliases {
      margin-top: 0.2rem;
      color: var(--gc-muted);
      font-size: var(--wa-font-size-2xs);
    }
    .actions {
      display: flex;
      gap: 0.25rem;
      white-space: nowrap;
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

  @property({ attribute: false }) candidates: gc.privateApi.MatchedCandidateDetail[] = [];
  @property({ attribute: false }) sourceRecord: gc.AddressFullRecordRef | null = null;
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

  private link(candidate: gc.privateApi.MatchedCandidateDetail) {
    if (!this.sourceRecord) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent<LinkEvent>('link', {
        detail: { sourceRecord: this.sourceRecord.ref, goldenCandidate: candidate.ref },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private view(candidate: gc.privateApi.MatchedCandidateDetail) {
    if (!this.sourceRecord) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent<ViewCandidateEvent>('view-candidate', {
        detail: { candidate, sourceRecord: this.sourceRecord },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private field(value: string, score: number | null) {
    // A null score means the dimension does not apply (no coordinates, say),
    // which is neither a match nor a mismatch.
    const cls = score == null ? '' : score === EXACT ? 'match' : 'mismatch';
    return html`<span class=${cls}>${value}</span>${
        score == null ? html`<span class="score">N/A</span>` : html`<span class="score">(${Math.round(score)}%)</span>`
      }`;
  }

  private aliases(list: gc.mengplaz.Alias[] | null) {
    if (!list || list.length === 0) {
      return '';
    }
    return html`<div class="aliases">${list.map((a) => a.value).join(', ')}</div>`;
  }

  render() {
    if (this.candidates.length === 0) {
      return html`<div class="empty">No Golden found</div>`;
    }
    return html`
      <div class="scroll">
        <table>
          <thead>
            <tr>
              <th>Match score</th>
              <th>Number</th>
              <th>Street</th>
              <th>Locality</th>
              <th>Postcode</th>
              <th>Geo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${this.candidates.map((c) => {
              const record = c.record;
              const quality = getMatchQuality(c.overallScore);
              const geo = record.primaryLocation
                ? `${record.primaryLocation.lat.toFixed(6)}, ${record.primaryLocation.lng.toFixed(5)}`
                : 'N/A';
              return html`<tr>
                <td>
                  <span class="badge badge-${quality.variant}">${Math.round(c.overallScore)}%</span>
                </td>
                <td>${this.field(record.number ?? 'N/A', c.numberScore)}</td>
                <td>${this.field(record.street ?? 'N/A', c.streetScore)}${this.aliases(record.streetAliases)}</td>
                <td>${this.field(record.locality ?? 'N/A', c.cityScore)}${this.aliases(record.localityAliases)}</td>
                <td>${this.field(record.postcode ?? 'N/A', c.postcodeScore)}</td>
                <td>${this.field(geo, c.geoScore)}</td>
                <td>
                  <div class="actions">
                    <wa-button size="s" appearance="outlined" @click=${() => this.view(c)}>
                      ${this.icon(ICONS.eye, 'start')}<span class="sr-only">View comparison</span>
                    </wa-button>
                    ${
                      this.showLinkButton
                        ? html`<wa-button size="s" appearance="outlined" @click=${() => this.link(c)}>Link</wa-button>`
                        : ''
                    }
                    <wa-button size="s" appearance="outlined" href=${recordHref(String(record.uid))}>
                      ${this.icon(ICONS.external, 'start')}<span class="sr-only">Open record</span>
                    </wa-button>
                  </div>
                </td>
              </tr>`;
            })}
          </tbody>
        </table>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-candidates-table': MpCandidatesTable;
  }
}
