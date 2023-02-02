import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '../TextField/TextField';
import { DatePicker as DatePickerM } from '@mui/x-date-pickers';
import PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @uxpindocurl https://mui.com/api/date-picker/
 */
function DatePicker(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePickerM {...props} renderInput={(params) => <TextField {...params} helperText={props.helperText} />} />
    </LocalizationProvider>
  );
}

DatePicker.propTypes = {
  /**
   * The label text of the input.
   */
  label: PropTypes.string,

  /**
   * The helper text of the input.
   */
  helperText: PropTypes.string,

  /**
   * The value of the picker.
   */
  value: PropTypes.node,

  // maxDate: PropTypes.node,
  // minDate: PropTypes.node,
  // mask: PropTypes.string,

  /**
   * If true, show the toolbar even in desktop mode.
   * @uxpinignoreprop
   */
  showToolbar: PropTypes.bool,

  /**
   * Mobile picker title, displaying in the toolbar.
   * @uxpinignoreprop
   */
  toolbarTitle: PropTypes.node,

  /**
   * Mobile picker date value placeholder, displaying if value === null.
   * don't need if using 'new Date()' in state.
   * @uxpinignoreprop
   */
  toolbarPlaceholder: PropTypes.node,

  /**
   * Array of views to show.
   * Examples:
   * ["day"]
   * ["year"]
   * ["month"]
   * ["month", "year"]
   * @uxpinignoreprop
   */
  views: PropTypes.object,

  /**
   * Control the popup or dialog open state.
   */
  open: PropTypes.bool,

  /**
   * Force rendering in particular orientation.
   * @uxpinignoreprop
   */
  orientation: PropTypes.oneOf(['landscape', 'portrait']),

  /**
   * If true, the picker and text field are disabled.
   * */
  disabled: PropTypes.bool,

  /**
   * Make picker read only.
   */
  readOnly: PropTypes.bool,

  /**
   * The renderInput prop allows you to customize the rendered input.
   * The props argument of this render prop contains props of TextField that you need to forward.
   * Pay specific attention to the ref and inputProps keys.
   * @uxpinignoreprop
   */
  renderInput: PropTypes.func,

  /**
   * Callback fired when the value (the selected date) changes @DateIOType.
   */
  onChange: PropTypes.func,

  /**
   * Callback fired when date is accepted @DateIOType.
   */
  onAccept: PropTypes.func,

  /**
   * Callback that fired when input value or new value prop validation returns new validation error (or value is valid after error).
   * To implement follow guide below:
   * https://next.material-ui-pickers.dev/guides/forms
   */
  onError: PropTypes.func,

  /**
   * Callback fired when the popup requests to be opened. Use in controlled mode (see open).
   */
  onOpen: PropTypes.func,
};

export default DatePicker;
