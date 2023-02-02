import React from 'react';
import PropTypes from 'prop-types';
import ListItemM from '@mui/material/ListItem';
import IconM from '../Icon/Icon';
import Collapse from '@mui/material/Collapse';
import { makeStyles } from '@mui/styles';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import { iconVariants } from '../Icon/icon-variants';

function MergeListItem(props) {
  const useStyles = makeStyles((theme) => ({
    collapsedListItem: {
      borderLeft: '3px solid',
      borderLeftColor: theme.palette.decoration.main,
      backgroundColor: '#f9f9f9',
      // backgroundColor: "#ffffff",
      // color: theme.palette.decoration.main
      '&.Mui-selected': {
        backgroundColor: '#f9f9f9',
      },
      '& .MuiIcon-root': {
        marginLeft: '-3px',
      },
    },

    listItem: {
      '&.Mui-selected': {
        borderLeft: '3px solid',
        borderLeftColor: theme.palette.decoration.main,
        backgroundColor: '#f9f9f9',
        color: theme.palette.primary,
        '& .MuiIcon-root': {
          marginLeft: '-3px',
        },
        // marginLeft:"-3px"
      },
    },

    collapseContainer: {
      paddingLeft: '36px',
      paddingBottom: '24px',
      paddingTop: '20px',
      borderBottom: '1px solid #0000001f',

      '& .MuiListItem-root': {
        paddingTop: 0,
        paddingBottom: 0,
        '&.Mui-selected': {
          border: 0,
          color: theme.palette.primary.main,
          background: '#ffffff',
          '&.MuiListItem-button:hover': {
            color: theme.palette.primary.main,
            opacity: '1',
          },
          // '&.MuiIcon-root': {
          //   marginLeft:"-3px"
          // },
        },
        '&.MuiListItem-button:hover': {
          background: '#ffffff',
          // color: theme.palette.primary.light,
          opacity: '.5',
        },
      },

      '& .MuiListItem-divider': {
        border: 0,
      },
    },

    icon: {
      width: '36px',
    },
  }));

  const classes = useStyles(props);
  const [open, setOpen] = React.useState(props.collapsed);

  React.useEffect(() => {
    setOpen(props.collapsed);
  }, [props]);

  function handleClick() {
    setOpen(!open);
  }
  const { isCollapsible, button, onClick, ...other } = props;

  return (
    <React.Fragment key={`some-unique-id`}>
      <ListItemM
        button={isCollapsible ? true : button}
        onClick={isCollapsible ? handleClick : onClick}
        // selected={open ? true : props.selected}
        className={open ? classes.collapsedListItem : classes.listItem}
        {...other}
      >
        {props.icon ? (
          <IconM color={props.iconColor} fontSize="small" className={classes.icon}>
            {props.icon}
          </IconM>
        ) : null}
        <ListItemText primary={props.primary} secondary={props.secondary} inset={props.inset} />

        {isCollapsible ? (
          open ? (
            <IconM>expand_less</IconM>
          ) : (
            <IconM>expand_more</IconM>
          )
        ) : (
          <ListItemSecondaryAction>{props.children}</ListItemSecondaryAction>
        )}
      </ListItemM>
      {isCollapsible ? (
        <Collapse in={open} timeout="auto" unmountOnExit className={classes.collapseContainer}>
          {props.children}
        </Collapse>
      ) : null}
    </React.Fragment>
  );
}

MergeListItem.propTypes = {
  /**
   * The main text.
   * @uxpinpropname  Primary Text
   */
  primary: PropTypes.string,

  /**
   * The secondary text.
   * @uxpinpropname  Secondary Text
   */
  secondary: PropTypes.string,

  /**
   * if set, Icon will display.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  icon: PropTypes.oneOf(iconVariants),

  /**
   * The color of the icon.
   */
  iconColor: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),
  /**
   * Defines the `align-items` style property.
   */
  alignItems: PropTypes.oneOf(['flex-start', 'center']),
  isCollapsible: PropTypes.bool,

  collapsed: PropTypes.bool,

  /**
   * If `true`, the list item will be clickable.
   */
  button: PropTypes.bool,

  /**
   * Use to apply selected styling.
   */
  selected: PropTypes.bool,

  /**
   * If `true`, the list item will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, a border is added to the bottom of the list item.
   */
  // hasDivider: PropTypes.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,

  /**
   * If `true`, text will be indented.
   * This should be used on an item without icon when siblings have icon.
   */
  inset: PropTypes.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: PropTypes.bool,

  /**
   * Click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,

  /**
   * PROPS BELOW NOT USED
   */

  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   *  @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   *  @uxpinignoreprop
   */
  className: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   * @uxpinignoreprop
   */
  component: PropTypes.string,

  /**
   * The container component used when a `ListItemSecondaryAction` is rendered.
   *  @uxpinignoreprop
   */
  ContainerComponent: PropTypes.node,

  /**
   * Properties applied to the container element when the component
   * is used to display a `ListItemSecondaryAction`.
   *  @uxpinignoreprop
   */
  ContainerProps: PropTypes.object,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.

   */
  dense: PropTypes.bool,

  /**
   * @ignore
   *  @uxpinignoreprop
   */
  focusVisibleClassName: PropTypes.string,
};

MergeListItem.defaultProps = {
  iconColor: 'primary',
  divider: true,
};
export { MergeListItem as default };
