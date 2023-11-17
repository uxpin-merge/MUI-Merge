import React from 'react';
import AppBar from '../AppBar';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import IconButton from '../../IconButton/IconButton';
import Toolbar from '../../Toolbar/Toolbar';
import Typography from '../../Typography/Typography';
import Stack from '../../Stack/Stack';

export default (
  <AppBar position="static" uxpId="1">
    <Toolbar uxpId="2" justifyContent="space-between">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        uxpId="stack-1"
      >
        <IconButton color="inherit" aria-label="Menu" uxpId="3">
          <Icon uxpId="4">menu</Icon>
        </IconButton>
        <Typography variant="h6" color="inherit" uxpId="5">
          News
        </Typography>
        <Button color="inherit" uxpId="6">
          Login
        </Button>
      </Stack>
    </Toolbar>
  </AppBar>
);
