import React from 'react';
import PropTypes from 'prop-types';
import SvgIconM from '@mui/material/SvgIcon';
import parse from 'html-react-parser';

/**
 * @uxpindocurl https://mui.com/material-ui/icons/#svgicon
 * @uxpindescription This component extends the native <svg> element for custom icons.
 */
function SvgIcon({ children, ...otherProps}) {
  return <SvgIconM {...otherProps}>{typeof children === 'string' ? parse(children) : children}</SvgIconM>;
}

SvgIcon.propTypes = {
  /**
   * The <svg/> element.
   */
  children: PropTypes.node,

  /** The color of the component. Supports both default and custom theme colors. */
  color: PropTypes.oneOf([
    'inherit',
    'action',
    'disabled',
    'primary',
    'secondary',
    'error',
    'info',
    'success',
    'warning',
    PropTypes.string,
  ]),
  /** The fontSize applied to the icon. */
  fontSize: PropTypes.oneOf(['inherit', 'large', 'medium', 'small', PropTypes.string]),

  /** Applies a color attribute to the SVG element.
   * @uxpincontroltype color
   */
  htmlColor: PropTypes.string,
  /** Override or extend the styles applied to the component. */
  classes: PropTypes.object,
  /** The component used for the root node. */
  component: PropTypes.elementType,

  /** If true, the root node will inherit the custom component's viewBox. */
  inheritViewBox: PropTypes.bool,

  /** The shape-rendering attribute. */
  shapeRendering: PropTypes.string,

  /** System prop that allows defining system overrides as well as additional CSS styles. */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),

  /** Provides a human-readable title for the element that contains it. */
  titleAccess: PropTypes.string,

  /** Allows you to redefine what the coordinates without units mean inside an SVG element. */
  viewBox: PropTypes.string,
};

SvgIcon.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
};

export default SvgIcon;
