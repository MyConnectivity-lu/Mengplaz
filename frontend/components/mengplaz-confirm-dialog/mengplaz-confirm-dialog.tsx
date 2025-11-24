import { sl } from '@greycat/web';

export class MengplazConfirmDialog extends HTMLElement {
  _text?: string;
  dialog: sl.SlDialog;
  private resolve?: (value: boolean | PromiseLike<boolean>) => void;

  set text(v: string) {
    this._text = v;
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

  show(): Promise<boolean> {
    return new Promise<boolean>((resolve, _reject) => {
      this.resolve = resolve;
      this.dialog.show();
    });
  }

  render() {
    this.dialog.replaceChildren(
      <>
        <p>{this._text}</p>
        <sl-button
          slot="footer"
          variant="warning"
          onclick={() => {
            this.dialog.hide();
            this.resolve?.(true);
          }}
        >
          Yes
        </sl-button>
        <sl-button
          slot="footer"
          variant="default"
          onclick={() => {
            this.dialog.hide();
            this.resolve?.(false);
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
