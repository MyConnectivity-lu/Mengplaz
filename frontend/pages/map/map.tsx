import { AttributionControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';
import '../../components/mengplaz-address-search/mengplaz-address-search';
import { AddressSelectEvent, MengplazAddressSearch } from '../../components/mengplaz-address-search/mengplaz-address-search';
import './map.css';

export class MapPage extends HTMLElement {
  private map: maplibregl.Map;
  private mapContainer: HTMLDivElement;
  private addressSearch: MengplazAddressSearch;

  constructor() {
    super();
    this.mapContainer = (<div style={{ height: '100%' }}></div>) as HTMLDivElement;
    this.addressSearch = (<mengplaz-address-search disableNoCoords />) as MengplazAddressSearch;
    this.map = new maplibregl.Map({
      container: this.mapContainer,
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
        glyphs: './font/{fontstack}/{range}.pbf',
      },
      center: gc.core.geo.fromLatLng(49.8, 6.12),
      zoom: 9,
      // Lock panning to Luxembourg bounding box + ~100km margin (~0.9° lat, ~1.4° lng @50°N)
      maxBounds: [
        [4.336, 48.548],
        [7.932, 51.083],
      ],
    });
    this.map.on('load', async () => {
      this.map.resize();

      // m.on('zoomend', () => this.updatePOIs());
      // m.on('dragend', () => this.updatePOIs());
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
        id: 'street-numbers-bg',
        type: 'circle',
        source: 'points',
        minzoom: 17,
        paint: {
          'circle-radius': 14,
          'circle-color': '#ffffff',
          'circle-stroke-color': '#000000',
          'circle-stroke-width': 1,
        },
      });
      this.map.addLayer({
        id: 'street-numbers',
        type: 'symbol',
        source: 'points',
        minzoom: 17,
        layout: {
          'text-field': ['get', 'streetNumber'],
          'text-size': 12,
          'text-allow-overlap': true,
          'text-font': ['Noto Sans Regular'],
        },
      });

      this.map.on('mouseenter', 'points', () => {
        this.map.getCanvas().style.cursor = 'pointer';
      });
      this.map.on('mouseenter', 'street-numbers-bg', () => {
        this.map.getCanvas().style.cursor = 'pointer';
      });
      this.map.on('mouseleave', 'points', () => {
        this.map.getCanvas().style.cursor = '';
      });
      this.map.on('mouseleave', 'street-numbers-bg', () => {
        this.map.getCanvas().style.cursor = '';
      });
      this.map.on('click', 'points', async (e: any) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const coords = e.features[0].properties.coords;
        const record = await gc.api.getPoisByGeo(gc.geo.create(BigInt(coords)));
        new maplibregl.Popup()
          .setLngLat(coordinates)
          .setDOMContent(<mengplaz-address-card value={record ?? undefined} showGoTo />)
          .addTo(this.map);
      });

      this.map.on('click', 'street-numbers-bg', async (e: any) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const coords = e.features[0].properties.coords;

        const record = await gc.api.getPoisByGeo(gc.geo.create(BigInt(coords)));

        new maplibregl.Popup()
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

      this.updatePOIs();
    });
  }
  //5.9759064903482795
  //6.276111602783203
  connectedCallback() {
    this.render();
    this.addressSearch.addEventListener('address-select', (e: Event) => {
      this.flyToRecord((e as CustomEvent<AddressSelectEvent>).detail.record);
    });
  }

  private flyToRecord(r: gc.mengplaz.POIRecordRef) {
    const loc = r.record.primaryLocation;
    if (loc != null) {
      this.map.flyTo({ center: [loc.lng, loc.lat], zoom: 18 });
      new maplibregl.Popup()
        .setLngLat([loc.lng, loc.lat])
        .setDOMContent(<mengplaz-address-card value={r} showGoTo />)
        .addTo(this.map);
    }
  }

  disconnectedCallback() {
    // Solves a leak inside maplibre
    (this.map.getSource('points') as maplibregl.GeoJSONSource).setData({
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
    (this.map.getSource('points') as maplibregl.GeoJSONSource).setData({
      type: 'FeatureCollection',
      features: features,
    });
  }

  render() {
    this.replaceChildren(
      <>
        <div className="map-search-panel">{this.addressSearch}</div>
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
