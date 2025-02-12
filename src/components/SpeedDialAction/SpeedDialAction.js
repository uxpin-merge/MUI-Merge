import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDialM from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialActionM from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

/**
 * @uxpindocurl https://mui.com/material-ui/react-speed-dial/#api
 */
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
   * @default {}
   */
  FabProps: PropTypes.object,
  /**
   * Adds a transition delay, to allow a series of SpeedDialActions to be animated.
   * @default 0
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
   * @default 'left'
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
   * @default false
   */
  tooltipOpen: PropTypes.bool,
};
