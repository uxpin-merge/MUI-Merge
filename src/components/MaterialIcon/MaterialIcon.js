import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import createSvgIcon from '@mui/material/utils/createSvgIcon';


/**
 * @uxpindocurl https://mui.com/material-ui/material-icons/
 * @uxpindescription This component renders a specific Material Design icon as a React component, built on top of the SvgIcon from MUI.
 */
function MaterialIcon({ children, name, ...otherProps}) {
  const Icon = createSvgIcon(parse(children), name);
  return <Icon {...otherProps} />;
}

MaterialIcon.propTypes = {

  /**
   * @uxpinignoreprop
   */
  name: PropTypes.string,

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

MaterialIcon.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
};

export default MaterialIcon;
