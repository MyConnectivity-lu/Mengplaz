import '~/lib/maplibre-worker';
import { html, css, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import * as maplibregl from 'maplibre-gl';
import { AttributionControl } from 'maplibre-gl';
import maplibreCss from 'maplibre-gl/dist/maplibre-gl.css?inline';
import '@awesome.me/webawesome/dist/components/select/select.js';
import '@awesome.me/webawesome/dist/components/option/option.js';
import { initMode } from '~/lib/theme';
import { colorForSource } from '~/lib/format';
import { redirectLegacy } from '~/lib/routing';
import { GcPage } from '~/lib/gc-page';
import { idbGet, idbSet, ONE_DAY_MS } from '~/lib/idb-cache';
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

/** Where the golden point set lives in the IndexedDB cache. */
const POIS_KEY = 'map:pois';

/**
 * The golden point set as stored: four parallel arrays rather than an array of
 * nested feature objects. There are on the order of 100k points, and the
 * browser's structured clone walks every object it is handed - typed arrays
 * cross into and out of IndexedDB in one copy, feature objects do not.
 */
interface PoiColumns {
  /** Morton-encoded `geo` values, as read off the wire (unsigned 64-bit). */
  coords: BigUint64Array;
  lng: Float64Array;
  lat: Float64Array;
  numbers: string[];
}

function packPois(points: gc.api.POIFeatures[]): PoiColumns {
  const size = points.length;
  const coords = new BigUint64Array(size);
  const lng = new Float64Array(size);
  const lat = new Float64Array(size);
  const numbers: string[] = [];
  for (let i = 0; i < size; i++) {
    const point = points[i];
    // Decode once: `point.coords.lat` and `.lng` Morton-decode separately.
    const [pointLat, pointLng] = point.coords.latlng;
    coords[i] = point.coords.value;
    lng[i] = pointLng;
    lat[i] = pointLat;
    numbers.push(point.number);
  }
  return { coords, lng, lat, numbers };
}

function toFeatures(columns: PoiColumns): PoiFeature[] {
  return columns.numbers.map((streetNumber, i) => ({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [columns.lng[i], columns.lat[i]] },
    properties: { streetNumber, coords: columns.coords[i].toString() },
  }));
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
      /* Sits over the map tiles, so it paints an opaque ground of its own: dark
         panel with light text in dark mode, and the inverse in light mode. */
      .notice {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        z-index: 10;
        max-width: 300px;
        background: var(--gc-surface);
        color: var(--gc-text);
        border: 1px solid var(--gc-border);
        border-radius: var(--gc-radius);
        box-shadow: var(--gc-shadow);
        padding: 0.5rem 0.75rem;
        font-size: var(--wa-font-size-s);
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
      .maplibregl-ctrl maplibregl-ctrl-attrib maplibregl-compact maplibregl-compact-show {
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
   * Load every golden point once and keep it in IndexedDB for a day.
   *
   * The payload is large and barely moves day to day, and this is an MPA - an
   * in-memory memo is dropped by the first navigation away from the map, so
   * every return trip paid for the full fetch again.
   */
  private async updatePOIs() {
    const map = this.map;
    if (!map) {
      return;
    }
    const attribution = map._controls.find((c) => c instanceof AttributionControl);
    attribution?._updateCompactMinimize();

    // A miss here is also what an expired, unavailable or unreadable cache
    // looks like, so the fetch below is the answer to all four.
    let columns = await idbGet<PoiColumns>(POIS_KEY);
    if (!columns) {
      columns = packPois(await gc.api.getPois());
      // Not awaited: the map has no reason to wait on the write.
      void idbSet(POIS_KEY, columns, ONE_DAY_MS);
    }
    void (map.getSource('points') as maplibregl.GeoJSONSource).setData({
      type: 'FeatureCollection',
      features: toFeatures(columns),
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
          ${this.pointsLoading ? html`<div class="notice">Loading map data</div>` : ''}
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
