import React from 'react';
import LineChart from '../LineChart';

export default (
  <LineChart
    xAxis={[
      {
        "scaleType": "point",
        "data": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
        ]
      }
    ]}
    series={[
      {
        "data": [
          "30",
          "46",
          "29",
          "23",
          "38",
          "30",
          "15"
        ],
        "label": "PageViews",
        "area": true,
        "showMark": true
      },
      {
        "data": [
          "28",
          "32",
          "10",
          "18",
          "35",
          "25",
          "10"
        ],
        "label": "Sessions",
        "area": true,
        "showMark": true
      }
    ]}
    width={500}
    height={300}
    uxpId="linechart-1"
  />
);
