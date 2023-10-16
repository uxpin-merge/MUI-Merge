import React from 'react';
import CardHeader from '../CardHeader';
import IconButton from '../../IconButton/IconButton'
import Icon from '../../Icon/Icon'
import Avatar from '../../Avatar/Avatar';

export default (
  <CardHeader
    uxpId="Card-Header-1"
    avatar={<Avatar uxpId="avatar-1">R</Avatar>}
    color="grey"
    action={<IconButton uxpId="action-icon-button"><Icon uxpId="action-icon">more_vert</Icon></IconButton>}
    ariaLabel="add"
    title="Design Insights"
    subheader="December 6, 2021"
  />
);
