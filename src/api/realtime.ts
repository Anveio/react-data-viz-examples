import { barChartData, lineGraphData } from './sample-data';

export const fetchLineGraphData = () => Promise.resolve(lineGraphData);

export const fetchBarChartData = () => Promise.resolve(barChartData);
