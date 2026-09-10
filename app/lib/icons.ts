// The icon set the app actually uses, inlined so there is no icon CDN, no
// per-glyph network request, and no 2,052-file public/ payload (the previous
// frontend shipped the whole Bootstrap icon library to use two dozen glyphs).
//
// Each value is the inner markup of a 24x24 `fill="none" stroke="currentColor"`
// viewBox, so `stroke="currentColor"` picks up the surrounding text colour.
// Add a glyph here when a component needs one; keep the stroke-only style.

export const ICONS = {
  map: '<path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4z"/><path d="M9 4v13"/><path d="M15 6.5v13"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
  reconcile: '<path d="M4 8h12l-3-3"/><path d="M20 16H8l3 3"/>',
  chart: '<path d="M4 4v16h16"/><path d="M8 16v-4"/><path d="M12 16V8"/><path d="M16 16v-6"/>',
  chevronLeft: '<path d="M15 6l-6 6 6 6"/>',
  chevronRight: '<path d="M9 6l6 6-6 6"/>',
  arrowLeft: '<path d="M20 12H4"/><path d="m10 6-6 6 6 6"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  sun: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5z"/>',
  signIn: '<path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/><path d="M10 8l4 4-4 4"/><path d="M14 12H3"/>',
  signOut: '<path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4"/><path d="M17 8l4 4-4 4"/><path d="M21 12H10"/>',
  pin: '<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  link: '<path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.3-2.3a4 4 0 0 0-5.7-5.7L11.5 6.8"/><path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.3 2.3a4 4 0 0 0 5.7 5.7l1.3-1.3"/>',
  unlink:
    '<path d="M9 15l-1.5 1.5a4 4 0 0 1-5.7-5.7L3.5 9"/><path d="M15 9l1.5-1.5a4 4 0 0 1 5.7 5.7L20.5 15"/><path d="M4 4l16 16"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2 6"/><path d="M20 5v6h-6"/>',
  check: '<circle cx="12" cy="12" r="8.5"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  block: '<circle cx="12" cy="12" r="8.5"/><path d="m6.5 6.5 11 11"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  database:
    '<ellipse cx="12" cy="6" rx="7.5" ry="3"/><path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6"/><path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3"/>',
  document: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h6"/>',
  external:
    '<path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5"/>',
  qr: '<rect x="3.5" y="3.5" width="6" height="6" rx="1"/><rect x="14.5" y="3.5" width="6" height="6" rx="1"/><rect x="3.5" y="14.5" width="6" height="6" rx="1"/><path d="M14.5 14.5h2.5v2.5h-2.5z"/><path d="M20.5 14.5v2M14.5 20.5h2.5M20.5 20.5h.01"/>',
  graphUp: '<path d="M4 4v16h16"/><path d="m7 15 4-4 3 3 5-6"/>',
} as const;

export type IconName = keyof typeof ICONS;
