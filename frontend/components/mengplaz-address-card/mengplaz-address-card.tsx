import './mengplaz-address-card.css';
import '../address-field/address-content';
import '../mengplaz-confirm-dialog/mengplaz-confirm-dialog';
import { MengplazConfirmDialog } from '../mengplaz-confirm-dialog/mengplaz-confirm-dialog';
import { colorForKey, handleGoToRecord } from '~/common/utils';

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

  showMap?: boolean;

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
    this.confirm.showLinkParams = false;
    this.confirm.show().then((result) => {
      if (result.confirmed) {
        gc.unlinkRecord(this._value!.ref).then(() => {
          this.dispatchEvent(new CustomEvent('update', { bubbles: true }));
        });
      }
    });
  }
  private linkClicked() {
    this.confirm.text = 'Are you sure you want to link this item to the Golden record ?';
    this.confirm.showLinkParams = true;
    this.confirm.show().then((result) => {
      if (result.confirmed) {
        gc.linkRecords(this.showLink!, this._value!.ref, result.params);
      }
    });
  }

  render() {
    const record = this.value?.record;
    const sourceUrl = this.getSourceUrl(record);
    this.replaceChildren(
      <div className={'card'}>
        <div className={'card-title'} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing)' }}>
          <h4 style={{ color: colorForKey(record?.sourceName ?? ''), margin: '0' }}>{record?.sourceName ?? 'Unknown Source'}</h4>
          {sourceUrl ? (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" title={`Open in ${record?.sourceName} source`}>
              <sl-icon-button name="box-arrow-up-right" label="Open source" />
            </a>
          ) : (
            ''
          )}
          {record?.deprecated === true ? (
            <sl-tooltip content={`This address doesn't exist anymore in this source, Last seen: ${this.formatLastSeen(record?.lastSeenAt)}`}>
              <sl-tag variant="warning" size="small">
                Deprecated
              </sl-tag>
            </sl-tooltip>
          ) : (
            ''
          )}
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
        {/**@ts-ignore */}
        <address-content value={record} score={this.value?.['matchScore']} />
        {this.showMap ? this.renderMap(record) : ''}
        {this.confirm}
      </div>,
    );
  }

  private formatLastSeen(lastSeenAt: unknown): string {
    if (lastSeenAt instanceof gc.time) {
      return lastSeenAt.toDate().toLocaleString('fr');
    }
    return '2025-12-15';
  }

  private getSourceUrl(record: unknown): string | null {
    if (typeof record !== 'object' || record == null) return null;
    const sourceName = (record as any).sourceName as string | undefined;
    const loc = (record as any).primaryLocation as gc.geo | null | undefined;
    if (!sourceName) return null;

    switch (sourceName) {
      case 'OSM': {
        const id = (record as any).id;
        const kind = (record as gc.OSMFullRecord).kind
        if (id != null && id !== '') {
          return `https://www.openstreetmap.org/${kind || "node"}/${id}`;
        }
        return null;
      }
      case 'BDA': {
        const idGeo = (record as any).id_geoportail as string | undefined;
        if (!idGeo || loc == null) return null;
        const R = 6378137;
        const latRad = (loc.lat * Math.PI) / 180;
        const x = ((loc.lng * Math.PI) / 180) * R;
        const y = R * Math.log(Math.tan(Math.PI / 4 + latRad / 2));
        return `https://map.geoportail.lu/theme/main?lang=fr&version=3&X=${x.toFixed(0)}&Y=${y.toFixed(0)}&zoom=17&rotation=0&features=&layers=152&opacities=1&time=&bgLayer=basemap_2015_global&fid=152_${idGeo}`;
      }
      default:
        return null;
    }
  }

  private renderMap(record: unknown) {
    if (typeof record === 'object' && record != null && 'primaryLocation' in record && record['primaryLocation'] != null) {
      return (
        <div className={'map-container'}>
          <mengplaz-minimap golden={record['primaryLocation'] as gc.geo} locations={(record as any)?.['secondaryLocations']} />
        </div>
      );
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
