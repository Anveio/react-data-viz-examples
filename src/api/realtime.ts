import {
  barChartData,
  lineGraphData,
  scatterPlotData01,
  scatterPlotData02
} from './sample-data';

export const fetchLineGraphData = () => Promise.resolve(lineGraphData);

export const fetchBarChartData = () => Promise.resolve(barChartData);

export const fetchScatterPlotData01 = () => Promise.resolve(scatterPlotData01);

export const fetchScatterPlotData02 = () => Promise.resolve(scatterPlotData02);
