import { GuiSelect, GuiOption, sl, toast } from '@greycat/web';

import '../../components/reconcilation/reconcile-pane/reconcile-pane';
import { ReconcilePane } from '../../components/reconcilation/reconcile-pane/reconcile-pane';
import '../../components/comparison/completion-message/completion-message';
import { MengplazConfirmDialog } from '~/components/mengplaz-confirm-dialog/mengplaz-confirm-dialog';
import '~/components/mengplaz-confirm-dialog/mengplaz-confirm-dialog';
import { MengplazPromotionDialog } from '~/components/mengplaz-promotion-dialog/mengplaz-promotion-dialog';
import '~/components/mengplaz-promotion-dialog/mengplaz-promotion-dialog';
import { SearchParametersDialog } from '~/components/search-parameters-dialog/search-parameters-dialog';
import '~/components/search-parameters-dialog/search-parameters-dialog';
import { AddressSelectEvent, MengplazAddressSearch } from '~/components/mengplaz-address-search/mengplaz-address-search';
import '~/components/mengplaz-address-search/mengplaz-address-search';
import { getQueryParam } from '~/common/utils';
import './reconcile.css';

export interface RequestLinkEvent {
  sourceRecord: gc.core.node<gc.mengplaz.POIRecordProvider>;
  goldenCandidate: gc.core.node<gc.mengplaz.POIRecordProvider>;
  sourceId: string;
}

export interface RequestPromoteEvent {
  sourceRecord: gc.POIFullRecordRef;
  sourceId: string;
}

export interface RequestReconcileEvent {
  pois: string[];
  sourceRecordId?: string;
}

type TabKey = 'Linked' | 'Matched' | 'MultipleMatch' | 'Mismatched' | 'NoMatch';

interface TabConfig {
  key: TabKey;
  label: string;
  badgeVariant: 'success' | 'primary' | 'warning' | 'danger' | 'neutral';
  getRecordIds: (report: gc.privateApi.ReconciliationReportView) => string[];
  loadData: (source: gc.core.node<gc.mengplaz.DataSource>, recordId: string) => Promise<gc.privateApi.ComparisonViewData>;
  showActions: boolean;
  bulkAction: { label: string; icon: string } | null;
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
    bulkAction: { label: 'Link all matched', icon: 'link-45deg' },
  },
  {
    key: 'MultipleMatch',
    label: 'Multiple Match',
    badgeVariant: 'warning',
    showActions: true,
    loadData: (s, id) => gc.getComparisonViewData(s, id),
    getRecordIds: (r) => r.multipleMatch,
    bulkAction: { label: 'Reconcile all', icon: 'arrow-repeat' },
  },
  {
    key: 'Mismatched',
    label: 'Mismatched',
    badgeVariant: 'success',
    showActions: true,
    loadData: (s, id) => gc.getComparisonViewData(s, id),
    getRecordIds: (r) => r.partialMatch.map((m) => m.id),
    bulkAction: { label: 'Reconcile all', icon: 'arrow-repeat' },
  },
  {
    key: 'NoMatch',
    label: 'No Match',
    badgeVariant: 'success',
    showActions: true,
    loadData: (s, id) => gc.getComparisonViewData(s, id),
    getRecordIds: (r) => r.noMatch,
    bulkAction: { label: 'Reconcile all', icon: 'arrow-repeat' },
  },
];

function findRecordTab(report: gc.privateApi.ReconciliationReportView, sourceId: string): { config: TabConfig; index: number } | null {
  for (const config of TAB_CONFIG) {
    const ids = config.getRecordIds(report);
    const idx = ids.indexOf(sourceId);
    if (idx !== -1) {
      return { config, index: idx };
    }
  }
  return null;
}

function removeRecordFromReport(report: gc.privateApi.ReconciliationReportView, sourceId: string): TabKey | null {
  let idx: number;

  idx = report.linked.indexOf(sourceId);
  if (idx !== -1) {
    report.linked.splice(idx, 1);
    return 'Linked';
  }

  idx = report.fullMatch.indexOf(sourceId);
  if (idx !== -1) {
    report.fullMatch.splice(idx, 1);
    return 'Matched';
  }

  idx = report.multipleMatch.indexOf(sourceId);
  if (idx !== -1) {
    report.multipleMatch.splice(idx, 1);
    return 'MultipleMatch';
  }

  idx = report.partialMatch.findIndex((m) => m.id === sourceId);
  if (idx !== -1) {
    report.partialMatch.splice(idx, 1);
    return 'Mismatched';
  }

  idx = report.noMatch.indexOf(sourceId);
  if (idx !== -1) {
    report.noMatch.splice(idx, 1);
    return 'NoMatch';
  }

  return null;
}

