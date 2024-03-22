import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl
 * @uxpinhtmloutput
 */

const HtmlTableCell = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    uxpinRef,
    backgroundColor,
    color,
    borderSpacing,
    borderCollapse,
    borderColor,
    borderStyle,
    borderWidth,
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
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textDecoration,
    textTransform,
    fontFamily,
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
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textDecoration,
    textTransform,
    fontFamily,
    ...style, // This ensures that any additional style props override the specific font styling if needed
  }

  return <td {...other} ref={uxpinRef} style={combinedStyle} />
}

HtmlTableCell.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  /** Specifies the background color of the table.
   * @uxpincontroltype color */
  backgroundColor: PropTypes.string,

  /** Specifies the color of the table border.
   * @uxpincontroltype color */
  borderColor: PropTypes.string,

  /** Specifies the collapse or separate borders of adjacent cells. */
  borderCollapse: PropTypes.oneOf(['collapse', 'separate']),

  /** Specifies the spacing between the borders of adjacent cells. */
  borderSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Specifies the style of the table border. */
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

  /** Specifies the width of the table border. */
  borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Add classes */
  className: PropTypes.string,

  /** Specifies the color of the table.
   * @uxpincontroltype color */
  color: PropTypes.string,

  /** Specifies the number of columns a cell should span */
  colspan: PropTypes.number,

  /** Specifies the display behavior of the table. */
  display: PropTypes.string,

  /** Font family */
  fontFamily: PropTypes.string,

  /** Font size */
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Font weight */
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Specifies one or more header cells a cell is related to */
  headers: PropTypes.string,

  /** Specifies the height of the table. */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Letter spacing */
  letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Line height */
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** margin Bottom */
  marginBottom: PropTypes.number,

  /** margin Bottom. */
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** margin Left */
  marginLeft: PropTypes.number,

  /** margin Right */
  marginRight: PropTypes.number,

  /** Specifies the maximum height of the table. */
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Specifies the maximum width of the table. */
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Specifies the minimum height of the table. */
  minHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Specifies the minimum width of the table. */
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

  /** Sets the number of rows a cell should span */
  rowspan: PropTypes.number,

  /** Additional css. */
  style: PropTypes.object,

  /** Specifies the text alignment in the table. */
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'initial', 'inherit']),

  /** Text decoration */
  textDecoration: PropTypes.string,

  /** Text transform */
  textTransform: PropTypes.oneOf(['none', 'capitalize', 'uppercase', 'lowercase', 'initial', 'inherit']),

  /** Specifies the vertical alignment of content in the table. */
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

  /** Specifies the width of the table. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default HtmlTableCell
