import React from 'react';
import PropTypes from 'prop-types';
import TooltipM from '@mui/material/Tooltip';

/**
 * @uxpindocurl https://mui.com/api/tooltip/
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function Tooltip(props) {
  return (
    <TooltipM {...props}>
      <div>{props.children}</div>
    </TooltipM>
  );
}

Tooltip.propTypes = {
  /**
   * Elements contained by Tooltip.
   */
  children: PropTypes.node,

  /**
   * Text to display in the Tooltip.
   * @uxpinpropname  Tooltip Text
   */
  title: PropTypes.string,

  /**
   * 	Override or extend the styles applied to the component. See CSS API below for more details.
   */
  classes: PropTypes.object,

  /**
   * 	Props applied to the Popper element: https://mui.com/material-ui/api/popper/
   */
  PopperProps: PropTypes.object,

  /**
   * If 'true', adds an arrow to the tooltip.
   * @uxpinpropname  Tooltip Border Arrow
   */
  arrow: PropTypes.bool,

  /**
   * If `true`, the tooltip is shown.
   */
  open: PropTypes.bool,

  /**
   *
   * Do not respond to focus-visible events.
   */
  disableFocusListener: PropTypes.bool,

  /**
   *
   * Do not respond to hover events.
   */
  disableHoverListener: PropTypes.bool,

  /**
   * Makes a tooltip not interactive, i.e. it will close when the user hovers over the tooltip before the leaveDelay is expired.
   */
  disableInteractive: PropTypes.bool,

  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener: PropTypes.bool,

  /**
   * Where the Tooltip should display in relation to its nested element.
   */
  placement: PropTypes.oneOf([
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
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: PropTypes.func,

  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default Tooltip;
