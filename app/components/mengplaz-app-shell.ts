import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/tooltip/tooltip.js';
import { ICONS } from '~/lib/icons';
import { PAGES, type PageLink } from '~/lib/pages';
import { currentMode, toggleMode } from '~/lib/theme';
import { appInfo, currentUser, hasPermission, isAnonymous, logout, ready } from '~/lib/gc';

const COLLAPSED_KEY = 'mengplaz-nav-collapsed';

/**
 * The chrome every page wraps its body in: a responsive left nav, a blurred top
 * bar with the page title and the auth control, and the site footer.
 *
 *   <mengplaz-app-shell page-title="Search">...page body...</mengplaz-app-shell>
 *
 * The nav adapts across three tiers, keyed to the 1024px / 640px boundaries:
 * - large (>=1024px): docked sidebar with labels; the chevron collapses it to a
 *   60px icon rail (persisted).
 * - medium (640-1023px): docked icon rail with hover tooltips; the top-bar
 *   hamburger opens a labelled overlay drawer.
 * - small (<640px): no docked rail; the drawer is the only menu.
 *
 * It is chrome only. Auth lives in the gate (`~/lib/gc`) and on /login.html;
 * anonymous is a supported state, so the auth control is a Log in link as often
 * as it is a Log out button. `flush` drops the body padding for the map.
 */
