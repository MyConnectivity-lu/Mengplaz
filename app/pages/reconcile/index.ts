import { html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/select/select.js';
import '@awesome.me/webawesome/dist/components/option/option.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/badge/badge.js';
import '@awesome.me/webawesome/dist/components/tab-group/tab-group.js';
import '@awesome.me/webawesome/dist/components/tab/tab.js';
import '@awesome.me/webawesome/dist/components/tab-panel/tab-panel.js';
import '@awesome.me/webawesome/dist/components/callout/callout.js';
import '@awesome.me/webawesome/dist/components/spinner/spinner.js';
import { initMode } from '~/lib/theme';
import { GcPage } from '~/lib/gc-page';
import { hasPermission } from '~/lib/gc';
import { deleteQueryParam, getQueryParam, setQueryParam } from '~/lib/routing';
import { toast } from '~/lib/toast';
import '~/components/mengplaz-app-shell';
import '~/components/mp-address-search';
import type { AddressSelectEvent } from '~/components/mp-address-search';
import '~/components/reconcile/mp-reconcile-pane';
import type { MpReconcilePane, BulkAction } from '~/components/reconcile/mp-reconcile-pane';
import '~/components/dialogs/mp-confirm-dialog';
import type { MpConfirmDialog } from '~/components/dialogs/mp-confirm-dialog';
import '~/components/dialogs/mp-promotion-dialog';
import type { MpPromotionDialog } from '~/components/dialogs/mp-promotion-dialog';
import '~/components/dialogs/mp-search-parameters-dialog';
import { DEFAULT_SEARCH_PARAMS, type MpSearchParametersDialog } from '~/components/dialogs/mp-search-parameters-dialog';
import '~/components/dialogs/mp-batch-link-dialog';
import type { MpBatchLinkDialog } from '~/components/dialogs/mp-batch-link-dialog';
import type { RequestLinkEvent, RequestPromoteEvent, RequestReconcileEvent } from '~/components/comparison/events';

initMode();

/** How often to re-check whether a running reconciliation has released the source. */
const POLL_MS = 5000;

type TabKey = 'Linked' | 'Matched' | 'MultipleMatch' | 'Mismatched' | 'NoMatch';

interface TabConfig {
  key: TabKey;
  label: string;
  badgeVariant: 'success' | 'brand' | 'warning' | 'danger' | 'neutral';
  getRecordIds: (report: gc.privateApi.ReconciliationReportView) => string[];
  loadData: (
    source: gc.core.node<gc.mengplaz.DataSource>,
    recordId: string,
  ) => Promise<gc.privateApi.ComparisonViewData>;
  showActions: boolean;
  bulkAction: BulkAction | null;
}

const TAB_CONFIG: TabConfig[] = [
  {
    key: 'Linked',
    label: 'Linked',
    badgeVariant: 'success',
    showActions: false,
    loadData: (s, id) => gc.getLinkedComparisonViewData(s, id),
    getRecordIds: (r) => r.linked,
    bulkAction: { label: 'Merge All positions', icon: 'layers' },
  },
  {
    key: 'Matched',
    label: 'Matched',
    badgeVariant: 'success',
    showActions: true,
    loadData: (s, id) => gc.getComparisonViewData(s, id),
    getRecordIds: (r) => r.fullMatch,
    bulkAction: { label: 'Link all matched', icon: 'link' },
  },
  {
    key: 'MultipleMatch',
    label: 'Multiple Match',
    badgeVariant: 'warning',
    showActions: true,
    loadData: (s, id) => gc.getComparisonViewData(s, id),
    getRecordIds: (r) => r.multipleMatch,
    bulkAction: { label: 'Reconcile all', icon: 'refresh' },
  },
  {
    key: 'Mismatched',
    label: 'Mismatched',
    badgeVariant: 'success',
    showActions: true,
    loadData: (s, id) => gc.getComparisonViewData(s, id),
    getRecordIds: (r) => r.partialMatch.map((m) => m.id),
    bulkAction: { label: 'Reconcile all', icon: 'refresh' },
  },
  {
    key: 'NoMatch',
    label: 'No Match',
    badgeVariant: 'success',
    showActions: true,
    loadData: (s, id) => gc.getComparisonViewData(s, id),
    getRecordIds: (r) => r.noMatch,
    bulkAction: { label: 'Reconcile all', icon: 'refresh' },
  },
];

/** Which tab currently holds a record, and at what position. */
function findRecordTab(
  report: gc.privateApi.ReconciliationReportView,
  sourceId: string,
): { config: TabConfig; index: number } | null {
  for (const config of TAB_CONFIG) {
    const index = config.getRecordIds(report).indexOf(sourceId);
    if (index !== -1) {
      return { config, index };
    }
  }
  return null;
}

type PlainTab = 'linked' | 'fullMatch' | 'multipleMatch' | 'noMatch';

const PLAIN_TABS: Array<[TabKey, PlainTab]> = [
  ['Linked', 'linked'],
  ['Matched', 'fullMatch'],
  ['MultipleMatch', 'multipleMatch'],
  ['NoMatch', 'noMatch'],
];

/**
 * Drop a record from whichever tab holds it. Mutating the report locally keeps
 * the queue moving after an action without re-fetching the whole report. Lists
 * are replaced, never spliced: a pane only reloads when its `recordIds` changes
 * identity.
 */
function removeRecordFromReport(report: gc.privateApi.ReconciliationReportView, sourceId: string): TabKey | null {
  for (const [key, field] of PLAIN_TABS) {
    if (report[field].includes(sourceId)) {
      report[field] = report[field].filter((id) => id !== sourceId);
      return key;
    }
  }
  if (report.partialMatch.some((m) => m.id === sourceId)) {
    report.partialMatch = report.partialMatch.filter((m) => m.id !== sourceId);
    return 'Mismatched';
  }
  return null;
}

/** Insert a record into a tab; mismatches stay ordered by descending score. */
function addRecordToReport(
  report: gc.privateApi.ReconciliationReportView,
  sourceId: string,
  tab: TabKey,
  score?: number | null,
) {
  if (tab === 'Mismatched') {
    const entry = { id: sourceId, score: score ?? null } as gc.privateApi.ReconciliationReportMatchView;
    const list = [...report.partialMatch];
    const at = list.findIndex((m) => (m.score ?? 0) < (score ?? 0));
    list.splice(at === -1 ? list.length : at, 0, entry);
    report.partialMatch = list;
    return;
  }
  const field = PLAIN_TABS.find(([key]) => key === tab)?.[1];
  if (field) {
    report[field] = [...report[field], sourceId];
  }
}

/**
 * The admin reconciliation workspace: pick a source, run matching against the
 * golden set, and work through the resulting queues tab by tab.
 *
 * Permission gating here is presentational only - the backend enforces
 * `@permission("admin")` on every private endpoint. The page checks so an
 * unauthorised visitor gets an explanation instead of a wall of failed requests.
 */
@customElement('mengplaz-reconcile-page')
export class MengplazReconcilePage extends GcPage {
  static styles = css`
    .stack {
      display: flex;
      flex-direction: column;
      gap: var(--gc-gap);
    }
    .lead {
      color: var(--gc-muted);
      font-size: var(--wa-font-size-s);
      margin: 0;
    }
    .controls {
      display: flex;
      gap: 0.5rem;
      align-items: flex-end;
      flex-wrap: wrap;
    }
    .controls wa-select {
      min-width: 12rem;
    }
    .search {
      flex: 1;
      min-width: 16rem;
    }
    .center {
      display: grid;
      place-items: center;
      gap: 0.5rem;
      padding: 3rem 1rem;
      color: var(--gc-muted);
    }
    wa-tab wa-badge {
      margin-inline-start: 0.35rem;
    }
    /* ---- Reconciling shield ---- */
    /* The run holds a lock on the source, so every action in the report below
       would fail against stale data. The shield covers the report only: the
       pickers above it stay live so another source can be worked on meanwhile. */
    .report {
      position: relative;
      min-height: 8rem;
    }
    .shield {
      position: absolute;
      inset: 0;
      z-index: 10;
      display: grid;
      place-items: center;
      padding: 1rem;
      background: color-mix(in srgb, var(--gc-bg) 55%, transparent);
      backdrop-filter: blur(3px) saturate(120%);
      -webkit-backdrop-filter: blur(3px) saturate(120%);
      animation: mp-shield-fade 0.16s ease both;
    }
    .shield-card {
      display: grid;
      justify-items: center;
      gap: 0.6rem;
      max-width: 28rem;
      padding: 1.4rem 1.6rem;
      text-align: center;
      background: var(--gc-surface);
      border: 1px solid var(--gc-border);
      border-radius: var(--gc-radius);
      box-shadow: var(--gc-shadow);
    }
    .shield-card wa-spinner {
      font-size: 1.6rem;
    }
    .shield-card h3 {
      margin: 0;
      font-family: var(--gc-display);
      font-size: var(--wa-font-size-m);
      font-weight: 700;
    }
    .shield-card p {
      margin: 0;
      color: var(--gc-muted);
      font-size: var(--wa-font-size-s);
    }
    @keyframes mp-shield-fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .shield {
        animation: none;
      }
    }
    .error {
      color: var(--gc-bad);
    }
  `;

  @state() private authorised = false;
  @state() private sources: gc.privateApi.SourceRef[] = [];
  @state() private cities: Array<{ id: string; name: string }> = [];
  @state() private municipalities: Array<{ id: string; name: string }> = [];
  @state() private sourceName = '';
  @state() private cityName = '';
  @state() private municipalityName = '';
  @state() private report?: gc.privateApi.ReconciliationReportView;
  @state() private currentTab: TabKey = 'Linked';
  @state() private reportBusy = false;
  @state() private reconciling = false;

  @query('mp-confirm-dialog') private confirm?: MpConfirmDialog;
  @query('mp-promotion-dialog') private promotion?: MpPromotionDialog;
  @query('mp-search-parameters-dialog') private searchParamsDialog?: MpSearchParametersDialog;
  @query('mp-batch-link-dialog') private batchLinkDialog?: MpBatchLinkDialog;

  // Built lazily: the gc.mengplaz.* constructors only exist once gc.sdk.init()
  // has run, which is after this element is constructed.
  private searchParams?: gc.mengplaz.SearchParameters;
  private pollTimer: ReturnType<typeof setInterval> | null = null;

  protected async onInit() {
    this.authorised = hasPermission('admin');
    if (!this.authorised) {
      // Fire no admin endpoint at all for an unauthorised visitor.
      return;
    }

    const municipalityParam = getQueryParam('municipality');
    const [sources, cities, municipalities] = await Promise.all([
      gc.privateApi.getSources(),
      gc.api.getGoldenLocalities(municipalityParam),
      gc.api.getGoldenCommunes(),
    ]);
    // "Golden" is the target of reconciliation, never a source of it.
    this.sources = sources.filter((s) => s.name !== 'Golden');
    this.cities = cities;
    this.municipalities = municipalities;
    this.municipalityName = municipalityParam ?? '';
    this.cityName = getQueryParam('city') ?? '';

    const sourceParam = getQueryParam('source');
    if (sourceParam && this.sources.some((s) => s.name === sourceParam)) {
      this.sourceName = sourceParam;
      await this.refreshReport();
      this.checkLocked(sources);
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.stopPolling();
  }

  private get selectedSource(): gc.privateApi.SourceRef | undefined {
    return this.sources.find((s) => s.name === this.sourceName);
  }

  // ---- report ----

  private async refreshReport() {
    const source = this.selectedSource;
    if (!source) {
      this.report = undefined;
      return;
    }
    this.reportBusy = true;
    try {
      const report = await gc.privateApi.getReconciliationReport(
        source.ref,
        this.cityName || null,
        this.municipalityName || null,
      );
      this.report = report ?? undefined;
      if (this.report) {
        this.currentTab = this.initialTab(this.report);
      }
    } catch {
      this.report = undefined;
      toast('An error occurred while generating reconciliation report.', 'danger');
    } finally {
      this.reportBusy = false;
    }
  }

  /** The tab from the URL if it still holds records, else the first non-empty one. */
  private initialTab(report: gc.privateApi.ReconciliationReportView): TabKey {
    const fromUrl = getQueryParam('tab') as TabKey | null;
    const urlConfig = TAB_CONFIG.find((c) => c.key === fromUrl);
    if (urlConfig && urlConfig.getRecordIds(report).length > 0) {
      return urlConfig.key;
    }
    return TAB_CONFIG.find((c) => c.getRecordIds(report).length > 0)?.key ?? 'Linked';
  }

  private paneFor(key: TabKey): MpReconcilePane | null {
    return this.renderRoot.querySelector<MpReconcilePane>(`mp-reconcile-pane[data-tab="${key}"]`);
  }

  private idsFor(key: TabKey): string[] {
    const config = TAB_CONFIG.find((c) => c.key === key);
    return this.report && config ? config.getRecordIds(this.report) : [];
  }

  // ---- selection ----

  private async onSourceChange(name: string) {
    this.stopPolling();
    this.sourceName = name;
    setQueryParam('source', name);
    deleteQueryParam('tab');
    deleteQueryParam('sourceId');
    if (this.selectedSource?.locked) {
      this.startPolling();
    }
    await this.refreshReport();
  }

  private async onMunicipalityChange(name: string) {
    this.municipalityName = name;
    if (name) {
      setQueryParam('municipality', name);
    } else {
      deleteQueryParam('municipality');
    }
    this.cities = await gc.api.getGoldenLocalities(name || null);
    this.warnIfOsmWithMunicipality();
    await this.refreshReport();
  }

  private async onCityChange(name: string) {
    this.cityName = name;
    if (name) {
      setQueryParam('city', name);
    } else {
      deleteQueryParam('city');
    }
    await this.refreshReport();
  }

  private warnIfOsmWithMunicipality() {
    if (this.sourceName === 'OSM' && this.municipalityName) {
      toast(
        'OSM source has no municipalities, only cities. Municipality filter will return no results.',
        'warning',
        5000,
      );
    }
  }

  private selectTab(key: TabKey) {
    this.currentTab = key;
    setQueryParam('tab', key);
  }

  // ---- polling ----

  private checkLocked(sources: gc.privateApi.SourceRef[]) {
    const source = sources.find((s) => s.name === this.sourceName);
    if (source?.locked) {
      this.startPolling();
    } else {
      this.stopPolling();
    }
  }

  /** A reconcile run locks the source; poll until it is released, then refresh. */
  private startPolling() {
    if (this.pollTimer) {
      return;
    }
    this.reconciling = true;
    this.pollTimer = setInterval(() => {
      void (async () => {
        try {
          const sources = await gc.privateApi.getSources();
          const source = sources.find((s) => s.name === this.sourceName);
          if (!source?.locked) {
            this.stopPolling();
            await this.refreshReport();
          }
        } catch {
          // Transient failure: retry on the next tick.
        }
      })();
    }, POLL_MS);
  }

  private stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
    this.reconciling = false;
  }

  // ---- actions ----

  /** Move a record to a new tab locally and follow it there. */
  private relocate(sourceId: string, target: TabKey, score?: number | null) {
    if (!this.report) {
      return;
    }
    const from = this.currentTab;
    const fromIndex = this.paneFor(from)?.index ?? 0;
    removeRecordFromReport(this.report, sourceId);
    addRecordToReport(this.report, sourceId, target, score);
    this.requestUpdate();

    const remaining = this.idsFor(from);
    if (remaining.length > 0) {
      this.paneFor(from)?.goto(Math.min(fromIndex, remaining.length - 1));
      return;
    }
    const next = TAB_CONFIG.find((c) => this.idsFor(c.key).length > 0);
    if (next) {
      this.selectTab(next.key);
    }
  }

  private async onRequestLink(detail: RequestLinkEvent) {
    const result = await this.confirm?.show('Are you sure you want to link this record to the Golden record?', true);
    if (!result?.confirmed) {
      return;
    }
    try {
      await gc.linkRecords(detail.sourceRecord, detail.goldenCandidate, result.params);
      toast('Records linked!', 'success');
      if (result.params.updateSimilarStreetMismatch) {
        // The backend has moved an unknown set of other records between tabs,
        // so the local report can no longer be trusted: refetch it.
        await this.refreshReport();
        return;
      }
      this.relocate(detail.sourceId, 'Linked');
    } catch {
      toast('An error occurred while linking records.', 'danger');
    }
  }

  private async onRequestPromote(detail: RequestPromoteEvent) {
    const streetId = await this.promotion?.show(detail.sourceRecord);
    if (!streetId || !detail.sourceRecord.ref) {
      return;
    }
    try {
      await gc.promoteRecord(detail.sourceRecord.ref, streetId);
      toast('Record Promoted', 'success');
      this.relocate(detail.sourceId, 'Linked');
    } catch {
      toast('An error occurred while promoting record.', 'danger');
    }
  }

  private async onRequestReconcile(detail: RequestReconcileEvent) {
    const source = this.selectedSource;
    if (!source || detail.pois.length === 0) {
      return;
    }
    const params = await this.searchParamsDialog?.show(this.searchParams ?? DEFAULT_SEARCH_PARAMS());
    if (!params) {
      return;
    }
    this.searchParams = params;
    try {
      await gc.lockSource(source.name);
      if (detail.pois.length > 1) {
        // A bulk run reshuffles the whole report; let it run and poll for the
        // unlock rather than trying to patch the local copy.
        await gc.privateApi.reconcileAddresses.spawn(source.name, detail.pois, params);
        this.startPolling();
        return;
      }
      await gc.$.default.await(await gc.privateApi.reconcileAddresses.spawn(source.name, detail.pois, params));
      toast(`Reconciled ${detail.pois.length} record(s)`, 'success');

      const recordId = detail.pois[0];
      const placed = await gc.getRecordTab(source.ref, recordId);
      if (!this.report || !placed) {
        return;
      }
      this.relocate(recordId, placed.tab as TabKey, placed.score);
      const target = placed.tab as TabKey;
      this.selectTab(target);
      const index = this.idsFor(target).indexOf(recordId);
      if (index !== -1) {
        await this.updateComplete;
        this.paneFor(target)?.goto(index);
      }
    } catch {
      toast('An error occurred while reconciling records.', 'danger');
    }
  }

  private onIdSearch(id: string) {
    if (!this.report) {
      return;
    }
    const found = findRecordTab(this.report, id);
    if (!found) {
      toast(`Record "${id}" not found`, 'warning', 3000);
      return;
    }
    this.selectTab(found.config.key);
    setQueryParam('sourceId', id);
    void this.updateComplete.then(() => this.paneFor(found.config.key)?.goto(found.index));
  }

  private async onBulkAction(key: TabKey) {
    if (!this.report) {
      return;
    }
    if (key === 'Linked') {
      const result = await this.confirm?.show(
        'Are you sure you want to merge all linked records positions into their GoldenRecords?',
        false,
      );
      if (!result?.confirmed) {
        return;
      }
      try {
        await gc.privateApi.mergePositionsToGolden(this.report.source, this.report.linked);
        toast('Positions added to linked Golden Records.', 'success');
        await this.refreshReport();
      } catch {
        toast('An error occurred while merging positions.', 'danger');
      }
      return;
    }
    if (key === 'Matched') {
      const result = await this.confirm?.show(
        `Are you sure you want to link ${this.report.fullMatch.length} items to their matched Golden record?`,
        false,
      );
      if (!result?.confirmed) {
        return;
      }
      try {
        await gc.privateApi.linkAllFullMatched(this.report.source, this.report.fullMatch);
        toast('All matched records linked.', 'success');
        await this.refreshReport();
      } catch {
        toast('An error occurred while linking records.', 'danger');
      }
      return;
    }
    await this.onRequestReconcile({ pois: [...this.idsFor(key)] });
  }

  private async onBatchLink() {
    if (!this.report) {
      return;
    }
    const params = await this.batchLinkDialog?.show();
    if (!params) {
      return;
    }
    try {
      const count = await gc.privateApi.batchLinkByScore(
        this.report.source,
        params.globalScore,
        params.geoScore,
        params.cityScore,
        params.streetScore,
        params.numberScore,
        params.postcodeScore,
      );
      toast(`Batch linked ${count} record(s).`, 'success');
      await this.refreshReport();
    } catch {
      toast('An error occurred while batch linking records.', 'danger');
    }
  }

  /** Start a full reconciliation of the selected source. */
  private async reconcileSource() {
    const source = this.selectedSource;
    if (!source) {
      return;
    }
    const params = await this.searchParamsDialog?.show(this.searchParams ?? DEFAULT_SEARCH_PARAMS());
    if (!params) {
      return;
    }
    this.searchParams = params;
    try {
      await gc.lockSource(source.name);
      await gc.privateApi.reconcile.spawn(source.name, params);
      this.startPolling();
    } catch {
      toast('An error occurred while starting reconciliation.', 'danger');
    }
  }

  // ---- render ----

  private renderControls() {
    return html`
      <div class="controls">
        <wa-select
          label="Source"
          with-label
          placeholder="Select a source..."
          value=${this.sourceName}
          @change=${(e: Event) => void this.onSourceChange((e.target as HTMLSelectElement).value)}
        >
          ${this.sources.map((s) => html`<wa-option value=${s.name}>${s.name}</wa-option>`)}
        </wa-select>
        <wa-button size="m" ?disabled=${!this.sourceName} @click=${() => void this.reconcileSource()}>
          Reconcile
        </wa-button>
        <wa-select
          label="Municipality"
          with-label
          placeholder="Filter by golden Municipalities"
          value=${this.municipalityName}
          @change=${(e: Event) => void this.onMunicipalityChange((e.target as HTMLSelectElement).value)}
        >
          <wa-option value="">All municipalities</wa-option>
          ${this.municipalities.map((c) => html`<wa-option value=${c.name}>${c.name}</wa-option>`)}
        </wa-select>
        <wa-select
          label="Locality"
          with-label
          placeholder="Filter by golden cities"
          value=${this.cityName}
          @change=${(e: Event) => void this.onCityChange((e.target as HTMLSelectElement).value)}
        >
          <wa-option value="">All localities</wa-option>
          ${this.cities.map((c) => html`<wa-option value=${c.name}>${c.name}</wa-option>`)}
        </wa-select>
        <div class="search">
          <mp-address-search
            placeholder="Search address in source..."
            .source=${this.sourceName || undefined}
            @address-select=${(e: CustomEvent<AddressSelectEvent>) => {
              const uid = e.detail.record.record.uid;
              if (uid) {
                this.onIdSearch(uid);
              }
            }}
          ></mp-address-search>
        </div>
      </div>
    `;
  }

  /**
   * Covers the report while a run holds the source lock. Pointer blocking is the
   * visible half; `inert` on the content underneath is the half that matters,
   * since a covered pane is still reachable by keyboard without it.
   */
  private renderShield() {
    return html`
      <div class="shield">
        <div class="shield-card">
          <wa-spinner></wa-spinner>
          <h3>Reconciling ${this.sourceName}...</h3>
          <p>
            The report is locked while the run is in progress. It refreshes on its own as soon as the source is
            released.
          </p>
        </div>
      </div>
    `;
  }

  private renderReport() {
    if (this.reportBusy) {
      return html`<div class="center"><wa-spinner></wa-spinner></div>`;
    }
    if (!this.sourceName) {
      return html`<div class="center">
        <wa-callout variant="neutral">Select a source to see its reconciliation report.</wa-callout>
      </div>`;
    }
    if (!this.report) {
      return html`<div class="center">
        <wa-callout variant="neutral">No reconciliation available for this source yet.</wa-callout>
      </div>`;
    }
    return html`
      <wa-tab-group @wa-tab-show=${(e: CustomEvent<{ name: string }>) => this.selectTab(e.detail.name as TabKey)}>
        ${TAB_CONFIG.map((config) => {
          const count = this.idsFor(config.key).length;
          return html`<wa-tab
            slot="nav"
            panel=${config.key}
            ?disabled=${count === 0}
            ?active=${this.currentTab === config.key}
          >
            ${config.label}
            <wa-badge variant=${config.badgeVariant} pill>${count}</wa-badge>
          </wa-tab>`;
        })}
        ${TAB_CONFIG.map(
          (config) => html`<wa-tab-panel name=${config.key} ?active=${this.currentTab === config.key}>
            <mp-reconcile-pane
              data-tab=${config.key}
              category=${config.label}
              .source=${this.report?.source ?? null}
              .recordIds=${this.idsFor(config.key)}
              .loadData=${config.loadData}
              .bulkAction=${config.bulkAction}
              ?show-actions=${config.showActions}
              ?show-batch-link=${config.key === 'Mismatched'}
              ?active=${this.currentTab === config.key}
              @bulk-action=${() => void this.onBulkAction(config.key)}
              @batch-link=${() => void this.onBatchLink()}
            ></mp-reconcile-pane>
          </wa-tab-panel>`,
        )}
      </wa-tab-group>
    `;
  }

  render() {
    if (this.loading) {
      return html`<mengplaz-app-shell page-title="Reconcile">
        <div class="center"><wa-spinner></wa-spinner></div>
      </mengplaz-app-shell>`;
    }
    if (!this.authorised) {
      return html`<mengplaz-app-shell page-title="Reconcile">
        <div class="center">
          <wa-callout variant="warning">
            You are not authorised to use the reconcile workspace. Sign in as an administrator.
          </wa-callout>
        </div>
      </mengplaz-app-shell>`;
    }
    return html`
      <mengplaz-app-shell page-title="Reconcile">
        <div
          class="stack"
          @request-link=${(e: CustomEvent<RequestLinkEvent>) => void this.onRequestLink(e.detail)}
          @request-promote=${(e: CustomEvent<RequestPromoteEvent>) => void this.onRequestPromote(e.detail)}
          @request-reconcile=${(e: CustomEvent<RequestReconcileEvent>) => void this.onRequestReconcile(e.detail)}
          @id-search=${(e: CustomEvent<{ id: string }>) => this.onIdSearch(e.detail.id)}
        >
          <p class="lead">Process addresses and display a detailed mismatch report</p>
          ${this.loadError ? html`<p class="error">${this.loadError}</p>` : ''} ${this.renderControls()}
          <div class="report">
            <div ?inert=${this.reconciling}>${this.renderReport()}</div>
            ${this.reconciling ? this.renderShield() : ''}
          </div>
        </div>
        <mp-confirm-dialog></mp-confirm-dialog>
        <mp-promotion-dialog></mp-promotion-dialog>
        <mp-search-parameters-dialog></mp-search-parameters-dialog>
        <mp-batch-link-dialog></mp-batch-link-dialog>
      </mengplaz-app-shell>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-reconcile-page': MengplazReconcilePage;
  }
}
