import React from 'react';
import PropTypes from 'prop-types';
import ListItemM from '@mui/material/ListItem';

/**
 * @uxpindocurl https://mui.com/api/list-item/
 * @uxpindescription Lists are continuous, vertical indexes of text or images.
 */
function ListItem(props) {
  return <ListItemM {...props}>{props.children}</ListItemM>;
}

ListItem.propTypes = {

  /**
   * The content of the component. Text or nested components.
   */
  children: PropTypes.node,
  /**
   * The element to display at the end of ListItem.
   * This might be difficult to add for merge as writing for e.g. <Checkbox /> is not good Designer experience.
   */
  secondaryAction: PropTypes.node,
  /**
   * The element to display at the end of ListItem.
   * This might be difficult to add for merge as writing for e.g. <Checkbox /> is not good Designer experience.
   */
  alignItems: PropTypes.oneOf(['center', 'flex-start']),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.object,

  /**
   * The props used for each slot inside the Input.
   */
  componentProps: PropTypes.object,

  /**
   * If true, compact vertical padding designed for keyboard and mouse input is used for the list and list items.
   * The prop is available to descendant components as the dense context.
   */
  dense: PropTypes.bool,

  /**
   * If true, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,

  /**
   * If true, all padding is removed.
   */
  disablePadding: PropTypes.bool,

  /**
   * If true, a 1px light border is added to the bottom of the list item.
   */
  divider: PropTypes.bool,

  /**
   * The extra props for the slot components. You can override the existing props or add new ones.
   * This prop is an alias for the componentsProps prop, which will be deprecated in the future.
   */
  slotProps: PropTypes.object,

  /**
 * The components used for each slot inside.
 * This prop is an alias for the components prop, which will be deprecated in the future.
 */
  slots: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default ListItem;
