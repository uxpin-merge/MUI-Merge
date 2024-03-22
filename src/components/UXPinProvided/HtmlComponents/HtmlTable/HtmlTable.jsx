import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl
 * @uxpinhtmloutput
 */
const HtmlTable = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    uxpinRef,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    backgroundColor,
    borderSpacing,
    borderCollapse,
    borderColor,
    color,
    borderStyle,
    borderWidth,
    tableLayout,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    textAlign,
    verticalAlign,
    display,
    style,
    ...other
  } = props
  // Combine the style prop with font styling properties
  const combinedStyle = {
    backgroundColor,
    color,
    borderSpacing,
    borderCollapse,
    borderColor,
    borderStyle,
    borderWidth,
    tableLayout,
    width,
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    paddingTop,
    paddingLeft,
    paddingRight,
    paddingBottom,
    textAlign,
    verticalAlign,
    display,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    ...style, // This ensures that any additional style props override the specific font styling if needed
  }
  return <table {...other} ref={uxpinRef} style={combinedStyle} />
}

HtmlTable.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  /**
   * Specifies the background color of the table.
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

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /**
   * Specifies the background color of the table.
   * @uxpincontroltype color
   */
  color: PropTypes.string,

  /**
   * Specifies the display behavior of the table.
   */
  display: PropTypes.string,

  /**
   * Specifies the height of the table.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** margin Bottom */
  marginBottom: PropTypes.number,

  /** margin Left */
  marginLeft: PropTypes.number,

  /** margin Right */
  marginRight: PropTypes.number,

  /** margin Top */
  marginTop: PropTypes.number,

  /**
   * Specifies the margin of the table.
   */
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** padding Bottom */
  paddingBottom: PropTypes.number,

  /** padding Left */
  paddingLeft: PropTypes.number,

  /** padding Right */
  paddingRight: PropTypes.number,

  /** padding Top */
  paddingTop: PropTypes.number,

  /**
   * Specifies the padding inside the table.
   */
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the table layout algorithm to use.
   */
  tableLayout: PropTypes.oneOf(['auto', 'fixed']),

  /**
   * Specifies the text alignment in the table.
   */
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'initial', 'inherit']),

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
   * Specifies the width of the table.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the minimum height of the table.
   */
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the maximum height of the table.
   */
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the minimum width of the table.
   */
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specifies the maximum width of the table.
   */
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Additional css.
   */
  style: PropTypes.object,
}

export default HtmlTable
