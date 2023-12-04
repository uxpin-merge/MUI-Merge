import React from 'react';
import PropTypes from 'prop-types';
import ButtonBaseM from '@mui/material/ButtonBase';

/**
 * @uxpindocurl https://mui.com/material-ui/react-button/#complex-button
 * @uxpindescription The the ButtonBase is a wrapper to allow to build custom interactions.
 */

function ButtonBase(props) {

  return (
    <ButtonBaseM
      {...props}
    >
      {props.children}
    </ButtonBaseM>
  );
}

ButtonBase.propTypes = {
  // /**
  //  * The label of the button.
  //  * */
  children: PropTypes.node,
  // /**
  //  * The id of the element. Usefull for anchorEl of menu and other elements that need origin position.
  //  * */
  id: PropTypes.string,

  // /**
  //  * If `true`, the component is disabled.
  //  * @default false
  //  */
  disabled: PropTypes.bool,

  // /**
  //  * A ref for imperative actions.
  //  * It currently only supports `focusVisible()` action.
  //  */
  // action: refType,
  // /**
  //  * If `true`, the ripples are centered.
  //  * They won't start at the cursor interaction position.
  //  * @default false
  //  */
  centerRipple: PropTypes.bool,

  // /**
  //  * Override or extend the styles applied to the component.
  //  */
  classes: PropTypes.object,
  // /**
  //  * @ignore
  //  */
  className: PropTypes.string,
  // /**
  //  * The component used for the root node.
  //  * Either a string to use a HTML element or a component.
  //  */
  component: PropTypes.string,

  // /**
  //  * If `true`, the ripple effect is disabled.
  //  *
  //  * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
  //  * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
  //  * @default false
  //  */
  disableRipple: PropTypes.bool,
  // /**
  //  * If `true`, the touch ripple effect is disabled.
  //  * @default false
  //  */
  disableTouchRipple: PropTypes.bool,
  // /**
  //  * If `true`, the base button will have a keyboard focus ripple.
  //  * @default false
  //  */
  // focusRipple: PropTypes.bool,
  // /**
  //  * This prop can help identify which element has keyboard focus.
  //  * The class name will be applied when the element gains the focus through keyboard interaction.
  //  * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
  //  * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
  //  * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
  //  * if needed.
  //  */
  // focusVisibleClassName: PropTypes.string,
  // /**
  //  * @ignore
  //  */
  // href: PropTypes /* @typescript-to-proptypes-ignore */.any,
  // /**
  //  * The component used to render a link when the `href` prop is provided.
  //  * @default 'a'
  //  */
  // LinkComponent: string,
  // /**
  //  * @ignore
  //  */
  // onBlur: PropTypes.func,
  // /**
  //  * @ignore
  //  */
  onClick: PropTypes.func,
  // /**
  //  * @ignore
  //  */
  // onContextMenu: PropTypes.func,
  // /**
  //  * @ignore
  //  */
  // onDragLeave: PropTypes.func,
  // /**
  //  * @ignore
  //  */
  // onFocus: PropTypes.func,
  // /**
  //  * Callback fired when the component is focused with a keyboard.
  //  * We trigger a `onFocus` callback too.
  //  */
  // onFocusVisible: PropTypes.func,
  // /**
  //  * @ignore
  //  */
  // onKeyDown: PropTypes.func,
  // /**
  //  * @ignore
  //  */
  // onKeyUp: PropTypes.func,
  // /**
  //  * @ignore
  //  */
  // onMouseDown: PropTypes.func,
  // /**
  //  * @ignore
  //  */
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,

  // /**
  //  * @ignore
  //  */
  // onMouseUp: PropTypes.func,
  // /**
  //  * @ignore
  //  */
  // onTouchEnd: PropTypes.func,
  // /**
  //  * @ignore
  //  */
  // onTouchMove: PropTypes.func,
  // /**
  //  * @ignore
  //  */
  // onTouchStart: PropTypes.func,
  // /**
  //  * The system prop that allows defining system overrides as well as additional CSS styles.
  //  */
  sx: PropTypes.object,
  // /**
  //  * @default 0
  //  */
  tabIndex: PropTypes.number,
  // /**
  //  * Props applied to the `TouchRipple` element.
  //  */
  // TouchRippleProps: PropTypes.object,
  // /**
  //  * A ref that points to the `TouchRipple` element.
  //  * @uxpinignoreprop
  //  */
  // touchRippleRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
  //   current: PropTypes.shape({
  //     pulsate: PropTypes.func.isRequired,
  //     start: PropTypes.func.isRequired,
  //     stop: PropTypes.func.isRequired
  //   })
  // })]),
  // /**
  //  * @ignore
  //  */
  // type: PropTypes.oneOf(['button', 'reset', 'submit'])


};

export default ButtonBase;
