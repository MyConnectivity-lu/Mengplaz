import { sl } from '@greycat/web';
import './mengplaz-search-dialog.css';

export interface SearchSelectEvent {
  goldenRecord: gc.mengplaz.POIRecordRef;
}

type DialogState = 'search' | 'pois';

export class MengplazSearchDialog extends HTMLElement {
  private dialog: sl.SlDialog;
  private state: DialogState = 'search';
  private searchInput: sl.SlInput;
  private resultsContainer: HTMLElement;
  private backButton: HTMLElement;

  private streets: gc.mengplaz.StreetRecordRef[] = [];
  private selectedStreet: gc.mengplaz.StreetRecordRef | null = null;
  private pois: gc.mengplaz.POIRecordRef[] = [];
  private isLoading = false;

  constructor() {
    super();
    this.dialog = (<sl-dialog label="Search for Golden Record" style={{ '--width': '600px' }} />) as sl.SlDialog;
    this.searchInput = (<sl-input placeholder="Type street name..." size="medium" clearable />) as sl.SlInput;
    this.resultsContainer = (<div className="search-results"></div>) as HTMLElement;
    this.backButton = (
      <sl-button variant="text" size="small" onclick={() => this.goBack()}>
        <sl-icon slot="prefix" name="arrow-left"></sl-icon>
        Back to results
      </sl-button>
    ) as HTMLElement;
  }

  connectedCallback() {
    this.render();

    this.searchInput.addEventListener('sl-clear', () => {
      this.streets = [];
      this.renderResults();
    });

    this.searchInput.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        this.performSearch();
      }
    });
  }

  show(): Promise<gc.mengplaz.POIRecordRef | undefined> {
    this.reset();
    this.dialog.show();
    return new Promise((resolve) => {
      const handleHide = () => {
        this.dialog.removeEventListener('sl-after-hide', handleHide);
        resolve(undefined);
      };
      this.dialog.addEventListener('sl-after-hide', handleHide);
    });
  }

  private reset() {
    this.state = 'search';
    this.streets = [];
    this.selectedStreet = null;
    this.pois = [];
    this.searchInput.value = '';
    this.render();
  }

  private async performSearch() {
    const query = this.searchInput.value.trim();
    if (!query) return;

    this.isLoading = true;
    this.renderResults();

    try {
      this.streets = await gc.api.searchStreet(query);
    } catch (_e) {
      this.streets = [];
    }

    this.isLoading = false;
    this.renderResults();
  }

  private async selectStreet(street: gc.mengplaz.StreetRecordRef) {
    this.selectedStreet = street;
    this.state = 'pois';
    this.isLoading = true;
    this.render();

    try {
      this.pois = await gc.api.getPoisInStreet(street.ref);
    } catch (_e) {
      this.pois = [];
    }

    this.isLoading = false;
    this.renderResults();
  }

  private selectPoi(poi: gc.mengplaz.POIRecordRef) {
    const event = new CustomEvent<SearchSelectEvent>('search-select', {
      detail: { goldenRecord: poi },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
    this.dialog.hide();
  }

  private goBack() {
    this.state = 'search';
    this.selectedStreet = null;
    this.pois = [];
    this.render();
  }

  private render() {
    const searchBar = (
      <div className="search-bar">
        {this.searchInput}
        <sl-button variant="primary" onclick={() => this.performSearch()}>
          <sl-icon slot="prefix" name="search"></sl-icon>
          Search
        </sl-button>
      </div>
    );

    const header =
      this.state === 'pois' ? (
        <div className="pois-header">
          {this.backButton}
          <span className="header-street-name">
            {this.selectedStreet?.record.street}, {this.selectedStreet?.record.city}
          </span>
        </div>
      ) : null;

    this.renderResults();

    const footer = (
      <sl-button slot="footer" variant="default" onclick={() => this.dialog.hide()}>
        Cancel
      </sl-button>
    );

    this.dialog.replaceChildren(
      <div className="search-dialog-content">
        {this.state === 'search' ? searchBar : header}
        {this.resultsContainer}
      </div>,
      footer,
    );

    this.replaceChildren(this.dialog);
  }

  private renderResults() {
    if (this.isLoading) {
      this.resultsContainer.replaceChildren(
        <div className="search-loading">
          <sl-spinner></sl-spinner>
          <span>Loading...</span>
        </div>,
      );
      return;
    }

    if (this.state === 'search') {
      this.renderStreetResults();
    } else {
      this.renderPoiResults();
    }
  }

  private renderStreetResults() {
    if (this.streets.length === 0) {
      const message = this.searchInput.value.trim() ? 'No streets found. Try a different search.' : 'Enter a street name to search.';
      this.resultsContainer.replaceChildren(<div className="search-empty">{message}</div>);
      return;
    }

    const items = this.streets.map((street) => (
      <div className={['result-item', 'street-item']} onclick={() => this.selectStreet(street)}>
        <sl-icon name="geo-alt"></sl-icon>
        <div className="street-info">
          <span className="street-name">{street.record.street}</span>
          <span className="street-location">
            {street.record.city}
            {street.record.postcode ? `, ${street.record.postcode}` : ''}
          </span>
        </div>
        <sl-icon name="chevron-right" className="chevron"></sl-icon>
      </div>
    ));

    this.resultsContainer.replaceChildren(<div className="results-list">{items}</div>);
  }

  private renderPoiResults() {
    if (this.pois.length === 0) {
      this.resultsContainer.replaceChildren(<div className="search-empty">No POIs found in this street.</div>);
      return;
    }

    const items = this.pois
      .sort((a, b) => Number(a.record.number) - Number(b.record.number))
      .map((poi) => (
        <div className={['result-item', 'poi-item']}>
          <div className="poi-info">
            <span className="poi-number">#{poi.record.number}</span>
            <span className="poi-details">
              {poi.record.postcode} {poi.record.city}
            </span>
          </div>
          <sl-button variant="primary" size="small" onclick={() => this.selectPoi(poi)}>
            Link
          </sl-button>
        </div>
      ));

    this.resultsContainer.replaceChildren(<div className="results-list">{items}</div>);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-search-dialog': MengplazSearchDialog;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'mengplaz-search-dialog': GreyCat.Element<MengplazSearchDialog>;
      }
    }
  }
}

if (!customElements.get('mengplaz-search-dialog')) {
  customElements.define('mengplaz-search-dialog', MengplazSearchDialog);
}
