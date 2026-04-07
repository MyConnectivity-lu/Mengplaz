import { sl } from '@greycat/web';

export interface LinkDialogResult {
  confirmed: boolean;
  params: gc.privateApi.LinkParameters;
}

export class MengplazConfirmDialog extends HTMLElement {
  _text?: string;
  dialog: sl.SlDialog;
  private resolve?: (value: LinkDialogResult) => void;
  private addCityAliasCheckbox?: sl.SlCheckbox;
  private addStreetAliasCheckbox?: sl.SlCheckbox;
  _showLinkParams = false;

  set text(v: string) {
    this._text = v;
    this.render();
  }

  set showLinkParams(v: boolean) {
    this._showLinkParams = v;
    this.render();
  }

  constructor() {
    super();
    this.dialog = (<sl-dialog label="Please confirm ..." />) as sl.SlDialog;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  show(): Promise<LinkDialogResult> {
    return new Promise<LinkDialogResult>((resolve, _reject) => {
      this.resolve = resolve;
      this.dialog.show();
    });
  }

  private getResult(confirmed: boolean): LinkDialogResult {
    return {
      confirmed,
      params: new gc.privateApi.LinkParameters(this.addCityAliasCheckbox?.checked ?? false, this.addStreetAliasCheckbox?.checked ?? false, false),
    };
  }

  render() {
    this.addCityAliasCheckbox = (<sl-checkbox>Add city alias</sl-checkbox>) as sl.SlCheckbox;
    this.addStreetAliasCheckbox = (<sl-checkbox>Add street alias</sl-checkbox>) as sl.SlCheckbox;

    this.dialog.replaceChildren(
      <>
        <p>{this._text}</p>
        {this._showLinkParams ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
            {this.addCityAliasCheckbox}
            {this.addStreetAliasCheckbox}
          </div>
        ) : (
          ''
        )}
        <sl-button
          slot="footer"
          variant="warning"
          onclick={() => {
            this.dialog.hide();
            this.resolve?.(this.getResult(true));
          }}
        >
          Yes
        </sl-button>
        <sl-button
          slot="footer"
          variant="default"
          onclick={() => {
            this.dialog.hide();
            this.resolve?.(this.getResult(false));
          }}
        >
          Cancel
        </sl-button>
      </>,
    );
    this.replaceChildren(this.dialog);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-confirm-dialog': MengplazConfirmDialog;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'mengplaz-confirm-dialog': GreyCat.Element<MengplazConfirmDialog>;
      }
    }
  }
}

if (!customElements.get('mengplaz-confirm-dialog')) {
  customElements.define('mengplaz-confirm-dialog', MengplazConfirmDialog);
}
