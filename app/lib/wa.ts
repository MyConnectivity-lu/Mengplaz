/**
 * `wa-select`'s change event targets the `wa-select` element itself, which carries a
 * `value`; Web Awesome ships no type declarations, so this states that shape instead of
 * casting to `HTMLSelectElement`, which only compiles by accident.
 */
export type WaSelectElement = EventTarget & { value: string };
