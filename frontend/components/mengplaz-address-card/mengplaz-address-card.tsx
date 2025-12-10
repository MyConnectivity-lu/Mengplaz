import './mengplaz-address-card.css';
import '../mengplaz-address-content/mengplaz-address-content';
import '../mengplaz-confirm-dialog/mengplaz-confirm-dialog';
import { MengplazConfirmDialog } from '../mengplaz-confirm-dialog/mengplaz-confirm-dialog';
import { handleGoToRecord } from '~/common/utils';

export class MengplazAddressCard extends HTMLElement {
  _value?: gc.mengplaz.POIRecordRef | gc.mengplaz.POIFullRecordRef;
  /**
   * Displays a button that navigates to the records page, if it's a golden record.
   */
  showGoTo?: boolean;
  /**
   * Display a button that triggers an unlink.
   */
  showUnlink?: boolean;
  /**
   * Display a qr code that navigates to the records page.
   */
  showQuickLink?: boolean;
  /**
   * Displays a button that triggers a link
   */
  showLink?: gc.node;

  private confirm: MengplazConfirmDialog;

  constructor() {
    super();
    this.confirm = (<mengplaz-confirm-dialog text="Are you sure you want to unlink this record ?" />) as MengplazConfirmDialog;
  }

  set value(v: gc.mengplaz.POIRecordRef | gc.mengplaz.POIFullRecordRef | undefined) {
    this._value = v;
    this.render();
  }

  get value() {
    return this._value;
  }

  attributeChangedCallback(_name: string, _oldValue: string, _newValue: any) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  private unlinkClicked() {
    this.confirm.text = 'Are you sure you want to unlink this record ?';
    this.confirm.show().then((confirmed) => {
      if (confirmed) {
        gc.private_.unlinkRecord(this._value!.ref).then(() => {
          this.dispatchEvent(new CustomEvent('update', { bubbles: true }));
        });
      }
    });
  }
  private linkClicked() {
    this.confirm.text = 'Are you sure you want to link this item to the Golden record ?';
    this.confirm.show().then((confirmed) => {
      if (confirmed) {
        gc.private_.linkRecords(this.showLink!, this._value!.ref);
      }
    });
  }

  render() {
    const record = this.value?.record;
    this.replaceChildren(
      <div className={'card'}>
        <div className={'card-title'} style={{ display: 'flex' }}>
          <h4>{record?.sourceName ?? 'Unknown Source'}</h4>
          <div style={{ flexGrow: '1' }} />
          {this.showGoTo === true && record?.sourceName == 'Golden' ? (
            <sl-button
              disabled={this._value?.ref == null}
              onclick={() => {
                handleGoToRecord(record.uid);
              }}
            >
              Go to record
            </sl-button>
          ) : (
            ''
          )}
          {this.showQuickLink === true ? (
            <a href={`${location.origin}/?guid=${this._value!.record.uid}&page=record`} target="_blank">
              {/*<sl-icon-button name='copy' title='Copy QuickLink' onclick={()=>{navigator.clipboard.writeText(`${location.protocol}://${location.host}/?guid=${this._value!.record.uid}`)}} />*/}
              <sl-qr-code value={`${location.origin}/?guid=${this._value!.record.uid}&page=record`} />
            </a>
          ) : (
            ''
          )}
          {this._value != null && this.showUnlink === true ? (
            <sl-icon-button
              name="slash-circle"
              title="Unlink"
              onclick={() => {
                this.unlinkClicked();
              }}
            />
          ) : (
            ''
          )}
          {this._value != null && this.showLink != null ? (
            <sl-button
              variant="primary"
              size="medium"
              title="Link Records"
              circle
              onclick={() => {
                this.linkClicked();
              }}
            >
              <sl-icon name="link" label="Link"></sl-icon>
            </sl-button>
          ) : (
            ''
          )}
        </div>
        <mengplaz-address-content value={record} />
        {this.renderMap(record)}
        {this.confirm}
      </div>,
    );
  }

  private renderMap(record: unknown) {
    if (typeof record === 'object' && record != null && 'positions' in record && record['positions'] instanceof Map && record['positions'].size > 0) {
      return <mengplaz-minimap locations={record.positions as Map<string, gc.geo>} />;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-address-card': MengplazAddressCard;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'mengplaz-address-card': GreyCat.Element<MengplazAddressCard>;
      }
    }
  }
}

if (!customElements.get('mengplaz-address-card')) {
  customElements.define('mengplaz-address-card', MengplazAddressCard);
}
