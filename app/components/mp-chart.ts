import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { echarts, type EChartsOption } from '~/lib/echarts';
import { currentColors } from '~/lib/theme';

/**
 * A thin Lit wrapper around one ECharts instance. The parent supplies the data
 * `option` (series/axes); this component owns the lifecycle: init on a shadow-DOM
 * div, inject the `--gc-*` theme colours, resize with a ResizeObserver, re-theme
 * on the `gc-theme` event, and dispose on disconnect.
 *
 * Reassigning `option` updates the chart in place (ECharts merges).
 */
@customElement('mp-chart')
export class MpChart extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
    }
    .chart {
      width: 100%;
      height: 100%;
    }
  `;

  @property({ attribute: false }) option: EChartsOption = {};

  private chart?: echarts.ECharts;
  private ro?: ResizeObserver;
  private onTheme = () => this.applyTheme();

  protected override firstUpdated() {
    const el = this.renderRoot.querySelector('.chart') as HTMLElement;
    this.chart = echarts.init(el);
    this.chart.setOption(this.option);
    // Theme is applied last so its axis/legend colours win over the data option.
    this.applyTheme();
    this.ro = new ResizeObserver(() => this.chart?.resize());
    this.ro.observe(el);
    window.addEventListener('gc-theme', this.onTheme);
  }

  protected override updated(changed: Map<string, unknown>) {
    if (this.chart && changed.has('option')) {
      this.chart.setOption(this.option);
      this.applyTheme();
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('gc-theme', this.onTheme);
    this.ro?.disconnect();
    this.chart?.dispose();
    this.chart = undefined;
  }

  /** Merge the `--gc-*`-derived colours in: a canvas cannot read CSS variables. */
  private applyTheme() {
    if (!this.chart) {
      return;
    }
    const c = currentColors();
    const cs = getComputedStyle(document.documentElement);
    const font = cs.getPropertyValue('--gc-ui').trim();
    const axis = {
      axisLine: { lineStyle: { color: c.border } },
      axisLabel: { color: c.muted },
      axisTick: { lineStyle: { color: c.border } },
    };
    this.chart.setOption({
      color: c.series,
      textStyle: { color: c.text, fontFamily: font },
      legend: { textStyle: { color: c.text }, inactiveColor: c.muted },
      // ECharts would otherwise fall back to a bright white tooltip in dark mode.
      tooltip: {
        trigger: 'axis',
        backgroundColor: c.surface,
        borderColor: c.border,
        borderWidth: 1,
        textStyle: { color: c.text, fontFamily: font },
        axisPointer: {
          lineStyle: { color: c.border },
          crossStyle: { color: c.border },
          label: { backgroundColor: c.surface, borderColor: c.border, color: c.text },
        },
      },
      xAxis: { ...axis, splitLine: { show: false } },
      yAxis: { ...axis, splitLine: { lineStyle: { color: c.grid } } },
    });
  }

  render() {
    return html`<div class="chart"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'mp-chart': MpChart;
  }
}
