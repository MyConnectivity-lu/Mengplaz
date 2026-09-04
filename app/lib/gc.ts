import '@greycat/web/sdk';

// The session gate, and the only module that touches `gc.sdk`. MengPlaz allows
// anonymous browsing - `project.gcl` grants the `public` role the `api`
// permission - so `gc.sdk.init()` succeeds without credentials and `ready()`
// resolves for every visitor, signed in or not. Signing in happens on the
// separate /login.html document, never inside the app.
//
// This is the deliberate difference from the project-template's gate, which
// mounts a sign-in overlay when `init()` fails.

let identity: gc.runtime.Identity | null = null;
let info: gc.RuntimeInfo | null = null;
let started = false;
let resolveReady!: () => void;
let rejectReady!: (reason: unknown) => void;
const readyPromise = new Promise<void>((resolve, reject) => {
  resolveReady = resolve;
  rejectReady = reject;
});

/**
 * Resolves once `gc.*` is usable - the ABI is loaded and the runtime call
 * bindings exist. Memoized: the first caller kicks off the probe, everyone
 * awaits the same promise. `GcPage` awaits this before `onInit()`, so a page
 * never fires `gc.<module>.*` early.
 */
export function ready(): Promise<void> {
  if (!started) {
    started = true;
    void establish();
  }
  return readyPromise;
}

/** The current identity, or null before the gate resolves. */
export function currentUser(): gc.runtime.Identity | null {
  return identity;
}

/** True for a visitor who has not signed in. Anonymous is a supported mode. */
export function isAnonymous(): boolean {
  return identity === null || identity.name === 'public';
}

export function hasPermission(name: string): boolean {
  return gc.$.default.hasPermission(name);
}

/** Runtime metadata (program version), for the footer. Null before the gate resolves. */
export function appInfo(): gc.RuntimeInfo | null {
  return info;
}

/** Clear the session and reload into a clean anonymous state. */
export async function logout(): Promise<void> {
  try {
    await gc.sdk.logout();
  } catch {
    // Best-effort: drop the local session even if the server call fails.
  }
  location.replace('/');
}

async function establish(): Promise<void> {
  try {
    // Pin the API to the origin. The SDK derives its endpoint from
    // `location.origin + location.pathname`, so on an MPA page served from a
    // subdirectory (/record/, /search/, ...) it would otherwise POST to
    // `/record/runtime::Identity::current_id` and 404. The previous SPA never hit
    // this because it only ever ran at `/`.
    await gc.sdk.init({
      url: new URL(location.origin),
      debug: import.meta.env.VITE_ENV === 'dev',
    });
    identity = await gc.runtime.Identity.current();
    info = await gc.appInfo();
    resolveReady();
  } catch (err) {
    rejectReady(err);
  }
}
