import React from 'react';
import PropTypes from 'prop-types';
import InputAdornmentM from '@mui/material/InputAdornment';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants';

/**
 * @uxpindocurl https://mui.com/components/switches/#main-content
 */
function InputAdornment(props) {
  return (
    <InputAdornmentM
      {...props}
    />
  );
}

InputAdornment.propTypes = {
  /**
    * The content of the component, normally an `IconButton` or string.
    */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   */
  disablePointerEvents: PropTypes.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   */
  disableTypography: PropTypes.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: PropTypes.oneOf(['end', 'start']),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
};

export default InputAdornment;
