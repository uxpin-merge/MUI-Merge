import React from 'react';
import PropTypes from 'prop-types';
import LinearProgressM from '@mui/material/LinearProgress';

/**
 * @uxpindocurl https://mui.com/api/linear-progress/#main-content
 * @uxpindescription Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.
 */
function LinearProgress(props) {
  return <LinearProgressM {...props} />;
}

LinearProgress.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   */
  variant: PropTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),

  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number,

  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: PropTypes.number,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  /** */
  sx: PropTypes.object,
};

export default LinearProgress;
