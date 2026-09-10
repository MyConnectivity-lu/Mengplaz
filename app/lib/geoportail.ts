// Shared Geoportail Luxembourg map configuration, used by the map page and the
// minimap. Carried over verbatim from the previous frontend - these URLs, the
// attribution strings and the bounding box are all load-bearing.

/** Geoportail Luxembourg vector basemap. Alternatives: 'topomap', 'topomap_gray'. */
export const GEOPORTAIL_STYLE = 'https://vectortiles.geoportail.lu/styles/roadmap/style.json';

/**
 * Official orthophoto 2025 (geocatalogue uuid c0aefcaa-5cc6-40ed-84cd-695f9f5b9eed),
 * served as WMTS raster tiles (CORS-enabled, EPSG:3857). Subdomains wmts1-4 load-balance.
 */
export const ORTHO_TILES = [1, 2, 3, 4].map(
  (i) => `https://wmts${i}.geoportail.lu/mapproxy_4_v3/wmts/ortho_2025/GLOBAL_WEBMERCATOR_4_V3/{z}/{x}/{y}.jpeg`,
);

/**
 * Transparent WMS overlay (geoportail public_map_layers, layer 351) drawn on top of the
 * ortho basemap. Served as WMS 1.3.0 GetMap; maplibre expands {bbox-epsg-3857} per tile.
 */
export const ORTHO_OVERLAY_TILES = [
  'https://wms.geoportail.lu/public_map_layers/service?REQUEST=GetMap&SERVICE=WMS&VERSION=1.3.0' +
    '&FORMAT=image%2Fpng&STYLES=&TRANSPARENT=TRUE&LAYERS=351&WIDTH=256&HEIGHT=256' +
    '&CRS=EPSG%3A3857&BBOX={bbox-epsg-3857}',
];

/**
 * Credit for the geoportail basemap, orthophoto and cadastral layers (all served by the
 * Administration du cadastre et de la topographie via geoportail.lu).
 */
export const GEOPORTAIL_ATTRIBUTION =
  '&copy; <a href="https://www.geoportail.lu" target="_blank" rel="noopener">geoportail.lu</a> / Administration du cadastre et de la topographie';

/**
 * Required ODbL attribution: the address points displayed are derived in part from
 * OpenStreetMap data (see backend/edi/osmLoader.gcl). Shown even though the map tiles are
 * not OSM, because the *data* on the map is OSM-derived.
 */
export const OSM_DATA_ATTRIBUTION =
  'Address data &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors (ODbL)';

/** Luxembourg bounding box plus a ~100km margin (~0.9 lat, ~1.4 lng at 50N). */
export const LUXEMBOURG_BOUNDS: [[number, number], [number, number]] = [
  [4.336, 48.548],
  [7.932, 51.083],
];
