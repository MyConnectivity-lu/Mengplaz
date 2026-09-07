import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/spinner/spinner.js';
import { initMode } from '~/lib/theme';
import { GcPage } from '~/lib/gc-page';
import { colorForSource, formatDate } from '~/lib/format';
import type { Column } from '~/lib/columns';
import type { EChartsOption } from '~/lib/echarts';
import '~/components/mengplaz-app-shell';
import '~/components/mp-panel';
import '~/components/mp-chart';
import '~/components/mp-data-table';

initMode();

type StatsRow = gc.privateApi.SourceStatsRow & Record<string, unknown>;

const COLUMNS: Column<StatsRow>[] = [
  { key: 'source', label: 'Source', width: '9rem' },
  { key: 'total', label: 'Total', kind: 'num', width: '9rem' },
  { key: 'active', label: 'Active', kind: 'num', width: '9rem' },
  { key: 'linked', label: 'Linked', kind: 'num', width: '9rem' },
  {
    key: 'share',
    label: 'Share',
    kind: 'num',
    width: '7rem',
    render: (row) => `${(Number(row.share) * 100).toFixed(1)} %`,
  },
  {
    key: 'lastUpdate',
    label: 'Last import',
    width: '11rem',
    render: (row) => (row.lastUpdate ? formatDate(row.lastUpdate.toDate()) : '-'),
  },
  {
    key: 'asOf',
    label: 'Counted',
    width: '11rem',
    render: (row) => (row.asOf ? formatDate(row.asOf.toDate()) : '-'),
  },
];

/**
 * Records held per source and how those counts have grown.
 *
 * The figures are what the last snapshot recorded, not a live count: counting active and
 * linked records means walking every source index, which a public endpoint cannot do per
 * request. "Counted" is that snapshot's timestamp, and it is not "Last import" - the four
 * sources snapshot on four different schedules, and Golden never imports at all.
 */
@customElement('mengplaz-stats-page')
export class MengplazStatsPage extends GcPage {
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
    .center {
      display: grid;
      place-items: center;
      padding: 3rem 1rem;
    }
    .error {
      color: var(--gc-bad);
    }
    mp-data-table {
      --mp-table-min-width: 64rem;
    }
  `;

  @state() private data?: gc.privateApi.SourceStats;

  protected async onInit() {
    this.data = await gc.getSourceStats(null, null);
  }

  private get rows(): StatsRow[] {
    return (this.data?.rows ?? []) as StatsRow[];
  }

  private get chartOption(): EChartsOption {
    const series = (this.data?.series ?? []).map((s) => ({
      name: s.source,
      type: 'line' as const,
      showSymbol: false,
      itemStyle: { color: colorForSource(s.source) },
      data: s.points.map((p) => [p.timestamp.toDate().getTime(), Number(p.active)]),
    }));
    return {
      legend: { data: series.map((s) => s.name), top: 0, right: 8 },
      grid: { left: 64, right: 24, top: 44, bottom: 32 },
      xAxis: { type: 'time' },
      yAxis: { type: 'value', name: 'Records' },
      series,
    };
  }

  render() {
    return html`
      <mengplaz-app-shell page-title="Statistics">
        <div class="stack">
          <p class="lead">Records held per source, as counted at the end of each source's last import run.</p>

          ${this.loadError ? html`<p class="error">${this.loadError}</p>` : ''}
          ${
            this.loading
              ? html`<div class="center"><wa-spinner></wa-spinner></div>`
              : html`
                  <mp-panel heading="Records by Source">
                    <mp-data-table
                      .columns=${COLUMNS}
                      .rows=${this.rows}
                      empty-text="No sources registered"
                    ></mp-data-table>
                  </mp-panel>

                  <mp-panel heading="Growth" body-height="320px">
                    <mp-chart .option=${this.chartOption}></mp-chart>
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
    'mengplaz-stats-page': MengplazStatsPage;
  }
}
