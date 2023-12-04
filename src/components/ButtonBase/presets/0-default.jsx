import * as React from 'react';
import ButtonBase from '../ButtonBase';
import Avatar from '../../Avatar/Avatar';
import Typography from '../../Typography/Typography';

export default (
  <ButtonBase sx={{ padding: '4px', borderRadius: '8px' }} uxpId="ButtonBase-1">
    <Avatar
      sx={{ width: '32px', height: '32px' }}
      src="https://i.pravatar.cc/150?img=15"
      uxpId="avatar-1"
    />
    <Typography
      variant="body1"
      marginLeft="8px"
      color="inherit"
      uxpId="typography-1"
    >
      John Doe
    </Typography>
  </ButtonBase>

);
