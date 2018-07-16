import {
  Button,
  Card,
  Checkbox,
  FormLayout,
  RangeSlider
} from '@shopify/polaris';
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
  readonly options: {
    startAtZero: boolean;
    primarySeriesLineThickness: number;
    secondarySeriesLineThickness: number;
    showDots: boolean;
  };
}

class LineChartExample extends React.Component<{}, State> {
  public readonly state: State = {
    data: [],
    loading: true,
    options: {
      startAtZero: false,
      primarySeriesLineThickness: 3,
      secondarySeriesLineThickness: 3,
      showDots: false
    }
  };

  public async componentDidMount() {
    this.fetchData();
  }

  private fetchData = async () => {
    this.setState({ loading: true });
    // Fake delay to simulate slow network connection.
    await sleep(400);
    const data = await fetchLineGraphData();
    this.setState({ data, loading: false });
  };

  private static tooltipContentRenderer = (
    props: TooltipRendererProps<LineGraphDataPoint>
  ) => {
    const [price, sold] = props.payload;

    if (props.active && props.payload.length > 0) {
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
    return (
      <Card title="Stock performance">
        <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
          {this.state.loading ? (
            <LoadingSpinner />
          ) : (
            <LineChart
              height={CHART_HEIGHT}
              data={this.state.data}
              margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" minTickGap={75} />
              <YAxis
                dataKey="price"
                domain={[this.state.options.startAtZero ? 0 : 'auto', 'auto']}
                yAxisId={0}
                tickFormatter={formatAsUsd}
              />
              <YAxis
                dataKey="sold"
                domain={[this.state.options.startAtZero ? 0 : 'auto', 'auto']}
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
                strokeWidth={this.state.options.primarySeriesLineThickness}
                dot={this.state.options.showDots}
                yAxisId={0}
              />
              <Line
                key="1"
                type="monotone"
                dataKey="sold"
                name="Units sold"
                stroke={SECONDARY_SERIES_COLOR}
                strokeWidth={this.state.options.secondarySeriesLineThickness}
                yAxisId={1}
                dot={this.state.options.showDots}
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
          )}
        </ResponsiveContainer>
        <Card.Section>
          <FormLayout>
            <FormLayout.Group>
              <Checkbox
                label="Start from 0"
                checked={this.state.options.startAtZero}
                onChange={value =>
                  this.setState((prevState: State) => ({
                    options: {
                      ...prevState.options,
                      startAtZero: value
                    }
                  }))
                }
              />
              <Checkbox
                label="Show dots"
                checked={this.state.options.showDots}
                onChange={value =>
                  this.setState((prevState: State) => ({
                    options: {
                      ...prevState.options,
                      showDots: value
                    }
                  }))
                }
              />
            </FormLayout.Group>
            <FormLayout.Group>
              <RangeSlider
                label="Price per share line thickness"
                min={1}
                max={6}
                value={this.state.options.primarySeriesLineThickness}
                onChange={value =>
                  this.setState((prevState: State) => ({
                    options: {
                      ...prevState.options,
                      primarySeriesLineThickness: value
                    }
                  }))
                }
              />
              <RangeSlider
                label="Units sold line thickness"
                min={1}
                max={6}
                value={this.state.options.secondarySeriesLineThickness}
                onChange={value =>
                  this.setState((prevState: State) => ({
                    options: {
                      ...prevState.options,
                      secondarySeriesLineThickness: value
                    }
                  }))
                }
              />
            </FormLayout.Group>
            <Button onClick={this.fetchData}>Refresh data</Button>
          </FormLayout>
        </Card.Section>
      </Card>
    );
  }
}

export default LineChartExample;
