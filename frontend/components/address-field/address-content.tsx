import './address-field';

const EXCLUDED_KEYS = ['goldenRef', 'sourceName'];

export class AddressContent extends HTMLElement {
  private _value?: gc.mengplaz.POIRecord | gc.mengplaz.SearchItem | gc.mengplaz.POIFullRecordRef;

  set value(v: gc.mengplaz.POIRecord | gc.mengplaz.SearchItem | gc.mengplaz.POIFullRecordRef | undefined) {
    this._value = v;
    this.render();
  }

  get value() {
    return this._value;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this._value) {
      this.replaceChildren(<></>);
      return;
    }

    const fields = Object.keys(this._value)
      .filter((key) => {
        const val = (this._value as any)[key];
        // Skip excluded keys and gc.node instances
        if (EXCLUDED_KEYS.includes(key)) return false;
        if (val instanceof gc.node) return false;
        return true;
      })
      .map((key) => {
        const field = <address-field label={key} value={(this._value as any)[key]} />;
        return field;
      });

    this.replaceChildren(<div className="card-content">{fields}</div>);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'address-content': AddressContent;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'address-content': GreyCat.Element<AddressContent>;
      }
    }
  }
}

if (!customElements.get('address-content')) {
  customElements.define('address-content', AddressContent);
}
