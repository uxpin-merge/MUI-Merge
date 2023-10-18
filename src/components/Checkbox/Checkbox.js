import React from 'react';
import PropTypes from 'prop-types';
import CheckboxM from '@mui/material/Checkbox';
import Icon from '../Icon/Icon';
import { v4 as uuidv4 } from 'uuid';

/**
 * @uxpindocurl https://mui.com/api/checkbox/
 * @uxpindescription Checkboxes allow the user to select one or more items from a set.
 */
function Checkbox(props) {
  // Unique Id
  const id = uuidv4();

  return (
    <CheckboxM
      key={id}
      {...props}
    />
  );
}

Checkbox.propTypes = {
  /**
   * If `true`, the component is checked.
   * @uxpinbind onChange 1
   */
  checked: PropTypes.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']),

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,

  /**
 * If `true`, the ripple effect is disabled.
 */
  disableRipple: PropTypes.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   */
  indeterminate: PropTypes.bool,
  /**
   * The icon to display when the component is indeterminate.
   */
  indeterminateIcon: PropTypes.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: PropTypes.string,
  /**
   * Callback fired when the state is changed.
   */
  onChange: PropTypes.func,

  /**
   * If true, the input element is required.
   */
  required: PropTypes.bool,

  /**
   * The size of the component. small is equivalent to the dense checkbox styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The value of the component.
   */
  value: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default Checkbox;
