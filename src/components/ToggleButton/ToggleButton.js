import * as React from 'react';
import PropTypes from 'prop-types';
import ToggleButtonM from '@mui/material/ToggleButton';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants';

/**
 * @uxpindocurl https://mui.com/api/toggle-button/
 * @uxpindescription A Toggle Button can be used to group related options.
 */
function ToggleButton(props) {
  return (
    <ToggleButtonM {...props} />
  );
}

ToggleButton.propTypes = {
  /**
   * The content of the component.
   * */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The color of the button whhen it is in an active state.
   */
  color: PropTypes.oneOf(['standard', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),

  /**
   * If true, the keyboard focus ripple is disabled.
   */
  disabledFocusRipple: PropTypes.bool,

  /**
   * If true, the ripple effect is disabled.
   * ⚠️ Without a ripple there is no styling for :focus-visible by default.
   */
  disabledRipple: PropTypes.bool,

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The value to associate with the button when selected in a ToggleButtonGroup.
   */
  value: PropTypes.string,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If true, the button is rendered in an active state.
   * @uxpinbind onChange 1
   */
  selected: PropTypes.bool,

  /**
   * Custom Prop
   */
  onChange: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default ToggleButton;
