import React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";



export default function Menu(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div >
      <div>
        {props.trigger === "icon" ? (
          <IconButton
            aria-label={props.label}
            ref={anchorRef}
            aria-haspopup="true"
            onClick={handleToggle}
            color={props.color}
          >
            <Icon>{props.icon}</Icon>
          </IconButton>
        ) : (
          <Button
            ref={anchorRef}
            aria-haspopup="true"
            variant={props.buttonVariant}
            color={props.color}
            onClick={handleToggle}
          >
            {props.label}
          </Button>
        )}

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          placement="bottom-start"
          style={{ zIndex: 9999 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    onKeyDown={handleListKeyDown}
                  >
                    {props.children.map((item, key) => {
                      {
                        console.log(item.props.children);
                      }
                      return <MenuItem key={key} onClick={handleClose} {...item.props} />;
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

Menu.propTypes = {
  /**
   * Menu items. Can have optional icons and dividers
   * Format:
   * [
    { label: "Profile"},
    { label: "Favorites"},
    { label: "Marketing Lists"},
    { label: "All Orders", hasDivider: "true"},
    { label: "Logout", icon:"cancel" }
  ]
  */
  menuItems: PropTypes.array,

  /*
   *The type of element to open the menu.
   */
  trigger: PropTypes.oneOf(["icon", "buton"]),

  /**
   * The name of the icon from https://material.io/tools/icons.
   */
  icon: PropTypes.string,

  /**
   * Label of button or aria-label of icon.
   */
  label: PropTypes.string,

  /**
   * The type of button.
   */
  buttonVariant: PropTypes.oneOf(["text", "outlined", "contained"]),

  /**
   * The color of the button or icon.
   */
  color: PropTypes.oneOf(["primary", "secondary", "inherit"]),
  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,
  open: PropTypes.bool,
};

Menu.defaultProps = {
  trigger: "icon",
  label: "More Items",
  icon: "more_vert",
  menuItems: [
    { label: "Profile" },
    { label: "Favorites" },
    { label: "Marketing Lists" },
    { label: "All Orders", hasDivider: "true" },
    { label: "Logout", icon: "cancel" }
  ]
};