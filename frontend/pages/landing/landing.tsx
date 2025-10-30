export class LandingPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  render() {
    this.innerHTML = '';
    this.appendChild(<span>Landing</span>);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'landing-page': LandingPage;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'landing-page': GreyCat.Element<LandingPage>;
      }
    }
  }
}

if (!customElements.get('landing-page')) {
  customElements.define('landing-page', LandingPage);
}
