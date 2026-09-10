// MPA routing. Each page is its own document; navigation between pages is a
// plain <a href>. In-page state that must survive a reload lives in query
// params, exactly as it did in the SPA (`guid`, `source`, `tab`, `sourceId`).
//
// The legacy `?page=` shim is PERMANENT, not transitional: app.mengplaz.lu
// links are shared externally and must keep resolving.

export type LegacyPage = 'map' | 'search' | 'index' | 'reconcile' | 'record' | 'quality-history';

/** Legacy `?page=` value -> the document that now serves it. */
export const PATHS: Record<LegacyPage, string> = {
  map: '/',
  search: '/search/',
  index: '/browse/',
  reconcile: '/reconcile/',
  record: '/record/',
  'quality-history': '/quality/',
};

/**
 * Honour a legacy `?page=` URL. Call FIRST in the index page's module, before
 * anything renders, so a legacy link never paints the wrong page. Every other
 * query param is carried through untouched.
 *
 * Returns true when it has navigated away, so the caller can skip rendering.
 */
export function redirectLegacy(): boolean {
  const url = new URL(location.href);
  const page = url.searchParams.get('page');
  if (page === null) {
    return false;
  }
  url.searchParams.delete('page');
  const target = PATHS[page as LegacyPage] ?? '/';
  const next = `${target}${url.search}`;
  // `?page=map` is already the right document: strip the param in place rather
  // than bouncing the browser through a navigation.
  if (target === location.pathname) {
    history.replaceState(null, '', next);
    return false;
  }
  location.replace(next);
  return true;
}

export function getQueryParam(key: string): string | null {
  return new URL(location.href).searchParams.get(key);
}

/** Update one query param in place, without pushing a history entry. */
export function setQueryParam(key: string, value: string): void {
  const url = new URL(location.href);
  url.searchParams.set(key, value);
  history.replaceState(null, '', url);
}

export function deleteQueryParam(key: string): void {
  const url = new URL(location.href);
  url.searchParams.delete(key);
  history.replaceState(null, '', url);
}

/** The canonical link to one golden record. Replaces the old `handleGoToRecord`. */
export function recordHref(guid: string): string {
  return `${PATHS.record}?guid=${encodeURIComponent(guid)}`;
}
