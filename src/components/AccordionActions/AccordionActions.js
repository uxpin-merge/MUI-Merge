import React from 'react';
import PropTypes from 'prop-types';
import AccordionActionsM from '@mui/material/AccordionActions';

/**
 * @upxindocurl https://mui.com/api/accordion-actions/
  * @uxpindescription An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.
 */
function AccordionActions(props) {
  return <AccordionActionsM {...props}>{props.children}</AccordionActionsM>;
}

AccordionActions.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * If true, the actions do not have additional margin.
   */
  disableSpacing: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   *
   */
  sx: PropTypes.object,
};

export default AccordionActions;
