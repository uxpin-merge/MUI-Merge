import React from 'react';
import PropTypes from 'prop-types';
import { PieChart as PieChartM } from '@mui/x-charts/PieChart';

/**
 * @uxpindocurl https://mui.com/x/react-charts/pie/
 * @uxpindescription Pie charts express portions of a whole, using arcs or angles within a circle.
 */
function PieChart(props) {
  return <PieChartM {...props} />;
}

PieChart.propTypes = {
  // Chart width
  width: PropTypes.number,
  // Chart height
  height: PropTypes.number,
  // Configuration for the x-axis
  xAxis: PropTypes.arrayOf(
    PropTypes.shape({
      // Similar structure to bottomAxis but includes data and dataKey
    })
  ),
  // Configuration for the y-axis
  yAxis: PropTypes.arrayOf(
    PropTypes.shape({
      // Similar structure to bottomAxis but includes data and dataKey
    })
  ),

  // Defines the configuration for the bottom axis of the chart
  bottomAxis: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      axisId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      classes: PropTypes.object,
      disableLine: PropTypes.bool,
      disableTicks: PropTypes.bool,
      fill: PropTypes.string,
      label: PropTypes.string,
      labelFontSize: PropTypes.number,
      labelStyle: PropTypes.object,
      position: PropTypes.oneOf(['bottom', 'top']),
      slotProps: PropTypes.object,
      slots: PropTypes.object,
      stroke: PropTypes.string,
      tickFontSize: PropTypes.number,
      tickInterval: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.func]),
      tickLabelInterval: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
      tickLabelStyle: PropTypes.object,
      tickMaxStep: PropTypes.number,
      tickMinStep: PropTypes.number,
      tickNumber: PropTypes.number,
      tickSize: PropTypes.number,
    }),
  ]),
  // Color palette for the chart
  colors: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.func]),
  // Dataset for the chart
  series: PropTypes.arrayOf(PropTypes.object),
  // Disables axis listener if true
  disableAxisListener: PropTypes.bool,

  // Defines the configuration for the left axis of the chart
  leftAxis: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      // Similar structure to bottomAxis
    }),
  ]),
  // Margin around the chart
  margin: PropTypes.shape({
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
  }),
  // Defines the configuration for the right axis of the chart
  rightAxis: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      // Similar structure to bottomAxis
    }),
  ]),
  // Skip animations if true
  skipAnimation: PropTypes.bool,
  // Props for component slots
  slotProps: PropTypes.object,
  // Defines the configuration for the top axis of the chart
  topAxis: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      // Similar structure to bottomAxis
    }),
  ]),
};

export default PieChart;
