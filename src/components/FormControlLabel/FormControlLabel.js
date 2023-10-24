import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabelM from '@mui/material/FormControlLabel';

/**
 * @uxpindocurl https://mui.com/api/form-control-label/#main-content
 */
function FormControlLabel(props) {
  return <FormControlLabelM {...props}>{props.children}</FormControlLabelM>;
}

FormControlLabel.propTypes = {
  /**
  * If `true`, the component appears selected.
  */
  checked: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: PropTypes.object,
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: PropTypes.node,
  /**
   * If `true`, the control is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: PropTypes.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: PropTypes.string,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: PropTypes.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: PropTypes.oneOf(['bottom', 'end', 'start', 'top']),

  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: PropTypes.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: PropTypes.bool,
  /**
   * The props used for each slot inside.
   */
  slotProps: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
  /**
   * The value of the component.
   */
  value: PropTypes.string
};

export default FormControlLabel;
