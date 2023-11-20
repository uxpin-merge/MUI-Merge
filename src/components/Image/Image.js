import React from 'react';
import PropTypes from 'prop-types';
import ImageM from 'mui-image'

/**
 * @uxpindocurl https://github.com/benmneb/mui-image
 * @uxpindescription THIRD-PARTY COMPONENT (mui-image) Make sure you npm install 'mui-image' and 'import Image from 'mui-image' in your project: The only Material UI image component to satisfy the Material Design guidelines for loading images. 
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
export default function Image(props) {
  return (
    <ImageM
      {...props}
    />
  );
}

Image.propTypes = {
  /**
* image src URL of the image... required
*/
  src: PropTypes.string.isRequired,
  /**
* The height of the image
*/
  height: PropTypes.string,
  /**
* The width of the image
*/
  width: PropTypes.string,
  /**
* How the image should be resized to fit its container.
*/

  fit: PropTypes.oneOf([
    'contain',
    'cover',
    'fill',
    'none',
    'scale-down',
    'inherit',
    'initial',
    'revert',
    'revert-layer',
    'unset',
  ]),

  /**
* The number in milliseconds the image takes to fade in.
*/
  duration: PropTypes.number,

  /**
   * The easing of the fade in transition of the image.
   */
  easing: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out']),


  /**
* The direction to shift the image as it appears.
*/
  shift: PropTypes.oneOf(['left', 'right', 'top', 'bottom', false, null]),

  /**
  * The distance (with unit) of the image to shift the image as it appears. 
  */
  distance: PropTypes.string,


  /**
  * The number of milliseconds the shift takes
  */
  shiftDuration: PropTypes.number,

  /**
* Show loading icon
*/
  showLoading: PropTypes.bool,

  /**
* image alt tag value
*/
  alt: PropTypes.string,
  /**
* image title tag value
*/
  title: PropTypes.string,


  /**
* CSS class for the image

*/
  className: PropTypes.string,


  /**
* the color the image transitions in from
*/
  onLoad: PropTypes.func,

  // style: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
*/

  sx: PropTypes.object,
};

