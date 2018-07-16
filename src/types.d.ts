export interface LineGraphDataPoint {
  readonly date: string;
  readonly price: number;
  readonly sold: number;
}

export interface BarChartDataPoint {
  readonly name: string;
  readonly soldVolume: number;
  readonly totalInventory: number;
}

export interface ScatterPlotDataPoint {
  readonly x: number;
  readonly y: number;
  readonly z: number;
}
