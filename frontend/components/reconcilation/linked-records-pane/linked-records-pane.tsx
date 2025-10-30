import { GuiValue } from '@greycat/web';
import { MengplazConfirmDialog } from '~/components/mengplaz-confirm-dialog/mengplaz-confirm-dialog';
import '~/components/mengplaz-confirm-dialog/mengplaz-confirm-dialog';

import './linked-records-pane.css';
import { MengplazAddressCard } from '~/components/mengplaz-address-card/mengplaz-address-card';

export class LinkedRecordsPane extends HTMLElement {
  reconciliationReport?: gc.mengplaz.ReconciliationReport;
  private confirm: MengplazConfirmDialog;
  private idx = 0;

  constructor() {
    super();
    this.confirm = (<mengplaz-confirm-dialog text="Are you sure you want to unlink this record ?" />) as MengplazConfirmDialog;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  private mergePositionsIntoGolden() {
    this.confirm.text = 'Are you sure you want to merge all linked records positions into their GoldenRecords ?';
    this.confirm.show().then((res) => {
      if (res) {
        gc.api.mergePositionsToGolden(this.reconciliationReport!.linked).then(() => {
            this.dispatchEvent(new CustomEvent('mengplaz-notify', {
              bubbles: true, 
              detail:{
                message: `Positions added to linked Golden Records.`,
                variant: "primary",
                duration: 3000,
                icon: "check2-circle" 
              },
            }));
          this.render();
        });
      }
    });
  }

  render() {
    this.innerHTML = '';
    if (this.reconciliationReport != null) {
      if (this.reconciliationReport.linked.length == 0) {
        this.appendChild(<span>No item linked yet.</span>);
        return;
      }

      const index2 = new GuiValue();
      index2.value = this.idx + 1;
      const matchedPanel = <div></div>;
      //   let goldenRef: gc.node<gc.mengplaz.POIRecordProvider>;
      const goldenDetails = (<mengplaz-address-card showGoTo />) as MengplazAddressCard;
      const sourceDetails = (<mengplaz-address-card />) as MengplazAddressCard;

      const linkedSize = this.reconciliationReport.linked.length;

      gc.api.getLinkedRecordDetails(this.reconciliationReport.linked[this.idx]).then((res) => {
        sourceDetails.value = res?.associated;
        // goldenRef = res!.golden.ref;
        goldenDetails.value = res?.golden;
      });
      const controls = (
        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ display: 'block' }}>
            <sl-icon-button
              name="chevron-left"
              label="Previous"
              onclick={() => {
                this.idx = (linkedSize + (this.idx - 1)) % linkedSize;
                index2.value = this.idx + 1;
                gc.api.getLinkedRecordDetails(this.reconciliationReport!.linked[this.idx]).then((res) => {
                  sourceDetails.value = res?.associated;
                  goldenDetails.value = res?.golden;
                });
              }}
            />
            {index2} of {linkedSize}
            <sl-icon-button
              name="chevron-right"
              label="Next"
              onclick={() => {
                this.idx = (this.idx + 1) % linkedSize;
                index2.value = this.idx + 1;
                gc.api.getLinkedRecordDetails(this.reconciliationReport!.linked[this.idx]).then((res) => {
                  sourceDetails.value = res?.associated;
                  goldenDetails.value = res?.golden;
                });
              }}
            />
          </div>
          <sl-button
            onclick={() => {
              this.mergePositionsIntoGolden();
            }}
          >
            Merge positions
          </sl-button>
        </div>
      );

      matchedPanel.appendChild(
        <>
          {controls}
          <div className={'linked-panel'}>
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
    'linked-records-pane': LinkedRecordsPane;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'linked-records-pane': GreyCat.Element<LinkedRecordsPane>;
      }
    }
  }
}

if (!customElements.get('linked-records-pane')) {
  customElements.define('linked-records-pane', LinkedRecordsPane);
}
