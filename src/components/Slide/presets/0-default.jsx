import React from 'react';
import Slide from '../Slide';
import Typography from '../../Typography/Typography';

export default (
  <Slide uxpId="slide-1" in={true} direction={"down"}
  // mountOnEnter unmountOnExit
  >
    <Typography
      bgcolor="grey.100"
      padding="50px"
      align="center"
      uxpId="typography-1"
    >

      Slide Me!
    </Typography>
  </Slide>
);

