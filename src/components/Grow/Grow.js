import React from 'react';
import PropTypes from 'prop-types';
import GrowM from '@mui/material/Grow';
import Paper from '@mui/material/Paper'

/**
 * @uxpindocurl https://mui.com/material-ui/api/grow/
 * @uxpindescription Expands outwards from the center of the child element, while also fading in from transparent to opaque.
 */
function Grow(props) {
  return <GrowM {...props}>
    <div>
      {props.children}
    </div>
  </GrowM>;
}

Grow.propTypes = {
  /**
   * A single child content element.
   */
  children: PropTypes.node,
  /**
 * If `true`, the component will transition in.
 */
  in: PropTypes.bool,



  /**
 * The duration for the transition, in milliseconds.
 */
  timeout: PropTypes.number,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
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
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes.bool,

  /**
 * Add a custom transition end trigger. Called with the transitioning DOM
 * node and a done callback. Allows for more fine grained transition end
 * logic. Note: Timeouts are still used as a fallback if provided.
 */
  addEndListener: PropTypes.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  sx: PropTypes.object,
};

export default Grow;
