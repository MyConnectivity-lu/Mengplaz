import { AttributionControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';

export class MapPage extends HTMLElement {
  private map: maplibregl.Map;
  private mapContainer: HTMLDivElement;

  constructor() {
    super();
    this.mapContainer = (<div style={{ height: '100%' }}></div>) as HTMLDivElement;
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
        glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
      },
      center: gc.core.geo.fromLatLng(49.8, 6.12),
      zoom: 9,
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
          'circle-stroke-width': 1,
          'circle-radius': 3,
        },
      });
      this.map.addLayer({
        id: 'street-numbers-bg',
        type: 'circle',
        source: 'points',
        minzoom: 17,
        paint: {
          'circle-radius': 12,
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
          'text-size': 14,
          'text-allow-overlap': true,
        },
        paint: {
          'text-color': '#000000',
          'text-halo-color': '#ffffff',
          'text-halo-width': 2,
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
        const ref = e.features[0].properties.ref;

        const record = await gc.api.getGoldenRecordDetails(gc.node.create(BigInt(ref)) as any);

        new maplibregl.Popup()
          .setLngLat(coordinates)
          .setDOMContent(<mengplaz-address-card value={record.golden} showGoTo />)
          .addTo(this.map);
      });

      this.map.on('click', 'street-numbers-bg', async (e: any) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const ref = e.features[0].properties.ref;

        const record = await gc.api.getGoldenRecordDetails(gc.node.create(BigInt(ref)) as any);

        new maplibregl.Popup()
          .setLngLat(coordinates)
          .setDOMContent(<mengplaz-address-card value={record.golden} showGoTo />)
          .addTo(this.map);
      });
      this.updatePOIs();
    });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  private async updatePOIs() {
    const attc = this.map._controls.find((c) => c instanceof AttributionControl);
    if (attc != null) {
      attc._updateCompactMinimize();
    }

    const bounds = this.map.getBounds();

    gc.api.getPois(gc.core.geo.fromLatLng(bounds.getSouthWest()), gc.core.geo.fromLatLng(bounds.getNorthEast())).then((result) => {
      (this.map.getSource('points') as maplibregl.GeoJSONSource).setData({
        type: 'FeatureCollection',
        features: result as any,
      });
    });
  }

  render() {
    this.replaceChildren(this.mapContainer);
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
