export const THEME_KEY = 'theme';

export function updateQueryParam(key: string, value: string) {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.pushState(null, '', url);
}

export function getQueryParam(key: string) {
  const url = new URL(window.location.href);
  return url.searchParams.get(key);
}

export function handleGoToRecord(ref: string) {
  const url = new URL(window.location.href);
  url.searchParams.set('guid', ref);
  url.searchParams.set('page', 'record');
  window.history.pushState(null, '', url);
}

export function prettifyCamelCase(str: string): string {
  if (!str) return '';

  const noSnake = str.replace(/_/g, ' ');

  return (
    noSnake
      // Insert a space before all caps that are followed by lowercase (e.g. "userName" → "user Name")
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // Insert a space before sequences of capital letters followed by lowercase (e.g. "APIResponse" → "API Response")
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
      // Capitalize the first letter
      .replace(/^./, (s) => s.toUpperCase())
  );
}

export function setupTheme() {
  /* Theme */
  let theme = window.localStorage.getItem(THEME_KEY);

  // If not predefined use user preferred scheme
  if (!theme) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
    window.localStorage.setItem(THEME_KEY, theme);
  }
  applyTheme(theme);

  return theme;
}

export function applyTheme(theme: string) {
  document.documentElement.classList.add(`sl-theme-${theme}`);
  document.documentElement.classList.remove(`sl-theme-${theme === 'dark' ? 'light' : 'dark'}`);
  window.localStorage.setItem(THEME_KEY, theme);
}

/**
 * Match quality variant type
 */
export type MatchVariant = 'exact' | 'good' | 'partial' | 'poor';

/**
 * Shoelace badge variant type
 */
export type BadgeVariant = 'success' | 'primary' | 'warning' | 'danger';

/**
 * Map match variant to Shoelace badge variant
 */
export function toBadgeVariant(variant: MatchVariant): BadgeVariant {
  const map: Record<MatchVariant, BadgeVariant> = {
    exact: 'success',
    good: 'primary',
    partial: 'warning',
    poor: 'danger',
  };
  return map[variant];
}

/**
 * Get match quality label and variant based on score (0-100)
 */
export function getMatchQuality(score: number): {
  label: string;
  variant: MatchVariant;
} {
  if (score == 100) return { label: 'EXACT', variant: 'exact' };
  if (score >= 85) return { label: 'GOOD', variant: 'good' };
  if (score >= 65) return { label: 'PARTIAL', variant: 'partial' };
  return { label: 'POOR', variant: 'poor' };
}

/**
 * Calculate distance between two geo points using Haversine formula
 * @returns distance in kilometers
 */
export function calculateDistance(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const R = 6371; // Earth's radius in km
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);

  const x = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

/**
 * Format distance for display
 */
export function formatDistance(km: number): string {
  if (km < 1) {
    return `${Math.round(km * 1000)} m`;
  }
  return `${km.toFixed(1)} km`;
}

/**
 * Get geo match quality based on distance in kilometers
 * @param distanceKm distance in kilometers
 * @returns label and variant for the geo match quality
 */
export function getGeoMatchQuality(distanceKm: number): {
  label: string;
  variant: MatchVariant;
} {
  if (distanceKm < 0.01) return { label: 'Exact', variant: 'exact' }; // < 10m
  if (distanceKm < 0.05) return { label: 'High', variant: 'good' }; // < 50m
  if (distanceKm < 0.1) return { label: 'Medium', variant: 'partial' }; // < 100m
  return { label: 'Low', variant: 'poor' }; // >= 100m
}
