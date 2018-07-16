import { Card } from '@shopify/polaris';
import { fetchLineGraphData } from 'api/realtime';
import { PRIMARY_SERIES_COLOR, SECONDARY_SERIES_COLOR } from 'constants/colors';
import { CHART_HEIGHT } from 'constants/misc';
import * as React from 'react';
import {
  Area,
  AreaChart,
  Brush,
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipPayload,
  TooltipProps,
  XAxis,
  YAxis
} from 'recharts';
import { LineGraphDataPoint } from 'types';
import { sleep } from 'utils/async';
import { formatAsUsd } from 'utils/formatting';
// import { formatAsUsd } from 'utils/formatting';
import LoadingSpinner from './LoadingSpinner';

interface TooltipRendererProps<T> extends TooltipProps {
  readonly active: boolean;
  readonly type: string;
  readonly payload: Array<RendererPayload<T>>;
  readonly label: string;
}

interface RendererPayload<T> extends TooltipPayload {
  readonly payload: T;
}

interface State {
  readonly data: LineGraphDataPoint[];
  readonly loading: boolean;
}

class LineChartExample extends React.Component<{}, State> {
  public readonly state: State = {
    data: [],
    loading: true
  };

  public async componentDidMount() {
    // Fake delay to simulate slow network connection.
    await sleep(400);
    const data = await fetchLineGraphData();
    this.setState({ data, loading: false });
  }

  public static tooltipContentRenderer = (
    props: TooltipRendererProps<LineGraphDataPoint>
  ) => {
    //tslint:disable

    const [price, sold] = props.payload;

    if (props.active && props.payload.length > 0) {
      console.log(props.payload[1]);
      return (
        <Card sectioned>
          <p>{`${sold.value} units sold at ${formatAsUsd(
            price.value as number
          )} on ${new Date(props.label).toLocaleDateString()}`}</p>
        </Card>
      );
    }

    return null;
  };

  public render() {
    return this.state.loading ? (
      <LoadingSpinner />
    ) : (
      <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
        <LineChart
          height={CHART_HEIGHT}
          data={this.state.data}
          margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" minTickGap={75} />
          <YAxis
            dataKey="price"
            domain={['auto', 'auto']}
            yAxisId={0}
            tickFormatter={formatAsUsd}
          />
          <YAxis
            dataKey="sold"
            domain={['auto', 'auto']}
            yAxisId={1}
            orientation="right"
          >
            <Label angle={270} position="right" offset={-10}>
              Units sold
            </Label>
          </YAxis>
          <Tooltip content={LineChartExample.tooltipContentRenderer} />
          <Line
            key="0"
            type="monotone"
            dataKey="price"
            name="Price per share (USD)"
            stroke={PRIMARY_SERIES_COLOR}
            strokeWidth="3px"
            dot={false}
            yAxisId={0}
          />
          <Line
            key="1"
            type="monotone"
            dataKey="sold"
            name="Units sold"
            stroke={SECONDARY_SERIES_COLOR}
            strokeWidth="3px"
            yAxisId={1}
            dot={false}
          />
          <Brush
            dataKey="date"
            startIndex={this.state.data.length - 40}
            height={30}
          >
            <AreaChart>
              <CartesianGrid />
              <YAxis hide={true} domain={[100, 'auto']} />
              <Area
                dataKey="price"
                stroke={PRIMARY_SERIES_COLOR}
                fill={PRIMARY_SERIES_COLOR}
                dot={false}
              />
              <Area
                dataKey="sold"
                stroke={SECONDARY_SERIES_COLOR}
                fill={SECONDARY_SERIES_COLOR}
                dot={false}
                opacity={0.3}
              />
            </AreaChart>
          </Brush>
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default LineChartExample;
