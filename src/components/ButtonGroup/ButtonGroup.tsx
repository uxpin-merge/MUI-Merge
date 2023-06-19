import React, { FC } from 'react';
import { ButtonGroup as ButtonGroupM, ButtonGroupProps } from '@mui/material';

/**
 * @uxpindocurl https://mui.com/api/button-group/
 */
const ButtonGroup: FC = (props: ButtonGroupProps) => {
  return <ButtonGroupM {...props} />;
}

export default ButtonGroup;
