import '~/lib/maplibre-worker';
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import * as maplibregl from 'maplibre-gl';
import maplibreCss from 'maplibre-gl/dist/maplibre-gl.css?inline';
import '@awesome.me/webawesome/dist/components/badge/badge.js';
import {
  GEOPORTAIL_ATTRIBUTION,
  LUXEMBOURG_BOUNDS,
  ORTHO_OVERLAY_TILES,
  ORTHO_TILES,
  OSM_DATA_ATTRIBUTION,
} from '~/lib/geoportail';
import { calculateDistance, colorForSource, formatDistance } from '~/lib/format';

// Resolved from the theme at plot time: maplibre markers are canvas/DOM built
// outside Lit's styling, so they cannot read the custom properties themselves.
const candidateColor = () => colorForSource('BDA');
const masterColor = () => colorForSource('Golden');

/** Two points closer than this are drawn as one clustered marker. */
const COINCIDENT_THRESHOLD = 1e-6;

interface Point {
  label: string;
  geo: gc.geo;
  color: string;
}

/**
 * A small orthophoto map plotting one golden position, an optional candidate
 * source position, and any per-source secondary locations - each in its source's
 * colour, with coincident points collapsed into a counted marker.
 *
 * Replaces the previous frontend's `gui-map` wrapper with maplibre directly.
 * maplibre's stylesheet is injected into the shadow root rather than the
 * document, so the popup and control styling stays scoped to this component.
 */
@customElement('mp-minimap')
export class MpMinimap extends LitElement {
  static styles = [
    css`
      ${maplibreUnsafe()}
    `,
    css`
      :host {
        display: block;
        height: 100%;
        min-height: 200px;
      }
      .container {
        position: relative;
        height: 100%;
        width: 100%;
        min-height: 200px;
      }
      .map {
        height: 100%;
        width: 100%;
      }
      .distance {
        position: absolute;
        right: 0.5rem;
        bottom: 0.5rem;
        z-index: 10;
        pointer-events: none;
      }
      .legend {
        position: absolute;
        bottom: 0.5rem;
        left: 0.5rem;
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        background: var(--gc-surface);
        padding: 0.25rem 0.5rem;
        border-radius: var(--gc-radius);
        font-size: var(--wa-font-size-xs);
        color: var(--gc-text);
        border: 1px solid var(--gc-border);
        z-index: 10;
      }
      .item {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }

      /* ---- Marker popups ----
         maplibre ships a hardcoded white bubble and a white tip. Repaint both
         from the theme tokens, including every anchor variant: the popup picks
         its anchor from the marker's position, so a tip left unstyled shows up
         white against the panel. */
      .maplibregl-popup-content {
        background: var(--gc-surface);
        color: var(--gc-text);
        border: 1px solid var(--gc-border);
        border-radius: var(--gc-radius);
        box-shadow: var(--gc-shadow);
        padding: 0.3rem 0.5rem;
        font-size: var(--wa-font-size-xs);
        font-family: var(--gc-ui);
      }
      .maplibregl-popup-close-button {
        color: var(--gc-muted);
      }
      .maplibregl-popup-close-button:hover {
        background: var(--gc-hover);
        color: var(--gc-text);
      }
      .maplibregl-popup-anchor-top .maplibregl-popup-tip,
      .maplibregl-popup-anchor-top-left .maplibregl-popup-tip,
      .maplibregl-popup-anchor-top-right .maplibregl-popup-tip {
        border-bottom-color: var(--gc-surface);
      }
      .maplibregl-popup-anchor-bottom .maplibregl-popup-tip,
      .maplibregl-popup-anchor-bottom-left .maplibregl-popup-tip,
      .maplibregl-popup-anchor-bottom-right .maplibregl-popup-tip {
        border-top-color: var(--gc-surface);
      }
      .maplibregl-popup-anchor-left .maplibregl-popup-tip {
        border-right-color: var(--gc-surface);
      }
      .maplibregl-popup-anchor-right .maplibregl-popup-tip {
        border-left-color: var(--gc-surface);
      }
      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        flex: none;
      }
    `,
  ];

  @property({ attribute: false }) golden?: gc.geo;
  @property({ attribute: false }) source?: gc.geo | null;
  @property({ attribute: false }) locations?: Map<string, gc.geo>;
  /** Show the golden-to-source separation in the middle of the map. */
  @property({ type: Boolean, attribute: 'show-distance' }) showDistance = false;
  /**
   * Drop maplibre's attribution control. Only for a map shown beside another
   * that already carries the credit - the geoportail terms and the ODbL both
   * expect attribution wherever the tiles and data are displayed.
   */
  @property({ type: Boolean, attribute: 'hide-attribution' }) hideAttribution = false;

  private map?: maplibregl.Map;
  private markers: maplibregl.Marker[] = [];

