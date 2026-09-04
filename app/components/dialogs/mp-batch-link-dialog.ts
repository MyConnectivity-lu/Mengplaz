import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js';

const DEFAULT_SCORE = 99;
const MIN_SCORE = 80;
const MAX_SCORE = 100;

type OptionalScoreKey = 'geoScore' | 'cityScore' | 'streetScore' | 'numberScore' | 'postcodeScore';

interface OptionalScoreConfig {
  key: OptionalScoreKey;
  label: string;
  def: number;
  min: number;
  max: number;
  enabled: boolean;
}

const OPTIONAL_SCORES: OptionalScoreConfig[] = [
  { key: 'geoScore', label: 'Geo score', def: 98, min: 90, max: 100, enabled: true },
  { key: 'cityScore', label: 'Locality score', def: 95, min: 0, max: 100, enabled: false },
  { key: 'streetScore', label: 'Street score', def: 95, min: 0, max: 100, enabled: false },
  { key: 'numberScore', label: 'Number score', def: 99, min: 0, max: 100, enabled: true },
  { key: 'postcodeScore', label: 'Postcode score', def: 99, min: 0, max: 100, enabled: true },
];

export interface BatchLinkParams {
  globalScore: number;
  geoScore: number | null;
  cityScore: number | null;
  streetScore: number | null;
  numberScore: number | null;
  postcodeScore: number | null;
}

/**
 * Link every candidate pair whose scores clear the given floors, in one call.
 * An unchecked constraint is sent as null, which tells the backend to ignore
 * that dimension entirely rather than to require zero.
 */
@customElement('mp-batch-link-dialog')
export class MpBatchLinkDialog extends LitElement {
  static styles = css`
    wa-dialog {
      --width: 440px;
    }
    .stack {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
    }
    .row {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .lead {
      color: var(--gc-muted);
      font-size: var(--wa-font-size-s);
      margin: 0;
    }
  `;

  @state() private open = false;
  /** Which optional constraints are active; drives each input's disabled state. */
  @state() private enabled: Record<OptionalScoreKey, boolean> = Object.fromEntries(
    OPTIONAL_SCORES.map((c) => [c.key, c.enabled]),
  ) as Record<OptionalScoreKey, boolean>;

  private resolve?: (value: BatchLinkParams | null) => void;

  show(): Promise<BatchLinkParams | null> {
    this.open = true;
    return new Promise((resolve) => {
      this.resolve = resolve;
    });
  }

  private clamp(raw: string | undefined, fallback: number, min: number, max: number): number {
    let v = Number.parseFloat(raw ?? String(fallback));
    if (Number.isNaN(v)) {
      v = fallback;
    }
    return Math.min(max, Math.max(min, v));
  }

  private inputValue(id: string): string | undefined {
    return this.renderRoot.querySelector<HTMLInputElement>(`#${id}`)?.value;
  }

  private collect(): BatchLinkParams {
    const result: BatchLinkParams = {
      globalScore: this.clamp(this.inputValue('global-score'), DEFAULT_SCORE, MIN_SCORE, MAX_SCORE),
      geoScore: null,
      cityScore: null,
      streetScore: null,
      numberScore: null,
      postcodeScore: null,
    };
    for (const cfg of OPTIONAL_SCORES) {
      result[cfg.key] = this.enabled[cfg.key] ? this.clamp(this.inputValue(cfg.key), cfg.def, cfg.min, cfg.max) : null;
    }
    return result;
  }

  private finish(value: BatchLinkParams | null) {
    this.open = false;
    this.resolve?.(value);
    this.resolve = undefined;
  }

  render() {
    return html`
      <wa-dialog
        label="Batch Link"
        ?open=${this.open}
        @wa-hide=${() => {
          if (this.resolve) {
            this.finish(null);
          }
        }}
      >
        <div class="stack">
          <p class="lead">Link every pair whose best candidate clears these scores.</p>
          <wa-input
            id="global-score"
            label="Global score"
            with-label
            type="number"
            min=${MIN_SCORE}
            max=${MAX_SCORE}
            step="0.1"
            value=${String(DEFAULT_SCORE)}
          ></wa-input>
          ${OPTIONAL_SCORES.map(
            (cfg) => html`<div class="row">
              <wa-checkbox
                ?checked=${this.enabled[cfg.key]}
                @change=${(e: Event) => {
                  this.enabled = {
                    ...this.enabled,
                    [cfg.key]: (e.target as HTMLInputElement).checked,
                  };
                }}
              >
                Require a minimum ${cfg.label.toLowerCase()}
              </wa-checkbox>
              <wa-input
                id=${cfg.key}
                label=${cfg.label}
                with-label
                hint="Also require the best candidate ${cfg.label.toLowerCase()} to be at or above this value."
                type="number"
                min=${cfg.min}
                max=${cfg.max}
                step="0.1"
                value=${String(cfg.def)}
                ?disabled=${!this.enabled[cfg.key]}
              ></wa-input>
            </div>`,
          )}
        </div>
        <wa-button slot="footer" variant="brand" @click=${() => this.finish(this.collect())}>Link</wa-button>
        <wa-button slot="footer" appearance="outlined" @click=${() => this.finish(null)}>Cancel</wa-button>
      </wa-dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-batch-link-dialog': MpBatchLinkDialog;
  }
}
