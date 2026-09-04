import { currentColors, type SourceKey } from '~/lib/theme';

// Presentation helpers carried over from the previous frontend's common/utils.
// Theme and routing helpers that used to live alongside these now have their own
// modules (`~/lib/theme`, `~/lib/routing`).

/** Match quality band. Drives both the label and the badge colour. */
export type MatchVariant = 'exact' | 'good' | 'partial' | 'poor';

/** Web Awesome's variant union, shared by `wa-badge`, `wa-callout` and `wa-toast-item`. */
export type BadgeVariant = 'success' | 'brand' | 'warning' | 'danger' | 'neutral';

export function toBadgeVariant(variant: MatchVariant): BadgeVariant {
  const map: Record<MatchVariant, BadgeVariant> = {
    exact: 'success',
    good: 'brand',
    partial: 'warning',
    poor: 'danger',
  };
  return map[variant];
}

/** Band a 0-100 match score. */
export function getMatchQuality(score: number): { label: string; variant: MatchVariant } {
  if (score === 100) {
    return { label: 'EXACT', variant: 'exact' };
  }
  if (score >= 85) {
    return { label: 'GOOD', variant: 'good' };
  }
  if (score >= 65) {
    return { label: 'PARTIAL', variant: 'partial' };
  }
  return { label: 'POOR', variant: 'poor' };
}

/** Band a geographic separation. Thresholds are 10m / 50m / 100m. */
export function getGeoMatchQuality(distanceKm: number): { label: string; variant: MatchVariant } {
  if (distanceKm < 0.01) {
    return { label: 'Exact', variant: 'exact' };
  }
  if (distanceKm < 0.05) {
    return { label: 'High', variant: 'good' };
  }
  if (distanceKm < 0.1) {
    return { label: 'Medium', variant: 'partial' };
  }
  return { label: 'Low', variant: 'poor' };
}

/** Great-circle distance in kilometres (Haversine). */
export function calculateDistance(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const x =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

export function formatDistance(km: number): string {
  return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`;
}

export function prettifyCamelCase(str: string): string {
  if (!str) {
    return '';
  }
  return (
    str
      .replace(/_/g, ' ')
      // "userName" -> "user Name"
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // "APIResponse" -> "API Response"
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
      .replace(/^./, (s) => s.toUpperCase())
  );
}

const DATE_FMT = new Intl.DateTimeFormat('fr', { dateStyle: 'medium', timeStyle: 'short' });
const NUM_FMT = new Intl.NumberFormat();

/** Replaces `<sl-format-date lang="fr">`. */
export function formatDate(date: Date): string {
  return DATE_FMT.format(date);
}

export function formatNumber(value: number): string {
  return NUM_FMT.format(value);
}

/** Resolved colour for a data source, for canvas and maplibre consumers. */
export function colorForSource(key: string): string {
  const c = currentColors();
  return c.sources[key as SourceKey] ?? c.other;
}
