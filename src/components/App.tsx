import { AppProvider, Card, Layout, Page } from '@shopify/polaris';
import * as React from 'react';
import BarChartExample from './BarChartExample';
import LineChartExample from './LineChartExample';
import ScatterPlotExample from './ScatterPlotExample';

class App extends React.PureComponent {
  public render() {
    return (
      <AppProvider>
        <Page title="Data visualization examples" titleHidden>
          <Layout>
            <Layout.Section>
              <Card title="Stock performance">
                <LineChartExample />
              </Card>
              <Card title="Units sold">
                <BarChartExample />
              </Card>
              <Card title="Units sold">
                <ScatterPlotExample />
              </Card>
            </Layout.Section>
          </Layout>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
