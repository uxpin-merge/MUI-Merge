import React from 'react';
import PropTypes from 'prop-types';
import ListItemTextM from '@mui/material/ListItemText';

/**
 * @uxpindocurl https://mui.com/api/list-item-text/
 * @uxpindescription Lists are continuous, vertical indexes of text or images.
 */
function ListItemText(props) {
  return <ListItemTextM {...props} />;
}

ListItemText.propTypes = {
  /**
   * The content of the component. Text or nested components.
   */
  children: PropTypes.node,

  /**
 * The main copy.
 * These props will be forwarded to the secondary typography component (as long as disableTypography is not true).
 */
  primary: PropTypes.node,

  /**
 * The secondary content element.
 * These props will be forwarded to the secondary typography component (as long as disableTypography is not true).
 */
  secondary: PropTypes.node,
  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: PropTypes.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * These props will be forwarded to the secondary typography component (as long as disableTypography is not true).
   */
  disableTypography: PropTypes.bool,


  /**
   * These props will be forwarded to the secondary typography component (as long as disableTypography is not true).
   */
  primaryTypographyProps: PropTypes.object,


  /**
   * These props will be forwarded to the secondary typography component (as long as disableTypography is not true).
   */
  secondaryTypographyProps: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default ListItemText;
