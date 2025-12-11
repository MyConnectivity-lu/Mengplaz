import '@greycat/web';
import '@greycat/web/greycat.css';
import './index.css';
import maplibregl from 'maplibre-gl';
import './components/mengplaz-layout/mengplaz-layout';
// initialize GreyCat SDK

await gc.sdk.init({ maplibregl: maplibregl as any, debug: import.meta.env.MODE === 'development' });

document.body.replaceChildren(<mengplaz-layout />);
