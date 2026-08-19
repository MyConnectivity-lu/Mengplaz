import { AttributionControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as maplibregl from 'maplibre-gl';
import '../../components/mengplaz-address-search/mengplaz-address-search';
import { AddressSelectEvent, MengplazAddressSearch } from '../../components/mengplaz-address-search/mengplaz-address-search';
import './map.css';

// Geoportail Luxembourg vector basemap (native maplibre v8 style: sprite, glyphs &
// sources all hosted by geoportail). Alternatives: 'topomap', 'topomap_gray'.
const GEOPORTAIL_STYLE = 'https://vectortiles.geoportail.lu/styles/roadmap/style.json';

// Official orthophoto 2025 (geocatalogue uuid c0aefcaa-5cc6-40ed-84cd-695f9f5b9eed),
// served as WMTS raster tiles (CORS-enabled, EPSG:3857). Subdomains wmts1-4 load-balance.
const ORTHO_TILES = [1, 2, 3, 4].map((i) => `https://wmts${i}.geoportail.lu/mapproxy_4_v3/wmts/ortho_2025/GLOBAL_WEBMERCATOR_4_V3/{z}/{x}/{y}.jpeg`);

// Transparent WMS overlay (geoportail public_map_layers, layer 351) drawn on top of the
// ortho basemap. Served as WMS 1.3.0 GetMap; maplibre expands {bbox-epsg-3857} per tile.
const ORTHO_OVERLAY_TILES = [
  'https://wms.geoportail.lu/public_map_layers/service?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0' +
    '&FORMAT=image%2Fpng&STYLES=&TRANSPARENT=TRUE&LAYERS=351&WIDTH=256&HEIGHT=256' +
    '&CRS=EPSG%3A3857&BBOX={bbox-epsg-3857}',
];

// Credit for the geoportail basemap, orthophoto and cadastral layers (all served by the
// Administration du cadastre et de la topographie via geoportail.lu).
const ATTRIBUTION =
  '&copy; <a href="https://www.geoportail.lu" target="_blank" rel="noopener">geoportail.lu</a> / Administration du cadastre et de la topographie';

// Required ODbL attribution: the address points displayed are derived in part from
// OpenStreetMap data (see backend/edi/osmLoader.gcl). Shown even though the map tiles are
// not OSM, because the *data* on the map is OSM-derived.
const OSM_DATA_ATTRIBUTION =
  'Address data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors (ODbL)';

export class MapPage extends HTMLElement {
  private map!: maplibregl.Map;
  private mapContainer: HTMLDivElement;
  private addressSearch: MengplazAddressSearch;
  private basemapSelect: HTMLElement;

  constructor() {
    super();
    this.mapContainer = (<div style={{ height: '100%' }}></div>) as HTMLDivElement;
    this.addressSearch = (<mengplaz-address-search disableNoCoords />) as MengplazAddressSearch;
    this.basemapSelect = (
      <sl-select size="medium" value="vector" hoist onsl-change={(e: Event) => this.setBasemap((e.target as any).value)}>
        <sl-option value="vector">Geoportail Carte</sl-option>
        <sl-option value="ortho">Geoportail Orthophoto 2025</sl-option>
      </sl-select>
    ) as HTMLElement;
  }

  // Switch the active basemap: 'vector' (geoportail style) or 'ortho' raster.
  // The ortho raster layer sits above the vector style and below the POI layers; showing
  // the opaque raster effectively replaces the basemap.
  private setBasemap(value: string) {
    if (!this.map?.getLayer('ortho')) return;
    this.map.setLayoutProperty('ortho', 'visibility', value === 'ortho' ? 'visible' : 'none');
    this.map.setLayoutProperty('ortho-overlay', 'visibility', value === 'ortho' ? 'visible' : 'none');
  }

  connectedCallback() {
    this.render();
    void this.initMap();
    this.addressSearch.addEventListener('address-select', (e: Event) => {
      this.flyToRecord((e as CustomEvent<AddressSelectEvent>).detail.record);
    });
  }

  private async initMap() {
    this.map = new maplibregl.Map({
      container: this.mapContainer,
      style: GEOPORTAIL_STYLE,
      center: gc.core.geo.fromLatLng(49.8, 6.12),
      zoom: 9,
      attributionControl: { compact: true, customAttribution: [ATTRIBUTION, OSM_DATA_ATTRIBUTION] },
      // Lock panning to Luxembourg bounding box + ~100km margin (~0.9° lat, ~1.4° lng @50°N)
      maxBounds: [
        [4.336, 48.548],
        [7.932, 51.083],
      ],
    });

    this.map.on('load', async () => {
      this.map.resize();

      // Alternate ortho basemap as a raster layer, above the vector style but below the POI
      // layers. Hidden by default (vector basemap shown); the select toggles it.
      this.map.addSource('ortho', { type: 'raster', tiles: ORTHO_TILES, tileSize: 256, maxzoom: 19 });
      this.map.addLayer({ id: 'ortho', type: 'raster', source: 'ortho', layout: { visibility: 'none' } });

      this.map.addSource('ortho-overlay', { type: 'raster', tiles: ORTHO_OVERLAY_TILES, tileSize: 256 });
      this.map.addLayer({ id: 'ortho-overlay', type: 'raster', source: 'ortho-overlay', layout: { visibility: 'none' } });

      this.map.addSource('points', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
      this.map.addLayer({
        id: 'points',
        type: 'circle',
        source: 'points',
        minzoom: 0,
        maxzoom: 17,
        paint: {
          'circle-color': '#ff18a4',
          'circle-stroke-color': 'white',
          'circle-stroke-width': 0.5,
          'circle-radius': 3,
        },
      });
      this.map.addLayer({
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
          'text-color': '#ff18a4',
          'text-halo-color': '#fff',
          'text-halo-width': 1,
        },
      });

      this.map.on('mouseenter', 'points', () => {
        this.map.getCanvas().style.cursor = 'pointer';
      });
      this.map.on('mouseenter', 'street-numbers', () => {
        this.map.getCanvas().style.cursor = 'pointer';
      });
      this.map.on('mouseleave', 'points', () => {
        this.map.getCanvas().style.cursor = '';
      });
      this.map.on('mouseleave', 'street-numbers', () => {
        this.map.getCanvas().style.cursor = '';
      });
      this.map.on('click', 'points', async (e: any) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const coords = e.features[0].properties.coords;
        const record = await gc.api.getPoisByGeo(gc.geo.create(BigInt(coords)));
        new maplibregl.Popup({ anchor: 'right' })
          .setLngLat(coordinates)
          .setDOMContent(<mengplaz-address-card value={record ?? undefined} showGoTo />)
          .addTo(this.map);
      });

      this.map.on('click', 'street-numbers', async (e: any) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const coords = e.features[0].properties.coords;

        const record = await gc.api.getPoisByGeo(gc.geo.create(BigInt(coords)));

        new maplibregl.Popup({ anchor: 'right' })
          .setLngLat(coordinates)
          .setDOMContent(<mengplaz-address-card value={record ?? undefined} showGoTo />)
          .addTo(this.map);
      });
      this.map.once('sourcedata', (e) => {
        if (e.sourceId === 'points') {
          this.map.once('idle', () => {
            (document.getElementById('map-loading-alert') as any)?.hide();
          });
        }
      });

      void this.updatePOIs();
    });
  }
  //5.9759064903482795
  //6.276111602783203

  private flyToRecord(r: gc.mengplaz.POIRecordRef) {
    const loc = r.record.primaryLocation;
    if (loc != null) {
      this.map.flyTo({ center: [loc.lng, loc.lat], zoom: 18 });
      new maplibregl.Popup({ anchor: 'right' })
        .setLngLat([loc.lng, loc.lat])
        .setDOMContent(<mengplaz-address-card value={r} showGoTo />)
        .addTo(this.map);
    }
  }

  disconnectedCallback() {
    // Solves a leak inside maplibre
    void (this.map?.getSource('points') as maplibregl.GeoJSONSource | undefined)?.setData({
      type: 'FeatureCollection',
      features: [],
    });
  }

  private async updatePOIs() {
    const attc = this.map._controls.find((c) => c instanceof AttributionControl);
    if (attc != null) {
      attc._updateCompactMinimize();
    }

    let features: any = (window as any)._gc_pois;
    if (!features) {
      const points = await gc.api.getPois();
      features = points.map((p) => ({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [p.coords.lng, p.coords.lat] },
        properties: { streetNumber: p.number, coords: p.coords.value.toString() },
      }));
      (window as any)._gc_pois = features;
    }
    void (this.map.getSource('points') as maplibregl.GeoJSONSource).setData({
      type: 'FeatureCollection',
      features: features,
    });
  }

  render() {
    this.replaceChildren(
      <>
        <div className="map-search-panel">{this.addressSearch}</div>
        <div className="map-layer-control">{this.basemapSelect}</div>
        <div style={{ maxWidth: '300px', position: 'fixed', top: 'var(--sl-spacing-large)', right: 'var(--sl-spacing-large)', zIndex: '999' }}>
          <sl-alert variant="primary" open closable id="map-loading-alert">
            <sl-icon slot="icon" name="info-circle"></sl-icon>
            Loading Map Data
          </sl-alert>
        </div>
        {this.mapContainer}
      </>,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-page': MapPage;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'map-page': GreyCat.Element<MapPage>;
      }
    }
  }
}

if (!customElements.get('map-page')) {
  customElements.define('map-page', MapPage);
}
