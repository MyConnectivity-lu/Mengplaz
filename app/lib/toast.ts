import '@awesome.me/webawesome/dist/components/toast/toast.js';
import type WaToast from '@awesome.me/webawesome/dist/components/toast/toast.js';
import type { BadgeVariant } from '~/lib/format';

// Replaces the `toast` helper the previous frontend imported from `@greycat/web`.
// Web Awesome owns the placement, stacking, timer and dismiss affordances, so
// this is a wrapper rather than a component: one shared stack per document,
// created on first use.

let stack: WaToast | undefined;

function getStack(): WaToast {
  if (!stack) {
    stack = document.createElement('wa-toast') as WaToast;
    stack.placement = 'bottom-end';
    document.body.appendChild(stack);
  }
  return stack;
}

/** Transient notification. `duration` of 0 keeps it until dismissed. */
export function toast(message: string, variant: BadgeVariant = 'brand', duration = 4000): void {
  void getStack().create(message, { variant, duration });
}
