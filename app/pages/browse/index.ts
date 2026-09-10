import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/breadcrumb/breadcrumb.js';
import '@awesome.me/webawesome/dist/components/breadcrumb-item/breadcrumb-item.js';
import '@awesome.me/webawesome/dist/components/tag/tag.js';
import '@awesome.me/webawesome/dist/components/spinner/spinner.js';
import { initMode } from '~/lib/theme';
import { GcPage } from '~/lib/gc-page';
import { recordHref } from '~/lib/routing';
import '~/components/mengplaz-app-shell';

initMode();

/** Which rung of the locality -> street -> number drill-down is showing. */
type Level = 'cities' | 'streets' | 'numbers';

interface Entry {
  id: string;
  name: string;
}

/**
 * The address index: browse every golden address by drilling from locality to
 * street to house number. The last rung links straight to the record page.
 */
@customElement('mengplaz-browse-page')
export class MengplazBrowsePage extends GcPage {
  static styles = css`
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--gc-gap);
      height: 100%;
    }
    .entries {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
      align-content: flex-start;
    }
    .entries wa-tag {
      cursor: pointer;
    }
    .entries a {
      text-decoration: none;
    }
    wa-breadcrumb-item::part(label) {
      cursor: pointer;
    }
    .error {
      color: var(--gc-bad);
    }
    .empty {
      color: var(--gc-muted);
      font-size: var(--wa-font-size-s);
    }
  `;

  @state() private level: Level = 'cities';
  @state() private entries: Entry[] = [];
  @state() private cityName = '';
  @state() private cityId = '';
  @state() private streetName = '';
  @state() private busy = false;

  protected async onInit() {
    await this.showCities();
  }

  // Each of these fetches first and commits the level and the entries together.
  // Flipping the level before the data lands leaves the previous rung's entries
  // rendered under the new breadcrumb, so a click during that window drills into
  // the wrong thing.
  private async showCities() {
    const entries = await gc.api.getGoldenLocalities(null);
    this.entries = entries;
    this.level = 'cities';
    this.cityId = '';
    this.cityName = '';
    this.streetName = '';
  }

  private async showStreets(city: Entry) {
    const entries = await gc.api.getGoldenStreetsByLocalityId(city.id);
    this.entries = entries;
    this.level = 'streets';
    this.cityId = city.id;
    this.cityName = city.name;
    this.streetName = '';
  }

  private async showNumbers(street: Entry) {
    const numbers = await gc.api.getGoldenNumbersByStreetId(street.id);
    // House numbers are strings on the record but must order numerically.
    this.entries = [...numbers].sort((a, b) => Number(a.name) - Number(b.name));
    this.level = 'numbers';
    this.streetName = street.name;
  }

  private async back(level: Level) {
    this.loadError = '';
    this.busy = true;
    try {
      if (level === 'cities') {
        await this.showCities();
      } else if (level === 'streets' && this.cityId) {
        await this.showStreets({ id: this.cityId, name: this.cityName });
      }
    } catch (err) {
      this.loadError = err instanceof Error ? err.message : String(err);
    } finally {
      this.busy = false;
    }
  }

  private async open(entry: Entry) {
    this.loadError = '';
    this.busy = true;
    try {
      if (this.level === 'cities') {
        await this.showStreets(entry);
      } else if (this.level === 'streets') {
        await this.showNumbers(entry);
      }
    } catch (err) {
      this.loadError = err instanceof Error ? err.message : String(err);
    } finally {
      this.busy = false;
    }
  }

  private renderBreadcrumb() {
    return html`
      <wa-breadcrumb label="Address index">
        <wa-breadcrumb-item @click=${() => void this.back('cities')}>Cities</wa-breadcrumb-item>
        ${
          this.level !== 'cities'
            ? html`<wa-breadcrumb-item @click=${() => void this.back('streets')}>Streets</wa-breadcrumb-item>`
            : ''
        }
        ${this.level === 'numbers' ? html`<wa-breadcrumb-item>Numbers</wa-breadcrumb-item>` : ''}
      </wa-breadcrumb>
    `;
  }

  private renderEntries() {
    if (this.loading || this.busy) {
      return html`<wa-spinner></wa-spinner>`;
    }
    if (this.entries.length === 0) {
      return html`<p class="empty">Nothing to show here.</p>`;
    }
    // On the last rung an entry is a record, so it is a link rather than a
    // click handler: middle-click and copy-link work as they should.
    if (this.level === 'numbers') {
      return html`<div class="entries">
        ${this.entries.map((e) => html`<a href=${recordHref(e.id)}><wa-tag>${e.name}</wa-tag></a>`)}
      </div>`;
    }
    return html`<div class="entries">
      ${this.entries.map((e) => html`<wa-tag @click=${() => void this.open(e)}>${e.name}</wa-tag>`)}
    </div>`;
  }

  render() {
    const title = this.level === 'numbers' ? `${this.streetName}, ${this.cityName}` : this.cityName;
    return html`
      <mengplaz-app-shell page-title="Index">
        <div class="stack">
          ${this.renderBreadcrumb()} ${title ? html`<p class="empty">${title}</p>` : ''}
          ${this.loadError ? html`<p class="error">${this.loadError}</p>` : ''} ${this.renderEntries()}
        </div>
      </mengplaz-app-shell>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-browse-page': MengplazBrowsePage;
  }
}
