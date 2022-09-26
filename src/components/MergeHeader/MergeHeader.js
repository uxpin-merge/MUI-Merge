import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import { fade, makeStyles, useTheme } from "@mui/styles";
import MergeSideNavigation from "../MergeSideNavigation/MergeSideNavigation";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import Icon from "@mui/material/Icon";
// import Badge from "@mui/material/Badge";
import Menu from "../Menu/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Image from "../Image/Image";
// import Tabs from "../Tabs/Tabs";
// import Tab from "../Tab/Tab";
// import { withStyles } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MergeTopNavigation from "../MergeTopNavigation/MergeTopNavigation";

const drawerWidth = 275;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minHeight: "667px",
    minWidth: "550px"
  },
  grow: {
    flexGrow: 1
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0
    },
    "& .MuiDrawer-paper": {
      backgroundColor: "#ffffff"
    }
  },
  appBar: {
    background: "#000000",
    zIndex: theme.zIndex.drawer + 1,
    borderTop: "5px solid",
    borderTopColor: theme.palette.decoration.main,
    minWidth: "550px",
    "& .MuiIconButton-root": {
      color: "#ffffff"
    }
  },
  menuButton: {
    // marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "none",
      color: "#ffffff"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#f9fafc"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  iconSection: {
    display: "flex",
    marginRight: -theme.spacing(2),
    "& .MuiBadge-badge": {
      backgroundColor: theme.palette.headerBadges.main,
      color: "#ffffff",
      // right: -3,
      top: 10,
      // border: "1px solid #fff"
    }
  },

  icons:{
    color:"#ffffff"
  },

  logo: {
    height: "32px",
    // marginLeft: "-24px",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "32px",
      // maxWidth: "100px"
    }
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ffffff3d",
    color:"#ffffff",
    // "&:hover": {
    //   backgroundColor: fade("#ffffff", 0.95)
    // },
    height: "40px",
    marginLeft: 0,
    // marginTop: theme.spacing(1)/2,
    marginRight: theme.spacing(4),
    // marginTop: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: 0,
      width: "100%",
      alignSelf: "baseline"
    }
  },
  searchIcon: {
    width: theme.spacing(5),
    height: "100%",
    position: "absolute",
    right: 0,
    top: 0,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 5, 1, 2),
    fontSize: ".875em",
    transition: theme.transitions.create("width"),
    width: "#ffffff",
    [theme.breakpoints.down("xs")]: {
      height: "-webkit-fill-available"
    },
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 300
      }
    }
  }
}));
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function MergeHeader(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  //Checks if drawers should open in iframe or uxpcanvas
  let drawerContainer = null;

  if (document.querySelector("#iframeContainer iframe")) {
    drawerContainer = document.querySelector("#iframeContainer iframe")
      .contentWindow.document.body;
  } else if (document.querySelector("[data-id='canvas']")) {
    drawerContainer = document.querySelector("[data-id='canvas']");
  }

  return (
    <>
      <AppBar
        {...(props.inline ? { position: "static" } : { position: "fixed" } )}
        className={classes.appBar}
        color="inherit"
        elevation={2}
        ref={props.uxpinRef}
      >
        <Toolbar>
          {/* <IconButton
            color="#ffffff"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton> */}
          <IconButton
          aria-label="delete"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}>
          <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <Image
              src={props.logoSrc}
              alt={classes.logoAlt}
              height="100%"
              width="auto"
              // objectFit="scale-down"
            />
          </div>
          <div className={classes.grow} />

          {props.hasSearch && (
            <Hidden xsDown implementation="css">
              <Box paddingRight={1}>
                <div className={classes.search}>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                </div>
              </Box>
            </Hidden>
          )}
          <div className={classes.iconSection}>
            {props.children && (
              <Box >
                {React.Children.map(props.children, child =>
                  React.cloneElement(child, {})
                )}
              </Box>
            )}
            {/* {props.hasAccountIcon && (
              <Menu
                trigger="icon"
                label="My Account"
                icon="account_circle"
                menuItems={props.accountMenu}
                color="#ffffff"
                open={false}
                className={classes.icons}
                placement="bottom-end"
              />
            )} */}
          </div>
        </Toolbar>
        {props.hasSearch && (
          <Hidden smUp implementation="css">
            <Toolbar variant="dense" disableGutters>
              <div className={classes.search}>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
              </div>
            </Toolbar>
          </Hidden>
        )}

        {props.hasNavigation ? 
        props.desktopNavigationVariant == "horizontal" && (
          <Hidden smDown implementation="css">
            <Toolbar variant="dense" disableGutters>
              <MergeTopNavigation menus={props.menus} />
            </Toolbar>
          </Hidden>
        ) : null }
      </AppBar>

{props.hasNavigation ? 

      <Hidden smUp implementation="css">
        <nav className={classes.drawer}>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            container={drawerContainer}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>

            <MergeSideNavigation menus={props.menus} {...props} />
          </Drawer>
        </nav>  
      </Hidden>
      : null }



      { props.hasNavigation ?
      props.desktopNavigationVariant == "vertical" && (
        <Hidden smDown implementation="css">
          <nav className={classes.drawer}>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.toolbar} />
              <Box paddingTop={2}>
                <MergeSideNavigation {...props} />
              </Box>
            </Drawer>
          </nav>
        </Hidden>
      )
      : null }
    </>
  );
}
MergeHeader.propTypes = {
  /**
   * the URL of the logo
   */
  logoSrc: PropTypes.string,
  
  /**
   * Alt text for the logo
   */
  logoAlt: PropTypes.string,

  /**
   * If `true` search box will display
   */
  hasSearch: PropTypes.bool,

  /**
  * If `true` account icon will display
   * @uxpinignoreprop
  */
  hasAccountIcon: PropTypes.bool,
  
    /**
  * Account menu array if "Account Icon" = `true`
  * @uxpinignoreprop
  */
  accountMenu: PropTypes.array,

  /**
  * If `true` will show navigation
   * @uxpinignoreprop
  */
  hasNavigation: PropTypes.bool,

  /**
  * Menu array if "Navigation" = `true`
   * @uxpinignoreprop
  */
  menus: PropTypes.array,
  
  /**
   * The type of navigation to render at desktop breakpoint. Horizontal currently only supports one level
    * @uxpinignoreprop
   */
  desktopNavigationVariant: PropTypes.oneOf(["horizontal", "vertical"]),
  
  /**
   * Changes the placement of the header
   * @uxpinignoreprop
   */
  inline: PropTypes.bool,
  
/**
 * @uxpinignoreprop
 */
  children: PropTypes.node
};


export default MergeHeader;
