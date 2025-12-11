import { GeoData, GuiMap, GuiMapMarkers } from '@greycat/web';

export class MiniMap extends HTMLElement {
  primary?: gc.geo;
  locations?: Map<string, gc.geo>;

  private map: GuiMap;
  private markers: GuiMapMarkers;

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

    this.markers = new GuiMapMarkers();
  }

  connectedCallback() {
    this.render();
    this.map.style.height = '200px';
    this.map.ready.then((m) => {
      if (this.primary) {
        const markers: GeoData<null>[] = [];
        markers.push({ geo: this.primary, data: null });
        this.markers.value = markers;
        m.setCenter([markers[0].geo.lng, markers[0].geo.lat]);
      }
    });
  }

  disconnectedCallback() {}

  render() {
    this.innerHTML = '';

    let content = <div style={{ height: '200px', width: '100%' }}></div>;

    content.appendChild(this.map);
    this.map.appendChild(this.markers);

    this.appendChild(content);
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
