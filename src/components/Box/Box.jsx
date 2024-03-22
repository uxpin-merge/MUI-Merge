import React from 'react';
import PropTypes from 'prop-types';
import BoxM from '@mui/material/Box';

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
/**
 * @uxpindocurl https://mui.com/components/box/#main-content
 * @uxpindescription The Box component serves as a wrapper component for most of the CSS utility needs.
 */
function Box(props) {
  const { uxpinRef, ...other } = props;
  return <BoxM {...props} />;
}

Box.propTypes = {
  /** Unique identifier for the component. */
  id: PropTypes.string,

  /** The content of the component. */
  children: PropTypes.node,
  /** Specifies the color of the text.
   * @uxpincontroltype color
   */
  color: PropTypes.string,

  /** Specifies the background color of the component.
   * @uxpincontroltype color
   */
  bgcolor: PropTypes.string,
  /** Specifies the display behavior of the component. */
  display: PropTypes.oneOf(['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'none']),

  /** Specifies the position of the component. */
  position: PropTypes.oneOf(['static', 'relative', 'absolute', 'fixed', 'sticky']),

  /** Specifies the height of the component. */
  height: PropTypes.string,

  /** Specifies the width of the component. */
  width: PropTypes.string,

  /** Defines the ability of a flex item to grow if necessary. */
  flexGrow: PropTypes.number,

  /** Defines the ability of a flex item to shrink if necessary. */
  flexShrink: PropTypes.number,

  /** Establishes the main-axis, thus defining the direction flex items are placed in the flex container. */
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /** Defines the alignment along the main axis. */
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),

  /** Defines the default behavior for how flex items are laid out along the cross axis on the current line. */
  alignItems: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'baseline']),

  /** Aligns a flex container's lines within the flex container when there is extra space in the cross-axis. */
  alignContent: PropTypes.oneOf(['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around']),

  /** Allows the default alignment to be overridden for individual flex items. */
  alignSelf: PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),

  /** Specifies the padding of the component. */
  padding: PropTypes.string,

  /** Specifies the padding on top of the component. */
  paddingTop: PropTypes.string,

  /** Specifies the padding on the right side of the component. */
  paddingRight: PropTypes.string,

  /** Specifies the padding on the bottom of the component. */
  paddingBottom: PropTypes.string,

  /** Specifies the padding on the left side of the component. */
  paddingLeft: PropTypes.string,

  /** Specifies the minimum height of the component. */
  minHeight: PropTypes.string,

  /** Specifies the maximum height of the component. */
  maxHeight: PropTypes.string,

  /** Specifies the minimum width of the component. */
  minWidth: PropTypes.string,

  /** Specifies the maximum width of the component. */
  maxWidth: PropTypes.string,

  /** Specifies the order to lay out an item in a flex or grid container. */
  order: PropTypes.number,

  /** Specifies the top position of the component. */
  top: PropTypes.string,

  /** Specifies the bottom position of the component. */
  bottom: PropTypes.string,

  /** Specifies the left position of the component. */
  left: PropTypes.string,

  /** Specifies the right position of the component. */
  right: PropTypes.string,

  /** Defines the default size of an element before the remaining space is distributed. */
  flexBasis: PropTypes.string,

  /** A shorthand for flex-grow, flex-shrink and flex-basis combined. */
  flex: PropTypes.string,

  /** Specifies the gap between children components. */
  gap: PropTypes.string,

  /** Specifies the margin of the component. */
  margin: PropTypes.string,

  /** Specifies the margin on top of the component. */
  marginTop: PropTypes.string,

  /** Specifies the margin on the right side of the component. */
  marginRight: PropTypes.string,

  /** Specifies the margin on the bottom of the component. */
  marginBottom: PropTypes.string,

  /** Specifies the margin on the left side of the component. */
  marginLeft: PropTypes.string,

  /** Specifies the stack order of the component. */
  zIndex: PropTypes.number,

  /** Specifies the border of the component. */
  border: PropTypes.number,

  /** Specifies the top border of the component. */
  borderTop: PropTypes.number,

  /** Specifies the right border of the component. */
  borderRight: PropTypes.number,

  /** Specifies the bottom border of the component. */
  borderBottom: PropTypes.number,

  /** Specifies the left border of the component. */
  borderLeft: PropTypes.number,

  /** Specifies the color of the border.
   * @uxpincontroltype color
   */
  borderColor: PropTypes.string,

  /** Specifies the border-radius of the component. */
  borderRadius: PropTypes.number,

  /** Specifies the box-shadow of the component. */
  boxShadow: PropTypes.number,

  /** Specifies the font family of the text. */
  fontFamily: PropTypes.string,

  /** Specifies the font size of the text. */
  fontSize: PropTypes.string,

  /** Specifies the weight (thickness) of the font. */
  fontWeight: PropTypes.oneOf(['normal', 'bold', 'lighter', 'bolder']),

  /** Specifies the style of the font. */
  fontStyle: PropTypes.oneOf(['normal', 'italic', 'oblique']),

  /** Controls the spacing between text characters. */
  letterSpacing: PropTypes.string,

  /** Specifies the line height. */
  lineHeight: PropTypes.string,

  /** Specifies the alignment of the text. */
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),

  /** Controls the capitalization of text. */
  textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase']),

  /** The root element or component used for the component. */
  component: PropTypes.string,

  /** Allows defining system overrides as well as additional styles. */
  sx: PropTypes.object,
};
Box.defaultProps = {
  sx: {},
};

export default Box;
