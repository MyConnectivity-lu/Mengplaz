import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/spinner/spinner.js';
import '~/components/comparison/mp-comparison-dashboard';
import '~/components/comparison/mp-completion-message';
import '~/components/dialogs/mp-search-dialog';
import type { MpSearchDialog, SearchSelectEvent } from '~/components/dialogs/mp-search-dialog';
import '~/components/reconcile/mp-record-pager';
import { ICONS, type IconName } from '~/lib/icons';
import { toast } from '~/lib/toast';
import type {
  LinkEvent,
  PromoteEvent,
  ReconcileEvent,
  RequestLinkEvent,
  RequestPromoteEvent,
  RequestReconcileEvent,
  SearchCandidateEvent,
} from '~/components/comparison/events';

export interface BulkAction {
  label: string;
  icon: IconName;
}

/**
 * One reconcile tab: a queue of source record ids, the comparison dashboard for
 * the current one, and the tab's bulk action.
 *
 * The pane only fetches while it is the active tab - five panes eagerly loading
 * their first record would fire five comparison queries per report.
 */
@customElement('mp-reconcile-pane')
export class MpReconcilePane extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: var(--gc-gap);
    }
    .spring {
      flex: 1;
    }
    .actions {
      display: flex;
      gap: 0.35rem;
      flex-wrap: wrap;
    }
    .center {
      display: grid;
      place-items: center;
      padding: 2rem;
    }
    .ico {
      width: 15px;
      height: 15px;
    }
  `;

  @property({ attribute: false }) source: gc.core.node | null = null;
  @property({ attribute: false }) recordIds: string[] = [];
  @property({ attribute: false }) loadData:
    | ((source: gc.core.node, recordId: string) => Promise<gc.privateApi.ComparisonViewData>)
    | null = null;
  @property({ type: Boolean, attribute: 'show-actions' }) showActions = true;
  @property({ type: Boolean }) active = false;
  @property({ attribute: false }) bulkAction: BulkAction | null = null;
  /** Label of the tab, used by the all-reviewed message. */
  @property() category = '';
  /** Show the batch-link control alongside the bulk action. */
  @property({ type: Boolean, attribute: 'show-batch-link' }) showBatchLink = false;

  /** Position in the queue. Read by the page so an action can keep the
      reviewer near where they were once a record leaves the tab. */
  @state() index = 0;
  @state() private data: gc.privateApi.ComparisonViewData | null = null;
  @state() private busy = false;

  @query('mp-search-dialog') private searchDialog?: MpSearchDialog;

  private currentSourceRecord: gc.AddressFullRecordRef | null = null;

  protected override updated(changed: Map<string, unknown>) {
    // Load when this pane becomes active, and whenever the queue or the position
    // within it changes while it is active.
    if (changed.has('active') || changed.has('recordIds') || changed.has('index')) {
      if (this.active) {
        void this.load();
      }
    }
  }

  /** Move to a record by index, clamped into the queue. */
  goto(index: number) {
    this.index = Math.min(Math.max(0, index), Math.max(0, this.recordIds.length - 1));
  }

  private get currentId(): string {
    return this.recordIds[this.index] ?? '';
  }

  private async load() {
    const id = this.currentId;
    if (!id || !this.loadData || !this.source) {
      this.data = null;
      return;
    }
    this.busy = true;
    try {
      this.data = await this.loadData(this.source, id);
    } catch {
      this.data = null;
      toast('Failed to load record data.', 'danger');
    } finally {
      this.busy = false;
    }
  }

  private icon(inner: string, slot = '') {
    return html`<svg
      slot=${slot}
      class="ico"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      ${unsafeSVG(inner)}
    </svg>`;
  }

  // Each of these adds the current source id, which the page needs to know which
  // row of the report the action applies to, and re-emits upward.
  private onLink = (e: Event) => {
    e.stopPropagation();
    const detail = (e as CustomEvent<LinkEvent>).detail;
    const sourceId = this.currentId;
    if (!sourceId) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent<RequestLinkEvent>('request-link', {
        bubbles: true,
        composed: true,
        detail: { ...detail, sourceId },
      }),
    );
  };

  private onPromote = (e: Event) => {
    e.stopPropagation();
    const detail = (e as CustomEvent<PromoteEvent>).detail;
    const sourceId = this.currentId;
    if (!sourceId || !detail.sourceRecord) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent<RequestPromoteEvent>('request-promote', {
        bubbles: true,
        composed: true,
        detail: { sourceRecord: detail.sourceRecord, sourceId },
      }),
    );
  };

  private onReconcile = (e: Event) => {
    e.stopPropagation();
    const detail = (e as CustomEvent<ReconcileEvent>).detail;
    const sourceId = this.currentId;
    if (!sourceId || !detail.sourceRecord.ref) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent<RequestReconcileEvent>('request-reconcile', {
        bubbles: true,
        composed: true,
        detail: { pois: [sourceId], sourceRecordId: sourceId },
      }),
    );
  };

  private onSearchCandidate = (e: Event) => {
    e.stopPropagation();
    this.currentSourceRecord = (e as CustomEvent<SearchCandidateEvent>).detail.sourceRecord;
    this.searchDialog?.show();
  };

  private onSearchSelect = (e: CustomEvent<SearchSelectEvent>) => {
    const sourceId = this.currentId;
    if (!this.currentSourceRecord || !sourceId) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent<RequestLinkEvent>('request-link', {
        bubbles: true,
        composed: true,
        detail: {
          sourceRecord: this.currentSourceRecord.ref,
          goldenCandidate: e.detail.goldenRecord.ref,
          sourceId,
        },
      }),
    );
  };

  render() {
    if (this.recordIds.length === 0) {
      return html`<mp-completion-message category=${this.category}></mp-completion-message>`;
    }
    return html`
      <div
        @link=${this.onLink}
        @promote=${this.onPromote}
        @reconcile=${this.onReconcile}
        @search-candidate=${this.onSearchCandidate}
      >
        <div class="controls">
          <mp-record-pager
            .total=${this.recordIds.length}
            .index=${this.index}
            .currentId=${this.currentId}
            @navigate=${(e: CustomEvent<{ index: number }>) => this.goto(e.detail.index)}
            @id-search=${(e: CustomEvent<{ id: string }>) =>
              this.dispatchEvent(new CustomEvent('id-search', { detail: e.detail, bubbles: true, composed: true }))}
          ></mp-record-pager>
          <span class="spring"></span>
          <div class="actions">
            ${
              this.bulkAction
                ? html`<wa-button
                    variant="brand"
                    size="s"
                    @click=${() =>
                      this.dispatchEvent(new CustomEvent('bulk-action', { bubbles: true, composed: true }))}
                  >
                    ${this.icon(ICONS[this.bulkAction.icon], 'start')} ${this.bulkAction.label}
                  </wa-button>`
                : ''
            }
            ${
              this.showBatchLink
                ? html`<wa-button
                    variant="brand"
                    size="s"
                    @click=${() => this.dispatchEvent(new CustomEvent('batch-link', { bubbles: true, composed: true }))}
                  >
                    ${this.icon(ICONS.link, 'start')} Batch link
                  </wa-button>`
                : ''
            }
          </div>
        </div>
        ${
          this.busy
            ? html`<div class="center"><wa-spinner></wa-spinner></div>`
            : html`<mp-comparison-dashboard
                .comparisonData=${this.data}
                ?show-actions=${this.showActions}
              ></mp-comparison-dashboard>`
        }
        <mp-search-dialog
          @search-select=${(e: CustomEvent<SearchSelectEvent>) => this.onSearchSelect(e)}
        ></mp-search-dialog>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-reconcile-pane': MpReconcilePane;
  }
}
