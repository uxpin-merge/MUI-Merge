import React from 'react';
import PropTypes from 'prop-types';
import PaperM from '@mui/material/Paper';

/**
 * @uxpindocurl https://mui.com/api/paper/
 * @uxpindescription The Paper component is a container for displaying content on an elevated surface.
 */
function Paper(props) {
  return (
    <PaperM {...props} >
      {props.children}
    </PaperM>
  );
}

Paper.propTypes = {
  /**
   * The content of the component. Text or nested components.
   */
  children: PropTypes.node,

  /**
   * The shadow depth of paper surface. Accepts values between 0 and 16.
   */
  elevation: PropTypes.number,
  /**
   * the variant to use.
   */
  variant: PropTypes.oneOf(['elevation', 'outlined']),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.node,

  /**
   * If `true`, rounded corners are disabled.
   */
  square: PropTypes.bool,

  /**
   * Custom Style Object
   */
  sx: PropTypes.object,
};

export default Paper;
