import React from 'react';
import PropTypes from 'prop-types';
import FadeM from '@mui/material/Fade';

/**
 * @uxpindocurl https://mui.com/material-ui/api/fade/
 * @uxpindescription Fade in from transparent to opaque.
 */
function Fade(props) {
  return <FadeM {...props}>
    <div>
      {props.children}
    </div>
  </FadeM>;
}

Fade.propTypes = {
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

export default Fade;
