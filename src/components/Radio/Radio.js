import * as React from 'react';
import PropTypes from 'prop-types';
import RadioM from '@mui/material/Radio';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants';

/**
 * @uxpindocurl https://mui.com/api/radio/
 */
function Radio(props) {
  return (
    <RadioM
      {...props}
      icon={props.icon ? <Icon>{props.icon}</Icon> : <Icon>radio_button_unchecked</Icon>}
      checkedIcon={props.checkedIcon ? <Icon>{props.checkedIcon}</Icon> : <Icon>radio_button_checked</Icon>}
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'success', 'warning']),

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,

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

Radio.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
};

export default Radio;
