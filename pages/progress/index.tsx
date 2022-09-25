import React from 'react';
import Layout from '../../components/layout';
import StockChart from '../../components/stockChart';

type Props = {};
const data = {
  stockFullName: 'SW Limited.',
  stockShortName: 'ASX:SFW',
  price: {
    current: 2.32,
    open: 2.23,
    low: 2.215,
    high: 2.325,
    cap: 93765011,
    ratio: 20.1,
    dividend: 1.67,
  },
  chartData: {
    labels: [
      '10:00',
      '',
      '',
      '',
      '12:00',
      '',
      '',
      '',
      '2:00',
      '',
      '',
      '',
      '4:00',
    ],
    data: [
      2.23, 2.215, 2.22, 2.25, 2.245, 2.27, 2.28, 2.29, 2.3, 2.29, 2.325, 2.325,
      2.32,
    ],
  },
};

const progress = (props: Props) => {
  return (
    <>
      <Layout>
        <div className="min-h-screen w-[100%] flex flex-col md:flex-row  items-center justify-center px-1 py-1 gap-4">
          <StockChart info={data} />
          <StockChart info={data} />
          <StockChart info={data} />
          <StockChart info={data} />
        </div>
      </Layout>
    </>
  );
};

export default progress;
