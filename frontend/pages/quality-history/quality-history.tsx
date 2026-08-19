import { GuiChart, ChartConfig, GuiTable } from '@greycat/web';
import './quality-history.css';

export class QualityHistoryPage extends HTMLElement {
  private chart: GuiChart;
  private currentQualityDisplay: HTMLElement;
  private goldenRecordsTable: GuiTable;
  private loadingIndicator: HTMLElement;
  private contentContainer: HTMLElement;

  constructor() {
    super();
    this.chart = document.createElement('gui-chart') as GuiChart;
    this.currentQualityDisplay = (<div className="current-quality" />) as HTMLElement;
    this.loadingIndicator = (
      <div className="quality-loading">
        <sl-spinner></sl-spinner>
        <span>Loading quality data...</span>
      </div>
    ) as HTMLElement;
    this.contentContainer = (<div className="quality-content" />) as HTMLElement;

    this.goldenRecordsTable = new GuiTable();
    this.goldenRecordsTable.useDefaultColumns = false;
    this.goldenRecordsTable.columns = [
      {
        index: 0,
        header: 'UID',
        cell: (data) => {
          return <a href={'/?page=record&guid=' + data.value}> {data.value}</a>;
        },
      },
      { index: 1, header: 'Number' },
      { index: 2, header: 'Street' },
      { index: 3, header: 'Locality' },
      { index: 4, header: 'Postcode' },
      { index: 5, header: 'Linked Records' },
      { index: 6, header: 'Quality (%)', value : ({value}) =>  `${value * 100} %` },
    ];
  }

  connectedCallback() {
    this.render();
    this.loadData();
  }

  disconnectedCallback() {}

  private async loadData() {
    this.loadingIndicator.style.display = '';
    this.contentContainer.style.display = 'none';

    const data = await gc.getGlobalQualityHistory(null, null);

    // Update current quality display
    this.currentQualityDisplay.textContent = `Current Quality: ${(data.current * 100).toFixed(1)}%`;

    this.chart.value = gc.Table.fromObjects(data.history);

    this.chart.setConfig({
      xAxis: {
        scale: 'time',
        format: '%d-%m-%Y',
      },
      yAxes: {
        quality: {
          min: 0,
          max: 100,
          position: 'left',
          title: 'Quality (%)',
        },
      },
      series: [
        {
          xCol: gc.privateApi.GlobalQualityEntry.$fields.timestamp,
          type: 'line+scatter',
          yCol: gc.privateApi.GlobalQualityEntry.$fields.averageQuality,
          yAxis: 'quality',
          title: 'Average Quality',
        },
      ],
    } as ChartConfig);

    this.goldenRecordsTable.value = data.goldenRecords;

    this.loadingIndicator.style.display = 'none';
    this.contentContainer.style.display = '';
  }

  render() {
    this.contentContainer.replaceChildren(
      <div className="quality-controls">{this.currentQualityDisplay}</div>,
      <div className="card">
        <h4 className="card-title">Golden Records</h4>
        <div className="card-content">
          <div className="table-container">{this.goldenRecordsTable}</div>
        </div>
      </div>,
      <div className="chart-container">{this.chart}</div>,
    );
    this.contentContainer.style.display = 'none';

    this.replaceChildren(
      <div className="quality-history-page">
        <h3 className="content-title">Quality Dashboard</h3>
        <p className="quality-info">
          For a detailed explanation of how quality is calculated, see the{' '}
          <a href="https://gitlab.com/myconnectivity/mengplaz/-/wikis/Golden-Record-Quality" target="_blank">Quality Documentation</a>.
        </p>
        {this.loadingIndicator}
        {this.contentContainer}
      </div>,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'quality-history-page': QualityHistoryPage;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'quality-history-page': GreyCat.Element<QualityHistoryPage>;
      }
    }
  }
}

if (!customElements.get('quality-history-page')) {
  customElements.define('quality-history-page', QualityHistoryPage);
}
