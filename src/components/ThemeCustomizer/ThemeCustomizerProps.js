import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from '../UXPinWrapper/UXPinWrapper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const addedFonts = {};

// Function to add custom font links to the document header
const addFont = (link) => {
  const newFontLink = document.createElement('link');
  newFontLink.href = link;
  newFontLink.rel = 'stylesheet';
  document.head.appendChild(newFontLink);
};

// Validate the theme object structure and values
const validateTheme = (themeObject) => {
  const THEME_MODES = ['light', 'dark'];
  const mode = themeObject.palette.mode;

  if (mode && !THEME_MODES.includes(mode)) {
    console.warn(`Invalid palette.mode property ${mode} - valid values: light, dark`);
    return false;
  }

  // Validate palette.primary.main and palette.secondary.main if they exist
  const palettePrimaryMain = themeObject.palette.primary.main;
  const paletteSecondaryMain = themeObject.palette.secondary.main;

  if (palettePrimaryMain && typeof palettePrimaryMain !== 'string') {
    console.warn('Invalid palette.primary.main value');
    return false;
  }
  if (paletteSecondaryMain && typeof paletteSecondaryMain !== 'string') {
    console.warn('Invalid palette.secondary.main value');
    return false;
  }

  return true;
};

/**
 * @uxpinwrappers SkipContainerWrapper, NonResizableWrapper
 * @uxpindocurl https://v5.mui.com/material-ui/customization/theming/
 * @uxpindescription Use this component to theme this instance of the MUI library.
 */
function ThemeCustomizerProps(props) {
  const [themeOptions, setThemeOptions] = useContext(ThemeContext);
  const [internalThemeObject, setInternalThemeObject] = useState({ ...props.themeObject });

  useEffect(() => {
    // Merge the palettePrimaryMain and paletteSecondaryMain props into the internal theme object
    let updatedThemeObject = { ...props.themeObject };

    if (props.palettePrimaryMain) {
      updatedThemeObject.palette = updatedThemeObject.palette || {};
      updatedThemeObject.palette.primary = updatedThemeObject.palette.primary || {};
      updatedThemeObject.palette.primary.main = props.palettePrimaryMain;
    }

    if (props.paletteSecondaryMain) {
      updatedThemeObject.palette = updatedThemeObject.palette || {};
      updatedThemeObject.palette.secondary = updatedThemeObject.palette.secondary || {};
      updatedThemeObject.palette.secondary.main = props.paletteSecondaryMain;
    }

    // Update the internal state with the merged theme object
    setInternalThemeObject(updatedThemeObject);

    // Validate and update the ThemeContext with the new merged theme object
    if (validateTheme(updatedThemeObject)) {
      const newTheme = createTheme(updatedThemeObject);
      setThemeOptions((oldTheme) => ({
        ...oldTheme,
        theme: newTheme,
      }));
    }
  }, [props.palettePrimaryMain, props.paletteSecondaryMain, props.themeObject, setThemeOptions]); // Track changes in props and setThemeOptions

  return (
    <ThemeProvider theme={createTheme(internalThemeObject)}>
      <Card elevation={4}>
        <CardContent component="div">
          <Stack direction="row" spacing="16px" justifyContent="space-between" borderBottom={1} borderColor="grey.300">
            <Typography sx={{ fontFamily: 'Roboto', paddingBottom: '5px' }}>ThemeCustomizer</Typography>
            <Icon color="action">drag_handle</Icon>
          </Stack>

          <Stack direction="column" spacing="10px" paddingTop="15px">
            <Stack direction="row" alignItems="center">
              <Icon
                color="action"
                baseClassName="material-icons-outlined"
                fontSize="small"
                sx={{ marginRight: '16px' }}
              >
                {internalThemeObject.palette.mode === 'light' ? 'light_mode' : 'dark_mode'}
              </Icon>
              <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.primary.main, marginRight: 0.5 }}
                borderRadius={20}
              />
              <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.primary.dark, marginRight: 0.5 }}
                borderRadius={20}
              />
              <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.primary.light, marginRight: 0.5 }}
                borderRadius={20}
              />

              <Box sx={{ width: '20px' }} />
              <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.secondary.main, marginRight: 0.5 }}
                borderRadius={20}
              />
              <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.secondary.dark, marginRight: 0.5 }}
                borderRadius={20}
              />
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  bgcolor: internalThemeObject.palette.secondary.light,
                  marginRight: 0.5,
                }}
                borderRadius={20}
              />
            </Stack>
            <Stack spacing="16px" direction="row" alignItems="center">
              <Icon color="action" baseClassName="material-icons-outlined" fontSize="small">
                format_size
              </Icon>
              <Typography variant="body2" noWrap={true}>
                {internalThemeObject.typography.fontFamily}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActionArea />
      </Card>
    </ThemeProvider>
  );
}

ThemeCustomizerProps.propTypes = {
  /** The MUI theme object for customization */
  themeObject: PropTypes.object,
  /** The primary color for the theme's palette */
  palettePrimaryMain: PropTypes.string,
  /** The secondary color for the theme's palette */
  paletteSecondaryMain: PropTypes.string,
};

ThemeCustomizerProps.defaultProps = {
  themeObject: {
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
    typography: {
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontSize: 14,
            color: 'inherit',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '',
          },
        },
      },
    },
  },
  palettePrimaryMain: '',
  paletteSecondaryMain: '',
};

export default ThemeCustomizerProps;
