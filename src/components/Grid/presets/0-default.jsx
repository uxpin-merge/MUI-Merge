import * as React from 'react';
import Grid from '../Grid';
import Button from '../../Button/Button';

export default (
  <Grid container spacing="8" uxpId="1">
    <Grid item xs={12} sm={6} uxpId="1.1">
      <Button uxpId="1.1.1" size="medium" variant="outlined" color="primary" fullWidth>
        xs:12, sm:6
      </Button>
    </Grid>
    <Grid item xs={12} sm={6} uxpId="1.2">
      <Button uxpId="1.2.1" size="medium" variant="outlined" color="primary" fullWidth>
        xs:12, sm:6
      </Button>
    </Grid>
  </Grid>
);
