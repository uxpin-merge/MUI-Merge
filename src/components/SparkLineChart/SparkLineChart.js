import React from 'react';
import PropTypes from 'prop-types';
import { SparkLineChart as SparkLineChartM } from '@mui/x-charts/SparklineChart';

/**
 * @uxpindocurl https://mui.com/x/react-charts/scatter/
 * @uxpindescription Line charts can express qualities about data, such as hierarchy, highlights, and comparisons.
 */
function SparkLineChart(props) {
  return <SparkLineChartM {...props} />;
}

SparkLineChart.propTypes = {
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: PropTypes.number,

  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: PropTypes.number,

  /**
   * Data to plot.
   */
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  /**
   * The xAxis configuration.
   */
  xAxis: PropTypes.shape({
    axisId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    classes: PropTypes.object,
    data: PropTypes.array,
    dataKey: PropTypes.string,
    disableLine: PropTypes.bool,
    disableTicks: PropTypes.bool,
    fill: PropTypes.string,
    hideTooltip: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    label: PropTypes.string,
    labelFontSize: PropTypes.number,
    labelStyle: PropTypes.object,
    max: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number]),
    min: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number]),
    position: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),
    reverse: PropTypes.bool,
    scaleType: PropTypes.oneOf(['band', 'linear', 'log', 'point', 'pow', 'sqrt', 'time', 'utc']),
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
    valueFormatter: PropTypes.func,
  }),
  /**
   * Set to true to fill spark line area. Has no effect if plotType='bar'.
   */
  area: PropTypes.bool,

  /**
   * Color palette used to colorize multiple series.
   */
  colors: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.func]),

  /**
   * An array of objects that can be used to populate series and axes data using their dataKey property.
   */
  dataset: PropTypes.arrayOf(PropTypes.object),

  /**
   * If true, the charts will not listen to the mouse move event. It might break interactive features, but will improve performance.
   */
  disableAxisListener: PropTypes.bool,

  /**
   * The margin between the SVG and the drawing area. Accepts an object with the optional properties: top, bottom, left, and right.
   */
  margin: PropTypes.shape({
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
  }),

  /**
   * Type of plot used.
   */
  plotType: PropTypes.oneOf(['bar', 'line']),

  /**
   * Set to true to highlight the value. With line, it shows a point. With bar, it shows a highlight band.
   */
  showHighlight: PropTypes.bool,

  /**
   * Set to true to enable the tooltip in the sparkline.
   */
  showTooltip: PropTypes.bool,

  /**
   * If true, bar animations are skipped.
   */
  skipAnimation: PropTypes.bool,

  /**
   * The props used for each component slot.
   */
  slotProps: PropTypes.object,

  /**
   * Overridable component slots.
   */
  slots: PropTypes.object,

  /**
   * Formatter used by the tooltip.
   */
  valueFormatter: PropTypes.func,
};
export default SparkLineChart;

// Default values for props
// SparkLineChart.defaultProps = {
//   area: false,
//   colors: 'blueberryTwilightPalette',
//   disableAxisListener: false,
//   margin: { top: 5, bottom: 5, left: 5, right: 5 },
//   plotType: 'line',
//   showHighlight: false,
//   showTooltip: false,
//   skipAnimation: false,
//   slotProps: {},
//   slots: {},
//   valueFormatter: (value) => (value === null ? '' : value.toString()),
// };
