import React from 'react';
import PropTypes from 'prop-types';
import ListItemAvatarM from '@mui/material/ListItemAvatar';

/**
 * @uxpindocurl https://mui.com/api/list-item-avatar/
 * @uxpindescription Lists are continuous, vertical indexes of text or images.
 */
function ListItemAvatar(props) {
  return <ListItemAvatarM {...props}>{props.children}</ListItemAvatarM>;
}

ListItemAvatar.propTypes = {
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

export default ListItemAvatar;