@customElement('mengplaz-app-shell')
export class MengplazAppShell extends LitElement {
  static styles = css`
    :host {
      --top-height: 52px;
      --rail-w: 216px;
      --rail-collapsed-w: 60px;
      --drawer-w: 248px;

      display: grid;
      grid-template-columns: var(--rail-w) 1fr;
      min-height: 100vh;
      color: var(--gc-text);
    }
    :host([collapsed]) {
      grid-template-columns: var(--rail-collapsed-w) 1fr;
    }
    /* Medium: the rail is forced to icons regardless of the collapse pref. */
    @media (max-width: 1023px) {
      :host,
      :host([collapsed]) {
        grid-template-columns: var(--rail-collapsed-w) 1fr;
      }
    }
    /* Small: no docked rail; the drawer is the only menu. */
    @media (max-width: 639px) {
      :host,
      :host([collapsed]) {
        grid-template-columns: 1fr;
      }
    }

    /* ---- Shared nav surface (rail + drawer) ---- */
    .nav-head,
    .drawer-head {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.15rem 0.3rem;
      min-height: var(--top-height);
    }
    .brand {
      display: flex;
      flex-direction: column;
      gap: 0.05rem;
      min-width: 0;
      flex: 1;
    }
    .brand b {
      font-family: var(--gc-display);
      font-size: var(--wa-font-size-m);
      font-weight: 700;
      letter-spacing: 0.01em;
      white-space: nowrap;
    }
    .dot {
      color: var(--gc-accent);
    }
    .brand-mini {
      display: none;
      align-items: baseline;
      font-family: var(--gc-display);
      font-size: var(--wa-font-size-m);
      font-weight: 700;
    }
    .icon-btn {
      display: grid;
      place-items: center;
      width: 1.9rem;
      height: 1.9rem;
      flex: none;
      padding: 0;
      color: var(--gc-muted);
      background: transparent;
      border: 1px solid transparent;
      border-radius: var(--gc-radius-s);
      cursor: pointer;
    }
    .icon-btn:hover {
      color: var(--gc-text);
      background: var(--gc-hover);
    }
    .links {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
      flex: 1;
      overflow-y: auto;
    }
    a.item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.4rem 0.5rem;
      border-radius: var(--gc-radius-s);
      color: var(--gc-muted);
      text-decoration: none;
      font-size: var(--wa-font-size-s);
      white-space: nowrap;
    }
    a.item:hover {
      background: var(--gc-hover);
      color: var(--gc-text);
    }
    a.item[aria-current='page'] {
      background: var(--gc-accent-soft);
      color: var(--gc-accent);
      font-weight: 600;
      box-shadow: inset 0 0 0 1px var(--gc-accent-glow);
    }
    .ico {
      width: 18px;
      height: 18px;
      flex: none;
    }
    .label {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .theme-toggle {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font: inherit;
      font-size: var(--wa-font-size-s);
      color: var(--gc-muted);
      background: transparent;
      border: 1px solid var(--gc-border);
      border-radius: var(--gc-radius-s);
      padding: 0.4rem 0.5rem;
      cursor: pointer;
    }
    .theme-toggle:hover {
      color: var(--gc-text);
      border-color: var(--gc-accent);
    }

    /* ---- Docked rail ---- */
    .rail {
      border-right: 1px solid var(--gc-border);
      background: var(--gc-surface);
      display: flex;
      flex-direction: column;
      padding: 0.6rem 0.5rem;
      gap: 0.6rem;
      position: sticky;
      top: 0;
      height: 100vh;
      box-sizing: border-box;
      overflow: hidden;
    }
    .rail.narrow .brand,
    .rail.narrow .label {
      display: none;
    }
    .rail.narrow .nav-head,
    .rail.narrow a.item,
    .rail.narrow .theme-toggle {
      justify-content: center;
    }
    /* Medium only: no in-place expand, so drop the chevron and show the mark. */
    @media (max-width: 1023px) {
      .rail .nav-toggle {
        display: none;
      }
      .rail .brand-mini {
        display: flex;
        justify-content: center;
        flex: 1;
      }
    }
    @media (max-width: 639px) {
      .rail {
        display: none;
      }
    }

    /* ---- Overlay drawer (medium + small) ---- */
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 30;
      background: rgba(0, 0, 0, 0.55);
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.22s ease,
        visibility 0.22s ease;
    }
    :host([nav-open]) .backdrop {
      opacity: 1;
      visibility: visible;
    }
    .drawer {
      position: fixed;
      inset: 0 auto 0 0;
      z-index: 40;
      width: var(--drawer-w);
      max-width: 82vw;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      padding: 0.6rem 0.6rem 0.8rem;
      background: var(--gc-surface);
      border-right: 1px solid var(--gc-border);
      box-shadow: var(--gc-shadow);
      transform: translateX(-100%);
      transition: transform 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    }
    :host([nav-open]) .drawer {
      transform: none;
    }
    .drawer-head {
      border-bottom: 1px solid var(--gc-hair);
      padding-bottom: 0.4rem;
    }
    @media (min-width: 1024px) {
      .backdrop,
      .drawer {
        display: none;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .backdrop,
      .drawer {
        transition: none;
      }
    }

    /* ---- Main ---- */
    main {
      min-width: 0;
      display: flex;
      flex-direction: column;
    }
    .topbar {
      position: sticky;
      top: 0;
      z-index: 5;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      min-height: var(--top-height);
      padding: 0 1rem;
      border-bottom: 1px solid var(--gc-border);
      background: color-mix(in srgb, var(--gc-surface) 70%, transparent);
      backdrop-filter: blur(10px) saturate(140%);
      -webkit-backdrop-filter: blur(10px) saturate(140%);
    }
    .nav-toggle-top {
      display: none;
    }
    @media (max-width: 1023px) {
      .nav-toggle-top {
        display: grid;
      }
    }
    .topbar h1 {
      margin: 0;
      font-family: var(--gc-display);
      font-size: var(--wa-font-size-l);
      font-weight: 700;
      letter-spacing: -0.01em;
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .auth {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .user {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      font-size: var(--wa-font-size-s);
      color: var(--gc-text);
    }
    .avatar {
      display: grid;
      place-items: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background: var(--gc-accent-soft);
      color: var(--gc-accent);
      font-size: var(--wa-font-size-xs);
      font-weight: 700;
      text-transform: uppercase;
    }
    .body {
      padding: var(--gc-pad-page);
      min-width: 0;
      flex: 1;
    }
    /* The map wants an edge-to-edge canvas with no page gutter. The footer
       stays: it carried the version and API links on every page before the
       migration, and still does. */
    :host([flush]) .body {
      padding: 0;
      display: flex;
      min-height: 0;
    }
    @media (max-width: 639px) {
      .topbar {
        gap: 0.4rem;
        padding: 0 0.65rem;
      }
      .topbar h1 {
        font-size: var(--wa-font-size-m);
      }
      .user .uname {
        display: none;
      }
      .body {
        padding: 0.6rem 0.7rem 0.9rem;
      }
    }

    /* ---- Footer ---- */
    footer {
      border-top: 1px solid var(--gc-hair);
      padding: 0.7rem 1rem;
      color: var(--gc-muted);
      font-size: var(--wa-font-size-xs);
    }
    /* Flex-wrap rather than one long line: at narrow widths a non-breaking
       run of credits would push the page into horizontal scroll. */
    footer p {
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.3rem 0.45rem;
    }
    footer .sep {
      color: var(--gc-faint);
    }
    footer a {
      color: var(--gc-muted);
      text-decoration: none;
      border-bottom: 1px solid var(--gc-border);
    }
    footer a:hover {
      color: var(--gc-accent);
      border-bottom-color: var(--gc-accent);
    }

    /* ---- Cross-document view transition ---- */
    /* Naming the body lifts it out of the root snapshot, so the page content is
       the only thing that animates. The chrome around it is identical on both
       sides of a navigation, which makes the root's own cross-fade invisible -
       except for the page title and the active nav item, which is exactly the
       part worth seeing move. The opt-in itself lives in theme.css. */
    .body {
      view-transition-name: mp-body;
    }
  `;

