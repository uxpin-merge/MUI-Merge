import * as React from 'react';
import Button from '../../Button/Button';
import Divider from '../../Divider/Divider';
import Stack from '../Stack';

export default (
  <Stack uxpId="stack-1" direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem uxpId="divider" />}>
    <Button variant="outlined" uxpId="button-1">
      1
    </Button>
    <Button variant="outlined" uxpId="button-2">
      2
    </Button>
    <Button variant="outlined" uxpId="button-3">
      3
    </Button>
  </Stack>
);
