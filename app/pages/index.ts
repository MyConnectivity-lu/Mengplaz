import '~/lib/maplibre-worker';
import { html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import * as maplibregl from 'maplibre-gl';
import { AttributionControl } from 'maplibre-gl';
import maplibreCss from 'maplibre-gl/dist/maplibre-gl.css?inline';
import '@awesome.me/webawesome/dist/components/select/select.js';
import '@awesome.me/webawesome/dist/components/option/option.js';
import '@awesome.me/webawesome/dist/components/callout/callout.js';
import { initMode } from '~/lib/theme';
import { colorForSource } from '~/lib/format';
import { redirectLegacy } from '~/lib/routing';
import { GcPage } from '~/lib/gc-page';
import {
  GEOPORTAIL_STYLE,
  LUXEMBOURG_BOUNDS,
  ORTHO_OVERLAY_TILES,
  ORTHO_TILES,
  OSM_DATA_ATTRIBUTION,
  GEOPORTAIL_ATTRIBUTION,
} from '~/lib/geoportail';
import '~/components/mengplaz-app-shell';
import '~/components/mp-address-search';
import type { AddressSelectEvent } from '~/components/mp-address-search';
import '~/components/mp-address-card';

// The legacy `?page=` shim runs before anything renders, so an old link never
// paints the wrong page.
if (!redirectLegacy()) {
  initMode();
}

type Basemap = 'vector' | 'ortho';

/**
 * One golden address point as GeoJSON. Declared here rather than imported from
 * `geojson`: those types reach us only as a transitive dependency of maplibre,
 * so they are not resolvable from app code under pnpm's strict layout.
 */
interface PoiFeature {
  type: 'Feature';
  geometry: { type: 'Point'; coordinates: [number, number] };
  properties: { streetNumber: string | null; coords: string };
}

/**
 * The map, which is also the index: `/` has always shown the map and still does.
 *
 * Every golden address point is drawn as one GeoJSON source, rendered as circles
 * when zoomed out and as street numbers past zoom 17. Clicking a point fetches
 * that record and shows it in a popup.
 */
@customElement('mengplaz-index-page')
export class MengplazIndexPage extends GcPage {
  static styles = [
    css`
      ${unsafeCSS(maplibreCss)}
    `,
    css`
      :host {
        display: block;
        height: 100%;
      }
      .wrap {
        position: relative;
        height: 100%;
        width: 100%;
      }
      .map {
        height: 100%;
        width: 100%;
      }
      .search-panel {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        width: 500px;
        max-width: calc(100% - 1rem);
        z-index: 10;
      }
      .layer-control {
        position: absolute;
        bottom: 1.6rem;
        left: 0.5rem;
        z-index: 10;
        width: 250px;
        max-width: calc(100% - 1rem);
      }
      .notice {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        z-index: 10;
        max-width: 300px;
      }
      .error {
        color: var(--gc-bad);
        padding: 1rem;
      }
      /* The popup is maplibre's own DOM, so it is styled here rather than in the
         card: paint it with the theme tokens instead of maplibre's default white. */
      .maplibregl-popup-content {
        background: var(--gc-surface);
        color: var(--gc-text);
        border: 1px solid var(--gc-border);
        border-radius: var(--gc-radius);
        box-shadow: var(--gc-shadow);
        padding: 0;
        max-width: 420px;
      }
      .maplibregl-popup-anchor-right .maplibregl-popup-tip {
        border-left-color: var(--gc-surface);
      }
      .maplibregl-popup-anchor-left .maplibregl-popup-tip {
        border-right-color: var(--gc-surface);
      }
      .maplibregl-popup-anchor-top .maplibregl-popup-tip {
        border-bottom-color: var(--gc-surface);
      }
      .maplibregl-popup-anchor-bottom .maplibregl-popup-tip {
        border-top-color: var(--gc-surface);
      }
      .maplibregl-ctrl maplibregl-ctrl-attrib maplibregl-compact maplibregl-compact-show{
        z-index: 999;
      }
    `,
  ];

  @state() private basemap: Basemap = 'vector';
  @state() private pointsLoading = true;

  private map?: maplibregl.Map;

  protected async onInit() {
    // The map itself is built in firstUpdated (it needs the container in the
    // DOM); onInit only has to guarantee the session is up before POIs load.
  }

  protected override firstUpdated() {
    const container = this.renderRoot.querySelector('.map') as HTMLElement;
    this.map = new maplibregl.Map({
      container,
      style: GEOPORTAIL_STYLE,
      center: [6.12, 49.8],
      zoom: 9,
      attributionControl: {
        compact: true,
        customAttribution: [GEOPORTAIL_ATTRIBUTION, OSM_DATA_ATTRIBUTION],
      },
      // Lock panning to Luxembourg plus a margin.
      maxBounds: LUXEMBOURG_BOUNDS,
    });

    this.map.on('load', () => {
      this.map?.resize();
      this.addLayers();
      void this.updatePOIs();
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    // Dropping the features first works around a leak inside maplibre.
    void (this.map?.getSource('points') as maplibregl.GeoJSONSource | undefined)?.setData({
      type: 'FeatureCollection',
      features: [],
    });
    this.map?.remove();
    this.map = undefined;
  }

  private addLayers() {
    const map = this.map;
    if (!map) {
      return;
    }
    // A canvas cannot read CSS custom properties, so resolve the token once here.
    const golden = colorForSource('Golden');

    // The ortho raster sits above the vector style and below the POI layers, so
    // showing the opaque raster effectively replaces the basemap.
    map.addSource('ortho', { type: 'raster', tiles: ORTHO_TILES, tileSize: 256, maxzoom: 19 });
    map.addLayer({ id: 'ortho', type: 'raster', source: 'ortho', layout: { visibility: 'none' } });
    map.addSource('ortho-overlay', { type: 'raster', tiles: ORTHO_OVERLAY_TILES, tileSize: 256 });
    map.addLayer({
      id: 'ortho-overlay',
      type: 'raster',
      source: 'ortho-overlay',
      layout: { visibility: 'none' },
    });

    map.addSource('points', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
    map.addLayer({
      id: 'points',
      type: 'circle',
      source: 'points',
      minzoom: 0,
      maxzoom: 17,
      paint: {
        'circle-color': golden,
        'circle-stroke-color': 'white',
        'circle-stroke-width': 0.5,
        'circle-radius': 3,
      },
    });
    map.addLayer({
      id: 'street-numbers',
      type: 'symbol',
      source: 'points',
      minzoom: 17,
      layout: {
        'text-field': ['get', 'streetNumber'],
        'text-size': ['interpolate', ['linear'], ['zoom'], 17, 10, 20, 16],
        'text-allow-overlap': true,
        'text-font': ['Noto Sans Regular'],
      },
      paint: {
        'text-color': golden,
        'text-halo-color': '#fff',
        'text-halo-width': 1,
      },
    });

    for (const layer of ['points', 'street-numbers']) {
      map.on('mouseenter', layer, () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', layer, () => {
        map.getCanvas().style.cursor = '';
      });
      map.on('click', layer, (e) => void this.openPopup(e));
    }

    map.once('sourcedata', (e) => {
      if (e.sourceId === 'points') {
        map.once('idle', () => {
          this.pointsLoading = false;
        });
      }
    });
  }

  private async openPopup(e: maplibregl.MapLayerMouseEvent) {
    const feature = e.features?.[0];
    if (!feature || feature.geometry.type !== 'Point') {
      return;
    }
    const coordinates = feature.geometry.coordinates.slice(0, 2) as [number, number];
    const coords = feature.properties?.coords as string | undefined;
    if (coords === undefined) {
      return;
    }
    const record = await gc.api.getPoisByGeo(gc.geo.create(BigInt(coords)));
    this.showCardPopup(coordinates, record ?? undefined);
  }

  private showCardPopup(at: [number, number], record?: gc.mengplaz.POIRecordRef) {
    if (!this.map) {
      return;
    }
    const card = document.createElement('mp-address-card');
    card.value = record;
    card.showGoTo = true;
    new maplibregl.Popup({ anchor: 'right' }).setLngLat(at).setDOMContent(card).addTo(this.map);
  }

  /**
   * Load every golden point once and cache it on `window`: the payload is large
   * and unchanging within a session, and re-fetching it on every visit to the
   * map made navigation feel slow.
   */
  private async updatePOIs() {
    const map = this.map;
    if (!map) {
      return;
    }
    const attribution = map._controls.find((c) => c instanceof AttributionControl);
    attribution?._updateCompactMinimize();

    const cache = window as unknown as { _gc_pois?: PoiFeature[] };
    let features = cache._gc_pois;
    if (!features) {
      const points = await gc.api.getPois();
      features = points.map<PoiFeature>((p) => ({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [p.coords.lng, p.coords.lat] },
        properties: { streetNumber: p.number, coords: p.coords.value.toString() },
      }));
      cache._gc_pois = features;
    }
    void (map.getSource('points') as maplibregl.GeoJSONSource).setData({
      type: 'FeatureCollection',
      features,
    });
  }

  private setBasemap(value: Basemap) {
    this.basemap = value;
    if (!this.map?.getLayer('ortho')) {
      return;
    }
    const visibility = value === 'ortho' ? 'visible' : 'none';
    this.map.setLayoutProperty('ortho', 'visibility', visibility);
    this.map.setLayoutProperty('ortho-overlay', 'visibility', visibility);
  }

  private flyToRecord(record: gc.mengplaz.POIRecordRef) {
    const loc = record.record.primaryLocation;
    if (loc == null || !this.map) {
      return;
    }
    this.map.flyTo({ center: [loc.lng, loc.lat], zoom: 18 });
    this.showCardPopup([loc.lng, loc.lat], record);
  }

  render() {
    return html`
      <mengplaz-app-shell page-title="Map" flush>
        <div class="wrap">
          ${this.loadError ? html`<p class="error">${this.loadError}</p>` : ''}
          <div class="search-panel">
            <mp-address-search
              disable-no-coords
              @address-select=${(e: CustomEvent<AddressSelectEvent>) => this.flyToRecord(e.detail.record)}
            ></mp-address-search>
          </div>
          <div class="layer-control">
            <wa-select
              size="m"
              value=${this.basemap}
              @change=${(e: Event) => this.setBasemap((e.target as HTMLSelectElement).value as Basemap)}
            >
              <wa-option value="vector">Geoportail Carte</wa-option>
              <wa-option value="ortho">Geoportail Orthophoto 2025</wa-option>
            </wa-select>
          </div>
          ${this.pointsLoading
        ? html`<div class="notice"><wa-callout variant="brand">Loading map data</wa-callout></div>`
        : ''
      }
          <div class="map"></div>
        </div>
      </mengplaz-app-shell>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-index-page': MengplazIndexPage;
  }
}
