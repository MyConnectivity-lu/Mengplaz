import '../../pages/search/search';
import '../../pages/landing/landing';
import '../../pages/map/map';
import '../../pages/reconcile/reconcile';
import '../../components/mengplaz-comparator/mengplaz-comparator';
import { sl } from '@greycat/web';
import './mengplaz-layout.css';
import { applyTheme, getQueryParam, setupTheme } from '~/common/utils';

export class MengplazLayout extends HTMLElement {
  private main: HTMLElement;
  private user?: gc.runtime.User;


  constructor() {
    super();
    this.main = (<main></main>) as HTMLElement;
  }

  connectedCallback() {
    this.render();
    document.addEventListener('mengplaz-notify', (e: any) => { this.notify(e) });
  }

  disconnectedCallback() { }

  private currentTheme() {
    return document.documentElement.classList.contains('sl-theme-dark') ? 'dark' : 'light';
  }

  private toggleTheme() {
    if (this.currentTheme() === 'dark') {
      applyTheme('light');
    } else {
      applyTheme('dark');
    }
  }

  private toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar?.classList.contains('mobile-menu-open');
    if (isOpen) {
      sidebar?.classList.remove('mobile-menu-open');
    } else {
      sidebar?.classList.add('mobile-menu-open');
    }
  }

  private createMenu(active: string) {
    const menu = (
      <ul className="nav-list">
        <li>
          <sl-button id="map" variant="text" className="sidebar-link">
            <sl-icon slot="prefix" name="geo-alt-fill"></sl-icon>
            Map
          </sl-button>
        </li>
        <li>
          <sl-button id="search" variant="text" className="sidebar-link">
            <sl-icon slot="prefix" name="search"></sl-icon>
            Search
          </sl-button>
        </li>
        {gc.$.default.hasPermission('admin') ? (
          <li>
            <sl-button id="reconcile" variant="text" className="sidebar-link">
              <sl-icon slot="prefix" name="arrow-left-right"></sl-icon>
              Reconcile
            </sl-button>
          </li>
        ) : (
          ''
        )}
      </ul>
    ) as HTMLElement;
    menu.addEventListener('click', (e) => {
      if (e.target instanceof sl.SlButton) {
        menu.querySelectorAll('sl-button').forEach((e) => e.classList.remove('active'));
        this.changePage(e.target.id);
        e.target.classList.add('active');
      }
    });
    menu.querySelector(`#${active}`)?.classList.add('active');
    return menu;
  }

  private changePage(id: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('page', id);
    if (id !== 'record') {
      url.searchParams.delete('guid');
    }
    window.history.pushState(null, '', url);
  }


  private escapeHtml(html: any) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }
  private notify(e: CustomEvent) {
    console.log("received notify request", e);
    const details = e.detail;
    const alert = Object.assign(document.createElement('sl-alert'), {
      variant: details.variant ?? 'success',
      closable: details.closeable ?? true,
      duration: details.duration,
      innerHTML: `
          <sl-icon name="${details.icon ?? 'info-circle'}" slot="icon"></sl-icon>
          ${this.escapeHtml(details.message)}
        `
    });
    document.body.append(alert);
    return alert.toast();
  }

  async render() {
    const theme = setupTheme();
    this._pageHandler();
    const currentPage = getQueryParam('page') ?? 'map';
    this.changePage(currentPage);
    this.user = await gc.User.me();
    let rootLayout = (
      <>
        <header className="mobile-header">
          <h1 className="mobile-title">MengPlaz</h1>
          <sl-icon-button name="list" label="Open Menu" className="mobile-menu-icon" onclick={() => this.toggleMobileMenu()}></sl-icon-button>
        </header>
        <div id="app-container">
          <nav id="sidebar">
            <div className="sidebar-content">
              <div className="desktop-title">
                <h2 className="desktop-title-text">MengPlaz</h2>
              </div>

              {this.createMenu(currentPage)}

              <div className="sidebar-footer">
                <div className="theme-switch-container">
                  <div className="theme-label-group">
                    <span className="theme-label">Dark Mode</span>
                  </div>
                  <sl-switch id="theme-switch" size="medium" checked={theme === 'dark'} onsl-change={() => this.toggleTheme()}></sl-switch>
                </div>

                {this.user?.name === 'public' ? (
                  <a href="/login.html" className="login-button">
                    <sl-icon name="box-arrow-in-right"></sl-icon> Login
                  </a>
                ) : (
                  <a
                    className="login-button"
                    onclick={async () => {
                      await gc.sdk.logout();
                      window.location.replace('/');
                    }}
                  >
                    <sl-icon name="box-arrow-right"></sl-icon> Logout
                  </a>
                )}
              </div>
            </div>
          </nav>

          <div id="backdrop" onclick={() => this.toggleMobileMenu()}></div>

          <div id="main-content-wrapper">
            {this.main}

            <footer>
              <p>
                &copy; {new Date().getFullYear()}&nbsp;
                <a href="https://myconnectivity.lu/" target="_blank">
                  MyConnectivity G.I.E.
                </a>
                &nbsp;— Powered by&nbsp;
                <a href="https://greycat.io" target="_blank">
                  GreyCat
                </a>
              </p>
              {/* <p>
                <sl-icon name="linkedin" className="social-icon" style={{ paddingRight: 'var(--spacing)' }}></sl-icon>
                <a href="https://www.linkedin.com/company/myconnectivity" target="_blank">
                  LinkedIn
                </a>
              </p> */}
            </footer>
          </div>
        </div>
      </>
    );
    this.replaceChildren(rootLayout);
  }

  private _pageHandler() {
    const { pushState, replaceState } = history;
    history.pushState = (...args) => {
      pushState.apply(history, args);
      const id = getQueryParam('page');
      switch (id) {
        case 'search':
          this.main.replaceChildren(<search-page />);
          break;
        case 'map':
          this.main.replaceChildren(<map-page />);
          break;
        case 'reconcile':
          this.main.replaceChildren(<reconcile-page />);
          break;
        case 'record':
          this.main.replaceChildren(<mengplaz-comparator />);
          break;
        default:
          this.main.replaceChildren(<map-page />);
      }
    };
    history.replaceState = function (...args) {
      replaceState.apply(this, args);
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-layout': MengplazLayout;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'mengplaz-layout': GreyCat.Element<MengplazLayout>;
      }
    }
  }
}

if (!customElements.get('mengplaz-layout')) {
  customElements.define('mengplaz-layout', MengplazLayout);
}
