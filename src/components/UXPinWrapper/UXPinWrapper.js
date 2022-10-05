// eslint-disable-next-line no-unused-vars
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import boilerplateTheme from "./boilerplate-theme";
import Box from "@mui/material/Box";

const theme = createTheme(boilerplateTheme);

export default function UXPinWrapper({ children }) {

  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
} 