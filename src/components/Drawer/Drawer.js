import DrawerM from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '../Box/Box';
import { v4 as uuidv4 } from 'uuid';

/**
 * @uxpinuseportal props.variant === "temporary"
 * @uxpindocurl https://mui.com/api/drawer/#main-content
 * @uxpindescription Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 */
export default function Drawer(props) {
  const [open, setOpen] = React.useState(props.open);

  React.useEffect(() => setOpen(props.open), [props]);

  // Unique Id
  const id = uuidv4();

  return (
    <Box style={{}} id={id}>
      <DrawerM
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        container={document.querySelector("[id='" + id + "']")}
        disableEnforceFocus
        disablePortal={true}
        {...props}
      >
        <div style={{ width: props.width, minHeight: '200px' }}>{props.children}</div>
      </DrawerM>
    </Box>
    // <DrawerM
    //   open={open}
    //   onClose={() => setOpen(false)}
    //   TransitionProps={{ tabIndex: 'null' }}
    //   // disablePortal={true}
    //   style={{ minWidth: '300px', minHeight: '300px' }}
    //   {...props}
    // >
    //   {props.children}
    // </DrawerM>

  );
}

Drawer.propTypes = {

  /**
     * Side from which the drawer will appear.
     * @default 'left'
     */
  anchor: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),

  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: PropTypes.number,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: PropTypes.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: PropTypes.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: PropTypes.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: PropTypes.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: PropTypes.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: PropTypes.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: PropTypes.number,
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary'])

};

Drawer.defaultProps = {

};
