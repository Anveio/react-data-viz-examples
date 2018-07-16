import { fetchScatterPlotData01, fetchScatterPlotData02 } from 'api/realtime';
import { PRIMARY_SERIES_COLOR, SECONDARY_SERIES_COLOR } from 'constants/colors';
import * as React from 'react';
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { ScatterPlotDataPoint } from 'types';
import { sleep } from 'utils/async';
import LoadingSpinner from './LoadingSpinner';

interface State {
  readonly loading: boolean;
  readonly series1: ScatterPlotDataPoint[];
  readonly series2: ScatterPlotDataPoint[];
}

class ScatterPlotExample extends React.PureComponent<{}, State> {
  private static CHART_HEIGHT = 600;
  public readonly state: State = { series1: [], series2: [], loading: true };

  public async componentDidMount() {
    // Fake delay to simulate slow network connection.
    await sleep(800);
    const series1 = await fetchScatterPlotData01();
    this.setState({
      series1,
      loading: false
    });

    await sleep(1600);
    const series2 = await fetchScatterPlotData02();
    this.setState({
      series2,
      loading: false
    });
  }

  public render() {
    const { series1, series2 } = this.state;
    const { CHART_HEIGHT } = ScatterPlotExample;
    return this.state.loading ? (
      <LoadingSpinner />
    ) : (
      <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis type="number" dataKey={'x'} name="stature" unit="cm" />
          <CartesianGrid />
          <YAxis
            yAxisId="left"
            type="number"
            dataKey="y"
            name="weight"
            unit="kg"
          />
          <YAxis
            yAxisId="right"
            type="number"
            dataKey="y"
            name="weight"
            unit="kg"
            orientation="right"
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter
            yAxisId="left"
            name="A school"
            data={series1}
            fill={PRIMARY_SERIES_COLOR}
          />
          <Scatter
            yAxisId="right"
            name="A school"
            data={series2}
            fill={SECONDARY_SERIES_COLOR}
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}

export default ScatterPlotExample;
