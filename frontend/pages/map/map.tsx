import { GuiMap, GuiMapMarkers, GuiObject } from '@greycat/web';
import { AttributionControl } from 'maplibre-gl';

import 'maplibre-gl/dist/maplibre-gl.css';
import { handleGoToRecord } from '~/common/utils';

export class MapPage extends HTMLElement {
  private map: GuiMap;
  private markers: GuiMapMarkers;

  constructor() {
    super();
    this.markers = document.createElement('gui-map-markers');
    this.map = document.createElement('gui-map');
    this.map.options = {
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
      center: gc.core.geo.fromLatLng(49.8, 6.12),
      zoom: 9,
    };
    this.map.ready.then((m) => {
      m.on('zoomend', () => this.updatePOIs());
      m.on('dragend', () => this.updatePOIs());
      this.updatePOIs();
    });
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  private async updatePOIs() {
    this.map.ready.then((m) => {
      const attc = m._controls.find((c)=>c instanceof AttributionControl);
      if(attc != null) {
        attc._updateCompactMinimize();
      }
      
      const bounds = m.getBounds();

      gc.api.getPois(gc.core.geo.fromLatLng(bounds.getSouthWest()), gc.core.geo.fromLatLng(bounds.getNorthEast())).then((result) => {
        const pois = [];

        for (const row of result) {
          const popupContent = <div style={{ maxHeight: '30vh', overflow: 'auto' }}></div>;
          popupContent.appendChild(
            <button
              onclick={() => {
                handleGoToRecord(row[1].record.uid);
              }}
            >
              Go to record
            </button>,
          );
          const disp = new GuiObject();
          disp.value = row[1].record;
          popupContent.appendChild(disp);

          pois.push({ geo: row[0], data: popupContent });
        }
        this.markers.value = pois;
      });
    });
  }

  render() {
    this.innerHTML = '';

    let content = <div style={{ height: '100%' }}></div>;

    content.appendChild(this.map);
    this.map.appendChild(this.markers);

    this.appendChild(content);
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
