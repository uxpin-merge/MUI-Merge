import * as React from 'react';
import Alert from '../Alert';
import AlertTitle from '../../AlertTitle/AlertTitle';
import Icon from '../../Icon/Icon';

export default (
  <Alert uxpId="alert-1" severity="success" icon={<Icon uxpId="icon">check_circle_outline</Icon>}>
    <AlertTitle uxpId="alert-title">Success</AlertTitle>
  </Alert>
  );
