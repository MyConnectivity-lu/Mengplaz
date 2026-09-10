// maplibre-gl 6 resolves its web worker at *runtime* with
// `new URL('./maplibre-gl-worker.mjs', import.meta.url)` (see `defaultWorkerUrl` in
// maplibre-gl-dev.mjs). The bundler cannot see that reference, so the worker chunk is
// never emitted and the request 404s. Without a worker every vector tile stays in the
// `loading` state forever, `style.loaded()` never turns true, `map.on('load')` never
// fires and any work scheduled from it (POI loading) silently never runs.
//
// Importing it with `?worker&url` makes the bundler emit a self-contained worker chunk
// (a plain `?url` copy would still import the un-emitted `maplibre-gl-shared.mjs`) and
// gives us its hashed/base-aware URL, which we hand to maplibre before any Map is created.
import { setWorkerUrl } from 'maplibre-gl';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';

setWorkerUrl(workerUrl);
