import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl
 * @uxpinhtmloutput
 */

const HtmlDiv = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    uxpinRef,
    alignContent,
    alignItems,
    backgroundColor,
    borderColor,
    borderCollapse,
    borderSpacing,
    borderStyle,
    borderWidth,
    bottom,
    className,
    color,
    display,
    fontFamily,
    fontSize,
    fontWeight,
    headers,
    height,
    justifyContent,
    letterSpacing,
    lineHeight,
    left,
    marginBottom,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    position,
    textAlign,
    textDecoration,
    textTransform,
    top,
    transform,
    transition,
    verticalAlign,
    width,
    zIndex,
    style,
    ...other
  } = props

  // Combine the style prop with font styling properties
  const combinedStyle = {
    alignContent,
    alignItems,
    backgroundColor,
    borderColor,
    borderCollapse,
    borderSpacing,
    borderStyle,
    borderWidth,
    bottom,
    className,
    color,
    display,
    fontFamily,
    fontSize,
    fontWeight,
    headers,
    height,
    justifyContent,
    letterSpacing,
    lineHeight,
    left,
    marginBottom,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    position,
    textAlign,
    textDecoration,
    textTransform,
    top,
    transform,
    transition,
    verticalAlign,
    width,
    zIndex,
    ...style, // This ensures that any additional style props override the specific font styling if needed
  }

  return <div {...other} ref={uxpinRef} style={combinedStyle} />
}

HtmlDiv.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /**
   * Specifies the alignment of the element's contents along the block axis.
   */
  alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),

  /**
   * Specifies the default alignment for items within the flex container.
   */
  alignItems: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'baseline']),

  /**
   * Specifies the background color of the element.
   * @uxpincontroltype color
   */
  backgroundColor: PropTypes.string,

  /**
   * Specifies the color of the table border.
   * @uxpincontroltype color
   */
  borderColor: PropTypes.string,

  /**
   * Specifies the collapse or separate borders of adjacent cells.
   */
  borderCollapse: PropTypes.oneOf(['collapse', 'separate']),

  /**
   * Specifies the spacing between the borders of adjacent cells.
   */
  borderSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the style of the table border.
   */
  borderStyle: PropTypes.oneOf([
    'none',
    'hidden',
    'dotted',
    'dashed',
    'solid',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
    'inherit',
    'initial',
    'revert',
    'revert-layer',
    'unset',
  ]),

  /**
   * Specifies the width of the table border.
   */
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the bottom position of the element.
   */
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Add classes */
  className: PropTypes.string,

  /**
   * Specifies the color of the text.
   * @uxpincontroltype color
   */
  color: PropTypes.string,

  /**
   * Specifies the display behavior of the element.
   */
  display: PropTypes.oneOf([
    'none',
    'block',
    'inline',
    'inline-block',
    'flex',
    'inline-flex',
    'grid',
    'inline-grid',
    'table',
    'inline-table',
    'table-row',
    'table-cell',
    'table-column',
    'table-column-group',
    'table-header-group',
    'table-footer-group',
    'table-row-group',
  ]),

  /** Font family */
  fontFamily: PropTypes.string,

  /** Font size */
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Font weight */
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Specifies one or more header cells a cell is related to */
  headers: PropTypes.string,

  /**
   * Specifies the height of the element.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Specifies how the browser distributes space between and around content items along the main-axis of a flex container. */
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),

  /** Letter spacing */
  letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Line height */
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the left position of the element.
   */
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** margin Bottom */
  marginBottom: PropTypes.number,

  /**
   * Specifies the margin of the element.
   */
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** margin Left */
  marginLeft: PropTypes.number,

  /** margin Right */
  marginRight: PropTypes.number,

  /** margin Top */
  marginTop: PropTypes.number,

  /**
   * Specifies the maximum height of the element.
   */
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the maximum width of the element.
   */
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the minimum height of the element.
   */
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the minimum width of the element.
   */
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,

  /** padding Bottom */
  paddingBottom: PropTypes.number,

  /** padding Left */
  paddingLeft: PropTypes.number,

  /** padding Right */
  paddingRight: PropTypes.number,

  /** padding Top */
  paddingTop: PropTypes.number,

  /**
   * Specifies the position of the element.
   */
  position: PropTypes.oneOf(['static', 'relative', 'fixed', 'absolute', 'sticky']),

  /** Additional css. */
  style: PropTypes.object,

  /**
   * Specifies the text alignment in the table.
   */
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'initial', 'inherit']),

  /** Text decoration */
  textDecoration: PropTypes.string,

  /** Text transform */
  textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase', 'initial', 'inherit']),

  /**
   * Specifies the top position of the element.
   */
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the CSS transformations to apply to the element.
   */
  transform: PropTypes.string,

  /**
   * Specifies the transition effect for the element's properties.
   */
  transition: PropTypes.string,

  /**
   * Specifies the vertical alignment of content in the table.
   */
  verticalAlign: PropTypes.oneOf([
    'baseline',
    'sub',
    'super',
    'top',
    'text-top',
    'middle',
    'bottom',
    'text-bottom',
    'initial',
    'inherit',
  ]),

  /**
   * Specifies the width of the element.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the z-index of the element.
   */
  zIndex: PropTypes.number,
}

export default HtmlDiv
