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
