import React from 'react';
import Toolbar from '../Toolbar';
import Button from '../../Button/Button';
import IconButton from '../../IconButton/IconButton';
import Typography from '../../Typography/Typography';
import Icon from '../../Icon/Icon';

export default (
  <Toolbar uxpId="toolbar-1">
    <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }} uxpId="3">
      <Icon uxpId="icon-1">menu</Icon>
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} uxpId="5">
      News
    </Typography>
    <Button color="inherit" uxpId="6">
      Login
    </Button>
  </Toolbar>
);
