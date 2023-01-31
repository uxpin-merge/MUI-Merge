import React from 'react';
import PropTypes from 'prop-types';
import AvatarM from '@mui/material/Avatar';

/**
 * @uxpindocurl https://mui.com/api/avatar/
 */
function Avatar(props) {
  return <AvatarM {...props}>{props.children}</AvatarM>;
}

Avatar.propTypes = {
  /**
   * Used to render icon or text elements inside the Avatar if src is not set. This can be an element, or just a string.
   */
  children: PropTypes.node,

  /**
   * The name of the icon from https://material.io/resources/icons.
   */
  icon: PropTypes.string,

  /**
   * The image URL source.
   */
  /** @uxpinpropname  ImageURL */
  src: PropTypes.string,

  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  /** @uxpinignoreprop */
  alt: PropTypes.string,

  /**
   * The `srcSet` attribute for the `img` element.
   */
  /** @uxpinignoreprop */
  srcSet: PropTypes.string,

  /**
   * Override or extend the styles applied to the component.
   */
  /** @uxpinignoreprop */
  classes: PropTypes.object,

  /**
   * Attributes applied to the `img` element if the component
   * is used to display an image.
   */
  /** @uxpinignoreprop */
  imgProps: PropTypes.object,
  /**
   * The `sizes` attribute for the `img` element.
   */
  /** @uxpinignoreprop */
  sizes: PropTypes.string,

  /**
   * The shape of the avatar.
   * @uxpinpropname Shape
   */
  variant: PropTypes.oneOf(['circular', 'rounded', 'square']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` https://mui.com/system/the-sx-prop/ page for more details.
   */
  sx: PropTypes.object,
};

export default Avatar;
