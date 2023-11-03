import * as React from 'react';
import AvatarGroupM from '@mui/material/AvatarGroup';
import PropTypes from 'prop-types';

/**
 * @uxpindocurl https://mui.com/material-ui/react-avatar/#grouped
 * @uxpindescription Avatars are found throughout material design with uses in everything from tables to dialog menus.
 */
function AvatarGroup(props) {
  return <AvatarGroupM {...props}>{props.children}</AvatarGroupM>;
}

AvatarGroup.propTypes = {
  /**
   * 	The avatars to stack.
   */
  children: PropTypes.node,

  /**
   * Max avatars to show before +x.
   */
  max: PropTypes.number,

  /**
   * The total number of avatars. Used for calculating the number of extra avatars.
   */
  total: PropTypes.number,

  /**
   * Spacing between avatars.
   */
  spacing: PropTypes.oneOf(['medium', 'small', PropTypes.number]),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['circular', 'round', 'square', PropTypes.string]),

  /**
   * Override or extend the styles applied to the component. See CSS API https://mui.com/api/avatar-group/#css for more details.
   */
  classes: PropTypes.object,

  /**
 * The component used for the root node. Either a string to use a HTML element or a component.
 */
  component: PropTypes.node,

  /**
   * The extra props for the slot components. You can override the existing props or add new ones.
   * This prop is an alias for the componentsProps prop, which will be deprecated in the future.
   */
  slotProps: PropTypes.object,

  /**
 * custom renderer of extraAvatars
 * Signature:
 * function(surplus: number) => React.ReactNode
 * surplus number of extra avatars
 * Returns: custom element to display
 */
  renderSurplus: PropTypes.func,
};

export default AvatarGroup;
