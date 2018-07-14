import { AppProvider, Card, Layout, Page, Spinner } from '@shopify/polaris';
import * as React from 'react';
import LineChartExample from './LineChartExample';

class App extends React.PureComponent {
  public render() {
    return (
      <AppProvider>
        <Page title="Data visualization examples" titleHidden>
          <Layout>
            <Layout.Section>
              <Card title="Stock performance">
                <LineChartExample loadingDisplay={<Spinner />} />
              </Card>
            </Layout.Section>
          </Layout>
        </Page>
      </AppProvider>
    );
  }
}

export default App;
