import * as React from 'react';
import PropTypes from 'prop-types';
import RadioM from '@mui/material/Radio';
import { v4 as uuidv4 } from 'uuid';

/**
 * @uxpindocurl https://mui.com/api/radio/
 * @uxpindescription The Radio Group allows the user to select one option from a set.
 */
function Radio(props) {
  // Unique Id
  const id = uuidv4();

  return (
    <RadioM
      key={id}
      {...props}
    />
  );
}

Radio.propTypes = {
  /**
   * If `true`, the component is checked.
   * @uxpinbind onChange 1
   */
  checked: PropTypes.bool,

  /**
 * The color of the component. It supports those theme colors that make sense for this component.
 */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'error', 'success', 'warning', 'inherit']),

  /**
   * The size of the component. small is equivalent to the dense checkbox styling.
   */
  size: PropTypes.oneOf(['small', 'medium']),

  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,
  /**
   * The value of the component.
   */
  value: PropTypes.string,


  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,


  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,

  /**
 * If true, the ripple effect is disabled.
 */
  disableRipple: PropTypes.bool,

  /**
   * Name attribute of the input element.
   */
  name: PropTypes.string,

  /**
   * The id of the input element.
   */
  id: PropTypes.string,

  /**
   * Callback fired when the state is changed.
   */
  onChange: PropTypes.func,

  /**
   * If true, the input element is required.
   */
  required: PropTypes.bool,

  /**
   * Attributes applied to the input element.
   */
  inputProps: PropTypes.object,

  /**
Pass a ref to the input element.
   */
  inputRef: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

Radio.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
};

export default Radio;
