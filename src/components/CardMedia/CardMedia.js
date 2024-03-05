import React from 'react';
import PropTypes from 'prop-types';
import CardMediaM from '@mui/material/CardMedia';

/**
 * @uxpindocurl https://mui.com/api/card-media/
 */
function CardMedia(props) {
  return <CardMediaM controls {...props} />;
}

CardMedia.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node.
   */
  component: PropTypes.oneOf(['img', 'video', 'audio']),

  /**
   * The height of the media
   */
  height: PropTypes.number,

  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified. Specifying both may causes the media not to load.
   * Note that caller must specify height otherwise the image will not be visible.
   * @uxpincontroltype image
   */
  image: PropTypes.string,

  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export { CardMedia as default };
