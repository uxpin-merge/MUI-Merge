import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import SpeedDialM from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

/**
 * @uxpindocurl https://mui.com/material-ui/react-speed-dial/#api
 */
export default function SpeedDial(props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(props.open);
  }, [props]); // Only re-run the effect if value prop changes

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDialM
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        {...props}
      >
        {props.children}
      </SpeedDialM>
    </Box>
  );
}
SpeedDial.propTypes = {
  children: PropTypes.node,
  /*Override or extend the styles applied to the component.
   */
  classes: PropTypes.shape({
    fab: PropTypes.string,
    fabClosed: PropTypes.string,
    fabOpen: PropTypes.string,
    actions: PropTypes.string,
    actionsClosed: PropTypes.string,
    actionsOpen: PropTypes.string,
    staticTooltip: PropTypes.string,
    tooltipPlacementLeft: PropTypes.string,
    tooltipPlacementRight: PropTypes.string,
    tooltipPlacementTop: PropTypes.string,
    tooltipPlacementBottom: PropTypes.string,
    speedDial: PropTypes.string,
  }),
  /**
The aria-label of the button element.
Also used to provide the id for the SpeedDial element and its children.
*/
  ariaLabel: PropTypes.string,
  /**
The direction the actions open relative to the floating action button.
*/
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  /**
If true, the SpeedDial is hidden.
*/
  hidden: PropTypes.bool,
  /**
Props applied to the Fab element.
*/
  FabProps: PropTypes.object,
  /*
The icon to display in the SpeedDial Fab. The SpeedDialIcon component
provides a default Icon with animation.
*/
  icon: PropTypes.node,
  /**
Callback fired when the component requests to be closed.
@param {object} event The event source of the callback.
@param {string} reason Can be: "toggle", "blur", "mouseLeave", "escapeKeyDown".
*/
  onClose: PropTypes.func,
  /**
Callback fired when the component requests to be open.
@param {object} event The event source of the callback.
@param {string} reason Can be: "toggle", "focus", "mouseEnter".

*/
  onOpen: PropTypes.func,
  /** If true, the component is shown.
   * @uxpinbind onOpen 0
   */
  open: PropTypes.bool,
  /**
The icon to display in the SpeedDial Fab when the SpeedDial is open.
*/
  openIcon: PropTypes.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
  /**
The component used for the transition.
Follow this guide to learn more about the requirements for this component.
*/
  TransitionComponent: PropTypes.elementType,
  /**
The duration for the transition, in milliseconds.
You may specify a single timeout for all transitions, or individually with an object.
*/
  transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  ]),
  /**
Props applied to the transition element.
By default, the element is based
*/
  TransitionProps: PropTypes.object,
};
