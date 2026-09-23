import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '~/components/mp-address-search';
import type { AddressSelectEvent } from '~/components/mp-address-search';

export interface SearchSelectEvent {
  goldenRecord: gc.mengplaz.AddressRecordRef;
}

/**
 * Hunt for a golden record by hand when reconciliation found no acceptable
 * candidate. Selecting a result emits `search-select` and closes the dialog.
 */
@customElement('mp-search-dialog')
export class MpSearchDialog extends LitElement {
  static styles = css`
    wa-dialog {
      --width: 560px;
    }
    .body {
      min-height: 320px;
    }
  `;

  @state() private open = false;

  show() {
    this.open = true;
  }

  hide() {
    this.open = false;
  }

  private select(e: CustomEvent<AddressSelectEvent>) {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent<SearchSelectEvent>('search-select', {
        detail: { goldenRecord: e.detail.record },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <wa-dialog
        label="Search a Golden record"
        ?open=${this.open}
        @wa-hide=${(e: Event) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          this.open = false;
        }}
      >
        <div class="body">
          <mp-address-search
            placeholder="Search a golden address..."
            @address-select=${(e: CustomEvent<AddressSelectEvent>) => this.select(e)}
          ></mp-address-search>
        </div>
        <wa-button slot="footer" appearance="outlined" @click=${() => this.hide()}>Cancel</wa-button>
      </wa-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-search-dialog': MpSearchDialog;
  }
}
