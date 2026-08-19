import { GuiChangeEvent, GuiInputString, GuiTable } from '@greycat/web';
import '../../components/mengplaz-address-card/mengplaz-address-card';
import './search.css';

export class SearchPage extends HTMLElement {
  private resultTable: GuiTable;
  private searchResults: gc.mengplaz.StreetRecordRef[] = [];
  private availablePOIs: gc.mengplaz.POIRecordRef[] = [];
  private addressSelected?: gc.mengplaz.POIRecordRef;
  private searchInput: GuiInputString;

  constructor() {
    super();

    this.searchInput = (<gui-input-string placeholder="Type Street Name" />) as GuiInputString;
    this.searchInput.addEventListener('gui-input', (e) => this.search(e));

    this.resultTable = new GuiTable();
    this.resultTable.rowHeight = 40;
    this.resultTable.useDefaultColumns = false;
    this.resultTable.columns = [
      { index: gc.mengplaz.StreetRecord.$fields.street, header: 'Street' },
      { index: gc.mengplaz.StreetRecord.$fields.city, header: 'Locality' },
    ];
    this.resultTable.addEventListener('gui-table-click', async (ev) => {
      this.addressSelected = undefined;
      this.availablePOIs = await gc.api.getPoisInStreet(this.searchResults[ev.detail.rowIdx].ref);
      this.availablePOIs.sort((a, b) => a.record.number!.localeCompare(b.record.number!));
      this.render();
    });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  private async search(e: GuiChangeEvent<string>) {
    //await gc.sdk.init();
    this.searchResults = await gc.api.searchStreet(e.detail);
    this.availablePOIs = [];
    this.addressSelected = undefined;
    this.resultTable.value = this.searchResults.map((e) => e.record);
    //this.render();
  }

  render() {
    let content = (
      <div style={{ display: 'flex', flexFlow: 'column', height: '100%', gap: 'var(--spacing)' }}>
        <h3 className={'content-title'}> Search</h3>
        <p className={'content-subtitle'}> Find any address</p>
        {this.searchInput}
        <div className={'card'}>
          <h4 className={'card-title'}> Search Results </h4>
          <div className={'card-content'}>{this.resultTable}</div>
        </div>
        {this.availablePOIs.length > 0 ? (
          <div className={'card'}>
            <h4 className={'card-title'}> Street Numbers </h4>
            <div className={'street-numbers'}>
              {this.availablePOIs
                .sort((a, b) => Number(a.record.number) - Number(b.record.number))
                .map((e) => {
                  return (
                    <sl-badge
                      variant="neutral"
                      pill
                      data-ref={e.ref}
                      onclick={(_e2) => {
                        this.addressSelected = e;
                        this.render();
                      }}
                    >
                      {e.record.number}
                    </sl-badge>
                  );
                })}
            </div>
          </div>
        ) : (
          ''
        )}
        {this.addressSelected ? <mengplaz-address-card value={this.addressSelected} showGoTo={true} /> : null}
      </div>
    );

    this.replaceChildren(content);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'search-page': SearchPage;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'search-page': GreyCat.Element<SearchPage>;
      }
    }
  }
}

if (!customElements.get('search-page')) {
  customElements.define('search-page', SearchPage);
}
