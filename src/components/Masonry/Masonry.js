import React from 'react';
import PropTypes from 'prop-types';
import MasonryM from '@mui/lab/Masonry';

/**
 * @uxpindocurl https://v5.mui.com/material-ui/react-masonry
 * @uxpindescription Masonry lays out contents of varying dimensions as blocks of the same width and different height with configurable gaps.
 */
function Masonry(props) {
  return <MasonryM {...props}>{props.children}</MasonryM>;
}

Masonry.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * Number of columns.
   */
  columns: PropTypes.number,

  /**
   * The component used for the root node. Either a string for an HTML element or a React component.
   */
  component: PropTypes.string,

  /**
   * The default number of columns of the component. Used for server-side rendering.
   * @uxpinignoreprop
   */
  defaultColumns: PropTypes.number,

  /**
   * The default height of the component in px. Used for server-side rendering.
   * @uxpinignoreprop
   */
  defaultHeight: PropTypes.number,

  /**
   * The default spacing of the component. Like `spacing`, it is a factor of the theme's spacing.
   * Used for server-side rendering.
   * @uxpinignoreprop
   */
  defaultSpacing: PropTypes.number,

  /**
   * Allows using sequential order rather than adding to the shortest column.
   */
  sequential: PropTypes.bool,

  /**
   * Defines the space between children. It is a factor of the theme's spacing.
   */
  spacing: PropTypes.number,

  /**
   * Allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default Masonry;
