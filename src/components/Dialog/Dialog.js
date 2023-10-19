import React from 'react';
import PropTypes from 'prop-types';
import DialogM from '@mui/material/Dialog';

/**
 * @uxpinuseportal
 * @uxpindocurl https://mui.com/api/dialog/#main-content
 * @uxpindescription Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 */

function Dialog(props) {
  const [open, setOpen] = React.useState(props.open);

  React.useEffect(() => setOpen(props.open), [props]);

  return (
    <DialogM
      open={open}
      onClose={() => setOpen(false)}
      TransitionProps={{ tabIndex: 'null' }}
      disablePortal={true}
      style={{ minWidth: '300px', minHeight: '300px', width: '100%', height: '100%' }}
      {...props}
    >
      {props.children}
    </DialogM>
  );
}

Dialog.propTypes = {
  /**
   * If `true`, the Dialog is open.
   */
  open: PropTypes.bool,

  /**
  * The content of the Dialog.
  */
  children: PropTypes.node,

  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": PropTypes.string,

  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": PropTypes.string,


  /**
   * Override or extend the styles applied to the component. See CSS API https://mui.com/api/dialog/#css for more details.
   */
  classes: PropTypes.object,

  /**
  * If true, hitting escape will not fire the onClose callback.
  */
  disableEscapeKeyDown: PropTypes.bool,

  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: PropTypes.bool,


  /**
   * If `true`, the dialog stretches to `maxWidth`.
   */
  fullWidth: PropTypes.bool,

  /**
  * Determine the max width of the dialog.
  * The dialog width grows with the size of the screen, this property is useful
  * on the desktop where you might need some coherent different width size across your
  * application. Set to `false` to disable `maxWidth`.
  */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: PropTypes.func,

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: PropTypes.func,

  /**
   * The component used to render the body of the dialog.
   */
  PaperComponent: PropTypes.elementType,

  /**
   * Props applied to the Paper element.
   */
  PaperProps: PropTypes.object,

  /**
  * Determine the container for scrolling the dialog.
  */
  scroll: PropTypes.oneOf(['body', 'paper']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  /** */
  sx: PropTypes.object,

  /**
   * The component used for the transition.
   * Follow this guide: https://mui.com/components/transitions/#transitioncomponent-prop
   * to learn more about the requirements for this component.
   */
  TransitionComponent: PropTypes.elementType,

  /**
   * The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.object,

  /**
  * Props applied to the transition element. By default, the element is based on this Transition component http://reactcommunity.org/react-transition-group/transition.
  */
  TransitionProps: PropTypes.object,

};

export default Dialog;
