import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/tag/tag.js';
import '@awesome.me/webawesome/dist/components/tooltip/tooltip.js';
import '@awesome.me/webawesome/dist/components/qr-code/qr-code.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '~/components/address-field/mp-address-content';
import '~/components/dialogs/mp-confirm-dialog';
import type { MpConfirmDialog } from '~/components/dialogs/mp-confirm-dialog';
import { ICONS } from '~/lib/icons';
import { colorForSource, formatDate } from '~/lib/format';
import { recordHref } from '~/lib/routing';

/**
 * One address record as a card: the source name in the source's colour, a link
 * out to that source's own page for the record where one exists, the field list,
 * and whichever of the go-to / QR / link / unlink actions the host enables.
 *
 * The QR action opens a dialog: the code is only ever wanted on demand, and at
 * a size a phone can actually scan.
 *
 * Used standalone on the search page and as the content of a map popup.
 */
@customElement('mp-address-card')
export class MpAddressCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .card {
      background: var(--gc-surface);
      border: 1px solid var(--gc-border);
      border-radius: var(--gc-radius);
      overflow: hidden;
    }
    .head {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.45rem 0.6rem;
      border-bottom: 1px solid var(--gc-border);
      background: var(--gc-surface-2);
    }
    .head h4 {
      margin: 0;
      font-family: var(--gc-display);
      font-size: var(--wa-font-size-m);
      font-weight: 700;
    }
    .spring {
      flex: 1;
    }
    .iconlink {
      display: inline-grid;
      place-items: center;
      color: var(--gc-muted);
    }
    .iconlink:hover {
      color: var(--gc-accent);
    }
    .ico {
      width: 16px;
      height: 16px;
    }
    .body {
      padding: 0.3rem 0.4rem;
    }
    .map {
      height: 200px;
      border-top: 1px solid var(--gc-border);
    }
    .qrbox {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }
    /* wa-qr-code paints the modules in its own computed color on a transparent
       ground, so left to inherit it draws --gc-text - washed out, and in dark
       mode barely there. Pin both ends of the contrast instead of theming them:
       a code only scans as black on white. */
    .qrbox wa-qr-code {
      color: #000000;
      background: #ffffff;
      padding: 0.75rem;
      border-radius: var(--gc-radius);
    }
    .qrlink {
      color: var(--gc-accent);
      font-size: var(--wa-font-size-s);
      word-break: break-all;
      text-align: center;
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

  @property({ attribute: false }) value?: gc.mengplaz.POIRecordRef | gc.mengplaz.POIFullRecordRef;
  /** Offer a link to the full record page (golden records only). */
  @property({ type: Boolean, attribute: 'show-go-to' }) showGoTo = false;
  /** Offer an unlink action. */
  @property({ type: Boolean, attribute: 'show-unlink' }) showUnlink = false;
  /** Show a QR code encoding the record's permalink. */
  @property({ type: Boolean, attribute: 'show-quick-link' }) showQuickLink = false;
  /** The golden node to link this record to; presence enables the link action. */
  @property({ attribute: false }) showLink?: gc.node;
  /** Plot the record's positions below the fields. */
  @property({ type: Boolean, attribute: 'show-map' }) showMap = false;

  @query('mp-confirm-dialog') private confirm?: MpConfirmDialog;

  @state() private qrOpen = false;

  // maplibre is ~200 KB; only the comparator sets `show-map`, so the search page
  // must not pay for it. Pulled in on demand rather than imported at module scope.
  private minimapLoaded = false;

  protected override willUpdate() {
    if (this.showMap && !this.minimapLoaded) {
      this.minimapLoaded = true;
      void import('~/components/mp-minimap');
    }
  }

  private async unlinkClicked() {
    const result = await this.confirm?.show('Are you sure you want to unlink this record ?', false);
    if (result?.confirmed && this.value) {
      await gc.unlinkRecord(this.value.ref);
      this.dispatchEvent(new CustomEvent('update', { bubbles: true, composed: true }));
    }
  }

  private async linkClicked() {
    const result = await this.confirm?.show('Are you sure you want to link this item to the Golden record ?', true);
    if (result?.confirmed && this.value && this.showLink) {
      await gc.linkRecords(this.showLink, this.value.ref, result.params);
      this.dispatchEvent(new CustomEvent('update', { bubbles: true, composed: true }));
    }
  }

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

  render() {
    const record = this.value?.record as Record<string, unknown> | undefined;
    const sourceName = (record?.sourceName as string | undefined) ?? 'Unknown Source';
    const sourceUrl = this.sourceUrl(record);
    const uid = record?.uid as string | undefined;
    const permalink = uid ? `${location.origin}${recordHref(uid)}` : '';
    return html`
      <div class="card">
        <div class="head">
          <h4 style="color:${colorForSource(sourceName)}">${sourceName}</h4>
          ${
            sourceUrl
              ? html`<a
                  class="iconlink"
                  href=${sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in ${sourceName} source"
                  >${this.icon(ICONS.external)}</a
                >`
              : ''
          }
          ${
            record?.deprecated === true
              ? html`<wa-tooltip
                  content="This address doesn't exist anymore in this source, Last seen: ${this.lastSeen(
                    record.lastSeenAt,
                  )}"
                >
                  <wa-tag variant="warning" size="s">Deprecated</wa-tag>
                </wa-tooltip>`
              : ''
          }
          <div class="spring"></div>
          ${
            this.showGoTo && sourceName === 'Golden' && uid
              ? html`<wa-button size="s" href=${recordHref(uid)}>Go to record</wa-button>`
              : ''
          }
          ${
            this.showQuickLink && permalink
              ? html`<wa-button
                  size="s"
                  appearance="outlined"
                  title="Show QR code"
                  @click=${() => {
                    this.qrOpen = true;
                  }}
                >
                  ${this.icon(ICONS.qr, 'start')}<span class="sr-only">Show QR code</span>
                </wa-button>`
              : ''
          }
          ${
            this.value && this.showUnlink
              ? html`<wa-button size="s" appearance="outlined" title="Unlink" @click=${() => void this.unlinkClicked()}>
                  ${this.icon(ICONS.unlink, 'start')}<span class="sr-only">Unlink</span>
                </wa-button>`
              : ''
          }
          ${
            this.value && this.showLink
              ? html`<wa-button size="s" variant="brand" title="Link Records" @click=${() => void this.linkClicked()}>
                  ${this.icon(ICONS.link, 'start')}<span class="sr-only">Link Records</span>
                </wa-button>`
              : ''
          }
        </div>
        <div class="body">
          <mp-address-content
            .value=${this.value?.record}
            .score=${(this.value as { matchScore?: number } | undefined)?.matchScore}
          ></mp-address-content>
        </div>
        ${
          this.showMap && record?.primaryLocation
            ? html`<div class="map">
                <mp-minimap
                  .golden=${record.primaryLocation as gc.geo}
                  .locations=${record.secondaryLocations as Map<string, gc.geo> | undefined}
                ></mp-minimap>
              </div>`
            : ''
        }
        ${
          this.showQuickLink && permalink
            ? html`<wa-dialog
                label="Scan to open this record"
                ?open=${this.qrOpen}
                @wa-hide=${() => {
                  this.qrOpen = false;
                }}
              >
                <div class="qrbox">
                  <wa-qr-code value=${permalink} size="220" label="QR code for this record"></wa-qr-code>
                  <a class="qrlink" href=${permalink} target="_blank" rel="noopener">${permalink}</a>
                </div>
              </wa-dialog>`
            : ''
        }
        <mp-confirm-dialog></mp-confirm-dialog>
      </div>
    `;
  }

  private lastSeen(lastSeenAt: unknown): string {
    return lastSeenAt instanceof gc.time ? formatDate(lastSeenAt.toDate()) : '--';
  }

  /**
   * A deep link into the source system's own view of this record, where the
   * source publishes one. OSM addresses by element id; BDA needs the geoportail
   * feature id plus the position reprojected to Web Mercator.
   */
  private sourceUrl(record: Record<string, unknown> | undefined): string | null {
    if (!record) {
      return null;
    }
    const sourceName = record.sourceName as string | undefined;
    const loc = record.primaryLocation as gc.geo | null | undefined;
    if (!sourceName) {
      return null;
    }
    switch (sourceName) {
      case 'OSM': {
        const id = record.id as string | number | undefined;
        const kind = (record.kind as string | undefined) || 'node';
        return id != null && id !== '' ? `https://www.openstreetmap.org/${kind}/${id}` : null;
      }
      case 'BDA': {
        const idGeo = record.id_geoportail as string | undefined;
        if (!idGeo || loc == null) {
          return null;
        }
        const R = 6378137;
        const latRad = (loc.lat * Math.PI) / 180;
        const x = ((loc.lng * Math.PI) / 180) * R;
        const y = R * Math.log(Math.tan(Math.PI / 4 + latRad / 2));
        return `https://map.geoportail.lu/theme/main?lang=fr&version=3&X=${x.toFixed(0)}&Y=${y.toFixed(0)}&zoom=17&rotation=0&features=&layers=152&opacities=1&time=&bgLayer=basemap_2015_global&fid=152_${idGeo}`;
      }
      default:
        return null;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-address-card': MpAddressCard;
  }
}
