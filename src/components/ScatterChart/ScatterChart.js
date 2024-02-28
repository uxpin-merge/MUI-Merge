import React from 'react';
import PropTypes from 'prop-types';
import { ScatterChart as ScatterChartM } from '@mui/x-charts/ScatterChart';

/**
 * @uxpindocurl https://mui.com/x/react-charts/scatter/
 * @uxpindescription Line charts can express qualities about data, such as hierarchy, highlights, and comparisons.
 */
export default function ScatterChart(props) {
  return <ScatterChartM {...props} />;
}

ScatterChart.propTypes = {
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: PropTypes.number,
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: PropTypes.number,
  /**
   * An array of objects that can be used to populate series and axes data using their dataKey property.
   */
  series: PropTypes.arrayOf(PropTypes.object),
  /**
   * The configuration of the x-axes. If not provided, a default axis config is used with id set to DEFAULT_X_AXIS_KEY.
   */
  xAxis: PropTypes.arrayOf(
    PropTypes.shape({
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
      type: PropTypes.oneOf(['band', 'category', 'linear', 'logarithmic', 'number', 'time']),
      width: PropTypes.number,
    })
  ),
  /**
   * The configuration of the y-axes. If not provided, a default axis config is used with id set to DEFAULT_Y_AXIS_KEY.
   */
  yAxis: PropTypes.arrayOf(
    PropTypes.shape({
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
      type: PropTypes.oneOf(['band', 'category', 'linear', 'logarithmic', 'number', 'time']),
      width: PropTypes.number,
    })
  ),
  /**
   * Indicate which axis to display the bottom of the charts. Can be a string (the id of the axis) or an object ChartsXAxisProps.
   */
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
  ]).isRequired,

  /**
   * Color palette used to colorize multiple series.
   */
  colors: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.func]),

  /**
   * If true, the charts will not listen to the mouse move event. It might break interactive features, but will improve performance.
   */
  disableAxisListener: PropTypes.bool,

  /**
   * Indicate which axis to display the left of the charts. Can be a string (the id of the axis) or an object ChartsYAxisProps.
   */
  leftAxis: PropTypes.oneOfType([
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
      position: PropTypes.oneOf(['left', 'right']),
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

  /**
   * The margin between the SVG and the drawing area. It's used for leaving some space for extra information such as the x- and y-axis or legend.
   */
  margin: PropTypes.shape({
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
  }),

  /**
   * Indicate which axis to display the right of the charts. Can be a string (the id of the axis) or an object ChartsYAxisProps.
   */
  rightAxis: PropTypes.oneOfType([
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
      position: PropTypes.oneOf(['left', 'right']),
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

  /**
   * The props used for each component slot.
   */
  slotProps: PropTypes.object,

  /**
   * Overridable component slots.
   */
  slots: PropTypes.object,

  /**
   * Indicate which axis to display the top of the charts. Can be a string (the id of the axis) or an object ChartsXAxisProps.
   */
  topAxis: PropTypes.oneOfType([
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
};
