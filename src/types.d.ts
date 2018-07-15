export interface LineGraphDataPoint {
  readonly date: string;
  readonly price: number;
}

export interface BarChartDataPoint {
  readonly name: string;
  readonly uv: number;
  readonly pv: number;
}
