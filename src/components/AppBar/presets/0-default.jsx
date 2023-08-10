import React from 'react';
import AppBar from '../AppBar';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import IconButton from '../../IconButton/IconButton';
import Toolbar from '../../Toolbar/Toolbar';
import Typography from '../../Typography/Typography';

export default (
  <AppBar position="static" uxpId="1">
    <Toolbar uxpId="2" justifyContent="space-between">
      <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }} uxpId="3">
        <Icon uxpId="4">menu</Icon>
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} uxpId="5">
        News
      </Typography>
      <Button color="inherit" uxpId="6">
        Login
      </Button>
    </Toolbar>
  </AppBar>
);
