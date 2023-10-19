import * as React from 'react';
import PropTypes from 'prop-types';
import RatingM from '@mui/material/Rating';
import { v4 as uuidv4 } from 'uuid';


/**
 * @uxpindocurl https://mui.com/api/rating/#main-content
 * @uxpindescription Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own.
 */
function Rating(props) {
  // Unique Id
  const id = uuidv4();
  return (
    <RatingM
      key={id}
      {...props}
    />
  );
}

Rating.propTypes = {


  /**
   * The rating value.
   * @uxpinbind onChange 1
   */
  value: PropTypes.string,
  /**
 * The size of the component.
 */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The icon to display when empty.
   */
  emptyIcon: PropTypes.node,

  /**
   * The icon to display.
   */
  icon: PropTypes.node,

  /**
   * Maximum rating.
   */
  max: PropTypes.number,

  /**
   * The minimum increment value change allowed.
   */
  precision: PropTypes.string,

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Removes all hover effects and pointer events.
   */
  readOnly: PropTypes.bool,

  /**
   * Override or extend the styles applied to the component.
   * Don't need this with Merge if we have Rating prop
   */
  defaultValue: PropTypes.number,

  /**
   * Override or extend the styles applied to the component.
   */
  emptyLabelText: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  getLabelText: PropTypes.func,

  /**
   * If true, only the selected icon will be highlighted.
   */
  highlightSelectedOnly: PropTypes.bool,

  /**
   * The name attribute of the radio input elements.
   * This input name should be unique within the page.
   * Being unique within a form is insufficient since the name is used to generated IDs.
   */
  name: PropTypes.string,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * On click event to use with UXPin interactions.
   */
  onChange: PropTypes.func,

  /**
   * Callback function that is fired when the hover state changes.
   */
  onChangeActive: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
};

export default Rating;
