import '../../pages/search/search';
import '../../pages/map/map';
import '../../pages/reconcile/reconcile';
import '../../pages/index/index';
import '../../pages/quality-history/quality-history';
import '../../components/mengplaz-comparator/mengplaz-comparator';
import { sl } from '@greycat/web';
import './mengplaz-layout.css';
import { applyTheme, getQueryParam, setupTheme } from '../../common/utils';

export class MengplazLayout extends HTMLElement {
  private main: HTMLElement;
  private user?: gc.runtime.User;
  private runtimeInfo?: gc.RuntimeInfo;

  constructor() {
    super();
    this.main = (<main></main>) as HTMLElement;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

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
        <li>
          <sl-button id="index" variant="text" className="sidebar-link">
            <sl-icon slot="prefix" name="list"></sl-icon>
            Index
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
        <li>
          <sl-button id="quality-history" variant="text" className="sidebar-link">
            <sl-icon slot="prefix" name="bar-chart-line"></sl-icon>
            Quality Dashboard
          </sl-button>
        </li>
      </ul>
    ) as HTMLElement;
    menu.addEventListener('click', (e) => {
      if (e.target instanceof sl.SlButton) {
        if (e.target.id.length > 0) {
          menu.querySelectorAll('sl-button').forEach((e) => e.classList.remove('active'));
          this.changePage(e.target.id);
          e.target.classList.add('active');
        }
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
    if (id !== 'reconcile') {
      url.searchParams.delete('source');
      url.searchParams.delete('tab');
      url.searchParams.delete('sourceId');
    }
    window.history.pushState(null, '', url);
  }

  async render() {
    const theme = setupTheme();
    this._navigationHandler();
    const currentPage = getQueryParam('page') ?? 'map';
    this.changePage(currentPage);
    this.user = await gc.User.me();
    this.runtimeInfo = await gc.appInfo();

    let rootLayout = (
      <>
        <header className="mobile-header">
          <h1 className={['mobile-title', 'logo']}>MengPlaz</h1>
          <sl-icon-button name="list" label="Open Menu" className="mobile-menu-icon" onclick={() => this.toggleMobileMenu()}></sl-icon-button>
        </header>
        <div id="app-container">
          <nav id="sidebar">
            <div className="sidebar-content">
              <div className="desktop-title">
                <h2 className={['desktop-title-text', 'logo']}>MengPlaz</h2>
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
                &nbsp;—
                <span>
                  Version:{' '}
                  <a href="https://gitlab.com/myconnectivity/mengplaz/-/wikis/Change-Log" target="_blank">
                    {this.runtimeInfo.program_version?.slice(0, this.runtimeInfo.program_version.indexOf('-'))}
                  </a>
                </span>
                &nbsp;—{' '}
                <a href="./api::openapi" target="_blank">
                  openapi
                </a>{' '}
                &nbsp;—{' '}
                <a href={`https://petstore.swagger.io/?url=${window.origin}/api::openapi`} target="_blank">
                  Swagger
                </a>
                {/* https://petstore.swagger.io/?url=http://localhost:8080/api::openapi */}
              </p>
            </footer>
          </div>
        </div>
      </>
    );
    this.replaceChildren(rootLayout);
  }

  private _pageHandler() {
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
      case 'index':
        this.main.replaceChildren(<index-page />);
        break;
      case 'quality-history':
        this.main.replaceChildren(<quality-history-page />);
        break;
      default:
        this.main.replaceChildren(<map-page />);
    }
  }

  private _navigationHandler() {
    const { pushState, replaceState } = history;
    history.pushState = (...args) => {
      pushState.apply(history, args);
      this._pageHandler();
    };
    history.replaceState = function (...args) {
      replaceState.apply(this, args);
    };

    addEventListener('popstate', () => {
      this._pageHandler();
    });
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
