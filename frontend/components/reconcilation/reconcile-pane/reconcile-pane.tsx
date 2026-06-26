import { toast } from '@greycat/web';
import { ComparisonDashboard } from '~/components/comparison/comparison-dashboard/comparison-dashboard';
import '~/components/comparison/comparison-dashboard/comparison-dashboard';
import type { PromoteEvent, ReconcileEvent, SearchCandidateEvent } from '~/components/comparison/master-record-panel/master-record-panel';
import type { LinkEvent } from '~/components/comparison/record-comparison-view/record-comparison-view';
import { MengplazSearchDialog, type SearchSelectEvent } from '~/components/mengplaz-search-dialog/mengplaz-search-dialog';
import '~/components/mengplaz-search-dialog/mengplaz-search-dialog';
import { MengplazPagination } from '~/components/mengplaz-pagination/mengplaz-pagination';
import '~/components/mengplaz-pagination/mengplaz-pagination';
import type { RequestLinkEvent, RequestPromoteEvent, RequestReconcileEvent } from '~/pages/reconcile/reconcile';

import './reconcile-pane.css';

export class ReconcilePane extends HTMLElement {
  private _source: gc.core.node | null = null;
  private _recordIds: string[] = [];
  private _currentIndex = 0;
  private _active = false;
  private _showActions = true;

  private pagination: MengplazPagination;
  private dashboard: ComparisonDashboard;
  private searchDialog: MengplazSearchDialog;
  private bulkActionButton: HTMLElement | null = null;
  private extraControl: HTMLElement | null = null;
  private emptyMessage: HTMLElement;
  private contentContainer: HTMLElement | null = null;

  private currentSourceRecord: gc.POIFullRecordRef | null = null;

  // Set once by parent
  loadData: ((source: gc.core.node, recordId: string) => Promise<gc.privateApi.ComparisonViewData>) | null = null;
  onNavigate: ((index: number) => void) | null = null;
  onIdSearch: ((id: string) => void) | null = null;

  constructor() {
    super();
    this.pagination = (<mengplaz-pagination />) as MengplazPagination;
    this.dashboard = (<comparison-dashboard />) as ComparisonDashboard;
    this.searchDialog = (<mengplaz-search-dialog />) as MengplazSearchDialog;
    this.emptyMessage = (<span>No records found.</span>) as HTMLElement;
  }

  // --- Property setters that trigger targeted updates ---

  set source(val: gc.core.node) {
    this._source = val;
  }

  get source() {
    return this._source!;
  }

  set recordIds(val: string[]) {
    this._recordIds = val;
    this.pagination.total = val.length;
    // Clamp currentIndex
    if (this._currentIndex >= val.length) {
      this._currentIndex = Math.max(0, val.length - 1);
    }
    this.pagination.index = this._currentIndex;
    this.updateVisibility();
    if (this._active) {
      this.loadCurrentRecord();
    }
  }

  get recordIds() {
    return this._recordIds;
  }

  set currentIndex(val: number) {
    this._currentIndex = val;
    this.pagination.index = val;
    if (this._active) {
      this.loadCurrentRecord();
    }
  }

  get currentIndex() {
    return this._currentIndex;
  }

  set active(val: boolean) {
    const prev = this._active;
    this._active = val;
    if (val && !prev) {
      this.loadCurrentRecord();
    }
  }

  get active() {
    return this._active;
  }

  set showActions(val: boolean) {
    this._showActions = val;
    this.dashboard.showActions = val;
  }

  get showActions() {
    return this._showActions;
  }

  setBulkAction(config: { label: string; icon: string; handler: () => void } | null) {
    if (!config) {
      this.bulkActionButton = null;
      return;
    }
    this.bulkActionButton = (
      <sl-button variant="primary" onclick={() => config.handler()}>
        <sl-icon slot="prefix" name={config.icon}></sl-icon>
        {config.label}
      </sl-button>
    ) as HTMLElement;
  }

  // Optional extra control rendered next to the bulk action (e.g. batch-link with score input)
  setExtraControl(el: HTMLElement | null) {
    this.extraControl = el;
  }

  // --- Lifecycle ---

  connectedCallback() {
    // Wire pagination callbacks
    this.pagination.onNavigate = (index) => {
      this._currentIndex = index;
      this.loadCurrentRecord();
      this.onNavigate?.(index);
    };
    this.pagination.onIdSearch = (id) => {
      this.onIdSearch?.(id);
    };

    // Listen for bubbling events from dashboard children
    this.addEventListener('link', this._handleLink);
    this.addEventListener('promote', this._handlePromote);
    this.addEventListener('reconcile', this._handleReconcile);
    this.addEventListener('search-candidate', this._handleSearchCandidate);
    this.searchDialog.addEventListener('search-select', this._handleSearchSelect);

    this.render();
  }