function addRecordToReport(report: gc.privateApi.ReconciliationReportView, sourceId: string, tab: TabKey, score?: number | null) {
  switch (tab) {
    case 'Linked':
      report.linked.push(sourceId);
      break;
    case 'Matched':
      report.fullMatch.push(sourceId);
      break;
    case 'MultipleMatch':
      report.multipleMatch.push(sourceId);
      break;
    case 'Mismatched': {
      const entry = { id: sourceId, score: score ?? null } as gc.privateApi.ReconciliationReportMatchView;
      const insertIdx = report.partialMatch.findIndex((m) => (m.score ?? 0) < (score ?? 0));
      if (insertIdx === -1) {
        report.partialMatch.push(entry);
      } else {
        report.partialMatch.splice(insertIdx, 0, entry);
      }
      break;
    }
    case 'NoMatch':
      report.noMatch.push(sourceId);
      break;
  }
}

export class ReconcilePage extends HTMLElement {
  private sourceSelect: GuiSelect;
  private citySelect: GuiSelect;
  private reconcileButton: sl.SlButton;
  private confirm: MengplazConfirmDialog;
  private promote: MengplazPromotionDialog;
  private searchParamsDialog: SearchParametersDialog;
  private addressSearch: MengplazAddressSearch;
  private searchParams: gc.mengplaz.SearchParameters = new gc.mengplaz.SearchParameters(
    0.7,
    0.7,
    0.4,
    0.7,
    10,
    200,
    new gc.mengplaz.ScoringWeights(4.0, 3.0, 3.0, 1.0, 3.0),
    new gc.mengplaz.GeoParameters(0, 1000),
    false,
  );

  private reconciliationReport?: gc.privateApi.ReconciliationReportView;
  private tabGroup: sl.SlTabGroup | null = null;
  private panes: Partial<Record<TabKey, ReconcilePane>> = {};
  private badges: Partial<Record<TabKey, sl.SlBadge>> = {};
  private currentTab: TabKey = 'Linked';

  constructor() {
    super();

    this.sourceSelect = new GuiSelect();
    this.sourceSelect.placeholder = 'Select a source...';
    this.sourceSelect.addEventListener('gui-change', () => {
      this.stopReconcilePolling();
      if (this.sourceSelect.value) {
        const url = new URL(window.location.href);
        url.searchParams.set('source', this.sourceSelect.value.name);
        url.searchParams.delete('tab');
        url.searchParams.delete('sourceId');
        window.history.replaceState(null, '', url);
        if (this.sourceSelect.value.locked) {
          this.startReconcilePolling();
        }
      }
      this.addressSearch.source = this.sourceSelect.value?.name;
      this.updateLocalReconciliationReport();
    });

    this.citySelect = new GuiSelect();
    this.citySelect.placeholder = 'Filter by golden cities';
    this.citySelect.nullable = true;
    this.citySelect.addEventListener('gui-change', () => {
      this.updateLocalReconciliationReport();
    });

    this.reconcileButton = (<sl-button onclick={() => this.reconcile()}>Reconcile</sl-button>) as sl.SlButton;
    this.confirm = (<mengplaz-confirm-dialog />) as MengplazConfirmDialog;
    this.promote = (<mengplaz-promotion-dialog />) as MengplazPromotionDialog;
    this.searchParamsDialog = (<search-parameters-dialog />) as SearchParametersDialog;
    this.addressSearch = (<mengplaz-address-search />) as MengplazAddressSearch;
    this.addressSearch.placeholder = 'Search address in source...';
    this.addressSearch.addEventListener('address-select', (e: Event) => {
      const id = (e as CustomEvent<AddressSelectEvent>).detail.record.record.uid;
      if (id) this.handleIdSearch(id);
    });

    this.reportContainer = (<div className="report-container"></div>) as HTMLElement;
  }

