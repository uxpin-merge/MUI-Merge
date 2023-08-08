import React from 'react';
import { Alert as AlertM, AlertProps } from '@mui/material';

interface AlertPropsMerge extends AlertProps {
  children?: React.ReactNode;
}

/**
 * @uxpindocurl https://mui.com/api/alert/
 */
function Alert(props: AlertProps) {
  return <AlertM {...props} />
}

export default Alert;
