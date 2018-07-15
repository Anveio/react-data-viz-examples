import { fetchBarChartData } from 'api/realtime';
import { PRIMARY_SERIES_COLOR, SECONDARY_SERIES_COLOR } from 'constants/colors';
import * as React from 'react';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { BarChartDataPoint } from 'types';
import { sleep } from 'utils/async';

interface State {
  readonly loading: boolean;
  readonly data: BarChartDataPoint[];
}

type KeyToUiTextMap = {
  [K in keyof Pick<BarChartDataPoint, 'soldVolume' | 'totalInventory'>]: string
};

class BarChartExample extends React.PureComponent<{}, State> {
  private static CHART_HEIGHT = 250;
  public readonly state: State = { data: [], loading: true };

  public async componentDidMount() {
    // Fake delay to simulate slow network connection.
    await sleep(800);
    const data = await fetchBarChartData();
    this.setState({ data, loading: false });
  }

  /**
   * Ensures the first character in a string is capitalized;
   */
  private static capitalizeFirstLetter = (name: string) =>
    name
      .charAt(0)
      .toUpperCase()
      .concat(name.slice(1));

  private static dataPointToUiTextMap: KeyToUiTextMap = {
    soldVolume: 'Units sold',
    totalInventory: 'Units in inventory'
  };

  private static legendFormatter = (key: keyof BarChartDataPoint) =>
    BarChartExample.dataPointToUiTextMap[key] || key;

  public render() {
    const { data } = this.state;
    const {
      CHART_HEIGHT,
      capitalizeFirstLetter,
      legendFormatter
    } = BarChartExample;

    return (
      <ResponsiveContainer height={CHART_HEIGHT}>
        <BarChart height={CHART_HEIGHT} data={data} maxBarSize={90}>
          <XAxis
            dataKey="name"
            minTickGap={75}
            tickFormatter={capitalizeFirstLetter}
          />
          <YAxis />
          <Tooltip />
          <Legend formatter={legendFormatter} />
          <Bar dataKey="soldVolume" stackId="a" fill={SECONDARY_SERIES_COLOR} />
          <Bar
            dataKey="totalInventory"
            stackId="a"
            fill={PRIMARY_SERIES_COLOR}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default BarChartExample;