  async connectedCallback() {
    this.addEventListener('request-link', (e: Event) => {
      this.handleLink((e as CustomEvent<RequestLinkEvent>).detail);
    });
    this.addEventListener('request-promote', (e: Event) => {
      this.handlePromote((e as CustomEvent<RequestPromoteEvent>).detail);
    });
    this.addEventListener('request-reconcile', (e: Event) => {
      this.handleReconcile((e as CustomEvent<RequestReconcileEvent>).detail);
    });

    this.showLoadingOverlay();
    try {
      const [sources, cities] = await Promise.all([gc.privateApi.getSources(), gc.api.getGoldenCities()]);
      const filteredSources = sources.filter((v) => v.name !== 'Golden');
      this.sourceSelect.options = filteredSources.map((s) => ({ value: s, text: s.name }) as GuiOption);
      this.citySelect.options = cities.map((c) => ({ value: c.name, text: c.name }) as GuiOption);

      // Restore city from URL param
      const urlCity = getQueryParam('city');
      if (urlCity) {
        const matchingCity = cities.find((c) => c.name === urlCity);
        if (matchingCity) {
          this.citySelect.value = matchingCity;
        }
      }

      // Restore source from URL param
      const urlSource = getQueryParam('source');
      if (urlSource) {
        const matchingSource = filteredSources.find((s) => s.name === urlSource);
        if (matchingSource) {
          this.sourceSelect.value = matchingSource;
          this.addressSearch.source = matchingSource.name;
          await this.updateLocalReconciliationReport();
        }
      }

      // Render empty state if no report was loaded
      if (!this.reconciliationReport) {
        this.render();
      }

      // Start polling if the selected source is currently reconciling
      this.checkSourceLocked(sources);
    } finally {
      this.hideLoadingOverlay();
    }
  }

  private loadingOverlay: HTMLElement | null = null;
  private reconcilingOverlay: HTMLElement | null = null;
  private reportContainer: HTMLElement | null = null;
  private pollingTimer: ReturnType<typeof setInterval> | null = null;

  disconnectedCallback() {
    this.stopReconcilePolling();
  }

  private showLoadingOverlay() {
    this.loadingOverlay = (
      <div className="loading-overlay">
        <sl-spinner style={{ fontSize: '2rem' }} />
      </div>
    ) as HTMLElement;
    this.replaceChildren(this.loadingOverlay);
  }

  private hideLoadingOverlay() {
    this.loadingOverlay?.remove();
    this.loadingOverlay = null;
  }

  private showReconcilingOverlay() {
    if (this.reconcilingOverlay) return;
    this.reconcilingOverlay = (
      <div className="reconciling-overlay">
        <sl-spinner style={{ fontSize: '3rem' }} />
        Reconciliation in progress...
      </div>
    ) as HTMLElement;

    (this.reportContainer ?? this).appendChild(this.reconcilingOverlay);
  }

  private hideReconcilingOverlay() {
    this.reconcilingOverlay?.remove();
    this.reconcilingOverlay = null;
  }

  private startReconcilePolling() {
    if (this.pollingTimer) return;
    this.showReconcilingOverlay();
    this.pollingTimer = setInterval(async () => {
      try {
        const sources = await gc.privateApi.getSources();
        const selectedName = this.sourceSelect.value?.name;
        if (!selectedName) {
          this.stopReconcilePolling();
          return;
        }
        const source = sources.find((s) => s.name === selectedName);
        if (!source?.locked) {
          this.stopReconcilePolling();
          await this.updateLocalReconciliationReport();
        }
      } catch {
        // ignore polling errors, retry on next tick
      }
    }, 5000);
  }

  private stopReconcilePolling() {
    if (this.pollingTimer) {
      clearInterval(this.pollingTimer);
      this.pollingTimer = null;
    }
    this.hideReconcilingOverlay();
  }

  private checkSourceLocked(sources: gc.privateApi.SourceRef[]) {
    const selectedName = this.sourceSelect.value?.name;

    if (!selectedName) return;
    const source = sources.find((s) => s.name === selectedName);

    if (source?.locked) {
      this.startReconcilePolling();
    } else {
      this.stopReconcilePolling();
    }
  }

