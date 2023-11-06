import React from 'react';
import PropTypes from 'prop-types';
import ListM from '@mui/material/List';

/**
 * @uxpindocurl https://mui.com/api/list/
 * @uxpindescription Lists are continuous, vertical indexes of text or images.
 */
function List(props) {
  return (
    <ListM {...props}>
      {props.children}
    </ListM>
  );
}

List.propTypes = {
  /**
   * The content of the component. Text or nested components.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.node,

  /**
   * If true, compact vertical padding designed for keyboard and mouse input is used for the list and list items.
   * The prop is available to descendant components as the dense context.
   */
  dense: PropTypes.bool,

  /**
   * If true, vertical padding is removed from the list.
   */
  disablePadding: PropTypes.bool,

  /**
   * The content of the subheader, normally ListSubheader component.
   */
  subheader: PropTypes.node,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default List;
