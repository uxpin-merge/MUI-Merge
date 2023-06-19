import React, { FC } from 'react';
import IconM, { IconProps } from '@mui/material/Icon';
import { iconVariants } from './icon-variants';

/**
 * @uxpindocurl https://mui.com/api/icon/
 */
const Icon: FC = (props: IconProps) => {
  return <IconM {...props} />;
}

export default Icon;