  protected override firstUpdated() {
    const container = this.renderRoot.querySelector('.map') as HTMLElement;
    this.map = new maplibregl.Map({
      container,
      attributionControl: this.hideAttribution ? false : { compact: true, customAttribution: OSM_DATA_ATTRIBUTION },
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
          { id: 'ortho', type: 'raster', source: 'ortho' },
          { id: 'ortho-overlay', type: 'raster', source: 'ortho-overlay' },
        ],
      },
      maxBounds: LUXEMBOURG_BOUNDS,
      center: this.initialCenter(),
      zoom: 16,
    });
    this.map.on('load', () => {
      this.map?.resize();
      this.plot();
    });
  }

  protected override updated(changed: Map<string, unknown>) {
    if (this.map && (changed.has('golden') || changed.has('source') || changed.has('locations'))) {
      this.plot();
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.clearMarkers();
    this.map?.remove();
    this.map = undefined;
  }

  private initialCenter(): [number, number] {
    const p = this.points()[0];
    return p ? [p.geo.lng, p.geo.lat] : [6.12, 49.8];
  }

  private points(): Point[] {
    const points: Point[] = [];
    if (this.golden) {
      points.push({ label: 'Golden', geo: this.golden, color: masterColor() });
    }
    if (this.source) {
      points.push({ label: 'Source', geo: this.source, color: candidateColor() });
    }
    if (this.locations) {
      for (const [k, v] of this.locations) {
        points.push({ label: k, geo: v, color: colorForSource(k) });
      }
    }
    return points;
  }

  private clearMarkers() {
    for (const marker of this.markers) {
      marker.remove();
    }
    this.markers = [];
  }

  private plot() {
    const map = this.map;
    if (!map) {
      return;
    }
    this.clearMarkers();

    // Collapse points that share a position, so a golden record and the source
    // that matches it exactly do not stack invisibly.
    const groups: Point[][] = [];
    for (const p of this.points()) {
      const g = groups.find(
        (gr) =>
          Math.abs(gr[0].geo.lat - p.geo.lat) < COINCIDENT_THRESHOLD &&
          Math.abs(gr[0].geo.lng - p.geo.lng) < COINCIDENT_THRESHOLD,
      );
      if (g) {
        g.push(p);
      } else {
        groups.push([p]);
      }
    }

    for (const g of groups) {
      const popup = new maplibregl.Popup({ offset: 24 });
      let marker: maplibregl.Marker;
      if (g.length === 1) {
        marker = new maplibregl.Marker({ color: g[0].color });
        popup.setText(g[0].label);
      } else {
        const el = document.createElement('div');
        el.textContent = String(g.length);
        el.style.cssText = `width:26px;height:26px;border-radius:50%;background:${g[0].color};color:#fff;font-size:12px;font-weight:600;display:flex;align-items:center;justify-content:center;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.4);cursor:pointer;`;
        marker = new maplibregl.Marker({ element: el });
        popup.setHTML(
          g
            .map(
              (p) =>
                `<div style="display:flex;align-items:center;gap:6px;padding:2px 0"><span style="width:10px;height:10px;border-radius:50%;display:inline-block;flex-shrink:0;background:${p.color}"></span>${p.label}</div>`,
            )
            .join(''),
        );
      }
      marker.setLngLat([g[0].geo.lng, g[0].geo.lat]).setPopup(popup).addTo(map);

      const host = marker.getElement();
      host.addEventListener('mouseenter', () => {
        if (!popup.isOpen()) {
          marker.togglePopup();
        }
      });
      host.addEventListener('mouseleave', () => {
        if (popup.isOpen()) {
          marker.togglePopup();
        }
      });
      this.markers.push(marker);
    }

    if (this.golden) {
      map.setCenter([this.golden.lng, this.golden.lat]);
    } else if (groups.length > 0) {
      map.setCenter([groups[0][0].geo.lng, groups[0][0].geo.lat]);
    }
  }

  render() {
    const points = this.points();
    return html`
      <div class="container">
        <div class="map"></div>
        ${
          this.showDistance && this.golden && this.source
            ? html`<div class="distance">
                <wa-badge variant="neutral" pill>
                  ${formatDistance(calculateDistance(this.golden, this.source))}
                </wa-badge>
              </div>`
            : ''
        }
        ${
          points.length > 0
            ? html`<div class="legend">
                ${points.map(
                  (p) => html`<span class="item">
                    <span class="dot" style="background:${p.color}"></span>${p.label}
                  </span>`,
                )}
              </div>`
            : ''
        }
      </div>
    `;
  }
}

/** maplibre's stylesheet, scoped into this component's shadow root. */
function maplibreUnsafe() {
  return unsafeCSS(maplibreCss);
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-minimap': MpMinimap;
  }
}
