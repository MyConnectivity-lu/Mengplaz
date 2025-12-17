import { GuiSelect, sl } from '@greycat/web';
import { MengplazAddressContent } from '../mengplaz-address-content/mengplaz-address-content';

export class MengplazPromotionDialog extends HTMLElement {
  private _value?: gc.mengplaz.SearchResult;
  private _cities?: gc.GoldenIndex[];

  private citySelect: GuiSelect;
  private streetSelect: GuiSelect;
  private info: MengplazAddressContent;

  dialog: sl.SlDialog;
  private resolve?: (value: string | undefined) => void;

  constructor() {
    super();
    this.dialog = (<sl-dialog label="Promote Record" />) as sl.SlDialog;
    this.citySelect = (<gui-select label="Choose a City" required />) as GuiSelect;
    this.streetSelect = (<gui-select label="Choose a Street" required />) as GuiSelect;
    this.info = (<mengplaz-address-content />) as MengplazAddressContent;
  }

  set value(v: gc.mengplaz.SearchResult) {
    this._value = v;
    this.render();
  }

  connectedCallback() {
    this.render();
    this.citySelect.addEventListener('gui-input', async () => {
      const streets = await gc.getGoldenStreetsByCityId(this.citySelect.value.id);
      this.streetSelect.options = streets.map((s) => ({ value: s, text: s.name, selected: s.name === this._value?.item.street }));
      this.fillAddressInfo();
    });
    this.streetSelect.addEventListener('gui-input', async () => {
      this.fillAddressInfo();
    });
  }

  disconnectedCallback() {}

  show(): Promise<string | undefined> {
    return new Promise<string | undefined>((resolve, _reject) => {
      this.resolve = resolve;
      this.dialog.show();
    });
  }

  async render() {
    if (!this._value) return;
    if (!this._cities) {
      this._cities = await gc.getGoldenCities();
      this.citySelect.options = this._cities.map((c) => ({ value: c, text: c.name }));
    }

    const cityIdx = this._cities.findIndex((c) => c.name === this._value?.item.city);
    if (cityIdx != -1) {
      this.citySelect.value = this._cities[cityIdx];
      const streets = await gc.getGoldenStreetsByCityId(this.citySelect.value.id);
      this.streetSelect.options = streets.map((s) => ({ value: s, text: s.name, selected: s.name === this._value?.item.street }));
      this.fillAddressInfo();
    }

    this.dialog.replaceChildren(
      <>
        <div style={{ height: '400px' }}>
          {this.citySelect}
          {this.streetSelect}

          <p>New Record</p>
          {this.info}
        </div>

        <div style={{ display: 'flex', gap: 'var(--sl-spacing-medium)' }}>
          <sl-button
            slot="footer"
            variant="warning"
            onclick={() => {
              this.dialog.hide();
              this.resolve?.(this.streetSelect.value.id);
            }}
          >
            Confirm
          </sl-button>
          <sl-button
            slot="footer"
            variant="default"
            onclick={() => {
              this.dialog.hide();
              this.resolve?.(undefined);
            }}
          >
            Cancel
          </sl-button>
        </div>
      </>,
    );
    this.replaceChildren(this.dialog);
  }

  private fillAddressInfo() {
    this.info.value = gc.mengplaz.SearchItem.createFrom({
      number: this._value?.item.number ?? '--',
      multipleCode: this._value?.item.multipleCode ?? '--',
      postcode: this._value?.item.postcode ?? '--',
      city: this.citySelect.value?.name ?? this._value?.item.city,
      street: this.streetSelect.value?.name ?? this._value?.item.street,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-promotion-dialog': MengplazPromotionDialog;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'mengplaz-promotion-dialog': GreyCat.Element<MengplazPromotionDialog>;
      }
    }
  }
}

if (!customElements.get('mengplaz-promotion-dialog')) {
  customElements.define('mengplaz-promotion-dialog', MengplazPromotionDialog);
}
