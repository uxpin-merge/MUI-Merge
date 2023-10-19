import * as React from 'react';
import PropTypes from 'prop-types';
import FabM from '@mui/material/Fab';

/**
 * @uxpindocurl https://mui.com/api/fab/
 * @uxpindescription A Floating Action Button (FAB) performs the primary, or most common, action on a screen.
 */
function Fab(props) {
  return (
    <FabM {...props} />
  );
}

Fab.propTypes = {
  /**
   * The label of the button.
   * */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component. See
   */
  classes: PropTypes.object,

  /**
   * The color of the button.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.string,

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If true, the keyboard focus ripple is disabled.
   */
  disabledFocusRipple: PropTypes.bool,

  /**
   * If true, the ripple effect is disabled.
   */
  disabledRipple: PropTypes.bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an a element will be used as the root node.
   */
  href: PropTypes.string,

  /**
   * Custom Prop.
   * The text of the button.
   */
  label: PropTypes.string,

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The type of button.
   */
  variant: PropTypes.oneOf(['circular', 'extended']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * */
  sx: PropTypes.object,
};

export default Fab;
