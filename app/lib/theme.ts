// Theme helpers shared across pages.
//
// Canvas-based consumers (ECharts, maplibre) cannot read CSS custom properties,
// so `currentColors()` resolves the `--gc-*` tokens to concrete values for them.
// DOM components read `var(--gc-*)` directly and ignore this module.
import '~/theme.css';

// The key the previous frontend used, so an existing user's preference survives
// the migration rather than silently resetting to dark.
const MODE_KEY = 'theme';

export type Mode = 'dark' | 'light';

export function currentMode(): Mode {
  return document.documentElement.classList.contains('wa-light') ? 'light' : 'dark';
}

export function applyMode(mode: Mode): void {
  const el = document.documentElement;
  el.classList.toggle('wa-light', mode === 'light');
  el.classList.toggle('wa-dark', mode === 'dark');
  localStorage.setItem(MODE_KEY, mode);
  window.dispatchEvent(new CustomEvent('gc-theme', { detail: mode }));
}

/** Flip dark/light, persist, and notify listeners (charts re-read their colours). */
export function toggleMode(): Mode {
  const next: Mode = currentMode() === 'dark' ? 'light' : 'dark';
  applyMode(next);
  return next;
}

/** Restore the persisted mode, falling back to the OS preference. Call once per page. */
export function initMode(): void {
  const saved = localStorage.getItem(MODE_KEY);
  if (saved === 'dark' || saved === 'light') {
    applyMode(saved);
    return;
  }
  applyMode(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
}

export type SourceKey = 'Golden' | 'BDA' | 'OSM' | 'CACLR';

export interface Colors {
  text: string;
  muted: string;
  border: string;
  grid: string;
  surface: string;
  accent: string;
  series: string[];
  sources: Record<SourceKey, string>;
  other: string;
}

/** Resolve the `--gc-*` tokens to concrete values for canvas libraries. */
export function currentColors(): Colors {
  const s = getComputedStyle(document.documentElement);
  const v = (name: string) => s.getPropertyValue(name).trim();
  return {
    text: v('--gc-text'),
    muted: v('--gc-muted'),
    border: v('--gc-border'),
    grid: v('--gc-hair'),
    surface: v('--gc-surface'),
    accent: v('--gc-accent'),
    series: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => v(`--gc-c${i}`)),
    sources: {
      Golden: v('--gc-src-golden'),
      BDA: v('--gc-src-bda'),
      OSM: v('--gc-src-osm'),
      CACLR: v('--gc-src-caclr'),
    },
    other: v('--gc-src-other'),
  };
}
