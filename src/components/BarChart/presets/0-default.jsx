import React from 'react';
import BarChart from '../BarChart';

export default (
  <BarChart
    xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
    series={[{ data: ["4", "3", "5"] }, { data: ["1", "6", "3"] }, { data: ["2", "5", "6"] }]}
    width={500}
    height={300}
    uxpId="barchart-1"
  />

);
