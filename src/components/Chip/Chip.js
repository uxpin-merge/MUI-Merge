import React from 'react';
import PropTypes from 'prop-types';
import ChipM from '@mui/material/Chip';
import Icon from '../Icon/Icon';

/**
* @uxpindocurl https://mui.com/components/chips/
* @uxpindescription Chips are compact elements that represent an input, attribute, or action.
* */
export default function Chip(props) {
  return (
    <ChipM {...props} />
  );
}

Chip.propTypes = {
  /**
   * The content of the component.
   */
  // label: PropTypes.node,
  label: PropTypes.node,

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If true, the chip will appear clickable.
   */
  clickable: PropTypes.bool,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),

  /**
   * The size of the component.
   */
  size: PropTypes.oneOf(['small', 'medium']),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['filled', 'outlined']),

  //
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.oneOf(['a', 'div']),

  /**
   * Override the default delete icon element. Shown only if onDelete is set.
   */
  deleteIcon: PropTypes.element,

  /**
   * Icon element.
   */
  icon: PropTypes.element,

  /**
   * The Avatar element to display.
   * Choose between displaying Icon or Avatar
   */
  avatar: PropTypes.element,

  /**
   * If true, the chip will appear clickable, and will raise when pressed, even if the onClick prop is not defined.
   * If false, the chip will not appear clickable, even if onClick prop is defined.
   */
  onClick: PropTypes.func,

  /**
   * 	Callback fired when the delete icon is clicked. If set, the delete icon will be shown.
   */
  onDelete: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};
