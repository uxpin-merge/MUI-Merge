import React from 'react';
import Radio from '../Radio/Radio';
import RadioGroupM from '@mui/material/RadioGroup';
import FormControlLabel from '../FormControlLabel/FormControlLabel';
import FormControl from '../FormControl/FormControl';
import FormLabel from '../FormLabel/FormLabel';
import PropTypes from 'prop-types';

/**
 * @uxpindocurl https://mui.com/api/radio-group/
 * @uxpindescription The Radio Group allows the user to select one option from a set.
 */
export default function RadioGroup(props) {
  return (
    <RadioGroupM {...props} />
  );
}

RadioGroup.propTypes = {

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Display group of elements in a compact row.
   */
  row: PropTypes.bool,

  /**
  * The value of the initially selected radio button.
  * @uxpinbind onChange 1
  */
  value: PropTypes.string,

  /**
   * The name used to reference the value of the control. If you don't provide this prop, it falls back to a randomly generated name.
  */
  defaultValue: PropTypes.string,

  /**
   * The name used to reference the value of the control. If you don't provide this prop, it falls back to a randomly generated name.
   */
  name: PropTypes.string,

  /**
   * Callback fired when a radio button is selected.
   * Signature:
   * function(event: React.ChangeEvent, value: string) => void
   * event The event source of the callback.
   * value The value of the selected radio button. You can pull out the new value by accessing event.target.value (string).
   */
  onChange: PropTypes.func,

  /**
   * Override or extend the styles applied to the component.
   */

  classes: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

RadioGroup.defaultProps = {
  onChange: () => undefined,
};
