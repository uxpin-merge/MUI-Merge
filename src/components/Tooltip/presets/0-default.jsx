import React from 'react';
import IconButton from '../../IconButton/IconButton';
import Tooltip from '../Tooltip';
import Icon from '../../Icon/Icon';

export default (
  <Tooltip title="Title Here" uxpId="tooltip-0"
  // PopperProps={{ keepMounted: true }}
  >
    <IconButton uxpId="Icon-Button-1"><Icon uxpId="Icon-1">notifications</Icon></IconButton>
  </Tooltip>
);