  private activateInitialTab() {
    if (!this.reconciliationReport || !this.tabGroup) return;

    const urlTab = getQueryParam('tab') as TabKey | null;
    const urlSourceId = getQueryParam('sourceId');

    // Pick tab: URL param if valid, otherwise first non-empty
    let initialTab: TabKey | null = null;

    if (urlTab && this.panes[urlTab]) {
      const config = TAB_CONFIG.find((c) => c.key === urlTab);
      if (config && config.getRecordIds(this.reconciliationReport).length > 0) {
        initialTab = urlTab;
      }
    }
    if (!initialTab) {
      initialTab = this.getFirstNonEmptyTab();
    }

    if (initialTab) {
      this.currentTab = initialTab;
      this.panes[initialTab]!.active = true;

      // Navigate to specific record if URL has sourceId
      if (urlSourceId && initialTab === urlTab) {
        const config = TAB_CONFIG.find((c) => c.key === initialTab);
        if (config) {
          const ids = config.getRecordIds(this.reconciliationReport);
          const idx = ids.indexOf(urlSourceId);
          if (idx !== -1) {
            this.panes[initialTab]!.currentIndex = idx;
          }
        }
      }

      // Wait for sl-tab-group's Lit render to complete before calling show()
      this.tabGroup.updateComplete.then(() => {
        this.tabGroup?.show(initialTab!);
      });
    }
  }

  private updateUrlState(tab: TabKey, sourceId?: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('tab', tab);
    if (sourceId) {
      url.searchParams.set('sourceId', sourceId);
    } else {
      url.searchParams.delete('sourceId');
    }
    window.history.replaceState(null, '', url);
  }

  private reloadWithState(tab: TabKey, sourceId?: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('page', 'reconcile');
    if (this.sourceSelect.value) {
      url.searchParams.set('source', this.sourceSelect.value.name);
    }
    url.searchParams.set('tab', tab);
    if (sourceId) {
      url.searchParams.set('sourceId', sourceId);
    } else {
      url.searchParams.delete('sourceId');
    }
    window.location.assign(url.toString());
  }

  private updateTabBadges() {
    if (!this.reconciliationReport || !this.tabGroup) return;
    for (const config of TAB_CONFIG) {
      const count = config.getRecordIds(this.reconciliationReport).length;
      const badge = this.badges[config.key];
      if (badge) {
        badge.textContent = String(count);
      }
      const tab = this.tabGroup.querySelector<sl.SlTab>(`sl-tab[panel="${config.key}"]`);
      if (tab) {
        tab.disabled = count === 0;
      }
    }
  }

  private updatePaneRecordIds(tabKey: TabKey) {
    if (!this.reconciliationReport) return;
    const config = TAB_CONFIG.find((c) => c.key === tabKey);
    const pane = this.panes[tabKey];
    if (config && pane) {
      pane.recordIds = config.getRecordIds(this.reconciliationReport);
    }
  }

  private getFirstNonEmptyTab(): TabKey | null {
    if (!this.reconciliationReport) return null;
    for (const config of TAB_CONFIG) {
      if (config.getRecordIds(this.reconciliationReport).length > 0) {
        return config.key;
      }
    }
    return null;
  }

  private handleIdSearch(id: string) {
    if (!this.reconciliationReport) return;
    const result = findRecordTab(this.reconciliationReport, id);
    if (result) {
      this.tabGroup?.show(result.config.key);
      this.panes[result.config.key]!.currentIndex = result.index;
      this.updateUrlState(result.config.key, id);
    } else {
      toast.notify({ message: `Record "${id}" not found`, variant: 'warning', duration: 3000, icon: 'exclamation-triangle' });
    }
  }

  private handleNavigate(tabKey: TabKey, index: number) {
    if (!this.reconciliationReport) return;
    const config = TAB_CONFIG.find((c) => c.key === tabKey);
    if (!config) return;
    const ids = config.getRecordIds(this.reconciliationReport);
    const sourceId = ids[index];
    if (sourceId) {
      this.updateUrlState(tabKey, sourceId);
    }
  }

