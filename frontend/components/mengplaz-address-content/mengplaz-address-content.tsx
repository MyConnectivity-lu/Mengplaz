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
          {Object.keys(this.value).map((k) => this.renderAttr(k, this.value![k]))}
          {/*this._value?.position != null ? <mengplaz-minimap location={this._value.position!} /> : ''*/}
        </div>,
      );
    } else {
      this.replaceChildren(<div className={'card-content'}>{Object.keys(this.value).map((k) => this.renderAttr(k, this.value![k]))}</div>);
    }
  }

  private renderAttr(key: string, value: unknown) {
    if (value instanceof gc.node || key === 'goldenRef') return;
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
    if (value instanceof Map && value.size > 0) return this.renderMapPositions(value);
    if (value instanceof gc.time) return <sl-format-date date={value.toDate()} lang="fr"></sl-format-date>;
    return <gui-value value={value} />;
  }

  private renderArray(value: Array<unknown>) {
    if (value[0] instanceof gc.Alias) return (value as gc.Alias[]).map((v) => v.name).join(', ');
  }

  private renderMapPositions(value: Map<string, gc.core.geo>) {
    return [...value].map(([k]) => (
      <sl-badge pill className={'position-map-badge'} title="Go To">
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
