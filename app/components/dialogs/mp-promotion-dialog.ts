import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/select/select.js';
import '@awesome.me/webawesome/dist/components/option/option.js';
import '~/components/address-field/mp-address-content';

interface Entry {
  id: string;
  name: string;
}

/**
 * Promote a source record to a golden record of its own. The reviewer picks the
 * locality and street the new golden record belongs under; the preview shows the
 * record that will be created. `show()` resolves with the chosen street id, or
 * undefined if cancelled.
 */
@customElement('mp-promotion-dialog')
export class MpPromotionDialog extends LitElement {
  static styles = css`
    wa-dialog {
      --width: 560px;
    }
    .stack {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      min-height: 420px;
    }
    h4 {
      margin: 0.4rem 0 0;
      color: var(--gc-muted);
      font-family: var(--gc-mono);
      font-size: var(--wa-font-size-2xs);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  `;

  @state() private open = false;
  @state() private value?: gc.mengplaz.AddressFullRecordRef;
  @state() private cities: Entry[] = [];
  @state() private streets: Entry[] = [];
  @state() private cityId = '';
  @state() private streetId = '';

  private resolve?: (value: string | undefined) => void;

  async show(value: gc.mengplaz.AddressFullRecordRef): Promise<string | undefined> {
    this.value = value;
    this.open = true;
    await this.preselect();
    return new Promise((resolve) => {
      this.resolve = resolve;
    });
  }

  /** Preselect the locality and street the source record already claims. */
  private async preselect() {
    if (this.cities.length === 0) {
      this.cities = await gc.getGoldenLocalities(null);
    }
    const city = this.cities.find((c) => c.name === this.value?.record.city);
    this.cityId = city?.id ?? '';
    this.streets = city ? await gc.getGoldenStreetsByLocalityId(city.id) : [];
    this.streetId = this.streets.find((s) => s.name === this.value?.record.street)?.id ?? '';
  }

  private async onCity(e: Event) {
    this.cityId = (e.target as HTMLSelectElement).value;
    this.streets = this.cityId ? await gc.getGoldenStreetsByLocalityId(this.cityId) : [];
    this.streetId = this.streets.find((s) => s.name === this.value?.record.street)?.id ?? '';
  }

  private finish(value: string | undefined) {
    this.open = false;
    this.resolve?.(value);
    this.resolve = undefined;
  }

  /** The golden record this promotion would create, as a preview. */
  private get preview() {
    if (!this.value) {
      return undefined;
    }
    const record = this.value.record;
    return gc.mengplaz.AddressRecord.createFrom({
      number: `${record.number ?? '--'}${record.multipleCode ?? ''}`,
      postcode: record.postcode ?? '--',
      locality: this.cities.find((c) => c.id === this.cityId)?.name ?? record.city,
      street: this.streets.find((s) => s.id === this.streetId)?.name ?? record.street,
      sourceName: 'Golden',
    });
  }

  render() {
    return html`
      <wa-dialog
        label="Promote Record"
        ?open=${this.open}
        @wa-hide=${() => {
          if (this.resolve) {
            this.finish(undefined);
          }
        }}
      >
        <div class="stack">
          <wa-select
            label="Choose a Locality"
            with-label
            value=${this.cityId}
            @change=${(e: Event) => void this.onCity(e)}
          >
            ${this.cities.map((c) => html`<wa-option value=${c.id}>${c.name}</wa-option>`)}
          </wa-select>
          <wa-select
            label="Choose a Street"
            with-label
            value=${this.streetId}
            @change=${(e: Event) => {
              this.streetId = (e.target as HTMLSelectElement).value;
            }}
          >
            ${this.streets.map((s) => html`<wa-option value=${s.id}>${s.name}</wa-option>`)}
          </wa-select>
          <h4>New Record</h4>
          <mp-address-content .value=${this.preview}></mp-address-content>
        </div>
        <wa-button
          slot="footer"
          variant="warning"
          ?disabled=${!this.streetId}
          @click=${() => this.finish(this.streetId)}
        >
          Confirm
        </wa-button>
        <wa-button slot="footer" appearance="outlined" @click=${() => this.finish(undefined)}>Cancel</wa-button>
      </wa-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-promotion-dialog': MpPromotionDialog;
  }
}
