import React from 'react';
import PropTypes from 'prop-types';
import LinkM from '@mui/material/Link';

/**
 * @uxpindocurl https://mui.com/api/link/
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
function Link(props) {
  return (
    <div style={{ display: 'inline' }}>
      <LinkM {...props} />
    </div>
  );
}

Link.propTypes = {
  /**
   * The content of the component.
   */

  children: PropTypes.node,
  /**
 * Applies the theme typography styles.
 */
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'button',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2',
  ]),
  /**
    * The color of the link.
    */

  color: PropTypes.oneOf([
    'white',
    'grey.100',
    'grey.200',
    'grey.300',
    'grey.400',
    'grey500',
    'primary.main',
    'primary.light',
    'primary.dark',
    'secondary.main',
    'secondary.light',
    'secondary.dark',
    'error.main',
    'warning.main',
    'info.main',
    'success.main',
    'text.primary',
    'text.secondary',
    'text.disabled',
  ]),
  /**
   * href for the component
   */
  href: PropTypes.string,
  /**
    * Controls when the link should have an underline.
    */
  underline: PropTypes.oneOf(['always', 'hover', 'none']),



  /**
   * Override or extend the styles applied to the component. See CSS API https://mui.com/api/link/#css for more details.
   */

  classes: PropTypes.object,


  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   * ⚠️ Needs to be able to hold a ref https://mui.com/guides/composition/#caveat-with-refs.
   */

  component: PropTypes.node,

  /**
   * classes prop applied to the Typography element.
   */

  TypographyClasses: PropTypes.object,

  /**
   * On click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  sx: PropTypes.object,


};

export default Link;
