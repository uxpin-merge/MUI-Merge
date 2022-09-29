// eslint-disable-next-line no-unused-vars
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import boilerplateTheme from "./boilerplate-theme";
import Paper from "@mui/material/Paper";
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

const theme = createTheme(boilerplateTheme);

export default function UXPinWrapper({ children }) {

  return (<ThemeProvider theme={theme}>    <ScopedCssBaseline>
    <Paper elevation={0} style={{backgroundColor: "transparent"}}>{children}</Paper>    </ScopedCssBaseline>
</ThemeProvider>);
} 