  @property({ attribute: 'page-title' }) pageTitle = '';
  @property() brand = 'MengPlaz';
  @property({ attribute: false }) navItems: PageLink[] = PAGES;
  /** Drop the body padding and the footer - for a full-bleed page like the map. */
  @property({ type: Boolean, reflect: true }) flush = false;
  /** Desktop collapse pref: icon rail vs full sidebar. Persisted. */
  @property({ type: Boolean, reflect: true }) collapsed = false;
  /** Overlay drawer open (medium + small only). Ephemeral. */
  @property({ type: Boolean, reflect: true, attribute: 'nav-open' }) navOpen = false;

  @state() private sessionReady = false;
  @state() private version = '';

  // Same boundaries as the grid media queries above, so the CSS and the render
  // stay in lockstep.
  private mqDesktop = window.matchMedia('(min-width: 1024px)');
  private mqMobile = window.matchMedia('(max-width: 639px)');
  @state() private isDesktop = this.mqDesktop.matches;

  /** Element to restore focus to when the drawer closes (the hamburger). */
  private drawerTrigger: HTMLElement | null = null;

  override async connectedCallback() {
    super.connectedCallback();
    this.collapsed = localStorage.getItem(COLLAPSED_KEY) === '1';
    this.mqDesktop.addEventListener('change', this.onMedia);
    this.mqMobile.addEventListener('change', this.onMedia);
    window.addEventListener('keydown', this.onKeydown);
    try {
      await ready();
    } catch {
      // The chrome still renders for an unreachable backend; the page body
      // surfaces the error through GcPage's loadError.
    }
    const raw = appInfo()?.program_version ?? '';
    this.version = raw.includes('-') ? raw.slice(0, raw.indexOf('-')) : raw;
    this.sessionReady = true;
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.mqDesktop.removeEventListener('change', this.onMedia);
    this.mqMobile.removeEventListener('change', this.onMedia);
    window.removeEventListener('keydown', this.onKeydown);
    document.body.style.overflow = '';
  }

  private onMedia = () => {
    this.isDesktop = this.mqDesktop.matches;
    // Growing back to the docked sidebar leaves no drawer to be open.
    if (this.isDesktop && this.navOpen) {
      this.closeDrawer();
    }
  };

