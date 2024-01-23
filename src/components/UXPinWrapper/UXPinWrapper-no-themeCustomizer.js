// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import boilerplateTheme from './boilerplate-theme';

const theme = createTheme(boilerplateTheme);

// eslint-disable-next-line react/prop-types
export default function UXPinWrapper({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
