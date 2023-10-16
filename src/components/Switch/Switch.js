import React from 'react';
import PropTypes from 'prop-types';
import SwitchM from '@mui/material/Switch';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants';

/**
 * @uxpindocurl https://mui.com/components/switches/#main-content
 * @uxpindescription Switches toggle the state of a single setting on or off.
 */
function Switch(props) {
  return (
    <SwitchM
      {...props}
    />
  );
}

Switch.propTypes = {
  /**
   * If `true`, the switch is checked.
   * @uxpinbind onChange 1
   */
  checked: PropTypes.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The color of the component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']),

  /**
   * if `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,

  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,

  /**
   * Change event to use with UXPin interactions.
   */
  onChange: PropTypes.func,

  /**
   * The size of the component.
   */
  size: PropTypes.oneOf(['small', 'medium']),

  /**
   * The value of the component
   */
  value: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

Switch.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
};

export default Switch;
