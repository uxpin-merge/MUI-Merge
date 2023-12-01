import React from 'react';
import PropTypes from 'prop-types';
import SlideM from '@mui/material/Slide';

/**
 * @uxpindocurl https://mui.com/api/slide
 * @uxpindescription Slide in from the edge of the screen. The direction prop controls which edge of the screen the transition starts from.
 */
function Slide(props) {
  return <SlideM {...props} container={document.querySelector(props.container)}>
    <div>
      {props.children}
    </div>
  </SlideM>;
}

Slide.propTypes = {
  /**
   * A single child content element.
   */
  children: PropTypes.node,
  /**
 * If `true`, the component will transition in.
 */
  in: PropTypes.bool,
  /**
* Direction the child node will enter from.
* @default 'down'
*/
  direction: PropTypes.oneOf(['down', 'left', 'right', 'up']),
  /**
 * The duration for the transition, in milliseconds.
 */
  timeout: PropTypes.number,


  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: PropTypes.string,


  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: PropTypes.oneOfType([PropTypes.shape({
    enter: PropTypes.string,
    exit: PropTypes.string
  }), PropTypes.string]),

  /**
   * @ignore
   */
  // onEnter: PropTypes.func,
  /**
   * @ignore
   */
  // onEntered: PropTypes.func,
  /**
   * @ignore
   */
  // onEntering: PropTypes.func,
  /**
   * @ignore
   */
  // onExit: PropTypes.func,
  /**
   * @ignore
   */
  // onExited: PropTypes.func,
  /**
   * @ignore
   */
  // onExiting: PropTypes.func,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: PropTypes.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  sx: PropTypes.object,
};

export default Slide;
