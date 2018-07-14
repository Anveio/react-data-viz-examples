const currencyFormatter = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  minimumFractionDigits: 0,
  style: 'currency'
});

export const formatAsUsd = currencyFormatter.format;
