import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
import { ICONS } from '~/lib/icons';

/**
 * Position within one reconcile tab's record queue: previous / next, the index,
 * and a box to jump straight to a record id. Navigation wraps, so a reviewer
 * working a queue never dead-ends at either edge.
 */
@customElement('mp-record-pager')
export class MpRecordPager extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      flex-wrap: wrap;
    }
    .info {
      font-variant-numeric: tabular-nums;
      color: var(--gc-muted);
      font-size: var(--wa-font-size-s);
      white-space: nowrap;
    }
    .id {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
    .id label {
      color: var(--gc-muted);
      font-size: var(--wa-font-size-xs);
    }
    wa-input {
      width: 11rem;
    }
    .ico {
      width: 15px;
      height: 15px;
    }
    /* wa-button does not forward aria-label to its inner <button>, so an
       icon-only button would be nameless to assistive tech. Ship real text and
       hide it visually instead. */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    }
  `;

  @property({ type: Number }) total = 0;
  @property({ type: Number }) index = 0;
  @property({ attribute: false }) currentId = '';

  private icon(inner: string, slot = '') {
    return html`<svg
      slot=${slot}
      class="ico"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      ${unsafeSVG(inner)}
    </svg>`;
  }

  private navigate(delta: -1 | 1) {
    if (this.total === 0) {
      return;
    }
    const next = (this.total + this.index + delta) % this.total;
    this.dispatchEvent(new CustomEvent('navigate', { detail: { index: next }, bubbles: true, composed: true }));
  }

  private onKey(e: KeyboardEvent) {
    if (e.key !== 'Enter') {
      return;
    }
    const id = (e.target as HTMLInputElement).value.trim();
    if (id) {
      this.dispatchEvent(new CustomEvent('id-search', { detail: { id }, bubbles: true, composed: true }));
    }
  }

  render() {
    return html`
      <wa-button size="s" appearance="outlined" @click=${() => this.navigate(-1)}>
        ${this.icon(ICONS.chevronLeft, 'start')}<span class="sr-only">Previous record</span>
      </wa-button>
      <span class="info">${this.total === 0 ? 0 : this.index + 1} of ${this.total}</span>
      <span class="id">
        <label for="record-id">ID:</label>
        <wa-input
          id="record-id"
          size="s"
          placeholder="ID"
          .value=${this.currentId}
          @keydown=${(e: KeyboardEvent) => this.onKey(e)}
        ></wa-input>
      </span>
      <wa-button size="s" appearance="outlined" @click=${() => this.navigate(1)}>
        ${this.icon(ICONS.chevronRight, 'start')}<span class="sr-only">Next record</span>
      </wa-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-record-pager': MpRecordPager;
  }
}
