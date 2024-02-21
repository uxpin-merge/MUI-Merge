import React from 'react';
import ImageListItemBar from '../ImageListItemBar';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <ImageListItemBar
    uxpId="1.1.2"
    title="Trends"
    titlePosition="top"
    actionIcon={
      <IconButton uxpId="Icon-Button-1" color="inherit" ariaLabel="Trends icon button">
        <Icon uxpId="Icon-1" fontSize="inherit">
          star_border
        </Icon>
      </IconButton>
    }
    postion="left"
  />
);