  private onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.navOpen) {
      this.closeDrawer();
    }
  };

  protected override updated(changed: Map<string, unknown>) {
    if (!changed.has('navOpen')) {
      return;
    }
    // Lock background scroll while the drawer covers the viewport, and move
    // focus into the drawer on open / back to the trigger on close.
    document.body.style.overflow = this.navOpen ? 'hidden' : '';
    if (this.navOpen) {
      this.renderRoot.querySelector<HTMLElement>('.drawer a.item')?.focus();
    } else {
      this.drawerTrigger?.focus();
      this.drawerTrigger = null;
    }
  }

  /** The docked rail is icon-only below large, and on the desktop collapse pref. */
  private get railNarrow() {
    return !this.isDesktop || this.collapsed;
  }

  /** Nav entries the current session may see. */
  private get visibleItems(): PageLink[] {
    // The rail draws before the gate resolves, and `hasPermission` reaches into
    // bindings that `gc.sdk.init()` has not built yet - so a restricted entry
    // stays out until there is a session to ask about it.
    if (!this.sessionReady) {
      return this.navItems.filter((p) => !p.requiredPermission);
    }
    return this.navItems.filter((p) => !p.requiredPermission || hasPermission(p.requiredPermission));
  }

  private toggleCollapse() {
    this.collapsed = !this.collapsed;
    localStorage.setItem(COLLAPSED_KEY, this.collapsed ? '1' : '0');
  }

  private openDrawer(e: Event) {
    this.drawerTrigger = e.currentTarget as HTMLElement;
    this.navOpen = true;
  }

  private closeDrawer() {
    this.navOpen = false;
  }

  private onToggleTheme() {
    toggleMode();
    this.requestUpdate();
  }

  private renderIcon(inner: string, slot = '') {
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

  /** Link list, shared by the rail and the drawer. `idp` keeps the ids unique
      across the two so the rail's tooltips never point at the drawer's copy. */
  private renderLinks(idp: 'nav' | 'dnav', tooltips: boolean) {
    const here = location.pathname;
    const items = this.visibleItems;
    return html`
      <div class="links">
        ${
          tooltips
            ? items.map(
                (p) => html`<wa-tooltip for="${idp}-${p.label}" placement="right" hoist>${p.label}</wa-tooltip>`,
              )
            : nothing
        }
        ${items.map(
          (p) => html`<a
            id="${idp}-${p.label}"
            class="item"
            href=${p.href}
            aria-current=${here === p.href ? 'page' : 'false'}
            @click=${() => this.closeDrawer()}
          >
            ${this.renderIcon(ICONS[p.icon])}<span class="label">${p.label}</span>
          </a>`,
        )}
      </div>
    `;
  }

  private renderThemeToggle() {
    const dark = currentMode() === 'dark';
    return html`
      <button class="theme-toggle" @click=${() => this.onToggleTheme()} title="Toggle theme">
        ${this.renderIcon(dark ? ICONS.sun : ICONS.moon)}
        <span class="label">${dark ? 'Light theme' : 'Dark theme'}</span>
      </button>
    `;
  }

  private renderRail() {
    return html`
      <nav class="rail ${this.railNarrow ? 'narrow' : ''}" aria-label="Primary">
        <div class="nav-head">
          <div class="brand">
            <b>${this.brand}<span class="dot">.</span></b>
          </div>
          <div class="brand-mini" aria-hidden="true">${this.brand.slice(0, 1)}<span class="dot">.</span></div>
          <button
            class="icon-btn nav-toggle"
            @click=${() => this.toggleCollapse()}
            title=${this.collapsed ? 'Expand menu' : 'Collapse menu'}
            aria-label=${this.collapsed ? 'Expand menu' : 'Collapse menu'}
          >
            ${this.renderIcon(this.collapsed ? ICONS.chevronRight : ICONS.chevronLeft)}
          </button>
        </div>
        ${this.renderLinks('nav', this.railNarrow)} ${this.renderThemeToggle()}
      </nav>
    `;
  }

  private renderDrawer() {
    return html`
      <div class="backdrop" @click=${() => this.closeDrawer()} aria-hidden="true"></div>
      <aside id="mengplaz-drawer" class="drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div class="drawer-head">
          <div class="brand">
            <b>${this.brand}<span class="dot">.</span></b>
          </div>
          <button class="icon-btn" @click=${() => this.closeDrawer()} title="Close menu" aria-label="Close menu">
            ${this.renderIcon(ICONS.close)}
          </button>
        </div>
        ${this.renderLinks('dnav', false)} ${this.renderThemeToggle()}
      </aside>
    `;
  }

  /** Anonymous is a first-class state here, unlike an auth-gated app: a visitor
      who has not signed in gets a Log in link, not a user chip. */
  private renderAuth() {
    if (!this.sessionReady) {
      return nothing;
    }
    if (isAnonymous()) {
      return html`<wa-button size="s" appearance="outlined" href="/login.html">
        ${this.renderIcon(ICONS.signIn, 'start')}<span class="label">Log in</span>
      </wa-button>`;
    }
    const name = currentUser()?.name ?? '';
    return html`
      <span class="user">
        <span class="avatar">${name.slice(0, 1)}</span>
        <span class="uname">${name}</span>
      </span>
      <wa-button size="s" appearance="outlined" @click=${() => void logout()}>Log out</wa-button>
    `;
  }

  private renderTopBar() {
    return html`
      <div class="topbar">
        <button
          class="icon-btn nav-toggle-top"
          @click=${(e: Event) => this.openDrawer(e)}
          title="Open menu"
          aria-label="Open menu"
          aria-controls="mengplaz-drawer"
          aria-expanded=${this.navOpen ? 'true' : 'false'}
        >
          ${this.renderIcon(ICONS.menu)}
        </button>
        <h1>${this.pageTitle}</h1>
        <slot name="topbar-actions"></slot>
        <div class="auth">${this.renderAuth()}</div>
      </div>
    `;
  }

  private renderFooter() {
    const swagger = `https://petstore.swagger.io/?url=${window.origin}/api::openapi`;
    return html`
      <footer>
        <p>
          <span>&copy; ${new Date().getFullYear()}</span>
          <a href="https://myconnectivity.lu/" target="_blank" rel="noopener">MyConnectivity G.I.E.</a>
          <span class="sep">—</span>
          <span>Powered by <a href="https://greycat.io" target="_blank" rel="noopener">GreyCat</a></span>
          ${
            this.version
              ? html`<span class="sep">—</span>
                  <span
                    >Version:
                    <a
                      href="https://gitlab.com/myconnectivity/mengplaz/-/wikis/Change-Log"
                      target="_blank"
                      rel="noopener"
                      >${this.version}</a
                    ></span
                  >`
              : nothing
          }
          <span class="sep">—</span>
          <a href="./api::openapi" target="_blank" rel="noopener">openapi</a>
          <span class="sep">—</span>
          <a href=${swagger} target="_blank" rel="noopener">Swagger</a>
        </p>
      </footer>
    `;
  }

  override render() {
    return html`
      ${this.renderDrawer()} ${this.renderRail()}
      <main>
        ${this.renderTopBar()}
        <div class="body"><slot></slot></div>
        ${this.renderFooter()}
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-app-shell': MengplazAppShell;
  }
}
