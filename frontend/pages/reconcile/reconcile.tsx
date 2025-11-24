import { GuiSelect, GuiOption, sl } from '@greycat/web';

import '../../components/reconcilation/full-match-pane/full-match-pane';
import '../../components/reconcilation/partial-match-pane/partial-match-pane';
import '../../components/reconcilation/linked-records-pane/linked-records-pane';
import './reconcile.css';

export class ReconcilePage extends HTMLElement {
  private sourceSelect: GuiSelect;
  private reconcileButton: sl.SlButton;

  private reconciliationReport?: gc.mengplaz.ReconciliationReport;

  constructor() {
    super();

    this.sourceSelect = new GuiSelect();
    this.sourceSelect.placeholder = 'Select a source...';
    this.sourceSelect.addEventListener('gui-change', (_ev) => {
      this.updateLocalReconciliationReport();
    });

    this.reconcileButton = (<sl-button onclick={() => this.reconcile()}>Reconcile</sl-button>) as sl.SlButton;
  }

  async connectedCallback() {
    const sources = await gc.api.getSources();
    this.sourceSelect.options = sources.filter((v) => v.name !== 'Golden').map((s) => ({ value: s, text: s.name }) as GuiOption);

    this.render();
  }

  disconnectedCallback() {}

  private updateLocalReconciliationReport() {
    this.reconcileButton.loading = true;
    if (this.sourceSelect.value) {
      gc.api.getReconciliationReport(this.sourceSelect.value.ref).then((res) => {
        if (res != null) {
          this.reconciliationReport = res;
          this.render();
        } else {
          this.reconciliationReport = undefined;
          this.render();
        }
        this.reconcileButton.loading = false;
      });
    }
  }

  private async reconcile() {
    this.reconcileButton.loading = true;

    gc.$.default
      .spawnAwait<gc.mengplaz.ReconciliationReport>('api::reconcile', [this.sourceSelect.value.ref])
      .then((recRes) => {
        this.reconciliationReport = recRes;
        this.render();
      })
      .finally(() => {
        this.reconcileButton.loading = false;
      });
  }

  render() {
    if (!gc.$.default.hasPermission('admin')) {
      window.location.assign(window.location.origin);
    }
    this.replaceChildren(
      <div style={{ display: 'flex', flexFlow: 'column', height: '100%', gap: 'var(--spacing)' }}>
        <h3 className={'content-title'}> Reconcile</h3>
        <p className={'content-subtitle'}> Process addresses and display a detailed mismatch report</p>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {this.sourceSelect}
          {this.reconcileButton}
        </div>
        {this.reconciliationReport ? (
          <sl-tab-group>
            <sl-tab slot="nav" panel="Linked" disabled={this.reconciliationReport.linked.length == 0}>
              Linked{' '}
              <sl-badge variant="success" pill>
                {this.reconciliationReport.linked.length}
              </sl-badge>
            </sl-tab>
            <sl-tab-panel name="Linked">
              <linked-records-pane reconciliationReport={this.reconciliationReport}></linked-records-pane>
            </sl-tab-panel>
            <sl-tab slot="nav" panel="Matched">
              Matched{' '}
              <sl-badge variant="success" pill>
                {this.reconciliationReport.fullMatch.length}
              </sl-badge>
            </sl-tab>
            <sl-tab-panel name="Matched">
              <full-match-pane reconciliationReport={this.reconciliationReport}></full-match-pane>
            </sl-tab-panel>

            {[...this.reconciliationReport.mismatches].map(([key, value]) => (
              <>
                <sl-tab slot="nav" panel={key.key}>
                  {key.key}{' '}
                  <sl-badge variant="warning" pill>
                    {value.length}
                  </sl-badge>
                </sl-tab>

                <sl-tab-panel name={key.key}>
                  <partial-match-pane searchResult={value} missmatchKind={key}></partial-match-pane>
                </sl-tab-panel>
              </>
            ))}
          </sl-tab-group>
        ) : (
          <p>No reconciliation available. </p>
        )}
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
