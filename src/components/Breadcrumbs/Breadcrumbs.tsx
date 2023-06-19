import React, { FC } from 'react';
import { Breadcrumbs as BreadcrumbsM, BreadcrumbsProps } from '@mui/material';

/**
 * @uxpindocurl https://mui.com/api/breadcrumbs/#main-content
 */
const Breadcrumbs: FC = (props: BreadcrumbsProps) => {
  return <BreadcrumbsM {...props}/>;
}

export default Breadcrumbs;
