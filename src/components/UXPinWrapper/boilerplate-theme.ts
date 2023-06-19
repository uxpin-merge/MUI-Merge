import { createTheme } from '@mui/material/styles';

/**
 * Use module augmentation to add new variables to the theme and themeOptions
 * https://mui.com/material-ui/customization/theming/#custom-variables
 */
declare module '@mui/material/styles' {
  interface Theme {
    mode: string;
    primary: colorScheme;
    secondary: colorScheme;
  }

  interface ThemeOptions {
    mode?: string;
    primary?: colorScheme;
    secondary?: colorScheme;
  }
}

type colorScheme = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
};

/**
 * To further customize this theme,
 * please see the full theme object here: https://mui.com/customization/default-theme/
 */
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#ffffff',
    },
  },
});
