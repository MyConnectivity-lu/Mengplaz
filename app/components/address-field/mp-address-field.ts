import { LitElement, html, css, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { ICONS } from '~/lib/icons';
import { colorForSource, formatDate, prettifyCamelCase } from '~/lib/format';

/**
 * One labelled field of an address record. The label is prettified from the
 * backend's camelCase field name unless `raw-label` is set; the value is
 * rendered by type - dates, geo points, enums, aliases and per-source location
 * maps each get their own treatment.
 */
@customElement('mp-address-field')
export class MpAddressField extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .field {
      display: flex;
      align-items: center;
      border-bottom: 1px solid var(--gc-hair);
      padding: 0.15rem 0.5rem;
      margin: 0.15rem 0;
      font-size: var(--wa-font-size-s);
    }
    .key {
      flex: 0 0 140px;
      font-size: var(--wa-font-size-2xs);
      color: var(--gc-muted);
      margin-right: 0.5rem;
      white-space: nowrap;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    .key a {
      color: var(--gc-accent);
      display: inline-flex;
    }
    .value {
      flex: 1;
      font-weight: 600;
      color: var(--gc-text);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .locations {
      display: flex;
      gap: 0.6rem;
      flex-wrap: wrap;
    }
    .locations > div {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    .ico {
      width: 14px;
      height: 14px;
      flex: none;
    }
  `;

  @property() label = '';
  @property({ attribute: false }) value: unknown = null;
  /** Show the label as given, without prettifying the camelCase field name. */
  @property({ type: Boolean, attribute: 'raw-label' }) rawLabel = false;

  render() {
    const displayLabel = this.rawLabel ? this.label : prettifyCamelCase(this.label);

    // Quality is a 0-1 ratio shown as a percentage, with a link to the wiki page
    // explaining how it is computed.
    if (this.label === 'quality') {
      return html`<div class="field">
        <div class="key">
          ${displayLabel}
          <a
            href="https://gitlab.com/myconnectivity/mengplaz/-/wikis/Golden-Record-Quality"
            target="_blank"
            rel="noopener"
            title="Quality documentation"
            >${rawIcon(ICONS.info)}</a
          >
        </div>
        <div class="value">${(Number(this.value) * 100).toFixed(0)} %</div>
      </div>`;
    }

    const val = this.renderValue(this.value);
    // Only primitives make a useful tooltip; a template does not.
    const title = typeof val === 'string' || typeof val === 'number' ? String(val) : undefined;
    return html`<div class="field">
      <div class="key">${displayLabel}</div>
      <div class="value" title=${title ?? ''}>${val}</div>
    </div>`;
  }

  private renderValue(value: unknown): TemplateResult | string | number {
    const isEmpty = value === null || value === undefined || (Array.isArray(value) && value.length === 0);
    if (isEmpty) {
      return '--';
    }
    if (typeof value === 'string' || typeof value === 'number') {
      return value;
    }
    if (value instanceof gc.sdk.GCEnum) {
      return value.key;
    }
    if (Array.isArray(value)) {
      return this.renderArray(value);
    }
    if (value instanceof gc.time) {
      return formatDate(value.toDate());
    }
    if (value instanceof gc.geo) {
      return `${value.lat.toFixed(6)}, ${value.lng.toFixed(6)}`;
    }
    if (value instanceof Map) {
      return value.size > 0 ? this.renderMapPositions(value as Map<string, gc.core.geo>) : '--';
    }
    // Anything the branches above did not claim: a plain object with no
    // meaningful string form, so name its type rather than printing [object Object].
    return Object.prototype.toString.call(value).slice(8, -1);
  }

  private renderArray(value: unknown[]): string {
    if (value[0] instanceof gc.Alias) {
      return (value as gc.Alias[]).map((v) => v.value).join(', ');
    }
    return value.join(', ');
  }

  /** Per-source coordinates, each dotted in its source's colour. */
  private renderMapPositions(value: Map<string, gc.core.geo>) {
    return html`<div class="locations">
      ${[...value].map(
        ([k, v]) => html`<div title=${v.toString()}>${rawIcon(ICONS.pin, colorForSource(k))}<span>${k}</span></div>`,
      )}
    </div>`;
  }
}

/** A 24x24 stroke icon, coloured by `color` or the inherited text colour. */
function rawIcon(inner: string, color?: string) {
  return html`<svg
    class="ico"
    viewBox="0 0 24 24"
    fill="none"
    stroke=${color ?? 'currentColor'}
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    ${unsafeSVG(inner)}
  </svg>`;
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-address-field': MpAddressField;
  }
}
