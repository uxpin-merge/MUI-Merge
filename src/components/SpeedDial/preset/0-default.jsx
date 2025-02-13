import React from 'react';
import SpeedDial from '../SpeedDial';
import SpeedDialAction from '../../SpeedDialAction/SpeedDialAction';
import Icon from '../../Icon/Icon';

export default (
  <SpeedDial uxpId="speed-dial-1">
    <SpeedDialAction
      uxpId="speed-dial-action-1"
      tooltipTitle="Home"
      icon={<Icon uxpId="speed-dial-action-icon-1">home</Icon>}
    />
  </SpeedDial>
);
