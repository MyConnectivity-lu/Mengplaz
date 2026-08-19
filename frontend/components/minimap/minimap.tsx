import { GuiMap } from '@greycat/web';
import * as maplibregl from 'maplibre-gl';
import { calculateDistance, colorForKey, formatDistance } from '~/common/utils';
import './minimap.css';

const CANDIDATE_COLOR = '#10069f';
const MASTER_COLOR = '#ff18a4';

// Official orthophoto 2025, served as WMTS raster tiles (CORS-enabled, EPSG:3857).
// Subdomains wmts1-4 load-balance. Same source as the full map page.
const ORTHO_TILES = [1, 2, 3, 4].map((i) => `https://wmts${i}.geoportail.lu/mapproxy_4_v3/wmts/ortho_2025/GLOBAL_WEBMERCATOR_4_V3/{z}/{x}/{y}.jpeg`);

// Transparent WMS overlay (geoportail public_map_layers, layer 351) drawn on top of ortho.
// WMS 1.3.0 GetMap; maplibre expands {bbox-epsg-3857} per tile.
const ORTHO_OVERLAY_TILES = [
  'https://wms.geoportail.lu/public_map_layers/service?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0' +
    '&FORMAT=image%2Fpng&STYLES=&TRANSPARENT=TRUE&LAYERS=351&WIDTH=256&HEIGHT=256' +
    '&CRS=EPSG%3A3857&BBOX={bbox-epsg-3857}',
];

// Credit for the geoportail orthophoto and cadastral layers (Administration du cadastre
// et de la topographie via geoportail.lu).
const GEOPORTAIL_ATTRIBUTION =
  '&copy; <a href="https://www.geoportail.lu" target="_blank" rel="noopener">geoportail.lu</a> / Administration du cadastre et de la topographie';

// Required ODbL attribution: plotted locations may be derived from OpenStreetMap data.
const OSM_DATA_ATTRIBUTION =
  'Address data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors (ODbL)';

export class MiniMap extends HTMLElement {
  golden?: gc.geo;
  source?: gc.geo | null;
  showDistance?: boolean;
  locations?: Map<string, gc.geo>;

  private map: GuiMap;
  private markers: maplibregl.Marker[] = [];

  constructor() {
    super();
    this.map = document.createElement('gui-map');
    this.map.options = {
      attributionControl: { compact: true, customAttribution: OSM_DATA_ATTRIBUTION },
      style: {
        version: 8,
        sources: {
          ortho: {
            type: 'raster',
            tiles: ORTHO_TILES,
            tileSize: 256,
            maxzoom: 19,
            attribution: GEOPORTAIL_ATTRIBUTION,
          },
          'ortho-overlay': {
            type: 'raster',
            tiles: ORTHO_OVERLAY_TILES,
            tileSize: 256,
            attribution: GEOPORTAIL_ATTRIBUTION,
          },
        },
        layers: [
          {
            id: 'ortho',
            type: 'raster',
            source: 'ortho',
          },
          {
            id: 'ortho-overlay',
            type: 'raster',
            source: 'ortho-overlay',
          },
        ],
      },
      maxBounds: [
        [4.336, 48.548],
        [7.932, 51.083],
      ],
      zoom: 16,
    };
  }