  disconnectedCallback() {
    this.removeEventListener('link', this._handleLink);
    this.removeEventListener('promote', this._handlePromote);
    this.removeEventListener('reconcile', this._handleReconcile);
    this.removeEventListener('search-candidate', this._handleSearchCandidate);
    this.searchDialog.removeEventListener('search-select', this._handleSearchSelect);
  }

  // --- Event handlers (arrow functions to preserve `this`) ---

  private _handleLink = (e: Event) => {
    e.stopPropagation();
    const detail = (e as CustomEvent<LinkEvent>).detail;
    const sourceId = this._recordIds[this._currentIndex];
    if (!sourceId) return;
    this.dispatchEvent(
      new CustomEvent<RequestLinkEvent>('request-link', {
        bubbles: true,
        detail: { sourceRecord: detail.sourceRecord, goldenCandidate: detail.goldenCandidate, sourceId },
      }),
    );
  };

  private _handlePromote = (e: Event) => {
    e.stopPropagation();
    const detail = (e as CustomEvent<PromoteEvent>).detail;
    const sourceId = this._recordIds[this._currentIndex];
    if (!sourceId || !detail.sourceRecord) return;
    this.dispatchEvent(
      new CustomEvent<RequestPromoteEvent>('request-promote', {
        bubbles: true,
        detail: { sourceRecord: detail.sourceRecord, sourceId },
      }),
    );
  };

  private _handleReconcile = (e: Event) => {
    e.stopPropagation();
    const detail = (e as CustomEvent<ReconcileEvent>).detail;
    const sourceId = this._recordIds[this._currentIndex];
    if (!sourceId || !detail.sourceRecord.ref) return;
    this.dispatchEvent(
      new CustomEvent<RequestReconcileEvent>('request-reconcile', {
        bubbles: true,
        detail: { pois: [sourceId], sourceRecordId: sourceId },
      }),
    );
  };

  private _handleSearchCandidate = (e: Event) => {
    e.stopPropagation();
    const detail = (e as CustomEvent<SearchCandidateEvent>).detail;
    this.currentSourceRecord = detail.sourceRecord;
    this.searchDialog.show();
  };

  private _handleSearchSelect = (e: Event) => {
    const detail = (e as CustomEvent<SearchSelectEvent>).detail;
    if (this.currentSourceRecord) {
      const sourceId = this._recordIds[this._currentIndex];
      if (!sourceId) return;
      this.dispatchEvent(
        new CustomEvent<RequestLinkEvent>('request-link', {
          bubbles: true,
          detail: {
            sourceRecord: this.currentSourceRecord.ref,
            goldenCandidate: detail.goldenRecord.ref,
            sourceId,
          },
        }),
      );
    }
  };

  // --- Data loading ---

  private async loadCurrentRecord() {
    if (!this._active || !this._recordIds.length || !this.loadData || !this._source) return;
    const id = this._recordIds[this._currentIndex];
    if (!id) return;
    this.pagination.currentId = id;
    try {
      const data = await this.loadData(this._source, id);
      this.dashboard.comparisonData = data;
    } catch (_) {
      toast.notify({
        message: 'Failed to load record data.',
        variant: 'danger',
        duration: 3000,
        icon: 'exclamation-circle',
      });
    }
  }

  // --- Rendering (called once) ---

  private updateVisibility() {
    if (!this.contentContainer) return;
    const hasRecords = this._recordIds.length > 0;
    this.contentContainer.style.display = hasRecords ? '' : 'none';
    this.emptyMessage.style.display = hasRecords ? 'none' : '';
  }

  private render() {
    this.dashboard.showActions = this._showActions;
    this.pagination.total = this._recordIds.length;
    this.pagination.index = this._currentIndex;
    if (this._recordIds.length > 0) {
      this.pagination.currentId = this._recordIds[this._currentIndex] ?? '';
    }

    const controls = (
      <div className="reconcile-pane-controls">
        {this.pagination}
        {this.bulkActionButton}
        {this.extraControl}
      </div>
    );

    this.contentContainer = (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sl-spacing-medium)', height: '100%' }}>
        {controls}
        {this.dashboard}
      </div>
    ) as HTMLElement;

    this.replaceChildren(this.emptyMessage, this.contentContainer, this.searchDialog);
    this.updateVisibility();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'reconcile-pane': ReconcilePane;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'reconcile-pane': GreyCat.Element<ReconcilePane>;
      }
    }
  }
}

if (!customElements.get('reconcile-pane')) {
  customElements.define('reconcile-pane', ReconcilePane);
}
