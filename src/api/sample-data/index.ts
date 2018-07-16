import { BarChartDataPoint, LineGraphDataPoint } from 'types';

/**
 * Will yield a slightly higher number each time .next() is called.
 */
function* stateMachine() {
  let val = 0;
  while (true) {
    const increment = Math.floor(Math.random() * 3);
    yield (val += increment);
  }
}

const numberGenerator = stateMachine();

/**
 * Data taken from https://github.com/recharts/recharts/blob/master/demo/component/LineChart.js
 */
export const lineGraphData: LineGraphDataPoint[] = [
  { date: 'Jan 04 2016', sold: numberGenerator.next().value, price: 105.35 },
  { date: 'Jan 05 2016', sold: numberGenerator.next().value, price: 102.71 },
  { date: 'Jan 06 2016', sold: numberGenerator.next().value, price: 100.7 },
  { date: 'Jan 07 2016', sold: numberGenerator.next().value, price: 96.45 },
  { date: 'Jan 08 2016', sold: numberGenerator.next().value, price: 96.96 },
  { date: 'Jan 11 2016', sold: numberGenerator.next().value, price: 98.53 },
  { date: 'Jan 12 2016', sold: numberGenerator.next().value, price: 99.96 },
  { date: 'Jan 13 2016', sold: numberGenerator.next().value, price: 97.39 },
  { date: 'Jan 14 2016', sold: numberGenerator.next().value, price: 99.52 },
  { date: 'Jan 15 2016', sold: numberGenerator.next().value, price: 97.13 },
  { date: 'Jan 19 2016', sold: numberGenerator.next().value, price: 96.66 },
  { date: 'Jan 20 2016', sold: numberGenerator.next().value, price: 96.79 },
  { date: 'Jan 21 2016', sold: numberGenerator.next().value, price: 96.3 },
  { date: 'Jan 22 2016', sold: numberGenerator.next().value, price: 101.42 },
  { date: 'Jan 25 2016', sold: numberGenerator.next().value, price: 99.44 },
  { date: 'Jan 26 2016', sold: numberGenerator.next().value, price: 99.99 },
  { date: 'Jan 27 2016', sold: numberGenerator.next().value, price: 93.42 },
  { date: 'Jan 28 2016', sold: numberGenerator.next().value, price: 94.09 },
  { date: 'Jan 29 2016', sold: numberGenerator.next().value, price: 97.34 },
  { date: 'Feb 01 2016', sold: numberGenerator.next().value, price: 96.43 },
  { date: 'Feb 02 2016', sold: numberGenerator.next().value, price: 94.48 },
  { date: 'Feb 03 2016', sold: numberGenerator.next().value, price: 96.35 },
  { date: 'Feb 04 2016', sold: numberGenerator.next().value, price: 96.6 },
  { date: 'Feb 05 2016', sold: numberGenerator.next().value, price: 94.02 },
  { date: 'Feb 08 2016', sold: numberGenerator.next().value, price: 95.01 },
  { date: 'Feb 09 2016', sold: numberGenerator.next().value, price: 94.99 },
  { date: 'Feb 10 2016', sold: numberGenerator.next().value, price: 94.27 },
  { date: 'Feb 11 2016', sold: numberGenerator.next().value, price: 93.7 },
  { date: 'Feb 12 2016', sold: numberGenerator.next().value, price: 93.99 },
  { date: 'Feb 16 2016', sold: numberGenerator.next().value, price: 96.64 },
  { date: 'Feb 17 2016', sold: numberGenerator.next().value, price: 98.12 },
  { date: 'Feb 18 2016', sold: numberGenerator.next().value, price: 96.26 },
  { date: 'Feb 19 2016', sold: numberGenerator.next().value, price: 96.04 },
  { date: 'Feb 22 2016', sold: numberGenerator.next().value, price: 96.88 },
  { date: 'Feb 23 2016', sold: numberGenerator.next().value, price: 94.69 },
  { date: 'Feb 24 2016', sold: numberGenerator.next().value, price: 96.1 },
  { date: 'Feb 25 2016', sold: numberGenerator.next().value, price: 96.76 },
  { date: 'Feb 26 2016', sold: numberGenerator.next().value, price: 96.91 },
  { date: 'Feb 29 2016', sold: numberGenerator.next().value, price: 96.69 },
  { date: 'Mar 01 2016', sold: numberGenerator.next().value, price: 100.53 },
  { date: 'Mar 02 2016', sold: numberGenerator.next().value, price: 100.75 },
  { date: 'Mar 03 2016', sold: numberGenerator.next().value, price: 101.5 },
  { date: 'Mar 04 2016', sold: numberGenerator.next().value, price: 103.01 },
  { date: 'Mar 07 2016', sold: numberGenerator.next().value, price: 101.87 },
  { date: 'Mar 08 2016', sold: numberGenerator.next().value, price: 101.03 },
  { date: 'Mar 09 2016', sold: numberGenerator.next().value, price: 101.12 },
  { date: 'Mar 10 2016', sold: numberGenerator.next().value, price: 101.17 },
  { date: 'Mar 11 2016', sold: numberGenerator.next().value, price: 102.26 },
  { date: 'Mar 14 2016', sold: numberGenerator.next().value, price: 102.52 },
  { date: 'Mar 15 2016', sold: numberGenerator.next().value, price: 104.58 },
  { date: 'Mar 16 2016', sold: numberGenerator.next().value, price: 105.97 },
  { date: 'Mar 17 2016', sold: numberGenerator.next().value, price: 105.8 },
  { date: 'Mar 18 2016', sold: numberGenerator.next().value, price: 105.92 },
  { date: 'Mar 21 2016', sold: numberGenerator.next().value, price: 105.91 },
  { date: 'Mar 22 2016', sold: numberGenerator.next().value, price: 106.72 },
  { date: 'Mar 23 2016', sold: numberGenerator.next().value, price: 106.13 },
  { date: 'Mar 24 2016', sold: numberGenerator.next().value, price: 105.67 },
  { date: 'Mar 28 2016', sold: numberGenerator.next().value, price: 105.19 },
  { date: 'Mar 29 2016', sold: numberGenerator.next().value, price: 107.68 },
  { date: 'Mar 30 2016', sold: numberGenerator.next().value, price: 109.56 },
  { date: 'Mar 31 2016', sold: numberGenerator.next().value, price: 108.99 },
  { date: 'Apr 01 2016', sold: numberGenerator.next().value, price: 109.99 },
  { date: 'Apr 04 2016', sold: numberGenerator.next().value, price: 111.12 },
  { date: 'Apr 05 2016', sold: numberGenerator.next().value, price: 109.81 },
  { date: 'Apr 06 2016', sold: numberGenerator.next().value, price: 110.96 },
  { date: 'Apr 07 2016', sold: numberGenerator.next().value, price: 108.54 },
  { date: 'Apr 08 2016', sold: numberGenerator.next().value, price: 108.66 },
  { date: 'Apr 11 2016', sold: numberGenerator.next().value, price: 109.02 },
  { date: 'Apr 12 2016', sold: numberGenerator.next().value, price: 110.44 },
  { date: 'Apr 13 2016', sold: numberGenerator.next().value, price: 112.04 },
  { date: 'Apr 14 2016', sold: numberGenerator.next().value, price: 112.1 },
  { date: 'Apr 15 2016', sold: numberGenerator.next().value, price: 109.85 },
  { date: 'Apr 18 2016', sold: numberGenerator.next().value, price: 107.48 },
  { date: 'Apr 19 2016', sold: numberGenerator.next().value, price: 106.91 },
  { date: 'Apr 20 2016', sold: numberGenerator.next().value, price: 107.13 },
  { date: 'Apr 21 2016', sold: numberGenerator.next().value, price: 105.97 },
  { date: 'Apr 22 2016', sold: numberGenerator.next().value, price: 105.68 },
  { date: 'Apr 25 2016', sold: numberGenerator.next().value, price: 105.08 },
  { date: 'Apr 26 2016', sold: numberGenerator.next().value, price: 104.35 },
  { date: 'Apr 27 2016', sold: numberGenerator.next().value, price: 97.82 },
  { date: 'Apr 28 2016', sold: numberGenerator.next().value, price: 94.83 },
  { date: 'Apr 29 2016', sold: numberGenerator.next().value, price: 93.74 },
  { date: 'May 02 2016', sold: numberGenerator.next().value, price: 93.64 },
  { date: 'May 03 2016', sold: numberGenerator.next().value, price: 95.18 },
  { date: 'May 04 2016', sold: numberGenerator.next().value, price: 94.19 },
  { date: 'May 05 2016', sold: numberGenerator.next().value, price: 93.24 },
  { date: 'May 06 2016', sold: numberGenerator.next().value, price: 92.72 },
  { date: 'May 09 2016', sold: numberGenerator.next().value, price: 92.79 },
  { date: 'May 10 2016', sold: numberGenerator.next().value, price: 93.42 },
  { date: 'May 11 2016', sold: numberGenerator.next().value, price: 92.51 },
  { date: 'May 12 2016', sold: numberGenerator.next().value, price: 90.34 },
  { date: 'May 13 2016', sold: numberGenerator.next().value, price: 90.52 },
  { date: 'May 16 2016', sold: numberGenerator.next().value, price: 93.88 },
  { date: 'May 17 2016', sold: numberGenerator.next().value, price: 93.49 },
  { date: 'May 18 2016', sold: numberGenerator.next().value, price: 94.56 },
  { date: 'May 19 2016', sold: numberGenerator.next().value, price: 94.2 },
  { date: 'May 20 2016', sold: numberGenerator.next().value, price: 95.22 },
  { date: 'May 23 2016', sold: numberGenerator.next().value, price: 96.43 },
  { date: 'May 24 2016', sold: numberGenerator.next().value, price: 97.9 },
  { date: 'May 25 2016', sold: numberGenerator.next().value, price: 99.62 },
  { date: 'May 26 2016', sold: numberGenerator.next().value, price: 100.41 },
  { date: 'May 27 2016', sold: numberGenerator.next().value, price: 100.35 },
  { date: 'May 31 2016', sold: numberGenerator.next().value, price: 99.86 },
  { date: 'Jun 01 2016', sold: numberGenerator.next().value, price: 98.46 },
  { date: 'Jun 02 2016', sold: numberGenerator.next().value, price: 97.72 },
  { date: 'Jun 03 2016', sold: numberGenerator.next().value, price: 97.92 },
  { date: 'Jun 06 2016', sold: numberGenerator.next().value, price: 98.63 },
  { date: 'Jun 07 2016', sold: numberGenerator.next().value, price: 99.03 },
  { date: 'Jun 08 2016', sold: numberGenerator.next().value, price: 98.94 },
  { date: 'Jun 09 2016', sold: numberGenerator.next().value, price: 99.65 },
  { date: 'Jun 10 2016', sold: numberGenerator.next().value, price: 98.83 },
  { date: 'Jun 13 2016', sold: numberGenerator.next().value, price: 97.34 },
  { date: 'Jun 14 2016', sold: numberGenerator.next().value, price: 97.46 },
  { date: 'Jun 15 2016', sold: numberGenerator.next().value, price: 97.14 },
  { date: 'Jun 16 2016', sold: numberGenerator.next().value, price: 97.55 },
  { date: 'Jun 17 2016', sold: numberGenerator.next().value, price: 95.33 },
  { date: 'Jun 20 2016', sold: numberGenerator.next().value, price: 95.1 },
  { date: 'Jun 21 2016', sold: numberGenerator.next().value, price: 95.91 },
  { date: 'Jun 22 2016', sold: numberGenerator.next().value, price: 95.55 },
  { date: 'Jun 23 2016', sold: numberGenerator.next().value, price: 96.1 },
  { date: 'Jun 24 2016', sold: numberGenerator.next().value, price: 93.4 },
  { date: 'Jun 27 2016', sold: numberGenerator.next().value, price: 92.04 },
  { date: 'Jun 28 2016', sold: numberGenerator.next().value, price: 93.59 },
  { date: 'Jun 29 2016', sold: numberGenerator.next().value, price: 94.4 },
  { date: 'Jun 30 2016', sold: numberGenerator.next().value, price: 95.6 },
  { date: 'Jul 01 2016', sold: numberGenerator.next().value, price: 95.89 },
  { date: 'Jul 05 2016', sold: numberGenerator.next().value, price: 94.99 },
  { date: 'Jul 06 2016', sold: numberGenerator.next().value, price: 95.53 },
  { date: 'Jul 07 2016', sold: numberGenerator.next().value, price: 95.94 },
  { date: 'Jul 08 2016', sold: numberGenerator.next().value, price: 96.68 },
  { date: 'Jul 11 2016', sold: numberGenerator.next().value, price: 96.98 },
  { date: 'Jul 12 2016', sold: numberGenerator.next().value, price: 97.42 },
  { date: 'Jul 13 2016', sold: numberGenerator.next().value, price: 96.87 },
  { date: 'Jul 14 2016', sold: numberGenerator.next().value, price: 98.79 },
  { date: 'Jul 15 2016', sold: numberGenerator.next().value, price: 98.78 },
  { date: 'Jul 18 2016', sold: numberGenerator.next().value, price: 99.83 },
  { date: 'Jul 19 2016', sold: numberGenerator.next().value, price: 99.87 },
  { date: 'Jul 20 2016', sold: numberGenerator.next().value, price: 99.96 },
  { date: 'Jul 21 2016', sold: numberGenerator.next().value, price: 99.43 },
  { date: 'Jul 22 2016', sold: numberGenerator.next().value, price: 98.66 },
  { date: 'Jul 25 2016', sold: numberGenerator.next().value, price: 97.34 },
  { date: 'Jul 26 2016', sold: numberGenerator.next().value, price: 96.67 },
  { date: 'Jul 27 2016', sold: numberGenerator.next().value, price: 102.95 },
  { date: 'Jul 28 2016', sold: numberGenerator.next().value, price: 104.34 },
  { date: 'Jul 29 2016', sold: numberGenerator.next().value, price: 104.21 },
  { date: 'Aug 01 2016', sold: numberGenerator.next().value, price: 106.05 },
  { date: 'Aug 02 2016', sold: numberGenerator.next().value, price: 104.48 },
  { date: 'Aug 03 2016', sold: numberGenerator.next().value, price: 105.79 },
  { date: 'Aug 04 2016', sold: numberGenerator.next().value, price: 105.87 },
  { date: 'Aug 05 2016', sold: numberGenerator.next().value, price: 107.48 },
  { date: 'Aug 08 2016', sold: numberGenerator.next().value, price: 108.37 },
  { date: 'Aug 09 2016', sold: numberGenerator.next().value, price: 108.81 },
  { date: 'Aug 10 2016', sold: numberGenerator.next().value, price: 108 },
  { date: 'Aug 11 2016', sold: numberGenerator.next().value, price: 107.93 },
  { date: 'Aug 12 2016', sold: numberGenerator.next().value, price: 108.18 },
  { date: 'Aug 15 2016', sold: numberGenerator.next().value, price: 109.48 },
  { date: 'Aug 16 2016', sold: numberGenerator.next().value, price: 109.38 },
  { date: 'Aug 17 2016', sold: numberGenerator.next().value, price: 109.22 },
  { date: 'Aug 18 2016', sold: numberGenerator.next().value, price: 109.08 },
  { date: 'Aug 19 2016', sold: numberGenerator.next().value, price: 109.36 },
  { date: 'Aug 22 2016', sold: numberGenerator.next().value, price: 108.51 },
  { date: 'Aug 23 2016', sold: numberGenerator.next().value, price: 108.85 },
  { date: 'Aug 24 2016', sold: numberGenerator.next().value, price: 108.03 },
  { date: 'Aug 25 2016', sold: numberGenerator.next().value, price: 107.57 },
  { date: 'Aug 26 2016', sold: numberGenerator.next().value, price: 106.94 },
  { date: 'Aug 29 2016', sold: numberGenerator.next().value, price: 106.82 },
  { date: 'Aug 30 2016', sold: numberGenerator.next().value, price: 106 },
  { date: 'Aug 31 2016', sold: numberGenerator.next().value, price: 106.1 },
  {
    date: 'Sep 01 2016',
    sold: numberGenerator.next().value,
    price: 106.73
  },
  {
    date: 'Sep 02 2016',
    sold: numberGenerator.next().value,
    price: 107.73
  },
  { date: 'Sep 06 2016', sold: numberGenerator.next().value, price: 107.7 },
  {
    date: 'Sep 07 2016',
    sold: numberGenerator.next().value,
    price: 108.36
  },
  {
    date: 'Sep 08 2016',
    sold: numberGenerator.next().value,
    price: 105.52
  },
  {
    date: 'Sep 09 2016',
    sold: numberGenerator.next().value,
    price: 103.13
  },
  {
    date: 'Sep 12 2016',
    sold: numberGenerator.next().value,
    price: 105.44
  },
  {
    date: 'Sep 13 2016',
    sold: numberGenerator.next().value,
    price: 107.95
  },
  {
    date: 'Sep 14 2016',
    sold: numberGenerator.next().value,
    price: 111.77
  },
  {
    date: 'Sep 15 2016',
    sold: numberGenerator.next().value,
    price: 115.57
  },
  {
    date: 'Sep 16 2016',
    sold: numberGenerator.next().value,
    price: 114.92
  },
  {
    date: 'Sep 19 2016',
    sold: numberGenerator.next().value,
    price: 113.58
  },
  {
    date: 'Sep 20 2016',
    sold: numberGenerator.next().value,
    price: 113.57
  },
  {
    date: 'Sep 21 2016',
    sold: numberGenerator.next().value,
    price: 113.55
  },
  {
    date: 'Sep 22 2016',
    sold: numberGenerator.next().value,
    price: 114.62
  },
  {
    date: 'Sep 23 2016',
    sold: numberGenerator.next().value,
    price: 112.71
  },
  {
    date: 'Sep 26 2016',
    sold: numberGenerator.next().value,
    price: 112.88
  },
  {
    date: 'Sep 27 2016',
    sold: numberGenerator.next().value,
    price: 113.09
  },
  {
    date: 'Sep 28 2016',
    sold: numberGenerator.next().value,
    price: 113.95
  },
  {
    date: 'Sep 29 2016',
    sold: numberGenerator.next().value,
    price: 112.18
  },
  {
    date: 'Sep 30 2016',
    sold: numberGenerator.next().value,
    price: 113.05
  },
  { date: 'Oct 03 2016', sold: numberGenerator.next().value, price: 112.52 },
  { date: 'Oct 04 2016', sold: numberGenerator.next().value, price: 113 },
  { date: 'Oct 05 2016', sold: numberGenerator.next().value, price: 113.05 },
  { date: 'Oct 06 2016', sold: numberGenerator.next().value, price: 113.89 },
  { date: 'Oct 07 2016', sold: numberGenerator.next().value, price: 114.06 },
  { date: 'Oct 10 2016', sold: numberGenerator.next().value, price: 116.05 },
  { date: 'Oct 11 2016', sold: numberGenerator.next().value, price: 116.3 },
  { date: 'Oct 12 2016', sold: numberGenerator.next().value, price: 117.34 },
  { date: 'Oct 13 2016', sold: numberGenerator.next().value, price: 116.98 },
  { date: 'Oct 14 2016', sold: numberGenerator.next().value, price: 117.63 },
  { date: 'Oct 17 2016', sold: numberGenerator.next().value, price: 117.55 },
  { date: 'Oct 18 2016', sold: numberGenerator.next().value, price: 117.47 },
  { date: 'Oct 19 2016', sold: numberGenerator.next().value, price: 117.12 },
  { date: 'Oct 20 2016', sold: numberGenerator.next().value, price: 117.06 },
  { date: 'Oct 21 2016', sold: numberGenerator.next().value, price: 116.6 },
  { date: 'Oct 24 2016', sold: numberGenerator.next().value, price: 117.65 },
  { date: 'Oct 25 2016', sold: numberGenerator.next().value, price: 118.25 },
  { date: 'Oct 26 2016', sold: numberGenerator.next().value, price: 115.59 },
  { date: 'Oct 27 2016', sold: numberGenerator.next().value, price: 114.48 },
  { date: 'Oct 28 2016', sold: numberGenerator.next().value, price: 113.72 },
  { date: 'Oct 31 2016', sold: numberGenerator.next().value, price: 113.54 },
  { date: 'Nov 01 2016', sold: numberGenerator.next().value, price: 111.49 },
  { date: 'Nov 02 2016', sold: numberGenerator.next().value, price: 111.59 },
  { date: 'Nov 03 2016', sold: numberGenerator.next().value, price: 109.83 },
  { date: 'Nov 04 2016', sold: numberGenerator.next().value, price: 108.84 },
  { date: 'Nov 07 2016', sold: numberGenerator.next().value, price: 110.41 },
  { date: 'Nov 08 2016', sold: numberGenerator.next().value, price: 111.06 },
  { date: 'Nov 09 2016', sold: numberGenerator.next().value, price: 110.88 },
  { date: 'Nov 10 2016', sold: numberGenerator.next().value, price: 107.79 },
  { date: 'Nov 11 2016', sold: numberGenerator.next().value, price: 108.43 },
  { date: 'Nov 14 2016', sold: numberGenerator.next().value, price: 105.71 },
  { date: 'Nov 15 2016', sold: numberGenerator.next().value, price: 107.11 },
  { date: 'Nov 16 2016', sold: numberGenerator.next().value, price: 109.99 },
  { date: 'Nov 17 2016', sold: numberGenerator.next().value, price: 109.95 },
  { date: 'Nov 18 2016', sold: numberGenerator.next().value, price: 110.06 },
  { date: 'Nov 21 2016', sold: numberGenerator.next().value, price: 111.73 },
  { date: 'Nov 22 2016', sold: numberGenerator.next().value, price: 111.8 },
  { date: 'Nov 23 2016', sold: numberGenerator.next().value, price: 111.23 },
  { date: 'Nov 25 2016', sold: numberGenerator.next().value, price: 111.79 },
  { date: 'Nov 28 2016', sold: numberGenerator.next().value, price: 111.57 },
  { date: 'Nov 29 2016', sold: numberGenerator.next().value, price: 111.46 },
  { date: 'Nov 30 2016', sold: numberGenerator.next().value, price: 110.52 },
  { date: 'Dec 01 2016', sold: numberGenerator.next().value, price: 109.49 },
  { date: 'Dec 02 2016', sold: numberGenerator.next().value, price: 109.9 },
  { date: 'Dec 05 2016', sold: numberGenerator.next().value, price: 109.11 },
  { date: 'Dec 06 2016', sold: numberGenerator.next().value, price: 109.95 },
  { date: 'Dec 07 2016', sold: numberGenerator.next().value, price: 111.03 },
  { date: 'Dec 08 2016', sold: numberGenerator.next().value, price: 112.12 },
  { date: 'Dec 09 2016', sold: numberGenerator.next().value, price: 113.95 },
  { date: 'Dec 12 2016', sold: numberGenerator.next().value, price: 113.3 },
  { date: 'Dec 13 2016', sold: numberGenerator.next().value, price: 115.19 },
  { date: 'Dec 14 2016', sold: numberGenerator.next().value, price: 115.19 },
  { date: 'Dec 15 2016', sold: numberGenerator.next().value, price: 115.82 },
  { date: 'Dec 16 2016', sold: numberGenerator.next().value, price: 115.97 },
  { date: 'Dec 19 2016', sold: numberGenerator.next().value, price: 116.64 },
  { date: 'Dec 20 2016', sold: numberGenerator.next().value, price: 116.95 },
  { date: 'Dec 21 2016', sold: numberGenerator.next().value, price: 117.06 },
  { date: 'Dec 22 2016', sold: numberGenerator.next().value, price: 116.29 },
  { date: 'Dec 23 2016', sold: numberGenerator.next().value, price: 116.52 },
  { date: 'Dec 27 2016', sold: numberGenerator.next().value, price: 117.26 },
  { date: 'Dec 28 2016', sold: numberGenerator.next().value, price: 116.76 },
  { date: 'Dec 29 2016', sold: numberGenerator.next().value, price: 116.73 },
  { date: 'Dec 30 2016', sold: numberGenerator.next().value, price: 115.82 }
];

