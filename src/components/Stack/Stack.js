import * as React from 'react';
import PropTypes from 'prop-types';
import StackM from '@mui/material/Stack';

/**
 * @uxpindocurl https://mui.com/components/stack/#main-content
 * @uxpindescription Stack is a container component for arranging elements vertically or horizontally.
 */
function Stack(props) {

  return (
    <StackM {...props} />
  );
}

Stack.propTypes = {
  /**
   * Elements contained by Tooltip.
   */
  children: PropTypes.node,
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.node,
  /**
   * Defines the flex-direction style property. It is applied for all screen sizes.
   */
  direction: PropTypes.oneOf(['column-reverse', 'column', 'row-reverse', 'row']),

  justifyContent: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]),

  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  // wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * Defines the space between immediate children in px
   */
  spacing: PropTypes.number,

  /**
   * Add an element between each child.
   */
  divider: PropTypes.node,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
  /**
   * If true, the CSS flexbox gap is used instead of applying margin to children.
While CSS gap removes the known limitations, it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
To enable this flag globally, follow the theme's default props configuration.
   */
  useFlexGap: PropTypes.bool
};

export default Stack;
