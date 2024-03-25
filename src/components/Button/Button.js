import React from 'react';
import PropTypes from 'prop-types';
import ButtonM from '@mui/material/Button';

/**
 * @uxpindocurl https://mui.com/components/buttons/#main-content
 * @uxpindescription Buttons allow users to take actions, and make choices, with a single tap.
 */

function Button(props) {
  return <ButtonM {...props}>{props.children}</ButtonM>;
}

Button.propTypes = {
  /**
   * The label of the button.
   * */
  children: PropTypes.node,
  /**
   * The id of the element. Usefull for anchorEl of menu and other elements that need origin position.
   * */
  id: PropTypes.string,

  /**
   * The color of the button.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, the button will have no elevation.
   */
  disableElevation: PropTypes.bool,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The type of button.
   */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  /**
   * The type of button.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),

  /**
   * The HREF of the button.
   */
  href: PropTypes.string,

  /**
   * If set, icon will display to the left.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  startIcon: PropTypes.node,

  /**
   * If set, icon will display to the right.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  endIcon: PropTypes.node,

  /**
   * On click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default Button;
