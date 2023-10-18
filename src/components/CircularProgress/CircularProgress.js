import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressM from '@mui/material/CircularProgress';

/**
 * @uxpindocurl https://mui.com/api/circular-progress/#main-content
 * @uxpindescription Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.
 */
function CircularProgress(props) {
  return (
    <div style={{ width: 'fit-content' }}>
      <CircularProgressM {...props} />
    </div>
  );
}

CircularProgress.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   */
  variant: PropTypes.oneOf(['determinate', 'indeterminate']),
  /**
   * The size of the circle.
   */
  size: PropTypes.number,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit']),


  /**
   * The thickness of the circle.
   */
  thickness: PropTypes.number,

  /**
   * The value of the progress indicator for the determinate and static variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number,

  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   */
  disableShrink: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  /** */
  sx: PropTypes.object,
};

export default CircularProgress;
