import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { ICONS } from '~/lib/icons';

/** Shown when a reconcile tab has no records left to review. */
@customElement('mp-completion-message')
export class MpCompletionMessage extends LitElement {
  static styles = css`
    .container {
      display: grid;
      justify-items: center;
      gap: 0.4rem;
      padding: 3rem 1rem;
      text-align: center;
      color: var(--gc-muted);
    }
    .ico {
      width: 40px;
      height: 40px;
      color: var(--gc-good);
    }
    h3 {
      margin: 0.4rem 0 0;
      color: var(--gc-text);
      font-family: var(--gc-display);
      font-size: var(--wa-font-size-l);
    }
    p {
      margin: 0;
      font-size: var(--wa-font-size-s);
    }
  `;

  @property() category = '';

  render() {
    return html`<div class="container">
      <svg
        class="ico"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        ${unsafeSVG(ICONS.check)}
      </svg>
      <h3>All Records Reviewed</h3>
      <p>All records in "${this.category}" have been reviewed.</p>
      <p>Switch to another tab to continue reviewing.</p>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-completion-message': MpCompletionMessage;
  }
}
