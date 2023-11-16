import React from 'react';
import Toolbar from '../Toolbar';
import Button from '../../Button/Button';
import IconButton from '../../IconButton/IconButton';
import Typography from '../../Typography/Typography';
import Icon from '../../Icon/Icon';
import Stack from '../../Stack/Stack';

export default (
  <Toolbar uxpId="toolbar-1" >
    <Stack
      direction="row"
      justifyContent="space-between"
      width="100%"
      uxpId="stack-1"
    >
      <IconButton color="inherit" aria-label="Menu" uxpId="3">
        <Icon uxpId="3.1">menu</Icon>
      </IconButton>
      <Typography variant="h6" color="inherit" uxpId="5">
        News
      </Typography>
      <Button color="inherit" uxpId="6">
        Login
      </Button>
    </Stack>

  </Toolbar>
);
