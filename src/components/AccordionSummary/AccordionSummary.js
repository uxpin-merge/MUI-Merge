import React from 'react';
import PropTypes from 'prop-types';
import AccordionSummaryM from '@mui/material/AccordionSummary';

/**
 * @upxindocurl https://mui.com/api/accordion-summary/
 * @uxpindescription An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.
 */
function AccordionSummary(props) {
  return (
    <AccordionSummaryM {...props} >
      {props.children}
    </AccordionSummaryM>
  );
}

AccordionSummary.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The icon to display as the expand indicator.
   * Icon prop is used to improve Merge usability.
   */
  expandIcon: PropTypes.node,

  /**
   * This prop can help identify which element has keyboard focus. The class name will be applied when the element gains the focus through keyboard interaction.
   * */
  focusVisibleClassName: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default AccordionSummary;
