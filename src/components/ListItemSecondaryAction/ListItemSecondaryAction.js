import React from 'react';
import PropTypes from 'prop-types';
import ListItemSecondaryActionM from '@mui/material/ListItemSecondaryAction';

/**
 * @uxpindocurl https://mui.com/api/list-item/
 */
function ListItemSecondaryAction(props) {
  return <ListItemSecondaryActionM {...props}>{props.children}</ListItemSecondaryActionM>;
}

ListItemSecondaryAction.propTypes = {

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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default ListItemSecondaryAction;
