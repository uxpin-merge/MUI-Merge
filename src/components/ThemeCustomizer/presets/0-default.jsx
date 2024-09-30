import React from 'react';
import ThemeCustomizer from '../ThemeCustomizer';
import defaultTheme from '../../UXPinWrapper/boilerplate-theme';

export default (
  <ThemeCustomizer
    uxpId="ddd"
    themeMode="dark"
    primaryMain="#ff5722"
    secondaryMain="#00bcd4"
    fontFamily="Arial"
    borderRadius={8}
    components={{
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '16px',
          },
        },
      },
    }}
  />
);
