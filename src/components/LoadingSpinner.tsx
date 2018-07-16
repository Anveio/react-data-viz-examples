import * as React from 'react';
import { Spinner } from '../../node_modules/@shopify/polaris';

const LoadingSpinner = () => {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <Spinner />
    </div>
  );
};

export default LoadingSpinner;
