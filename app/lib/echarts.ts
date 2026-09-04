// Granular ECharts registration - the ONLY place the library is imported. Never
// import the `echarts` umbrella (~325 KB gzip); import `echarts/core` plus the
// exact charts/components/renderer used and register them with `use()`. Add a
// module here when a component needs a new chart type or feature.

import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { DataZoomComponent, GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([LineChart, GridComponent, TooltipComponent, LegendComponent, DataZoomComponent, CanvasRenderer]);

export { echarts };
export type { EChartsOption } from 'echarts';
