import { CellData, GuiTable, GuiValue, toast } from '@greycat/web';

import { MengplazConfirmDialog } from '~/components/mengplaz-confirm-dialog/mengplaz-confirm-dialog';
import '~/components/mengplaz-confirm-dialog/mengplaz-confirm-dialog';

export class PartialMatchPane extends HTMLElement {
  missmatchKind?: gc.MengplazMissmatch;
  searchResult?: gc.mengplaz.SearchResult[];
  private currentResultIndex = 0;

  private confirm: MengplazConfirmDialog;

  private candidatesTable = new GuiTable();
  private searchItemTable = new GuiTable();

  constructor() {
    super();
    this.confirm = (<mengplaz-confirm-dialog text="Are you sure ?" />) as MengplazConfirmDialog;
    this.searchItemTable.columns = [
      { index: gc.mengplaz.SearchItem.$fields.number, filterable: false },
      { index: gc.mengplaz.SearchItem.$fields.street, filterable: false },
      { index: gc.mengplaz.SearchItem.$fields.postcode, filterable: false },
      { index: gc.mengplaz.SearchItem.$fields.city, filterable: false },
      {
        index: gc.mengplaz.SearchItem.$fields.sourceRecord,
        header: 'Action',
        cell: (data: CellData<gc.core.node<gc.mengplaz.POIRecordProvider>>) => {
          return (
            <sl-icon-button
              title="Promote"
              name="chevron-double-up"
              label="promote"
              style="font-size: 1.2rem;"
              onclick={() => this.promote(data.value)}
            ></sl-icon-button>
          );
        },
      },
    ];
    this.candidatesTable.columns = [
      { index: gc.api.MatchCandidateDetail.$fields.overallScore, value: ({ value }) => `${value} %`, filterable: false },
      { index: gc.api.MatchCandidateDetail.$fields.number },
      { index: gc.api.MatchCandidateDetail.$fields.numberScore, value: ({ value }) => `${value} %`, filterable: false },
      { index: gc.api.MatchCandidateDetail.$fields.street },
      { index: gc.api.MatchCandidateDetail.$fields.streetScore, value: ({ value }) => `${value} %`, filterable: false },
      { index: gc.api.MatchCandidateDetail.$fields.postcode },
      { index: gc.api.MatchCandidateDetail.$fields.postcodeScore, value: ({ value }) => `${value} %`, filterable: false },
      { index: gc.api.MatchCandidateDetail.$fields.city },
      { index: gc.api.MatchCandidateDetail.$fields.cityScore, value: ({ value }) => `${value} %`, filterable: false },
      {
        index: gc.api.MatchCandidateDetail.$fields.ref,
        header: 'Action',
        cell: (data: CellData<gc.core.node<gc.mengplaz.POIRecordProvider>>) => {
          return (
            <sl-icon-button
              title="Link"
              name="link-45deg"
              label="Link"
              style="font-size: 1.2rem;"
              onclick={() => this.link(data.value)}
            ></sl-icon-button>
          );
        },
      },
    ];
    this.searchItemTable.rowHeight = 40;
    this.candidatesTable.rowHeight = 40;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  private link(golden: gc.core.node<gc.mengplaz.POIRecordProvider>) {
    this.confirm.text = `Are you sure you want to link this golden record to the searched item ?`;
    this.confirm.show().then((res) => {
      if (res) {
        if (this.searchResult != null && this.searchResult[this.currentResultIndex].item.sourceRecord != null) {
          gc.private_.linkRecords(golden, this.searchResult[this.currentResultIndex].item.sourceRecord!).then(() => {
            toast.notify({
              message: 'Records linked !',
              variant: 'primary',
              duration: 3000,
              icon: 'check2-circle',
            });
          });
        }
      }
    });
  }

  private promote(record: gc.core.node<gc.mengplaz.POIRecordProvider>) {
    this.confirm.text = `Are you sure you want promote this record to a golden record ?`;
    this.confirm.show().then((res) => {
      if (res) {
        if (this.searchResult != null && this.searchResult[this.currentResultIndex].item.sourceRecord != null) {
          gc.private_.promoteRecord(record).then(() => {
            toast.notify({
              message: 'Not implemented yet !',
              variant: 'primary',
              duration: 3000,
              icon: 'check2-circle',
            });
          });
        }
      }
    });
  }

  render() {
    this.innerHTML = '';
    if (this.searchResult != null && this.missmatchKind != null) {
      const index = new GuiValue();
      index.value = this.currentResultIndex + 1;

      this.searchItemTable.style.maxHeight = '70px';
      this.searchItemTable.value = [this.searchResult[this.currentResultIndex].item];

      gc.api.getMatchCandidateDetails(this.searchResult[this.currentResultIndex].candidates).then((res) => {
        this.candidatesTable.value = res;
        this.candidatesTable.sortBy = [0, gc.SortOrder.desc.key];
      });
      //candidatesTable.value = value[i].candidates;

      const controls = (
        <div>
          <sl-icon-button
            name="chevron-left"
            label="Previous"
            onclick={() => {
              if (this.searchResult != null) {
                this.currentResultIndex = (this.searchResult.length + (this.currentResultIndex - 1)) % this.searchResult.length;
                index.value = this.currentResultIndex + 1;
                this.searchItemTable.value = [this.searchResult[this.currentResultIndex].item];
                gc.api.getMatchCandidateDetails(this.searchResult[this.currentResultIndex].candidates).then((res) => {
                  this.candidatesTable.value = res;
                });
              }
            }}
          />
          {index} of {this.searchResult.length}
          <sl-icon-button
            name="chevron-right"
            label="Next"
            onclick={() => {
              if (this.searchResult != null) {
                this.currentResultIndex = (this.currentResultIndex + 1) % this.searchResult?.length;
                index.value = this.currentResultIndex + 1;
                this.searchItemTable.value = [this.searchResult[this.currentResultIndex].item];
                gc.api.getMatchCandidateDetails(this.searchResult[this.currentResultIndex].candidates).then((res) => {
                  this.candidatesTable.value = res;
                });
              }
            }}
          />
        </div>
      );

      this.replaceChildren(
        <div>
          {controls}
          <div className={'card'} style={{ maxHeight: '150px' }}>
            <h4 className={'card-title'}> Search Item </h4>
            <div className={'card-content'}>{this.searchItemTable}</div>
          </div>
          <div className={'card'}>
            <h4 className={'card-title'}> Golden Records </h4>
            <div className={'card-content'}>{this.candidatesTable}</div>
          </div>
          {this.confirm}
        </div>,
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'partial-match-pane': PartialMatchPane;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'partial-match-pane': GreyCat.Element<PartialMatchPane>;
      }
    }
  }
}

if (!customElements.get('partial-match-pane')) {
  customElements.define('partial-match-pane', PartialMatchPane);
}
