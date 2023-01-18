import React from 'react';
import PropTypes from 'prop-types';
import OriginalDialog from '@mui/material/Dialog';

/**
 * @uxpindocurl https://mui.com/api/dialog/#main-content
 * @uxpinuseportal
 */

function Dialog(props) {
  const { children, open, sx, ...otherProps } = props;
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => setIsOpen(open), [open]);

  const styles = { ...sx, position: 'absolute' }; // override `fixed` position to display related to the Preview main area

  return (
    <OriginalDialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      TransitionProps={{ tabIndex: 'null' }}
      disablePortal={true}
      sx={styles}
      {...otherProps}
    >
      {children}
    </OriginalDialog>
  );
}

Dialog.propTypes = {
  /**
   * If `true`, the Dialog is open.
   */
  open: PropTypes.bool,

  /**
   * Height of the dialog. This should equal the height of UXP canvas
   * @uxpinignoreprop
   */
  height: PropTypes.number,

  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: PropTypes.bool,

  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   * @uxpinignoreprop
   */
  disableBackdropClick: PropTypes.bool,

  /**
   * If true, hitting escape will not fire the onClose callback.
   */
  /** @uxpinignoreprop */
  disableEscapeKeyDown: PropTypes.bool,

  /**
   * Callback fired when the backdrop is clicked.
   */
  /** @uxpinignoreprop */
  onBackdropClick: PropTypes.func,

  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application. Set to `false` to disable `maxWidth`.
   */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),

  /**
   * If `true`, the dialog stretches to `maxWidth`.
   */
  fullWidth: PropTypes.bool,

  /**
   *  @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * The component used to render the body of the dialog.
   */
  /** @uxpinignoreprop */
  PaperComponent: PropTypes.elementType,

  /**
   * The component used for the transition.
   * Follow this guide: https://mui.com/components/transitions/#transitioncomponent-prop
   * to learn more about the requirements for this component.
   */
  /** @uxpinignoreprop */
  TransitionComponent: PropTypes.elementType,

  /**
   * The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.
   */
  /** @uxpinignoreprop */
  trainstionDuration: PropTypes.oneOf([PropTypes.number, PropTypes.object]),

  /**
   * Props applied to the transition element. By default, the element is based on this Transition component http://reactcommunity.org/react-transition-group/transition.
   */
  /** @uxpinignoreprop */
  TransitionProps: PropTypes.object,

  /**
   * Override or extend the styles applied to the component. See CSS API https://mui.com/api/dialog/#css for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * Determine the container for scrolling the dialog.
   */
  scroll: PropTypes.oneOf(['body', 'paper']),

  onClose: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  /** */
  sx: PropTypes.object,
};

export default Dialog;