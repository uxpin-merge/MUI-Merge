import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import SnackbarM from '@mui/material/Snackbar';

import IconButton from '../IconButton/IconButton';

/**
 * @uxpindocurl https://mui.com/material-ui/react-snackbar/
 * @uxpinuseportal
 * @uxpinwrappers
 * 
 */
export default function Snackbar(props) {
  const { horizontal, open, sx, undo, uxpinRef, vertical, ...other } = props;

  const [isOpen, setIsOpen] = React.useState(props.open);

  React.useEffect(() => {
    setIsOpen(props.open);
  }, [props.open]); // Only re-run the effect if open prop changes

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      // prevents from closing in the UXPin Editor when switching props
      return;
    }

    setIsOpen(false);
  };



  return (

    <SnackbarM
      {...props}
      onClose={handleClose}
      open={isOpen}
    // anchorOrigin={anchorOrigin}
    // action={action}
    // ref={uxpinRef}
    // sx={styles}
    />

  );
}

Snackbar.propTypes = {
  /**
   * The message to display.
   */
  message: PropTypes.string,

  /**
   * If true, the component is shown.
   * @uxpinbinddd onClose 1
   */
  open: PropTypes.bool,


  /**
   * The anchor of the Snackbar. On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored.
   */
  anchorOrigin: PropTypes.object,

  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action: PropTypes.node,

  /**
   * The anchor of the Snackbar.
   * On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored.
   */
  actionOrigin: PropTypes.object,

  /**
   * The number of milliseconds to wait before automatically calling the onClose function.
   * onClose should then set the state of the open prop to hide the Snackbar.
   * This behavior is disabled by default with the null value.
   */
  autoHideDuration: PropTypes.number,

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * Props applied to the ClickAwayListener element.
   */
  ClickAwayListenerProps: PropTypes.object,

  /**
   * Props applied to the SnackbarContent element.
   */
  ContentProps: PropTypes.object,

  /**
   * If true, the autoHideDuration timer will expire even if the window is not focused.
   */
  disableWindowBlurListener: PropTypes.bool,

  /**
   * When displaying multiple consecutive Snackbars from a parent rendering a single <Snackbar/>, add the key prop to ensure independent treatment of each message.
   * e.g. <Snackbar key={message} />, otherwise, the message may update-in-place and features such as autoHideDuration may be canceled.
   */
  key: PropTypes.node,

  /**
   * Callback fired when the component requests to be closed. Typically onClose is used to set state in the parent component, which is used to control the Snackbar open prop.
   * The reason parameter can optionally be used to control the response to onClose, for example ignoring clickaway.
   */
  onClose: PropTypes.func,

  /**
   * The number of milliseconds to wait before dismissing after user interaction. If autoHideDuration prop isn't specified, it does nothing.
   * If autoHideDuration prop is specified but resumeHideDuration isn't, we default to autoHideDuration / 2 ms.
   */
  resumeHideDuration: PropTypes.number,

  /**
   * The component used for the transition. Follow this guide to learn more about the requirements for this component.
   */
  TransitionComponent: PropTypes.elementType,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.number,

  /**
   * Props applied to the transition element. By default, the element is based on this Transition component.
   */
  TransitionProps: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,


};

Snackbar.defaultProps = {

};
