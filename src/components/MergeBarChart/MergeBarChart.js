import { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from "prop-types";

// third-party
import ReactApexChart from 'react-apexcharts';


// ==============================|| MONTHLY BAR CHART ||============================== //

const MergeBarChart = (props) => {
  // chart options
  const barChartOptions = {
    chart: {
      type: props.bar,
      width: "100%",
      toolbar: {
        show: props.toolbar
      },
      stacked: props.stacked,
      stackType: props.stackType
    },
    plotOptions: {
      bar: {
        columnWidth: props.columnWidth,
        borderRadius: props.borderRadius,
      }
    },
    legend: {
      position: props.legendPos,
      show: props.legend
    },
    dataLabels: {
      enabled: props.dataLabels
    },
    xaxis: {
      categories: props.categories,
      axisBorder: {
        show: props.axisBorder
      },
      axisTicks: {
        show: props.axisTicks
      }
    },
    yaxis: {
      show: props.yaxis
    },
    grid: {
      show: props.grid
    },
    title: {
      text: props.title,
      align: props.titlePos,
    },
    stroke: {
      show: props.stroke,
      width: props.strokeWidth,
      colors: ['#fff']
    },


  };


  const [series] = useState(props.series);
  const [options, setOptions] = useState(barChartOptions);


  React.useEffect(() => {
    setOptions(barChartOptions)
  });


  return (
   
      <ReactApexChart options={options} series={series}  {...props} />
  
  );
};
MergeBarChart.propTypes = {
  title: PropTypes.string,
  titlePos: PropTypes.oneOf(['default', 'left', 'center', 'right']),
  type: PropTypes.oneOf(['line', 'area', 'bar']),
  categories: PropTypes.object,
  series: PropTypes.object,
  toolbar: PropTypes.bool,
  dataLabels: PropTypes.bool,
  columnWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  axisBorder: PropTypes.bool,
  axisTicks: PropTypes.bool,
  yaxis: PropTypes.bool,
  grid: PropTypes.bool,
  stacked: PropTypes.bool,
  stackType: PropTypes.oneOf(['default', 'normal', '100%']),
  legend: PropTypes.bool,
  legendPos: PropTypes.oneOf(['default', 'top', 'bottom', 'right', 'left']),
  stroke: PropTypes.bool,
  strokeWidth: PropTypes.number,
  height: PropTypes.number
}

MergeBarChart.defaultProps = {
  type: "bar",
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    {
      name: "Income",
      color: "#42a5f5",
      data: [20, 28, 38, 30, 43, 48]
    },
    {
      name: "Expenses",
      color: "#1565c0",
      data: [18, 8, 26, 8, 27, 30]
    }
  ],
  toolbar: false,
  dataLabels: false,
  columnWidth: 60,
  borderRadius: 6,
  axisBorder: false,
  axisTicks: false,
  yaxis: false,
  grid: false,
  stacked: false,
  legend: false,
  legendPos: "bottom",
  stackType: "normal",
  title: "",
  titlePos: "left",
  stroke: true,
  strokeWidth: 1
}

export default MergeBarChart;
