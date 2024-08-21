import React from 'react';
import GridM, { GridOwnProps } from '@mui/material/Grid';

/**
 * @uxpindocurl https://mui.com/api/grid/
 */

interface UxpGridProps extends GridOwnProps {
  spacing?: Array<any>;
  xs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
}

export default function Grid(props: UxpGridProps) {
  return <GridM {...props}>{props.children}</GridM>;
}
