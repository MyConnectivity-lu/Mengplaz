import { GuiMap } from '@greycat/web';
import maplibregl from 'maplibre-gl';
import { calculateDistance, formatDistance } from '~/common/utils';
import './minimap.css';

const MASTER_COLOR = '#10069f'; // --secondary (blue)
const CANDIDATE_COLOR = '#ff18a4'; // --tertiary (pink)

export class MiniMap extends HTMLElement {
  primary?: gc.geo;
  secondary?: gc.geo | null;
  showDistance?: boolean;
  locations?: Map<string, gc.geo>;

  private map: GuiMap;
  private primaryMarker?: maplibregl.Marker;
  private secondaryMarker?: maplibregl.Marker;

  constructor() {
    super();
    this.map = document.createElement('gui-map');
    this.map.options = {
      attributionControl: false,
      style: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '&copy; OpenStreetMap Contributors',
            maxzoom: 19,
          },
        },
        layers: [
          {
            id: 'osm',
            type: 'raster',
            source: 'osm',
          },
        ],
      },
      zoom: 14,
    };
  }

  connectedCallback() {
    this.render();
    this.map.style.height = '200px';
    this.map.ready.then((m) => {
      // Add primary marker
      if (this.primary) {
        this.primaryMarker = new maplibregl.Marker({ color: MASTER_COLOR }).setLngLat([this.primary.lng, this.primary.lat]).addTo(m as any);
      }

      // Add secondary marker
      if (this.secondary) {
        this.secondaryMarker = new maplibregl.Marker({ color: CANDIDATE_COLOR }).setLngLat([this.secondary.lng, this.secondary.lat]).addTo(m as any);
      }

      // Center map between both points or on primary
      if (this.primary && this.secondary) {
        const centerLat = (this.primary.lat + this.secondary.lat) / 2;
        const centerLng = (this.primary.lng + this.secondary.lng) / 2;
        m.setCenter([centerLng, centerLat]);

        // Adjust zoom to fit both markers
        const distance = calculateDistance(this.primary, this.secondary);
        if (distance > 5) m.setZoom(10);
        else if (distance > 1) m.setZoom(12);
        else if (distance > 0.5) m.setZoom(14);
        else m.setZoom(15);
      } else if (this.primary) {
        m.setCenter([this.primary.lng, this.primary.lat]);
      }
    });
  }

  disconnectedCallback() {
    this.primaryMarker?.remove();
    this.secondaryMarker?.remove();
  }

  render() {
    this.innerHTML = '';

    const distanceLabel =
      this.showDistance && this.primary && this.secondary ? (
        <div className="minimap-distance-label">
          <sl-badge variant="neutral" pill>
            {formatDistance(calculateDistance(this.primary, this.secondary))}
          </sl-badge>
        </div>
      ) : null;

    const legend = (
      <div className="minimap-legend">
        {this.primary ? (
          <span className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: MASTER_COLOR }}></span>
            Source
          </span>
        ) : (
          ''
        )}
        {this.secondary ? (
          <span className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: CANDIDATE_COLOR }}></span>
            Candidate
          </span>
        ) : (
          ''
        )}
      </div>
    );

    const content = (
      <div className="minimap-container">
        <div className="minimap-map-wrapper"></div>
        {distanceLabel}
        {legend}
      </div>
    );

    const contentEl = content as HTMLElement;
    const mapWrapper = contentEl.querySelector('.minimap-map-wrapper');
    if (mapWrapper) {
      mapWrapper.appendChild(this.map);
    }

    this.appendChild(contentEl);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-minimap': MiniMap;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'mengplaz-minimap': GreyCat.Element<MiniMap>;
      }
    }
  }
}

if (!customElements.get('mengplaz-minimap')) {
  customElements.define('mengplaz-minimap', MiniMap);
}