  private handleLink(detail: RequestLinkEvent) {
    this.confirm.text = 'Are you sure you want to link this record to the Golden record?';
    this.confirm.showLinkParams = true;
    this.confirm.show().then((result) => {
      if (result.confirmed) {
        gc.linkRecords(detail.sourceRecord, detail.goldenCandidate, result.params)
          .then(() => {
            toast.notify({ message: 'Records linked!', variant: 'primary', duration: 3000, icon: 'check2-circle' });
            if (!this.reconciliationReport) return;
            if (result.params.updateSimilarStreetMismatch) {
              this.reloadWithState(this.currentTab, this.sourceSelect.value.name);
              return;
            }

            const sourceTab = this.currentTab;
            const pane = this.panes[sourceTab];
            const removedIdx = pane?.currentIndex ?? 0;

            removeRecordFromReport(this.reconciliationReport, detail.sourceId);
            this.reconciliationReport.linked.push(detail.sourceId);

            // Update affected panes
            this.updatePaneRecordIds(sourceTab);
            this.updatePaneRecordIds('Linked');
            this.updateTabBadges();

            // Stay on current tab, go to next item
            const config = TAB_CONFIG.find((c) => c.key === sourceTab);
            if (config) {
              const newIds = config.getRecordIds(this.reconciliationReport);
              if (newIds.length > 0) {
                pane!.currentIndex = Math.min(removedIdx, newIds.length - 1);
              } else {
                // Tab is empty, switch to first non-empty
                const nextTab = this.getFirstNonEmptyTab();
                if (nextTab) {
                  this.tabGroup?.show(nextTab);
                }
              }
            }
          })
          .catch(() => {
            toast.notify({ message: 'An error occurred while linking records.', variant: 'danger', duration: 3000, icon: 'exclamation-circle' });
          });
      }
    });
  }

  private handlePromote(detail: RequestPromoteEvent) {
    if (!detail.sourceRecord) return;
    this.promote.value = detail.sourceRecord;
    this.promote.show().then((res) => {
      if (res && detail.sourceRecord.ref) {
        gc.promoteRecord(detail.sourceRecord.ref, res)
          .then(() => {
            toast.notify({ message: 'Record Promoted', variant: 'primary', duration: 3000, icon: 'check2-circle' });
            if (!this.reconciliationReport) return;

            const sourceTab = this.currentTab;
            const pane = this.panes[sourceTab];
            const removedIdx = pane?.currentIndex ?? 0;

            removeRecordFromReport(this.reconciliationReport, detail.sourceId);
            this.reconciliationReport.linked.push(detail.sourceId);

            // Update affected panes
            this.updatePaneRecordIds(sourceTab);
            this.updatePaneRecordIds('Linked');
            this.updateTabBadges();

            // Stay on current tab, go to next item
            const config = TAB_CONFIG.find((c) => c.key === sourceTab);
            if (config) {
              const newIds = config.getRecordIds(this.reconciliationReport);
              if (newIds.length > 0) {
                pane!.currentIndex = Math.min(removedIdx, newIds.length - 1);
              } else {
                const nextTab = this.getFirstNonEmptyTab();
                if (nextTab) {
                  this.tabGroup?.show(nextTab);
                }
              }
            }
          })
          .catch(() => {
            toast.notify({ message: 'An error occurred while promoting record.', variant: 'danger', duration: 3000, icon: 'exclamation-circle' });
          });
      }
    });
  }

  private async handleReconcile(detail: RequestReconcileEvent) {
    if (!this.sourceSelect.value || detail.pois.length === 0) return;
    const isBulk = detail.pois.length > 1;

    this.searchParamsDialog.value = this.searchParams;
    const result = await this.searchParamsDialog.show();
    if (!result) return;

    this.searchParams = result;
    try {
      await gc.lockDatasource(this.sourceSelect.value.name);

      if (isBulk) {
        await gc.$.default.spawn('privateApi::reconcilePOIs', [this.sourceSelect.value.name, detail.pois, this.searchParams]);

        // Full page reload for bulk reconcile
        this.reloadWithState(this.currentTab, detail.sourceRecordId);
      } else {
        await gc.$.default.spawnAwait('privateApi::reconcilePOIs', [this.sourceSelect.value.name, detail.pois, this.searchParams]);
        toast.notify({ message: `Reconciled ${detail.pois.length} record(s)`, variant: 'primary', duration: 3000, icon: 'check2-circle' });

        // Single record: find its new tab and navigate there
        const recordId = detail.pois[0];
        const tabResult = await gc.getRecordTab(this.sourceSelect.value.ref, recordId);
        if (!this.reconciliationReport || !tabResult) return;

        const sourceTab = this.currentTab;
        removeRecordFromReport(this.reconciliationReport, recordId);
        addRecordToReport(this.reconciliationReport, recordId, tabResult.tab as TabKey, tabResult.score);

        // Update affected panes
        this.updatePaneRecordIds(sourceTab);
        this.updatePaneRecordIds(tabResult.tab as TabKey);
        this.updateTabBadges();

        // Navigate to the reconciled record in its new tab
        const targetTab = tabResult.tab as TabKey;
        const targetConfig = TAB_CONFIG.find((c) => c.key === targetTab);
        if (targetConfig) {
          const targetIds = targetConfig.getRecordIds(this.reconciliationReport);
          const targetIdx = targetIds.indexOf(recordId);
          this.tabGroup?.show(targetTab);
          if (targetIdx !== -1) {
            this.panes[targetTab]!.currentIndex = targetIdx;
          }
        }
      }
    } catch (_) {
      toast.notify({ message: 'An error occurred while reconciling records.', variant: 'danger', duration: 3000, icon: 'exclamation-circle' });
    }
  }

