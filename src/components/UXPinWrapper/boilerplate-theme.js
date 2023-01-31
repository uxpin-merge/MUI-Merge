const boilerplateTheme = {
  // To further customize this theme,
  // please see the full theme object here: https://mui.com/customization/default-theme/
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
    decoration: {
      main: '#2684FF',
    },
    error: {
      main: '#e72400',
    },
    headerBadges: {
      main: '#2684FF',
    },
  },
  components: {
    // Name of the component
    MuiTypography: {
      defaultProps: {
        // The props to change the default for.
        color: 'text.primary', // All typography color props default to text.primary
      },
    },
  },
};

export default boilerplateTheme;
