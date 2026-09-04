import { LitElement } from 'lit';
import { state } from 'lit/decorators.js';
import { ready } from '~/lib/gc';

/**
 * Base class for every page that talks to the backend. It parks on the session
 * gate (`ready()`) and only then runs `onInit()`, so a subclass may call
 * `gc.<module>.*` freely - the ABI is loaded and the request carries whatever
 * session the visitor has.
 *
 * ```ts
 * @customElement('mengplaz-thing-page')
 * class ThingPage extends GcPage {
 *   @state() private data?: gc.api.Thing;
 *   protected async onInit() {
 *     this.data = await gc.api.thing();
 *   }
 * }
 * ```
 *
 * The gate lives in `connectedCallback`; a subclass that overrides it must call
 * `super.connectedCallback()` first, or it races `gc.sdk.init()`.
 */
export abstract class GcPage extends LitElement {
  /** Message from a failed `onInit()`; empty when there is none. */
  @state() protected loadError = '';
  /** True until `onInit()` has settled, so a page can show a spinner. */
  @state() protected loading = true;

  override async connectedCallback() {
    super.connectedCallback();
    try {
      await ready();
      await this.onInit();
    } catch (err) {
      this.loadError = err instanceof Error ? err.message : String(err);
    } finally {
      this.loading = false;
    }
  }

  /** Runs once, after the session is established. */
  protected abstract onInit(): Promise<void>;
}
