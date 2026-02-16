import { prettifyCamelCase } from '~/common/utils';
import './address-field.css';

export class AddressField extends HTMLElement {
  private _label: string = '';
  private _value: unknown = null;
  private _rawLabel: boolean = false;

  set label(v: string) {
    this._label = v;
    this.render();
  }

  get label() {
    return this._label;
  }

  set value(v: unknown) {
    this._value = v;
    this.render();
  }

  get value() {
    return this._value;
  }

  /** If true, display label as-is without prettifying */
  set rawLabel(v: boolean) {
    this._rawLabel = v;
    this.render();
  }

  get rawLabel() {
    return this._rawLabel;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.isConnected) return;

    const displayLabel = this._rawLabel ? this._label : prettifyCamelCase(this._label);

    // Special handling for quality field (rating)
    if (this._label === 'quality') {
      this.replaceChildren(
        <div className="field">
          <div className="field-key">{displayLabel}</div>
          <div className="field-value">
            <sl-rating readonly label="Rating" value={Number(this._value) * 5}></sl-rating>
          </div>
        </div>,
      );
      return;
    }

    this.replaceChildren(
      <div className="field">
        <div className="field-key">{displayLabel}</div>
        <div className="field-value">{this.renderValue(this._value)}</div>
      </div>,
    );
  }

  private renderValue(value: unknown) {
    const isEmpty = value === null || value === undefined || (Array.isArray(value) && value.length === 0);
    if (isEmpty) return '--';
    if (typeof value === 'string' || typeof value === 'number') return value;
    if (value instanceof gc.sdk.GCEnum) return value.key;
    if (Array.isArray(value)) return this.renderArray(value);
    if (value instanceof gc.time) return <sl-format-date date={value.toDate()} lang="fr"></sl-format-date>;
    if (value instanceof gc.geo) return `${value.lat.toFixed(6)}, ${value.lng.toFixed(6)}`;
    if (value instanceof Map) {
      if (value.size > 0) {
        return this.renderMapPositions(value);
      } else {
        return '--';
      }
    }
    return <gui-value value={value} />;
  }

  private renderArray(value: Array<unknown>) {
    if (value[0] instanceof gc.Alias) return (value as gc.Alias[]).map((v) => v.value).join(', ');
    return value.join(', ');
  }

  private renderMapPositions(value: Map<string, gc.core.geo>) {
    return [...value].map(([k, v]) => (
      <sl-badge pill className="position-map-badge" title={v.toString()}>
        <sl-icon name="geo-alt"></sl-icon> {k}
      </sl-badge>
    ));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'address-field': AddressField;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'address-field': GreyCat.Element<AddressField>;
      }
    }
  }
}

if (!customElements.get('address-field')) {
  customElements.define('address-field', AddressField);
}
