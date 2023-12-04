import React from 'react';
import Menu from '../Menu';
import MenuItem from '../../MenuItem/MenuItem';

export default (
  <Menu uxpId="menu-1"
    anchorEl="#canvas"
    open={false}
  >
    <MenuItem uxpId="menu-item-1">Profile</MenuItem>
    <MenuItem uxpId="menu-item-2" divider={true}>
      My Account
    </MenuItem>
    <MenuItem uxpId="menu-item-3">Logout</MenuItem>
  </Menu>
);
