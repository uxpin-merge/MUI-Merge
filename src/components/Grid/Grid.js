import React from 'react';
import PropTypes from 'prop-types';
import GridM from '@mui/material/Grid';

/**
 * @uxpindocurl https://mui.com/api/grid/
 * @uxpindescription The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.
 */
function Grid(props) {
  // const space = Number(props.spacing);
  return (
    <GridM{...props}>
      {props.children}
    </GridM>
  );
}

Grid.propTypes = {
  /**
 * The content of the component.
 */
  children: PropTypes.node,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: PropTypes.bool,

  /**
 * If `true`, the component will have the flex *item* behavior.
 * You should be wrapping *items* with a *container*.
 */
  item: PropTypes.bool,
  /**
 * Defines the `flex-direction` style property.
 * It is applied for all screen sizes.
 */
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  /**
* The number of columns. Usually 12
*/
  columns: PropTypes.number,
  /**
  * Defines the space between the type `item` component.
  * It can only be used on a type `container` component.
  */
  spacing: PropTypes.string,

  /**
* Defines the horizontal space between the type item components. It overrides the value of the spacing prop.
*/
  columnSpacing: PropTypes.string,
  /**
* Defines the vertical space between the type item components. It overrides the value of the spacing prop.
*/
  rowSpacing: PropTypes.string,

  /**
 * Defines the `flex-wrap` style property.
 * It's applied for all screen sizes.
 */
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),


  /**
  * Override or extend the styles applied to the component.
  * See [CSS API](#css-api) below for more details.
  */
  classes: PropTypes.object,


  /**
  * Defines the horizontal space between the type item components. It overrides the value of the spacing prop.
  */
  component: PropTypes.string,

  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,


  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]),

  /**
 * Defines the `align-items` style property.
 * It's applied for all screen sizes.
 */
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority. 1-12, true, false, or auto.
   */
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  /**
 * Defines the number of grids the component is going to use.
 * It's applied for the `sm` breakpoint and wider screens if not overridden.  1-12, true, false, or auto.
 */
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  /**
* Defines the number of grids the component is going to use.
* It's applied for the `md` breakpoint and wider screens if not overridden.  1-12, true, false, or auto.
*/
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  /**
 * Defines the number of grids the component is going to use.
 * It's applied for the `lg` breakpoint and wider screens if not overridden.  1-12, true, false, or auto.
 */
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `columns (xl)` breakpoint and wider screens.  1-12, true, false, or auto.
   */
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: PropTypes.bool,
  /**
   * Padding Top in px
   */
  paddingTop: PropTypes.string,
  /**
 * Padding Bottom in px
 */
  paddingBottom: PropTypes.string,
  /**
 * Padding Right in px
 */
  paddingRight: PropTypes.string,
  /**
 * Padding Left in px
 */
  paddingLeft: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details https://mui.com/system/the-sx-prop/.
   */
  /** */
  sx: PropTypes.object,
};

export default Grid;
