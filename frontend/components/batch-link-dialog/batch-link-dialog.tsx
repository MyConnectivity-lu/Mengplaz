import { sl } from '@greycat/web';

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
}

const OPTIONAL_SCORES: OptionalScoreConfig[] = [
  { key: 'geoScore', label: 'Geo score', def: 99, min: 90, max: 100 },
  { key: 'cityScore', label: 'City score', def: 95, min: 0, max: 100 },
  { key: 'streetScore', label: 'Street score', def: 95, min: 0, max: 100 },
  { key: 'numberScore', label: 'Number score', def: 90, min: 0, max: 100 },
  { key: 'postcodeScore', label: 'Postcode score', def: 95, min: 0, max: 100 },
];

export interface BatchLinkParams {
  globalScore: number;
  geoScore: number | null;
  cityScore: number | null;
  streetScore: number | null;
  numberScore: number | null;
  postcodeScore: number | null;
}

export class BatchLinkDialog extends HTMLElement {
  private dialog: sl.SlDialog;
  private scoreInput?: sl.SlInput;
  private inputs = new Map<OptionalScoreKey, sl.SlInput>();
  private checkboxes = new Map<OptionalScoreKey, sl.SlCheckbox>();
  private resolve?: (value: BatchLinkParams | null) => void;

  constructor() {
    super();
    this.dialog = (<sl-dialog label="Batch Link" style={{ '--width': '420px' }} />) as sl.SlDialog;
  }

  connectedCallback() {
    this.render();
  }

  show(): Promise<BatchLinkParams | null> {
    return new Promise<BatchLinkParams | null>((resolve) => {
      this.resolve = resolve;
      this.render();
      this.dialog.show();
    });
  }

  private clamp(raw: string | undefined, fallback: number, min: number, max: number): number {
    let v = parseFloat(raw ?? String(fallback));
    if (isNaN(v)) v = fallback;
    if (v < min) v = min;
    if (v > max) v = max;
    return v;
  }

  private getResult(): BatchLinkParams {
    // A null optional score tells the backend to ignore that constraint.
    const result: BatchLinkParams = {
      globalScore: this.clamp(this.scoreInput?.value, DEFAULT_SCORE, MIN_SCORE, MAX_SCORE),
      geoScore: null,
      cityScore: null,
      streetScore: null,
      numberScore: null,
      postcodeScore: null,
    };
    for (const cfg of OPTIONAL_SCORES) {
      const enabled = this.checkboxes.get(cfg.key)?.checked ?? false;
      result[cfg.key] = enabled ? this.clamp(this.inputs.get(cfg.key)?.value, cfg.def, cfg.min, cfg.max) : null;
    }
    return result;
  }

  private buildOptionalRow(cfg: OptionalScoreConfig): HTMLElement {
    const input = (
      <sl-input
        label={cfg.label}
        help-text={`Also require the best candidate ${cfg.label.toLowerCase()} to be at or above this value.`}
        type="number"
        min={cfg.min}
        max={cfg.max}
        step={0.1}
        value={String(cfg.def)}
        disabled
      />
    ) as sl.SlInput;

    const checkbox = (<sl-checkbox>Require a minimum {cfg.label.toLowerCase()}</sl-checkbox>) as sl.SlCheckbox;
    checkbox.addEventListener('sl-change', () => {
      input.disabled = !checkbox.checked;
    });

    this.inputs.set(cfg.key, input);
    this.checkboxes.set(cfg.key, checkbox);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sl-spacing-small)' }}>
        {checkbox}
        {input}
      </div>
    ) as HTMLElement;
  }

  render() {
    this.inputs.clear();
    this.checkboxes.clear();

    this.scoreInput = (
      <sl-input
        label="Global score"
        help-text={`Link every reconciled record whose best candidate scores at or above this value. Cannot be lower than ${MIN_SCORE}.`}
        type="number"
        min={MIN_SCORE}
        max={MAX_SCORE}
        step={0.1}
        value={String(DEFAULT_SCORE)}
      />
    ) as sl.SlInput;

    this.dialog.replaceChildren(
      <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sl-spacing-large)' }}>
          <p style={{ color: 'var(--sl-color-neutral-500)', margin: '0' }}>
            Reviews all reconciled records and links those whose best Golden candidate has an overall score greater than or equal to the value below. Enable any
            additional score to further restrict which records get linked.
          </p>
          {this.scoreInput}
          {OPTIONAL_SCORES.map((cfg) => this.buildOptionalRow(cfg))}
        </div>
        <sl-button
          slot="footer"
          variant="primary"
          onclick={() => {
            const score = this.getResult();
            this.dialog.hide();
            this.resolve?.(score);
          }}
        >
          <sl-icon slot="prefix" name="link-45deg"></sl-icon>
          Batch link
        </sl-button>
        <sl-button
          slot="footer"
          variant="default"
          onclick={() => {
            this.dialog.hide();
            this.resolve?.(null);
          }}
        >
          Cancel
        </sl-button>
      </>,
    );
    this.replaceChildren(this.dialog);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'batch-link-dialog': BatchLinkDialog;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'batch-link-dialog': GreyCat.Element<BatchLinkDialog>;
      }
    }
  }
}

if (!customElements.get('batch-link-dialog')) {
  customElements.define('batch-link-dialog', BatchLinkDialog);
}
