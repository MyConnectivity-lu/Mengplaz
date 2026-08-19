import { getQueryParam } from '~/common/utils';
import '../minimap/minimap';
import './mengplaz-comparator.css';

export class MengplazComparator extends HTMLElement {
  recordRef?: gc.node<gc.mengplaz.POIRecordProvider>;
  private details?: gc.api.GoldenRecordDetails;
  private userIsAdmin: boolean = false;

  constructor() {
    super();
  }

  connectedCallback() {
    this.userIsAdmin = gc.$.default.hasPermission('admin');
    this.update();
    this.addEventListener('update', (e) => {
      e.stopPropagation();
      this.update();
    });
  }

  disconnectedCallback() {}

  private async update() {
    const ref = getQueryParam('guid');
    if (ref != null) {
      gc.api.getGoldenRecordDetails(ref).then((details) => {
        this.details = details;
        this.render();
      });
    }
  }

  render() {
    const groups = new Map<string, gc.mengplaz.POIFullRecordRef[]>();
    for (const r of this.details?.associated ?? []) {
      const key = r.record.sourceName;
      const list = groups.get(key);
      if (list) list.push(r);
      else groups.set(key, [r]);
    }

    this.replaceChildren(
      <div style={{ display: 'flex', flexFlow: 'column', height: '100%', gap: 'var(--spacing)' }}>
        <h3 className={'content-title'}>Golden Record</h3>
        {this.details ? (
          <>
            <mengplaz-address-card value={this.details?.golden} showQuickLink={true} showMap={true} />
            <div
              style={{ display: 'grid', gap: 'var(--spacing)', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', alignItems: 'stretch' }}
            >
              {Array.from(groups.values()).map((records) => {
                if (records.length === 1) {
                  return <mengplaz-address-card value={records[0]} showUnlink={this.userIsAdmin} />;
                }
                let idx = 0;
                const card = (<mengplaz-address-card value={records[0]} showUnlink={this.userIsAdmin} />) as HTMLElementTagNameMap['mengplaz-address-card'];
                const counter = (<span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--sl-color-neutral-700)' }}>1 / {records.length}</span>) as HTMLSpanElement;
                const go = (delta: number) => {
                  idx = (idx + delta + records.length) % records.length;
                  card.value = records[idx];
                  counter.textContent = `${idx + 1} / ${records.length}`;
                };
                return (
                  <div style={{ display: 'flex', flexFlow: 'column', gap: 'var(--spacing-small)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--spacing-small)' }}>
                      <sl-icon-button name="chevron-left" label="Previous" onclick={() => go(-1)} />
                      {counter}
                      <sl-icon-button name="chevron-right" label="Next" onclick={() => go(1)} />
                    </div>
                    {card}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-comparator': MengplazComparator;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'mengplaz-comparator': GreyCat.Element<MengplazComparator>;
      }
    }
  }
}

if (!customElements.get('mengplaz-comparator')) {
  customElements.define('mengplaz-comparator', MengplazComparator);
}
