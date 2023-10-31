import * as React from 'react';
import ToggleButtonGroupM from '@mui/material/ToggleButtonGroup';
import PropTypes from 'prop-types';

/**
 * @uxpindocurl https://mui.com/api/toggle-button-group/
 * @uxpindescription A Toggle Button can be used to group related options.
 */
export default function ToggleButtonGroup(props) {

  return (
    <ToggleButtonGroupM {...props}>
      {props.children}
    </ToggleButtonGroupM>
  );
}

ToggleButtonGroup.propTypes = {
  /**
   * The content of the component.
   * */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   */
  onChange: PropTypes.func,

  /**
   * The component orientation (layout flow direction).
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The color of the button whhen it is in an active state.
   */
  color: PropTypes.oneOf(['standard', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),

  /**
   * The value to associate with the button when selected in a ToggleButtonGroup.
  * @uxpinbind onChange 1
   */
  value: PropTypes.string,

  /**
   * If true, only allow one of the child ToggleButton values to be selected.
   */
  exclusive: PropTypes.bool,

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If true, the button group will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};
