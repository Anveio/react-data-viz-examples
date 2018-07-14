import { lineGraphData } from './sample-data';

export const fetchRealtimeData = () => Promise.resolve(lineGraphData);

export const sleep = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));
