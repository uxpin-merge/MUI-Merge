import { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from "prop-types";

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';


// ==============================|| MONTHLY BAR CHART ||============================== //

const MonthlyBarChart = (props) => {
  // chart options
const barChartOptions = {
  chart: {
      type: 'bar',
      height: "100%",
      toolbar: {
          show: props.toolbar
      },
      stacked: props.stacked,
      stackType: props.stackType
  },
  // colors: ['#546E7A', '#E91E63'],
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


    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const info = theme.palette.info.light;

    const [series] = useState(props.series);

    const [options, setOptions] = useState(barChartOptions);


    // useEffect(() => {
    //     setOptions((prevState) => ({
    //         ...prevState,
    //         // colors: [info],
    //         xaxis: {
    //             labels: {
    //                 style: {
    //                     colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary]
    //                 }
    //             }
    //         },
    //         tooltip: {
    //             theme: 'light'
    //         }
    //     }));
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [primary, info, secondary]);



    return (
        <div id="chart">
            <ReactApexChart options={options} series={series}  {...props} />
        </div>
    );
};
MonthlyBarChart.propTypes = {
  // options: PropTypes.object,
  title: PropTypes.string,
  titlePos: PropTypes.oneOf(['default', 'left', 'center', 'right']),
  type: PropTypes.oneOf([ 'line', 'area', 'bar', 'pie', 'donut', 'scatter', 'bubble', 'heatmap', 'radialBar']),
  categories: PropTypes.object,
  series: PropTypes.object,
  toolbar: PropTypes.bool,
  dataLabels: PropTypes.bool,
  columnWidth: PropTypes.number,
  borderRadius: PropTypes.number,
//  width: PropTypes.number,
//  height: PropTypes.number,
axisBorder: PropTypes.bool,
axisTicks: PropTypes.bool,
yaxis:PropTypes.bool,
grid:PropTypes.bool,
stacked:PropTypes.bool,
stackType: PropTypes.oneOf([ 'default', 'normal', '100%']),
legend: PropTypes.bool,
legendPos: PropTypes.oneOf([ 'default', 'top', 'bottom', 'right', 'left']),
stroke: PropTypes.bool,
strokeWidth: PropTypes.number
}

MonthlyBarChart.defaultProps = {
  // options: PropTypes.object,
  type: "bar",
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  series: [
    {
      name: "Income",
      color:"#42a5f5",
        data: [80, 95, 70, 42, 65, 55, 78]
    },
    {
      name: "Expenses",
      color:"#1565c0",
      data: [80, 95, 70, 42, 65, 55, 78]
  }
],
toolbar: false,
dataLabels: false,
columnWidth: 60,
borderRadius: 6,
axisBorder:false,
axisTicks: false,
yaxis: false,
grid: false,
stacked: false,
legend: false,
legendPos: "bottom",
stackType: "normal",
title: "Income Overview",
titlePos: "left",
stroke: true,
strokeWidth: 1
}

export default MonthlyBarChart;
