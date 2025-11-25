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
