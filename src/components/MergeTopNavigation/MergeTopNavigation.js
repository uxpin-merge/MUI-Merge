import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    "& .MuiTab-wrapper": {
      color: "#ffffff",
      
    }
  }
}));

export default function MergeTopNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {props.menus.map(menus => (
          <>
            {/* {menus.active == true ? handleActive("3") : null} */}

            <Tab label={menus.label} color="primary"/>
          </>
        ))}
        {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} /> */}
      </Tabs>
    </div>
  );
}
MergeTopNavigation.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      active: PropTypes.bool,
      submenu: PropTypes.arrayOf(PropTypes.shape({}))
    })
  )
};

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/styles";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Drawer from "@mui/material/Drawer";
// import Divider from "@mui/material/Divider";
// import Collapse from "@mui/material/Collapse";
// import Toolbar from "@mui/material/Toolbar";
// import Grid from "@mui/material/Grid";
// import Slide from "@mui/material/Slide";
// import InputBase from "@mui/material/InputBase";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Icon from "@mui/material/icon";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Image from "../Image/Image";

// const useStyles = makeStyles(theme => ({
//   root: {
//     // backgroundColor: "rgba(244, 246, 250, 0.5)",
//   },

//   listItem: {
//     "&.Mui-selected": {
//       borderLeft: "3px solid",
//       borderLeftColor: theme.palette.decoration.main,
//       backgroundColor: "transparent"
//     }
//   },

//   icon: {
//     marginLeft: "-8px",
//     marginRight: "16px"
//   },
//   listItemText: {
//     letterSpacing: "1px",
//     fontWeight: 500
//   },
//   subList: {
//     backgroundColor: "#ffffff",
//     "& .MuiButtonBase-root": {
//       color: "#5f6368"
//     },
//     // borderBottom: "#e8e8e8 1px solid",
//     "&.withIcon .MuiButtonBase-root": {
//       paddingLeft: "36px"
//     },
//     "&.MuiList-root": {
//       borderBottom: "#e8e8e8 1px solid"
//     },
//     "& .MuiListItem-root": {
//       paddingTop: "4px",
//       paddingBottom: "4px"
//     }
//   },
//   rootLevel: {
//     "&.Mui-selected": {
//       backgroundColor: "transparent",
//       borderBottom: "#e8e8e8 4px solid",
//       borderLeft: "none"
//     }
//   },

//   subLevel: {
//     "&.Mui-selected": {
//       backgroundColor: "transparent",
//       borderBottom: "green 4px solid"
//     }
//   },
//   collapsedLevel0: {
//     // borderBottom: "#e8e8e8 4px solid"
//   },
//   collapsedLevel1: {
//     "& .MuiTypography-root": {
//       fontWeight: "bold"
//     }
//   }
// }));
// function IglooTopNavigation(props) {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="primary"
//         textColor="primary"
//         variant="scrollable"
//         scrollButtons="auto"
//         aria-label="scrollable auto tabs example"
//       >
//         {props.menus.map(menus => (
//           <Tab label={menus.label} fullWidth selected={true}/>
//         ))}
//       </Tabs>
//     </div>
//   );
// }

// IglooTopNavigation.propTypes = {
//   menus: PropTypes.arrayOf(
//     PropTypes.shape({
//       icon: PropTypes.string,
//       label: PropTypes.string,
//       active: PropTypes.bool,
//       submenu: PropTypes.arrayOf(PropTypes.shape({}))
//     })
//   )
// };
// // IglooSideNavigation.defaultProps = {
// //   menus: [
// //     {
// //       label: "Marketing Services",
// //       active: true,
// //       opened: true,
// //       submenu: [
// //         {
// //           label: "Branding",
// //           submenu: [
// //             {
// //               label: "Brochures",
// //               active: true
// //             },
// //             {
// //               label: "Business Cards"
// //             },
// //             {
// //               label: "Logos"
// //             }
// //           ]
// //         },
// //         {
// //           label: "Variable Printing",
// //           submenu: [
// //             {
// //               label: "Igen"
// //             },
// //             {
// //               label: "1-to-1"
// //             }
// //           ]
// //         },
// //         {
// //           label: "Loyalty",
// //           active: "true"
// //         },
// //         {
// //           label: "Social Media"
// //         }
// //       ]
// //     },
// //     { label: "Data Solutions", icon: "data_usage", active: true },
// //     { label: "Technology", icon: "widgets" },
// //     { label: "From Side", icon: "bookmark" }
// //   ]
// // };

// export default IglooTopNavigation;
