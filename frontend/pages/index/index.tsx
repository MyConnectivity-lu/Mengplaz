import { handleGoToRecord } from '~/common/utils';
import './index.css';

export class IndexPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  render() {
    void this.getCities();
  }

  private async getCities() {
    const cities = await gc.api.getGoldenLocalities(null);
    this.replaceChildren(
      <div style={{ display: 'flex', flexFlow: 'column', height: '100%', gap: 'var(--spacing)' }}>
        <h3 className={'content-title'}> Index</h3>
        <sl-breadcrumb>
          <sl-breadcrumb-item>Cities</sl-breadcrumb-item>
        </sl-breadcrumb>
        <div className={'index-container'}>
          {cities.map((c) => (
            <sl-tag onclick={() => this.getStreets(c.id)}> {c.name} </sl-tag>
          ))}
        </div>
      </div>,
    );
  }
  private async getStreets(id: string) {
    const streets = await gc.api.getGoldenStreetsByLocalityId(id);
    this.replaceChildren(
      <div style={{ display: 'flex', flexFlow: 'column', height: '100%', gap: 'var(--spacing)' }}>
        <h3 className={'content-title'}> Index</h3>
        <sl-breadcrumb>
          <sl-breadcrumb-item onclick={() => this.getCities()}>Cities</sl-breadcrumb-item>
          <sl-breadcrumb-item>Streets</sl-breadcrumb-item>
        </sl-breadcrumb>
        <div className={'index-container'}>
          {streets.map((c) => (
            <sl-tag onclick={() => this.getStreetNumbers(c.id, id)}> {c.name} </sl-tag>
          ))}
        </div>
      </div>,
    );
  }
  private async getStreetNumbers(id: string, cityId: string) {
    const numbers = await gc.api.getGoldenNumbersByStreetId(id);
    this.replaceChildren(
      <div style={{ display: 'flex', flexFlow: 'column', height: '100%', gap: 'var(--spacing)' }}>
        <h3 className={'content-title'}> Index</h3>
        <sl-breadcrumb>
          <sl-breadcrumb-item onclick={() => this.getCities()}>Cities</sl-breadcrumb-item>
          <sl-breadcrumb-item onclick={() => this.getStreets(cityId)}>Streets</sl-breadcrumb-item>
          <sl-breadcrumb-item>Numbers</sl-breadcrumb-item>
        </sl-breadcrumb>
        <div className={'index-container'}>
          {numbers
            .sort((a, b) => Number(a.name) - Number(b.name))
            .map((c) => (
              <sl-tag
                onclick={() => {
                  handleGoToRecord(c.id);
                }}
              >
                {c.name}
              </sl-tag>
            ))}
        </div>
      </div>,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'index-page': IndexPage;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'index-page': GreyCat.Element<IndexPage>;
      }
    }
  }
}

if (!customElements.get('index-page')) {
  customElements.define('index-page', IndexPage);
}
