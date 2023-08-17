import React from 'react';
import BadgeM from '../Badge';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <BadgeM uxpId="1" badgeContent="3" vertical="top" horizontal="right" color="primary" overlap="circular">
    <IconButton uxpId="Icon-Button-1">
      <Icon uxpId="icon">notifications</Icon>
    </IconButton>
  </BadgeM>
);
