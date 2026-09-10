import { LitElement, html, css, svg, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

/**
 * The one panel shell used across the app: a bordered, rounded card with an
 * optional header band and a body.
 *
 *   <mp-panel heading="Versions">
 *     <span slot="actions"><span class="pcount">42</span></span>
 *     ...body...
 *   </mp-panel>
 *
 * - `heading` renders the default uppercase-mono title. For a richer header
 *   (badge, custom markup) fill the `header` slot instead.
 * - The `actions` slot is the right-aligned header area (counts, toggles).
 * - The default slot is the body. It is flush by default (row lists sit edge to
 *   edge); add `padded` for forms / prose. `body-height` pins the body height so
 *   a chart or table fills it (and grows when expanded).
 * - The header collapses on its own when there is nothing in it.
 *
 * Three layered background knobs let a transparent header/body reveal what is
 * painted beneath: `--gc-panel` (base), `--gc-panel-header`, `--gc-panel-body`.
 *
 * `expandable` adds a top-right maximize control. Expanding detaches the panel
 * and floats it over the app-shell body (or the element matched by
 * `expand-target`); the backdrop or Escape collapses it. The exposed `panel`,
 * `header`, and `body` parts let a host restyle the shell (e.g. a hover accent).
 */
@customElement('mp-panel')
export class MpPanel extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .panel {
      display: flex;
      flex-direction: column;
      min-height: 0;
      border: 1px solid var(--gc-border);
      border-radius: var(--gc-radius);
      background: var(--gc-panel, var(--gc-surface));
      overflow: hidden;
      transition:
        border-color 0.14s ease,
        box-shadow 0.14s ease;
    }

    .phead {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex: none;
      min-height: 40px;
      padding: 0 0.85rem;
      background: var(--gc-panel-header, var(--gc-surface-2));
      border-bottom: 1px solid var(--gc-border);
    }
    :host([no-header]) .phead {
      display: none;
    }
    .ptitle {
      margin: 0;
      font-family: var(--gc-mono);
      font-size: var(--wa-font-size-xs);
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--gc-muted);
      white-space: nowrap;
    }
    .spring {
      flex: 1;
      min-width: 0;
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .iconbtn {
      display: grid;
      place-items: center;
      width: 1.75rem;
      height: 1.75rem;
      flex: none;
      padding: 0;
      /* Outdent so the glyph optically aligns with the header inset rather than
         sitting a full button-width inside it. */
      margin-inline-end: -0.4rem;
      color: var(--gc-muted);
      background: transparent;
      border: 1px solid transparent;
      border-radius: var(--gc-radius-s);
      cursor: pointer;
    }
    .iconbtn:hover {
      color: var(--gc-accent);
      background: var(--gc-hover);
    }
    .iconbtn:focus-visible {
      outline: 2px solid var(--gc-accent);
      outline-offset: 1px;
    }
    .ico {
      width: 15px;
      height: 15px;
    }

    .pbody {
      background: var(--gc-panel-body, transparent);
      min-height: 0;
    }
    .pbody.padded {
      padding: 0.8rem 0.85rem;
    }
    /* Only fill when floating: in flow the body keeps its body-height. */
    :host([expanded]) .pbody {
      flex: 1;
    }

    /* ---- Expanded (detached, floating over the shell body) ---- */
    /* The fill region (--mp-fx-*) is published by syncRect() while expanded.
       Only these [expanded]/backdrop rules read it, so collapsing drops the
       geometry with nothing to clean up. --mp-fx-inset is the floating margin. */
    .backdrop {
      position: fixed;
      top: var(--mp-fx-top);
      left: var(--mp-fx-left);
      width: var(--mp-fx-width);
      height: var(--mp-fx-height);
      z-index: 40;
      background: color-mix(in srgb, var(--gc-bg) 55%, transparent);
      backdrop-filter: blur(3px) saturate(120%);
      -webkit-backdrop-filter: blur(3px) saturate(120%);
      animation: mp-panel-fade 0.16s ease both;
    }
    :host([expanded]) .panel {
      --mp-fx-inset: 14px;
      position: fixed;
      top: calc(var(--mp-fx-top) + var(--mp-fx-inset));
      left: calc(var(--mp-fx-left) + var(--mp-fx-inset));
      width: calc(var(--mp-fx-width) - 2 * var(--mp-fx-inset));
      height: calc(var(--mp-fx-height) - 2 * var(--mp-fx-inset));
      z-index: 41;
      /* Solid base so the dimmed body never bleeds through a transparent knob. */
      background: var(--gc-bg);
      box-shadow: var(--gc-shadow);
      animation: mp-panel-in 0.16s ease both;
    }
    :host([expanded]) .panel > .pbody {
      overflow: auto;
    }
    @keyframes mp-panel-fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes mp-panel-in {
      from {
        opacity: 0.4;
        transform: scale(0.99);
      }
      to {
        opacity: 1;
        transform: none;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .backdrop,
      :host([expanded]) .panel {
        animation: none;
      }
    }
  `;

  /** Simple title text; ignored when the `header` slot is filled. */
  @property() heading = '';
  /** Pad the body (forms, prose). Row lists and charts stay flush. */
  @property({ type: Boolean }) padded = false;
  /** Pin the body height (e.g. "440px") so a chart/table fills it. */
  @property({ attribute: 'body-height' }) bodyHeight = '';
  /** Show the maximize control and allow detaching to full body. */
  @property({ type: Boolean, reflect: true }) expandable = false;
  /** CSS selector for the expand region; defaults to the app-shell body. */
  @property({ attribute: 'expand-target' }) expandTarget = '';
  /** Whether the panel is currently floating over the body. */
  @property({ type: Boolean, reflect: true }) expanded = false;

  @state() private hasHeaderSlot = false;
  @state() private hasActionsSlot = false;

  private placeholderH = 0;
  private ro?: ResizeObserver;
  private onWinChange = () => this.syncRect();
  private onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this.collapse();
    }
  };

  protected willUpdate(_changed: PropertyValues) {
    const showHeader = !!this.heading || this.expandable || this.hasHeaderSlot || this.hasActionsSlot;
    this.toggleAttribute('no-header', !showHeader);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.expanded) {
      this.teardownExpand();
    }
  }

  private onHeaderSlot(e: Event) {
    this.hasHeaderSlot = (e.target as HTMLSlotElement).assignedNodes().length > 0;
  }

  private onActionsSlot(e: Event) {
    this.hasActionsSlot = (e.target as HTMLSlotElement).assignedNodes().length > 0;
  }

  private toggle() {
    if (this.expanded) {
      this.collapse();
    } else {
      void this.expand();
    }
  }

  private async expand() {
    // Reserve the flow height so the surrounding page doesn't jump when the
    // panel detaches into fixed positioning.
    this.placeholderH = this.offsetHeight;
    this.style.minHeight = `${this.placeholderH}px`;
    this.expanded = true;
    // Publish the geometry before the [expanded] rules first paint (avoids a
    // one-frame flash at the unset position), then again once layout settles.
    this.syncRect();
    document.documentElement.style.overflow = 'hidden';
    await this.updateComplete;
    this.syncRect();
    window.addEventListener('resize', this.onWinChange);
    window.addEventListener('scroll', this.onWinChange, true);
    window.addEventListener('keydown', this.onKey);
    const main = this.shellMain();
    if (main) {
      this.ro = new ResizeObserver(() => this.syncRect());
      this.ro.observe(main);
    }
    this.dispatchEvent(new CustomEvent('mp-panel-expand', { bubbles: true, composed: true }));
  }

  private collapse() {
    if (!this.expanded) {
      return;
    }
    this.teardownExpand();
    this.expanded = false;
    this.style.minHeight = '';
    this.dispatchEvent(new CustomEvent('mp-panel-collapse', { bubbles: true, composed: true }));
  }

  private teardownExpand() {
    document.documentElement.style.overflow = '';
    window.removeEventListener('resize', this.onWinChange);
    window.removeEventListener('scroll', this.onWinChange, true);
    window.removeEventListener('keydown', this.onKey);
    this.ro?.disconnect();
    this.ro = undefined;
  }

  /** The nearest app-shell's main content element (same shadow tree). */
  private shellMain(): HTMLElement | null {
    const shell = this.closest('mengplaz-app-shell');
    return (shell?.shadowRoot?.querySelector('main') as HTMLElement | null) ?? null;
  }

  /** Viewport rect of the region the expanded panel should fill. */
  private targetRect(): Rect {
    if (this.expandTarget) {
      const el = document.querySelector(this.expandTarget);
      if (el) {
        const r = el.getBoundingClientRect();
        return { top: r.top, left: r.left, width: r.width, height: r.height };
      }
    }
    const shell = this.closest('mengplaz-app-shell');
    const main = this.shellMain();
    if (main) {
      const m = main.getBoundingClientRect();
      const bar = shell?.shadowRoot?.querySelector('.topbar') as HTMLElement | null;
      const top = bar ? bar.getBoundingClientRect().bottom : Math.max(0, m.top);
      return { top, left: m.left, width: m.width, height: window.innerHeight - top };
    }
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  }

  private syncRect() {
    if (!this.expanded) {
      return;
    }
    const r = this.targetRect();
    // Publish the region as custom properties on the host; the [expanded] rules
    // read them (the panel insets itself via --mp-fx-inset). Because nothing
    // references them while collapsed, there is no leftover geometry to clear.
    this.style.setProperty('--mp-fx-top', `${r.top}px`);
    this.style.setProperty('--mp-fx-left', `${r.left}px`);
    this.style.setProperty('--mp-fx-width', `${r.width}px`);
    this.style.setProperty('--mp-fx-height', `${r.height}px`);
  }

  private renderIcon(inner: string) {
    return svg`<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      ${unsafeSVG(inner)}
    </svg>`;
  }

  private bodyStyle() {
    if (this.expanded || !this.bodyHeight) {
      return '';
    }
    return `height:${this.bodyHeight}`;
  }

  render() {
    const expandIcon = this.expanded
      ? this.renderIcon(
          '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/>',
        )
      : this.renderIcon(
          '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>',
        );
    return html`
      ${this.expanded ? html`<div class="backdrop" @click=${() => this.collapse()}></div>` : ''}
      <div class="panel" part="panel">
        <div class="phead" part="header">
          <slot name="header" @slotchange=${(e: Event) => this.onHeaderSlot(e)}
            ><h2 class="ptitle">${this.heading}</h2></slot
          >
          <span class="spring"></span>
          <div class="actions">
            <slot name="actions" @slotchange=${(e: Event) => this.onActionsSlot(e)}></slot>
            ${
              this.expandable
                ? html`<button
                    class="iconbtn"
                    @click=${() => this.toggle()}
                    title=${this.expanded ? 'Collapse' : 'Expand'}
                    aria-label=${this.expanded ? 'Collapse panel' : 'Expand panel'}
                    aria-pressed=${this.expanded ? 'true' : 'false'}
                  >
                    ${expandIcon}
                  </button>`
                : ''
            }
          </div>
        </div>
        <div class="pbody ${this.padded ? 'padded' : ''}" part="body" style=${this.bodyStyle()}>
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-panel': MpPanel;
  }
}
