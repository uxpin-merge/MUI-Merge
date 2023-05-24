// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import boilerplateTheme from './boilerplate-theme';

async function getData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log(jsonData);
}

const theme = createTheme(boilerplateTheme);

// eslint-disable-next-line react/prop-types
export default function UXPinWrapper({ children }) {
  getData('https://designtokens.uxpin.com/designSystems/hash/0abe97cdf3c257f03814/data/json');
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
