import DrawerM from '@mui/material/Drawer';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '../Box/Box';
import { v4 as uuidv4 } from 'uuid';

/**
 * @uxpinuseportal props.variant === "temporary"
 * @uxpindocurl https://mui.com/api/drawer/#main-content
 * @uxpindescription The navigation drawers (or "sidebars") provide ergonomic access to destinations in a site or app functionality such as switching accounts.
 */
export default function Drawer(props) {
  const [open, setOpen] = React.useState(props.open);

  React.useEffect(() => setOpen(props.open), [props]);

  return (
    // <DrawerM
    //   open={open}
    //   onClose={() => setOpen(false)}
    //   TransitionProps={{ tabIndex: 'null' }}
    //   disablePortal={true}
    //   style={{ minWidth: '300px', minHeight: '300px', width: '100%', height: '100%' }}
    //   ModalProps={{
    //     keepMounted: false,
    //     tabIndex: 'null'
    //   }}

    //   {...props}
    // >
    //   {props.children}
    // </DrawerM>

    <DrawerM
      {...props}
      onClose={() => setOpen(false)}
      open={open}
      disableEnforceFocus
      disablePortal={true}
      style={{ minWidth: '300px', minHeight: '300px', width: '100%', height: '100%' }}

    >
      <div>
        {props.children}
      </div>
    </DrawerM>


  )
}

Drawer.propTypes = {
  /**
 * The content of the component.
 */
  children: PropTypes.node,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool,

  /**
     * Side from which the drawer will appear.
     */
  anchor: PropTypes.oneOf(['bottom', 'left', 'right', 'top']),


  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The elevation of the drawer.
   */
  elevation: PropTypes.number,
  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: PropTypes.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
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
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   */
  PaperProps: PropTypes.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: PropTypes.object,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.number,

  /**
 * The system prop that allows defining system overrides as well as additional CSS styles.
 */
  sx: PropTypes.object,

};