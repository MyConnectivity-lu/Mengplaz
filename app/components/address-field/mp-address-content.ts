import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '~/components/address-field/mp-address-field';

// Fields that are chrome rather than address data, or that the card renders in
// its own header: never listed as rows.
const EXCLUDED_KEYS = ['goldenRef', 'sourceName', 'deprecated', 'lastSeenAt'];

/**
 * The field list of one address record. Reflects over the record's own keys, so
 * a backend field added to `POIRecord` shows up without a frontend change; node
 * references are skipped because they are graph pointers, not values.
 */
@customElement('mp-address-content')
export class MpAddressContent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({ attribute: false }) value?: gc.mengplaz.POIRecord | gc.mengplaz.SearchItem | gc.mengplaz.POIFullRecordRef;
  /** Match score as a 0-1 ratio; appended as a "Score" row when present. */
  @property({ type: Number }) score?: number;

  render() {
    const value = this.value;
    if (!value) {
      return html``;
    }
    const record = value as unknown as Record<string, unknown>;
    const keys = Object.keys(record).filter((key) => {
      if (EXCLUDED_KEYS.includes(key)) {
        return false;
      }
      return !(record[key] instanceof gc.node);
    });
    return html`
      ${keys.map((key) => html`<mp-address-field .label=${key} .value=${record[key]}></mp-address-field>`)}
      ${
        this.score
          ? html`<mp-address-field .label=${'Score'} .value=${`${this.score * 100} %`}></mp-address-field>`
          : ''
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-address-content': MpAddressContent;
  }
}
