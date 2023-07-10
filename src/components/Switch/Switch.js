import React from 'react';
import PropTypes from 'prop-types';
import SwitchM from '@mui/material/Switch';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants';

/**
 * @uxpindocurl https://mui.com/components/switches/#main-content
 */
function Switch(props) {
  return (
    <SwitchM
      {...props}
      icon={props.icon ? <Icon fontSize="small">{props.icon}</Icon> : null}
      checkedIcon={props.checkedIcon ? <Icon fontSize="small">{props.checkedIcon}</Icon> : null}
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
  icon: PropTypes.oneOf(iconVariants),

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.oneOf(iconVariants),

  /**
   * @uxpinignoreprop
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
   * @uxpinignoreprop
   */
  disableRipple: PropTypes.bool,

  /**
   * @uxpinignoreprop
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
