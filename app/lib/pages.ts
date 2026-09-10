import type { IconName } from '~/lib/icons';

// Single source of truth for the nav. `href` must match the MPA layout under
// app/pages/ and the `PATHS` map in ~/lib/routing.
//
// There is no separate home entry: the map IS the index, as it always has been.

export interface PageLink {
  href: string;
  label: string;
  icon: IconName;
  /** When set, the entry is hidden unless the session holds this permission. */
  requiredPermission?: string;
}

export const PAGES: PageLink[] = [
  { href: '/', label: 'Map', icon: 'map' },
  { href: '/search/', label: 'Search', icon: 'search' },
  { href: '/browse/', label: 'Index', icon: 'list' },
  { href: '/quality/', label: 'Quality Dashboard', icon: 'chart' },
  { href: '/stats/', label: 'Statistics', icon: 'graphUp' },
  { href: '/reconcile/', label: 'Reconcile', icon: 'reconcile', requiredPermission: 'admin' },
];
