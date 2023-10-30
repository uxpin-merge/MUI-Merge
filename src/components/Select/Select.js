import * as React from 'react';
import PropTypes from 'prop-types';
import SelectM from '@mui/material/Select';
import { v4 as uuidv4 } from 'uuid';

/**
 * @uxpindocurl https://mui.com/api/select/
 * @uxpindescription Select components are used for collecting user provided information from a list of options.
 */
function Select(props) {
  // Unique Id
  const id = uuidv4();
  return (
    <SelectM
      key={id}
      // MenuProps={{ container: document.querySelector("[id='" + id + "']") }}
      {...props}
    >
      {props.children}
    </SelectM>
  );
}

Select.propTypes = {
  /**
 * The input value.
 * Providing an empty string will select no options. Set to an empty string '' if you don't want any of the available options to be selected.
 * If the value is an object it must have reference equality with the option in order to be selected.
 * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
* @uxpinbind onChange 0.target.value
*/
  value: PropTypes.array,

  /**
   * Replaced with width prop
   * If true, the width of the popover will automatically be set according to the items inside the menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: PropTypes.bool,

  /**
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,

  /**
   * If true, the component is initially open. Use when the component open state is not controlled
   * (i.e. the open prop is not defined). You can only use it when the native prop is false (default).
   */
  defaultOpen: PropTypes.bool,

  /**
   * If true, a value is displayed even if no items are selected.
   * In order to display a meaningful value, a function can be passed to the renderValue prop which returns the value to be displayed when no items are selected.
   * When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   */
  displayEmpty: PropTypes.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: PropTypes.elementType,

  /**
   * The id of the wrapper element or the select element when native.
   */
  id: PropTypes.string,

  /**
   * An Input element; does not have to be a MUI specific Input.
   */
  input: PropTypes.node,

  /**
   * Attributes applied to the input element. When native is true, the attributes are applied on the select element.
   */
  inputProps: PropTypes.object,

  /**
   * The Label of the Component.
   * The value is used in InputLabel.
   * OutlineInput provides layout css to the label when a MenuItem is selected.
   */
  label: PropTypes.node,

  /**
   * The ID of an element that acts as an additional label. The Select will be labelled by the additional label and the selected value.
   */
  labelId: PropTypes.string,

  /**
   * Props applied to the Menu element.
   */
  MenuProps: PropTypes.object,

  /**
   * If true, value must be an array and the menu will support multiple selections.
   */
  multiple: PropTypes.bool,

  /**
   * If true, the component uses a native select element.
   */
  native: PropTypes.bool,

  /**
   * Render the selected value. You can only use it when the native prop is false (default).
   */
  renderValue: PropTypes.func,

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: PropTypes.object,

  /**
   * The varian to use.
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),


  /**
   * Custom Prop.
   * The width of the Select.
   * Can use px - 50px.
   * Can use % - 100%.
   */
  // width: PropTypes.string,

  /**
   * Callback fired when a menu item is selected.
   */
  onChange: PropTypes.func,

  /**
   * Callback fired when the component requests to be closed. Use in controlled mode (see open).
   */
  onClose: PropTypes.func,

  /**
   * Callback fired when the component requests to be opened. Use in controlled mode (see open).
   * @uxpinpropname On Open
   */
  onOpen: PropTypes.func,

  /**
   * If true, the component is shown. You can only use it when the native prop is false (default).
   */
  open: PropTypes.bool,

  /**
   */
  sx: PropTypes.object,
};

export default Select;
