import * as React from "react";

import MergeHeader from "../MergeHeader";
// import TestComponent from '../../TestComponent/TestComponent';
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Badge from "../../Badge/Badge";
// import Menu from "../../Menu/Menu";
// import MenuItem from "../../MenuItem/MenuItem";

let menus =
    [
        {
            "active": true,
            "opened": true,
            "label": "Level 1",
            "submenu": [
                {
                    "label": "Level 2",
                    "submenu": [
                        {
                            "active": true,
                            "label": "level 3"
                        },
                        {
                            "label": "level 3"
                        },
                        {
                            "label": "level 3"
                        }
                    ]
                },
                {
                    "label": "Level 2",
                    "submenu": [
                        {
                            "label": "level 3"
                        },
                        {
                            "label": "level 3"
                        }
                    ]
                },
                {
                    "label": "Level 2",
                },
                {
                    "label": "Level 2"
                }
            ]
        },
        {
            "icon": "data_usage",
            "label": "Level 1"
        },
        {
            "icon": "widgets",
            "label": "Level 1"
        },
        {
            "icon": "bookmarkss",
            "label": "Level 1"
        }
    ]

let accountMenu = [
    { label: "Profile" },
    { label: "Favorites" },
    { label: "Marketing Lists" },
    { label: "All Orders", hasDivider: true },
    { label: "Logout", icon: "cancel" }
]

export default (
    <MergeHeader uxpId="1"
        menus={menus}
        logoSrc="https://uc.uxpin.com/files/1206445/1163114/UXPinMerge_Logo_WhiteFill_x2-9ca6d5c0d7210e31cb6c17e797466b7d-f7dc09.png"
        logoAlt="UXPin Merge"
        desktopNavigationVariant="vertical"
        hasAccountIcon={true}
        accountMenu={accountMenu}
        hasSearch={true}
        inline={true}
        hasNavigation={false}
    >
        <IconButton
            arialabel="Notifications"
            uxpId="1.1"
        >
            <Icon uxpId="1.1.1" color="inherit">notifications</Icon>
        </IconButton>
        {/* <Badge badgeContent="3" max="9" uxpId="1.2.1">
            <IconButton uxpId="Icon-Button-1" ariaLabel="add accessibility text">shopping_cart</IconButton>
        </Badge> */}
        {/* <Menu uxpId="menu-1" icon="account_circle" trigger="icon">
    <MenuItem uxpId="menuItem-1">Profile</MenuItem>
    <MenuItem uxpId="menuItem-2" divider={true}>My Account</MenuItem>
    <MenuItem uxpId="menuItem-3">Logout</MenuItem>
  </Menu> */}
    </MergeHeader>
);
