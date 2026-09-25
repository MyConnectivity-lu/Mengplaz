import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/spinner/spinner.js';
import { initMode } from '~/lib/theme';
import { GcPage } from '~/lib/gc-page';
import { recordHref } from '~/lib/routing';
import { formatNumber } from '~/lib/format';
import type { Column } from '~/lib/columns';
import type { EChartsOption } from '~/lib/echarts';
import '~/components/mengplaz-app-shell';
import '~/components/mp-panel';
import '~/components/mp-chart';
import '~/components/mp-virtual-table';

initMode();

type GoldenRow = gc.privateApi.GoldenRecordScore & Record<string, unknown>;

/**
 * Rows per request. The golden index runs to six figures, so the table reads it a
 * page at a time and the backend does the ordering - a page is a slice of the whole
 * ranking, not a re-sort of what happens to be loaded.
 */
const PAGE_SIZE = 1000;

const COLUMNS: Column<GoldenRow>[] = [
  {
    key: 'uid',
    label: 'UID',
    width: '8rem',
    render: (row) => html`<a href=${recordHref(String(row.uid))}>${row.uid}</a>`,
  },
  { key: 'number', label: 'Number', width: '7rem' },
  { key: 'street', label: 'Street' },
  { key: 'city', label: 'Locality', width: '12rem' },
  { key: 'postcode', label: 'Postcode', width: '8rem' },
  // Only the two score columns sort: they are the ones worth ranking on, and the
  // identity columns already arrive in the order the backend groups them by.
  { key: 'linkedCount', label: 'Linked Records', kind: 'num', width: '9rem', sortable: true },
  {
    key: 'quality',
    label: 'Quality (%)',
    kind: 'num',
    width: '8rem',
    sortable: true,
    render: (row) => `${(Number(row.quality) * 100).toFixed(1)} %`,
  },
];

/**
 * Global address-quality dashboard: the score's history over time and every
 * golden record with its own score.
 */
@customElement('mengplaz-quality-page')
export class MengplazQualityPage extends GcPage {
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
    .lead a {
      color: var(--gc-accent);
    }
    .current {
      font-family: var(--gc-display);
      font-size: var(--wa-font-size-xl);
      font-weight: 700;
    }
    .center {
      display: grid;
      place-items: center;
      padding: 3rem 1rem;
    }
    .error {
      color: var(--gc-bad);
    }
    mp-data-table a,
    mp-virtual-table a {
      color: var(--gc-accent);
    }
    .pcount {
      font-family: var(--gc-mono);
      font-size: var(--wa-font-size-xs);
      color: var(--gc-muted);
    }
  `;

  @state() private data?: gc.privateApi.GlobalQualityHistory;
  @state() private rows: GoldenRow[] = [];
  /** Records in the whole index, so the table knows when it has them all. */
  @state() private total = 0;
  @state() private sortKey = '';
  @state() private sortDir: 'asc' | 'desc' = 'asc';

  /** A page is in flight; the table can ask again once it lands. */
  private pending = false;
  /** Identifies the newest request, so a superseded one cannot land on the table. */
  private token = 0;

  protected async onInit() {
    this.data = await gc.getGlobalQualityHistory(null, null);
    await this.fetchPage(0, true);
  }

  private get hasMore(): boolean {
    return this.rows.length < this.total;
  }

  /**
   * Read one page. `reset` replaces the rows (a new sort); otherwise the page is
   * appended. A newer call always wins: its token invalidates whatever is in flight,
   * so a slow first page cannot overwrite the sorted result that replaced it.
   */
  private async fetchPage(offset: number, reset: boolean) {
    const token = ++this.token;
    this.pending = true;
    try {
      const page = await gc.getGoldenRecordScores(offset, PAGE_SIZE, this.sortKey || null, this.sortDir);
      if (token !== this.token) {
        return;
      }
      const rows = page.rows as GoldenRow[];
      this.rows = reset ? rows : [...this.rows, ...rows];
      this.total = Number(page.total);
    } catch (err) {
      if (token === this.token) {
        this.loadError = err instanceof Error ? err.message : String(err);
      }
    } finally {
      if (token === this.token) {
        this.pending = false;
      }
    }
  }

  private onSortChange(e: CustomEvent<{ key: string; dir: 'asc' | 'desc' }>) {
    this.sortKey = e.detail.key;
    this.sortDir = e.detail.dir;
    void this.fetchPage(0, true);
  }

  private onLoadMore() {
    if (this.pending || !this.hasMore) {
      return;
    }
    void this.fetchPage(this.rows.length, false);
  }

  /** The history line. `averageQuality` already arrives as a percentage. */
  private get chartOption(): EChartsOption {
    const points = (this.data?.history ?? []).map((h) => [h.timestamp.toDate().getTime(), h.averageQuality]);
    return {
      // The legend is pinned top-right and the grid given headroom for it;
      // left to ECharts' default it lands on the x-axis month labels.
      legend: { data: ['Average Quality'], top: 0, right: 8 },
      grid: { left: 56, right: 24, top: 44, bottom: 32 },
      xAxis: { type: 'time' },
      yAxis: { type: 'value', min: 0, max: 100, name: 'Quality (%)' },
      series: [{ name: 'Average Quality', type: 'line', showSymbol: true, data: points }],
    };
  }

  render() {
    return html`
      <mengplaz-app-shell page-title="Quality Dashboard">
        <div class="stack">
          <p class="lead">
            For a detailed explanation of how quality is calculated, see the
            <a
              href="https://github.com/MyConnectivity-lu/Mengplaz/wiki/Golden-Record-Quality"
              target="_blank"
              rel="noopener"
              >Quality Documentation</a
            >.
          </p>

          ${this.loadError ? html`<p class="error">${this.loadError}</p>` : ''}
          ${this.loading
        ? html`<div class="center"><wa-spinner></wa-spinner></div>`
        : html`
                  <mp-panel heading="Global Quality" padded>
                    <span class="current">Current Quality: ${((this.data?.current ?? 0) * 100).toFixed(1)}%</span>
                  </mp-panel>

                  <mp-panel heading="Quality History" body-height="320px">
                    <mp-chart .option=${this.chartOption}></mp-chart>
                  </mp-panel>

                  <mp-panel heading="Golden Records">
                    <span slot="actions" class="pcount">${formatNumber(this.total)} records</span>
                    <mp-virtual-table
                      .columns=${COLUMNS}
                      .rows=${this.rows}
                      .serverSort=${true}
                      .hasMore=${this.hasMore}
                      .sortKey=${this.sortKey}
                      .sortDir=${this.sortDir}
                      height="50vh"
                      empty-text="No golden records"
                      @sort-change=${(e: CustomEvent<{ key: string; dir: 'asc' | 'desc' }>) => this.onSortChange(e)}
                      @load-more=${() => this.onLoadMore()}
                    ></mp-virtual-table>
                  </mp-panel>
                `
      }
        </div>
      </mengplaz-app-shell>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mengplaz-quality-page': MengplazQualityPage;
  }
}
