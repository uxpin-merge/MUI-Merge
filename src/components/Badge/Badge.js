import React from 'react';
import PropTypes from 'prop-types';
import BadgeM from '@mui/material/Badge';

/**
 * @uxpindocurl https://mui.com/api/badge/
 * @uxpindescription Badge generates a small badge to the top-right of its child(ren).
 */
function Badge(props) {
  return (
    <BadgeM {...props}>{props.children}</BadgeM>
  );
}

Badge.propTypes = {
  /**
  * The anchor of the badge.
*/
  anchorOrigin: PropTypes.object,
  /**
   * The content rendered within the badge.
   */
  badgeContent: PropTypes.node,
  /**
   * The badge will be added relative to this node.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The color of the component.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning', 'default']),

  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   */
  componentsProps: PropTypes.object,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   */
  components: {
    Root: React.ElementType,
    Badge: React.ElementType,
  },
  /**
   * If `true`, the badge is invisible.
   */
  invisible: PropTypes.bool,
  /**
   * Max count to show.
   */
  max: PropTypes.number,
  /**
   * Wrapped shape the badge should overlap.
   */
  overlap: PropTypes.oneOf(['rectangular', 'circular',]),
  /**
   * The props used for each slot inside the Badge.
   */
  slotProps: PropTypes.object,
  /**
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   */
  slots: PropTypes.object,
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   */
  showZero: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'dot',])
};

export default Badge;
