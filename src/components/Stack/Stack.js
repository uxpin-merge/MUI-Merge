import * as React from 'react';
import PropTypes from 'prop-types';
import StackM from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

/**
 * @uxpindocurl https://mui.com/components/stack/#main-content
 */
function Stack(props) {
  let dividerOrientation = '';

  if (props.direction === 'row' || props.direction === 'row-reverse') {
    dividerOrientation = 'vertical';
  } else {
    dividerOrientation = 'horizontal';
  }

  const { hasDivider, ...otherProps } = props;

  return (
    <StackM
      {...otherProps}
      divider={hasDivider && <Divider orientation={dividerOrientation} flexItem />}
      sx={{
        paddingTop: props.paddingTop + 'px',
        paddingBottom: props.paddingBottom + 'px',
        paddingRight: props.paddingRight + 'px',
        paddingLeft: props.paddingLeft + 'px',
        flexWrap: props.wrap,
      }}
    >
      {props.children}
    </StackM>
  );
}

Stack.propTypes = {
  /**
   * Elements contained by Tooltip.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

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
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  //  alignContent: PropTypes.oneOf([
  //   "stretch",
  //   "center",
  //   "flex-start",
  //   "flex-end",
  //   "space-between",
  //   "space-around"
  // ]),

  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * Defines the space between immediate children in px
   */
  spacing: PropTypes.number,

  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingLeft: PropTypes.number,

  /**
   * Add an element between each child.
   * This needs improving
   * @uxpinignoreprop
   */
  divider: PropTypes.node,
  /**
   * Add an element between each child.
   * This needs improving
   *
   */
  hasDivider: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default Stack;
