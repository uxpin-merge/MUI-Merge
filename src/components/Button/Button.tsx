import React, { FC } from 'react';
import { Button as ButtonM, ButtonProps } from '@mui/material';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants';

const Button: FC = (props: ButtonProps) => {
  return <ButtonM {...props}/>
}

export default Button;
