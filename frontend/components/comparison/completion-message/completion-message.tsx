import './completion-message.css';

export interface CompletionMessageProps {
  category: string;
}

export class CompletionMessage extends HTMLElement {
  private _category: string = '';

  set category(value: string) {
    this._category = value;
    this.render();
  }

  get category() {
    return this._category;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.replaceChildren(
      <div className="completion-container">
        <sl-icon name="check-circle" className="completion-icon"></sl-icon>
        <h3>All Records Reviewed</h3>
        <p>All records in "{this._category}" have been reviewed.</p>
        <p>Switch to another tab to continue reviewing.</p>
      </div>,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'completion-message': CompletionMessage;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'completion-message': GreyCat.Element<CompletionMessage>;
      }
    }
  }
}

if (!customElements.get('completion-message')) {
  customElements.define('completion-message', CompletionMessage);
}
