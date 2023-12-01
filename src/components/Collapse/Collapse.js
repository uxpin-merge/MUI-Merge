import React from 'react';
import PropTypes from 'prop-types';
import CollapseM from '@mui/material/Collapse';

/**
 * @uxpindocurl https://mui.com/api/collapse/#main-content
 * @uxpindescription Expand from the start edge of the child element.
 * Use the orientation prop if you need a horizontal collapse.
 * The collapsedSize prop can be used to set the minimum width/height when not expanded.
 */
function Collapse(props) {
  return <CollapseM {...props}>{props.children}</CollapseM>;
}

Collapse.propTypes = {


  /**
   * The content node to be collapsed.
   */
  children: PropTypes.node,
  /**
    * If `true`, the component will transition in.
    */
  in: PropTypes.bool,

  /**
   * The transition orientation.
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * Use px, for example - 30px
   */
  collapsedSize: PropTypes.string,
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
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * Override or extend the styles applied to the component.
   * See CSS API below for more details.
   */
  className: PropTypes.string,


  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * Example: span, div
   */
  component: PropTypes.string,


  /**
   * Add a custom transition end trigger. Called with the transitioning DOM node and a done callback.
   * Allows for more fine grained transition end logic.
   * Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: PropTypes.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  sx: PropTypes.object,
};

export default Collapse;