  private handleBulkAction(tabKey: TabKey) {
    switch (tabKey) {
      case 'Linked':
        this.handleMergeAllPositions();
        break;
      case 'Matched':
        this.handleLinkAllMatched();
        break;
      case 'MultipleMatch':
      case 'Mismatched':
      case 'NoMatch':
        this.handleReconcileAll(tabKey);
        break;
    }
  }

  private handleMergeAllPositions() {
    if (!this.reconciliationReport) return;
    this.confirm.text = 'Are you sure you want to merge all linked records positions into their GoldenRecords?';
    this.confirm.showLinkParams = false;
    this.confirm.show().then((result) => {
      if (result.confirmed) {
        gc.$.default
          .call('privateApi::mergePositionsToGolden', [this.reconciliationReport!.source, this.reconciliationReport!.linked])
          .then(() => {
            toast.notify({ message: 'Positions added to linked Golden Records.', variant: 'primary', duration: 3000, icon: 'check2-circle' });
            // Refresh current pane by re-triggering load
            const pane = this.panes['Linked'];
            if (pane) {
              pane.active = false;
              pane.active = true;
            }
          })
          .catch(() => {
            toast.notify({ message: 'An error occurred while merging positions.', variant: 'danger', duration: 3000, icon: 'exclamation-circle' });
          });
      }
    });
  }

  private handleLinkAllMatched() {
    if (!this.reconciliationReport) return;
    this.confirm.text = `Are you sure you want to link ${this.reconciliationReport.fullMatch.length} items to their matched Golden record?`;
    this.confirm.showLinkParams = false;
    this.confirm.show().then((result) => {
      if (result.confirmed) {
        gc.$.default
          .call('privateApi::linkAllFullMatched', [this.reconciliationReport!.source, this.reconciliationReport!.fullMatch])
          .then(() => {
            toast.notify({ message: 'All matched records linked.', variant: 'primary', duration: 3000, icon: 'check2-circle' });
            this.reloadWithState('Linked');
          })
          .catch(() => {
            toast.notify({ message: 'An error occurred while linking records.', variant: 'danger', duration: 3000, icon: 'exclamation-circle' });
          });
      }
    });
  }

  private handleReconcileAll(tabKey: TabKey) {
    if (!this.reconciliationReport) return;
    const config = TAB_CONFIG.find((c) => c.key === tabKey);
    if (!config) return;
    const ids = config.getRecordIds(this.reconciliationReport);
    if (ids.length === 0) return;
    this.handleReconcile({ pois: [...ids] });
  }

  private async updateLocalReconciliationReport() {
    this.reconcileButton.loading = true;
    if (this.sourceSelect.value) {
      try {
        const cityName = this.citySelect.value ?? null;
        const report = await gc.privateApi.getReconciliationReport(this.sourceSelect.value.ref, cityName);

        if (report != null) {
          this.reconciliationReport = report;
          this.render();
          this.activateInitialTab();
        } else {
          this.reconciliationReport = undefined;
          this.render();
        }
      } catch (e) {
        console.log(e);

        toast.notify({
          message: 'An error occurred while generating reconciliation report.',
          duration: 3000,
          icon: 'check2-circle',
          variant: 'danger',
        });
      } finally {
        this.reconcileButton.loading = false;
      }
    }
  }

