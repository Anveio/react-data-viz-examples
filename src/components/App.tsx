import { PRIMARY_SERIES_COLOR } from 'api/constants/colors';
import { fetchRealtimeData, sleep } from 'api/realtime';
import { LineGraphDataPoint } from 'api/sample-data';
import * as React from 'react';
import {
  Area,
  AreaChart,
  Brush,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  TooltipPayload,
  TooltipProps,
  XAxis,
  YAxis
} from 'recharts';
import { formatAsUsd } from 'utils/formatting';
import './App.css';

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

class App extends React.Component<{}, State> {
  public readonly state: State = {
    data: [],
    loading: true
  };

  public async componentDidMount() {
    await sleep(1500);
    const data = await fetchRealtimeData();
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
      <div>Loading data...</div>
    ) : (
      <div className="App">
        <LineChart
          width={700}
          height={400}
          data={this.state.data}
          margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" interval="preserveEnd" minTickGap={75} />
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
      </div>
    );
  }
}

export default App;