  connectedCallback() {
    this.render();
    this.map.style.height = '200px';
    void this.map.ready.then((m) => {
      // Collapse the attribution box to the compact "i" button, like the main map.
      const attc = (m as any)._controls?.find((c: unknown) => c instanceof maplibregl.AttributionControl);
      attc?._updateCompactMinimize?.();

      type Point = { label: string; geo: gc.geo; color: string };
      const points: Point[] = [];
      if (this.golden) points.push({ label: 'Golden', geo: this.golden, color: MASTER_COLOR });
      if (this.source) points.push({ label: 'Source', geo: this.source, color: CANDIDATE_COLOR });
      if (this.locations) {
        for (const [k, v] of this.locations) {
          points.push({ label: k, geo: v, color: colorForKey(k) });
        }
      }

      const THRESHOLD = 1e-6;
      const groups: Point[][] = [];
      for (const p of points) {
        const g = groups.find((gr) => Math.abs(gr[0].geo.lat - p.geo.lat) < THRESHOLD && Math.abs(gr[0].geo.lng - p.geo.lng) < THRESHOLD);
        if (g) g.push(p);
        else groups.push([p]);
      }

      for (const g of groups) {
        const popup = new maplibregl.Popup({ offset: 24 });
        popup.on('open', () => {
          const root = popup.getElement();
          const content = root?.querySelector('.maplibregl-popup-content') as HTMLElement | null;
          if (content) {
            content.style.background = 'var(--color-card-bg, #ffffff)';
            content.style.color = 'var(--color-text, #1e293b)';
            content.style.border = '1px solid var(--color-card-border, #f1f5f9)';
            content.style.borderRadius = 'var(--sl-border-radius-medium, 6px)';
            content.style.padding = 'var(--sl-spacing-small, 8px) var(--sl-spacing-medium, 12px)';
            content.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
            content.style.fontSize = 'var(--sl-font-size-small, 12px)';
          }
          const tip = root?.querySelector('.maplibregl-popup-tip') as HTMLElement | null;
          if (tip && root) {
            const bg = 'var(--color-card-bg, #ffffff)';
            const cls = root.className;
            if (cls.includes('anchor-top')) tip.style.borderBottomColor = bg;
            else if (cls.includes('anchor-bottom')) tip.style.borderTopColor = bg;
            else if (cls.includes('anchor-left')) tip.style.borderRightColor = bg;
            else if (cls.includes('anchor-right')) tip.style.borderLeftColor = bg;
          }
        });
        let marker: maplibregl.Marker;
        if (g.length === 1) {
          marker = new maplibregl.Marker({ color: g[0].color });
          popup.setText(g[0].label);
        } else {
          const el = document.createElement('div');
          el.textContent = String(g.length);
          el.style.cssText = `width:26px;height:26px;border-radius:50%;background:${g[0].color};color:#ffffff;font-size:12px;font-weight:600;display:flex;align-items:center;justify-content:center;border:2px solid #ffffff;box-shadow:0 1px 4px rgba(0,0,0,0.4);cursor:pointer;`;
          marker = new maplibregl.Marker({ element: el });
          const rows = g
            .map((p) => {
              const dot = document.createElement('span');
              dot.style.cssText = `width:10px;height:10px;border-radius:50%;display:inline-block;flex-shrink:0;background:${p.color};`;
              const row = document.createElement('div');
              row.style.cssText = 'display:flex;align-items:center;gap:6px;padding:2px 0;';
              row.appendChild(dot);
              row.appendChild(document.createTextNode(p.label));
              return row.outerHTML;
            })
            .join('');
          popup.setHTML(rows);
        }
        marker
          .setLngLat([g[0].geo.lng, g[0].geo.lat])
          .setPopup(popup)
          .addTo(m as any);

        const hostEl = marker.getElement();
        hostEl.addEventListener('mouseenter', () => {
          if (!popup.isOpen()) marker.togglePopup();
        });
        hostEl.addEventListener('mouseleave', () => {
          if (popup.isOpen()) marker.togglePopup();
        });

        this.markers.push(marker);
      }

      if (this.golden) m.setCenter([this.golden.lng, this.golden.lat]);
      else if (points.length > 0) m.setCenter([points[0].geo.lng, points[0].geo.lat]);
    });
  }

  disconnectedCallback() {
    for (const marker of this.markers) marker.remove();
    this.markers = [];
  }

  render() {
    this.innerHTML = '';

    const distanceLabel =
      this.showDistance && this.golden && this.source ? (
        <div className="minimap-distance-label">
          <sl-badge variant="neutral" pill>
            {formatDistance(calculateDistance(this.golden, this.source))}
          </sl-badge>
        </div>
      ) : null;

    const legend = (
      <div className="minimap-legend">
        {this.golden ? (
          <span className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: MASTER_COLOR }}></span>
            Golden
          </span>
        ) : (
          ''
        )}
        {this.source ? (
          <span className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: CANDIDATE_COLOR }}></span>
            Source
          </span>
        ) : (
          ''
        )}
        {this.locations
          ? Array.from(this.locations.keys()).map((name) => (
              <span className="legend-item">
                <span className="legend-dot" style={{ backgroundColor: colorForKey(name) }}></span>
                {name}
              </span>
            ))
          : ''}
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
