import * as React from 'react';
import BottomNavigation from '../BottomNavigation';
import BottomNavigationAction from '../../BottomNavigationAction/BottomNavigationAction';
import Icon from '../../Icon/Icon';

export default (
  <BottomNavigation uxpId="bottom-navigation-1">
    <BottomNavigationAction uxpId="bottom-navigation-action-2" showLabel label="Home" icon={<Icon uxpId="icon-1">home</Icon>} />
    <BottomNavigationAction uxpId="bottom-navigation-action-3" showLabel label="Recents" icon={<Icon uxpId="icon-2">restore</Icon>} />
    <BottomNavigationAction uxpId="bottom-navigation-action-4" showLabel label="Nearby" icon={<Icon uxpId="icon-3">share_location</Icon>} />
  </BottomNavigation>
);
