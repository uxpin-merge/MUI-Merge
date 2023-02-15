import * as React from 'react';
import Dot from '../Dot';
import Typography from '../../Typography/Typography';

export default (
  <Dot uxpId="dot-1" direction="row" color="warning.main" size={10} spacing={2}>
    <Typography variant="body1" uxpId="dot-typography-1">
      Warning
    </Typography>
  </Dot>
);
