import React from 'react';
import PropTypes from 'prop-types';
import AccordionM from '@mui/material/Accordion';

/**
 * @uxpindocurl https://mui.com/api/accordion/
 * @uxpindescription An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.
 */
function Accordion(props) {


  return (
    <AccordionM {...props}>
      {props.children}
    </AccordionM>
  );
}

Accordion.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * If true, expands the accordion by default.
   */
  defaultExpanded: PropTypes.bool,

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If true, it removes the margin between two expanded accordion items and the increase of height.
   */
  disableGutters: PropTypes.bool,

  /**
 * The shadow depth of paper surface. Accepts values between 0 and 16.
 */
  elevation: PropTypes.number,
  /**
   * the variant to use.
   */
  variant: PropTypes.oneOf(['elevation', 'outlined']),

  /**
   * If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.
   * @uxpinbind onChange 1
   */
  expanded: PropTypes.bool,

  /**
   * Callback fired when the expand/collapse state is changed.
   */
  onChange: PropTypes.func,

  /**
   * If true, rounded corners are disabled.
   */
  square: PropTypes.bool,

  /**
   * The component used for the transition. Follow this guide to learn more about the requirements for this component.
   */
  TransitionComponent: PropTypes.elementType,

  /**
   * Props applied to the transition element. By default, the element is based on this Transition component.
   */
  TransitionProps: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   *
   */
  sx: PropTypes.object,
};

Accordion.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
  expanded: false,
};

export default Accordion;
