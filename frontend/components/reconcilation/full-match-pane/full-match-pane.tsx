import { GuiValue, toast } from '@greycat/web';
import { MengplazAddressContent } from '~/components/mengplaz-address-content/mengplaz-address-content';
import { MengplazConfirmDialog } from '~/components/mengplaz-confirm-dialog/mengplaz-confirm-dialog';
import '~/components/mengplaz-confirm-dialog/mengplaz-confirm-dialog';

import './full-match-pane.css';
import { MengplazAddressCard } from '~/components/mengplaz-address-card/mengplaz-address-card';

export class FullMatchPane extends HTMLElement {
  reconciliationReport?: gc.mengplaz.ReconciliationReport;
  private confirm: MengplazConfirmDialog;

  constructor() {
    super();
    this.confirm = (<mengplaz-confirm-dialog text="Are you sure you want to unlink this record ?" />) as MengplazConfirmDialog;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  private linkAllMatched() {
    this.confirm.text = `Are you sure you want to link ${this.reconciliationReport?.fullMatch.length ?? 0} items to their matched Golden record ?`;
    this.confirm.show().then((res) => {
      if (res) {
        if (this.reconciliationReport != null) {
          const goldens = [];
          const others = [];
          for (const sr of this.reconciliationReport.fullMatch) {
            goldens.push(sr.candidates[0].elem);
            others.push(sr.item.sourceRecord!);
          }
          gc.private_.linkAllRecords(goldens, others).then(() => {
            toast.notify({ message: `${goldens.length} matched records linked.`, duration: 3000, icon: 'check2-circle', variant: 'primary' });
          });
        }
      }
    });
  }

  // private linkOne(gold: gc.core.node<gc.mengplaz.POIRecordProvider>, src: gc.core.node<gc.mengplaz.POIRecordProvider>) {
  //   this.confirm.text = 'Are you sure you want to link this item to the Golden record ?';
  //   this.confirm.show().then((res) => {
  //     if (res) {
  //       gc.api.linkRecords(gold, src);
  //     }
  //   });
  // }

  render() {
    this.innerHTML = '';
    if (this.reconciliationReport != null) {
      if (this.reconciliationReport.fullMatch.length == 0) {
        this.appendChild(<span>No full match found</span>);
        return;
      }
      var j = 0;
      const index2 = new GuiValue();
      index2.value = j + 1;
      const matchedPanel = <div></div>;
      const itemDetails = (<mengplaz-address-content />) as MengplazAddressContent;
      const goldenDetails = (<mengplaz-address-card showGoTo />) as MengplazAddressCard;
      const sourceDetails = (<mengplaz-address-card />) as MengplazAddressCard;

      const fullMatchSize = this.reconciliationReport.fullMatch.length;

      itemDetails.value = this.reconciliationReport.fullMatch[j].item;
      gc.api.getPoiRecordRef(this.reconciliationReport.fullMatch[j].candidates[0].elem).then((res) => {
        goldenDetails.value = res;
        sourceDetails.showLink = res.ref;
      });
      const sourceRecordNode = this.reconciliationReport!.fullMatch[j].item.sourceRecord;
      if (sourceRecordNode != null) {
        gc.api.getPoiRecordRef(sourceRecordNode).then((res) => {
          sourceDetails.value = res;
        });
      }

      const controls = (
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ display: 'block' }}>
            <sl-icon-button
              name="chevron-left"
              label="Previous"
              onclick={() => {
                j = (fullMatchSize + (j - 1)) % fullMatchSize;
                index2.value = j + 1;
                itemDetails.value = this.reconciliationReport!.fullMatch[j].item;
                gc.api.getPoiRecordRef(this.reconciliationReport!.fullMatch[j].candidates[0].elem).then((res) => {
                  goldenDetails.value = res;
                  sourceDetails.showLink = res.ref;
                });
                const sourceRecordNode = this.reconciliationReport!.fullMatch[j].item.sourceRecord;
                if (sourceRecordNode != null) {
                  gc.api.getPoiRecordRef(sourceRecordNode).then((res) => {
                    sourceDetails.value = res;
                  });
                }
              }}
            />
            {index2} of {fullMatchSize}
            <sl-icon-button
              name="chevron-right"
              label="Next"
              onclick={() => {
                j = (j + 1) % fullMatchSize;
                index2.value = j + 1;
                itemDetails.value = this.reconciliationReport!.fullMatch[j].item;
                gc.api.getPoiRecordRef(this.reconciliationReport!.fullMatch[j].candidates[0].elem).then((res) => {
                  goldenDetails.value = res;
                  sourceDetails.showLink = res.ref;
                });
                const sourceRecordNode = this.reconciliationReport!.fullMatch[j].item.sourceRecord;
                if (sourceRecordNode != null) {
                  gc.api.getPoiRecordRef(sourceRecordNode).then((res) => {
                    sourceDetails.value = res;
                  });
                }
              }}
            />
          </div>
          <sl-button
            onclick={() => {
              this.linkAllMatched();
            }}
          >
            Link all matched
          </sl-button>
        </div>
      );

      matchedPanel.appendChild(
        <>
          {controls}
          <div className={'matched-panel'}>
            <div className={'card'}>
              <h4 className={'card-title'}> {'SearchItem'} </h4>
              {itemDetails}
            </div>
            {goldenDetails}

            {sourceDetails}
          </div>
        </>,
      );
      this.appendChild(matchedPanel);
    }
    this.appendChild(this.confirm);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'full-match-pane': FullMatchPane;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'full-match-pane': GreyCat.Element<FullMatchPane>;
      }
    }
  }
}

if (!customElements.get('full-match-pane')) {
  customElements.define('full-match-pane', FullMatchPane);
}
