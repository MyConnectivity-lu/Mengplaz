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
    this.udpate();
    this.addEventListener('update', (e) => {
      e.stopPropagation();
      this.udpate();
    });
  }

  disconnectedCallback() {}

  private async udpate() {
    const ref = getQueryParam('guid');
    if (ref != null) {
      const recRef = await gc.api.getGoldenRecordRefByUid(ref);
      if (recRef != null) {
        gc.api.getGoldenRecordDetails(recRef.ref as any).then((details) => {
          this.details = details;
          this.render();
        });
      }
    }
    // this.render();
  }

  render() {
    this.replaceChildren(
      <div style={{ display: 'flex', flexFlow: 'column', height: '100%', gap: 'var(--spacing)' }}>
        <h3 className={'content-title'}>Golden Record</h3>
        {this.details ? (
          <>
            <mengplaz-address-card value={this.details?.golden} showQuickLink={true} />
            <div style={{ display: 'grid', gap: 'var(--spacing)', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              {this.details.associated.map((r) => (
                <mengplaz-address-card value={r} showUnlink={this.userIsAdmin} />
              ))}
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
