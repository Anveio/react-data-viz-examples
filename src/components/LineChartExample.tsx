import { PRIMARY_SERIES_COLOR } from 'api/constants/colors';
import { CHART_HEIGHT } from 'api/constants/misc';
import { fetchLineGraphData } from 'api/realtime';
import * as React from 'react';
import {
  Area,
  AreaChart,
  Brush,
  CartesianGrid,
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
import LoadingSpinner from './LoadingSpinner';

interface TooltipRendererProps<T> extends TooltipProps {
  active: boolean;
  type: string;
  payload: Array<RendererPayload<T>>;
  label: string;
}

interface RendererPayload<T> extends TooltipPayload {
  payload: T;
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
    await sleep(1500);
    const data = await fetchLineGraphData();
    this.setState({ data, loading: false });
  }

  public static tooltipContentRenderer = (
    props: TooltipRendererProps<LineGraphDataPoint>
  ) => {
    //tslint:disable

    if (props.active && props.payload.length > 0) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${props.label} : ${
            props.payload[0].value
          }`}</p>
        </div>
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
          <XAxis dataKey="date" interval={10} />
          <YAxis
            dataKey="price"
            domain={['auto', 'auto']}
            tickFormatter={formatAsUsd}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke={PRIMARY_SERIES_COLOR}
            strokeWidth="3px"
            dot={false}
          />
          <Brush
            dataKey="date"
            startIndex={this.state.data.length - 40}
            height={30}
          >
            <AreaChart>
              <CartesianGrid />
              <YAxis hide={true} domain={['auto', 'auto']} />
              <Area
                dataKey="price"
                stroke={PRIMARY_SERIES_COLOR}
                fill={PRIMARY_SERIES_COLOR}
                dot={false}
              />
            </AreaChart>
          </Brush>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default LineChartExample;
