import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js';

export interface LinkDialogResult {
  confirmed: boolean;
  params: gc.privateApi.LinkParameters;
}

/**
 * A yes/cancel confirmation, optionally carrying the link parameters used when
 * attaching a source record to a golden one.
 *
 *   const result = await dialog.show('Are you sure?', true);
 *   if (result.confirmed) { ... result.params ... }
 *
 * `show()` resolves once the user answers, so callers read as straight-line code.
 */
@customElement('mp-confirm-dialog')
export class MpConfirmDialog extends LitElement {
  static styles = css`
    .params {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1rem;
    }
    .hint {
      color: var(--gc-muted);
      font-size: var(--wa-font-size-xs);
    }
  `;

  @property() text = '';
  /** Show the link-parameter checkboxes (city alias, street alias, similar mismatches). */
  @property({ type: Boolean, attribute: 'show-link-params' }) showLinkParams = false;

  @state() private open = false;

  @query('#city-alias') private cityAlias?: HTMLInputElement;
  @query('#street-alias') private streetAlias?: HTMLInputElement;
  @query('#similar-mismatch') private similarMismatch?: HTMLInputElement;

  private resolve?: (value: LinkDialogResult) => void;

  /** Open the dialog and resolve with the user's answer. */
  show(text?: string, showLinkParams?: boolean): Promise<LinkDialogResult> {
    if (text !== undefined) {
      this.text = text;
    }
    if (showLinkParams !== undefined) {
      this.showLinkParams = showLinkParams;
    }
    this.open = true;
    return new Promise<LinkDialogResult>((resolve) => {
      this.resolve = resolve;
    });
  }

  private answer(confirmed: boolean) {
    this.open = false;
    const result: LinkDialogResult = {
      confirmed,
      params: new gc.privateApi.LinkParameters(
        this.cityAlias?.checked ?? false,
        this.streetAlias?.checked ?? false,
        this.similarMismatch?.checked ?? false,
      ),
    };
    this.resolve?.(result);
    this.resolve = undefined;
  }

  render() {
    return html`
      <wa-dialog
        label="Please confirm"
        ?open=${this.open}
        @wa-hide=${() => {
          // Covers Escape and the close button as well as the footer buttons.
          if (this.resolve) {
            this.answer(false);
          }
        }}
      >
        <p>${this.text}</p>
        ${
          this.showLinkParams
            ? html`<div class="params">
                <wa-checkbox id="city-alias">Add city alias</wa-checkbox>
                <wa-checkbox id="street-alias">Add street alias</wa-checkbox>
                <wa-checkbox id="similar-mismatch">
                  Update similar street mismatches
                  <span class="hint" slot="hint">
                    When checked, all other records with the same street name mismatch will automatically be moved to
                    the matched tab, and can be batch linked.
                  </span>
                </wa-checkbox>
              </div>`
            : ''
        }
        <wa-button slot="footer" variant="warning" @click=${() => this.answer(true)}>Yes</wa-button>
        <wa-button slot="footer" appearance="outlined" @click=${() => this.answer(false)}>Cancel</wa-button>
      </wa-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-confirm-dialog': MpConfirmDialog;
  }
}
