import * as React from 'react';

import MergeSideNavigation from '../MergeSideNavigation';

import List from '../../List/List';
import MergeListItem from '../../MergeListItem/MergeListItem';
import Switch from '../../Switch/Switch';

export default (
  <MergeSideNavigation uxpId="1">
    <List subheadText="List Item Examples" uxpId="2">
      <MergeListItem primary="Inbox" icon="inbox" uxpId="MergeListItem.1" />
      <MergeListItem primary="Wi-Fi" icon="wifi" hasDivider uxpId="MergeListItem.2">
        <Switch uxpId="MergeListItem.2.1" />
      </MergeListItem>
      <MergeListItem
        primary="With Submenu"
        icon="settings"
        selected
        isCollapsible={true}
        collapsed={true}
        uxpId="MergeListItem.3"
      >
        <MergeListItem primary="First Sublink" uxpId="MergeListItem.3.1" divider={false} selected></MergeListItem>
        <MergeListItem primary="Second Sublink" divider={false} uxpId="MergeListItem.3.2"></MergeListItem>
      </MergeListItem>

      <MergeListItem primary="Double Line Item" secondary="Secondary text" uxpId="MergeListItem.4" />
    </List>
  </MergeSideNavigation>
);
