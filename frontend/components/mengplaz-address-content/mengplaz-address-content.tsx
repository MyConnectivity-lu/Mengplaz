import { prettifyCamelCase } from '~/common/utils';
import './mengplaz-address-content.css';

//sign-merge-right

export class MengplazAddressContent extends HTMLElement {
  _value?: gc.mengplaz.POIRecord | gc.mengplaz.SearchItem | gc.mengplaz.POIFullRecordRef;

  constructor() {
    super();
  }

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

  disconnectedCallback() {}

  render() {
    if (!this.value) return <></>;
    if (this.value instanceof gc.mengplaz.SearchItem) {
      this.replaceChildren(
        <div className={'card-content'}>
          {Object.keys(this.value).map((k) => this.renderAttr(k, (this._value as any)[k]))}
          {/*this._value?.position != null ? <mengplaz-minimap location={this._value.position!} /> : ''*/}
        </div>,
      );
    } else {
      this.replaceChildren(<div className={'card-content'}>{Object.keys(this.value).map((k) => this.renderAttr(k, (this._value as any)[k]))}</div>);
    }
  }

  private renderAttr(key: string, value: unknown) {
    if (value instanceof gc.node || key === 'goldenRef' || key === 'sourceName' || key === 'primaryLocation') return;
    if (key === 'quality')
      return (
        <div className={'field'}>
          <div className={'field-key'}> {prettifyCamelCase(key)}</div>
          <div className={'field-value'}>
            <sl-rating readonly label="Rating" value={Number(value) * 5}></sl-rating>
          </div>
        </div>
      );
    return (
      <div className={'field'}>
        <div className={'field-key'}> {prettifyCamelCase(key)}</div>
        <div className={'field-value'}>{this.renderValue(value)}</div>
      </div>
    );
  }
  private renderValue(value: unknown) {
    const isEmpty = value === null || value === undefined || (Array.isArray(value) && value.length === 0);
    if (isEmpty) return '--';
    if (typeof value === 'string' || typeof value === 'number') return value;
    if (value instanceof gc.sdk.GCEnum) return value.key;
    if (Array.isArray(value)) return this.renderArray(value);
    if (value instanceof gc.time) return <sl-format-date date={value.toDate()} lang="fr"></sl-format-date>;
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
  }

  private renderMapPositions(value: Map<string, gc.core.geo>) {
    return [...value].map(([k, v]) => (
      <sl-badge pill className={'position-map-badge'} title={v.toString()}>
        <sl-icon name="geo-alt"></sl-icon> {k}
      </sl-badge>
    ));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-address-content': MengplazAddressContent;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'mengplaz-address-content': GreyCat.Element<MengplazAddressContent>;
      }
    }
  }
}

if (!customElements.get('mengplaz-address-content')) {
  customElements.define('mengplaz-address-content', MengplazAddressContent);
}
