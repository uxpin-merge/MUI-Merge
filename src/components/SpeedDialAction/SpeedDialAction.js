import * as React from 'react';
import PropTypes from 'prop-types';
import SpeedDialActionM from '@mui/material/SpeedDialAction';

export default function SpeedDialAction(props) {
  return <SpeedDialActionM {...props} />;
}

SpeedDialAction.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * Props applied to the [`Fab`](/material-ui/api/fab/) component.
   */
  FabProps: PropTypes.object,
  /**
   * Adds a transition delay, to allow a series of SpeedDialActions to be animated.
   */
  delay: PropTypes.number,
  /**
   * The icon to display in the SpeedDial Fab.
   */
  icon: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
  /**
   * `classes` prop applied to the [`Tooltip`](/material-ui/api/tooltip/) element.
   */
  TooltipClasses: PropTypes.object,
  /**
   * Placement of the tooltip.
   */
  tooltipPlacement: PropTypes.oneOf([
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top',
  ]),
  /**
   * Label to display in the tooltip.
   */
  tooltipTitle: PropTypes.node,
  /**
   * Make the tooltip always visible when the SpeedDial is open.
   */
  tooltipOpen: PropTypes.bool,
};
