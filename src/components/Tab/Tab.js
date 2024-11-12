import TabM from '@mui/material/Tab';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * @uxpindocurl https://mui.com/api/tab/
  * @uxpindescription Tabs make it easy to explore and switch between different views.
 */
function Tab(props) {
  return <TabM {...props} value={String(props.value)}>{props.children}</TabM>;
}

Tab.propTypes = {
  children: PropTypes.node,
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: PropTypes.string,
  /**
 * The label element.
 */
  label: PropTypes.node,
  /**
   * The icon element.
   */
  icon: PropTypes.node,

  /**
  * The icon element.
  */
  iconPosition: PropTypes.oneOf(['top', 'bottom', 'start', 'end']),

  /**
   * Tab labels appear in a single row. They can use a second line if needed.
   */
  wrapped: PropTypes.bool,

  /**
   * If `true`, the tab will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If true, the keyboard focus ripple is disabled.
   */
  disableRipple: PropTypes.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,


  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details https://mui.com/system/the-sx-prop/.
   */
  sx: PropTypes.object,

  /**

   */
  onChange: PropTypes.func,

  /**

   */
  onClick: PropTypes.func,
};

export default Tab;