/**
 * Data taken from https://github.com/recharts/recharts/blob/master/demo/component/BarChart.js
 */
export const barChartData: BarChartDataPoint[] = [
  {
    name: 'food',
    soldVolume: 1500,
    totalInventory: 2100
  },
  {
    name: 'cosmetic',
    soldVolume: 1900,
    totalInventory: 2200
  },
  {
    name: 'storage',
    soldVolume: 2500,
    totalInventory: 2600
  },
  {
    name: 'digital',
    soldVolume: 2200,
    totalInventory: 3000
  },
  {
    name: 'clothing',
    soldVolume: 1400,
    totalInventory: 2200
  },
  {
    name: 'toys',
    soldVolume: 1000,
    totalInventory: 1400
  }
];

/**
 * Data taken from https://jsfiddle.net/alidingling/scas8xds/
 */
export const scatterPlotData01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 }
];

export const scatterPlotData02 = [
  { x: 300, y: 300, z: 200 },
  { x: 400, y: 500, z: 260 },
  { x: 200, y: 700, z: 400 },
  { x: 340, y: 350, z: 280 },
  { x: 560, y: 500, z: 500 },
  { x: 230, y: 780, z: 200 },
  { x: 500, y: 400, z: 200 },
  { x: 300, y: 500, z: 260 },
  { x: 240, y: 300, z: 400 },
  { x: 320, y: 550, z: 280 },
  { x: 500, y: 400, z: 500 },
  { x: 420, y: 280, z: 200 }
];