  private async reconcile() {
    this.searchParamsDialog.value = this.searchParams;
    const result = await this.searchParamsDialog.show();
    if (!result) return;

    this.searchParams = result;
    try {
      await gc.lockDatasource(this.sourceSelect.value.name);
      gc.$.default.spawn('privateApi::reconcile', [this.sourceSelect.value.name, this.searchParams]);
      this.startReconcilePolling();
    } catch (_) {
      toast.notify({
        message: 'An error occurred while starting reconciliation.',
        duration: 3000,
        icon: 'exclamation-circle',
        variant: 'danger',
      });
    }
  }

  render() {
    if (!gc.$.default.hasPermission('admin')) {
      window.location.assign(window.location.origin);
    }

    // Reset stored references
    this.panes = {};
    this.badges = {};
    this.tabGroup = null;

    if (!this.reconciliationReport) {
      this.replaceChildren(
        <div style={{ display: 'flex', flexFlow: 'column', height: '100%', gap: 'var(--spacing)' }}>
          <h3 className="content-title">Reconcile</h3>
          <p className="content-subtitle">Process addresses and display a detailed mismatch report</p>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 'var(--sl-spacing-small)', alignItems: 'center' }}>
            {this.sourceSelect}
            {this.reconcileButton}
            <div className="reconcile-address-search">{this.addressSearch}</div>
          </div>
          <p>No reconciliation available.</p>
          {this.confirm}
          {this.promote}
          {this.searchParamsDialog}
        </div>,
      );
      return;
    }

    // Build tabs and panes from TAB_CONFIG
    const tabs: HTMLElement[] = [];
    const panels: HTMLElement[] = [];

    for (const config of TAB_CONFIG) {
      const ids = config.getRecordIds(this.reconciliationReport);
      const badge = (
        <sl-badge variant={config.badgeVariant} pill>
          {ids.length}
        </sl-badge>
      ) as sl.SlBadge;
      this.badges[config.key] = badge;

      tabs.push(
        (
          <sl-tab slot="nav" panel={config.key} disabled={ids.length === 0}>
            {config.label} {badge}
          </sl-tab>
        ) as HTMLElement,
      );

      const pane = (<reconcile-pane />) as ReconcilePane;
      pane.source = this.reconciliationReport.source;
      pane.loadData = config.loadData;
      pane.showActions = config.showActions;
      pane.recordIds = ids;
      pane.onNavigate = (index) => this.handleNavigate(config.key, index);
      pane.onIdSearch = (id) => this.handleIdSearch(id);
      pane.setBulkAction(config.bulkAction ? { ...config.bulkAction, handler: () => this.handleBulkAction(config.key) } : null);
      this.panes[config.key] = pane;

      panels.push((<sl-tab-panel name={config.key}>{pane}</sl-tab-panel>) as HTMLElement);
    }

    const tabGroupEl = (
      <sl-tab-group>
        {tabs}
        {panels}
      </sl-tab-group>
    ) as sl.SlTabGroup;

    this.tabGroup = tabGroupEl;

    tabGroupEl.addEventListener('sl-tab-show', (e: Event) => {
      const tabKey = (e as CustomEvent<{ name: string }>).detail.name as TabKey;
      this.currentTab = tabKey;
      const pane = this.panes[tabKey];
      if (pane) {
        pane.active = true;
      }
      this.updateUrlState(tabKey);
    });

    this.reportContainer?.replaceChildren(this.tabGroup);

    // Re-append reconciling overlay if polling is active
    if (this.pollingTimer && this.reconcilingOverlay) {
      this.reportContainer?.appendChild(this.reconcilingOverlay);
    }

    this.replaceChildren(
      <div style={{ display: 'flex', flexFlow: 'column', height: '100%', gap: 'var(--spacing)' }}>
        <h3 className="content-title">Reconcile</h3>
        <p className="content-subtitle">Process addresses and display a detailed mismatch report</p>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 'var(--sl-spacing-small)', alignItems: 'center' }}>
          {this.sourceSelect}
          {this.reconcileButton}
          {this.citySelect}
          <div className="reconcile-address-search">{this.addressSearch}</div>
        </div>
        {this.reportContainer}
        {this.confirm}
        {this.promote}
        {this.searchParamsDialog}
      </div>,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'reconcile-page': ReconcilePage;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'reconcile-page': GreyCat.Element<ReconcilePage>;
      }
    }
  }
}

if (!customElements.get('reconcile-page')) {
  customElements.define('reconcile-page', ReconcilePage);
}
