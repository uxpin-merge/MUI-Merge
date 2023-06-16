// eslint-disable-next-line no-unused-vars
import React, { ReactNode, FC } from 'react';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './boilerplate-theme';

const UXPinWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default UXPinWrapper;
