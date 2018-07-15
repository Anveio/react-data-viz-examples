import { CHART_HEIGHT } from 'constants/misc';
import * as React from 'react';
import { Spinner } from '../../node_modules/@shopify/polaris';

const LoadingSpinner = () => {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        height: CHART_HEIGHT,
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <Spinner />
    </div>
  );
};

export default LoadingSpinner;
