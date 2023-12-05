import React from 'react';
import PropTypes from 'prop-types';
import IconM from '@mui/material/Icon';
import { iconVariants } from './icon-variants';

let icons = document.createElement('link');
icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp');
icons.setAttribute('rel', 'stylesheet');
document.head.appendChild(icons);

// icons = document.createElement('link');
// icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone');
// icons.setAttribute('rel', 'stylesheet');
// document.head.appendChild(icons);

// icons = document.createElement('link');
// icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons+Rounded');
// icons.setAttribute('rel', 'stylesheet');
// document.head.appendChild(icons);


/**
 * @uxpindocurl https://mui.com/api/icon/
 * @uxpindescription Collection of MUI Icons
 */
function Icon(props) {



  return <IconM {...props}>{props.children}</IconM>;
}

Icon.propTypes = {
  /**
   * The icon to display.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  children: PropTypes.oneOf(iconVariants),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
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
  ]),

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: PropTypes.oneOf(['large', 'medium', 'small', 'inherit']),
  /**
 * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
 */
  baseClassName: PropTypes.oneOf(['material-icons', 'material-icons-outlined', 'material-icons-two-tone', 'material-icons-round', 'material-icons-sharp']),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

Icon.defaultProps = {
  // fontSize: "large"
};

export default Icon;
