import React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { ThemeContext } from '../UXPinWrapper/UXPinWrapper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const addedFonts = {};

// Will add custom font links to the header
const addFont = (link) => {
  const newFontLink = document.createElement('link');
  newFontLink.href = link;
  newFontLink.rel = 'stylesheet';
  document.head.appendChild(newFontLink);
};

// Validate theme function to check if the constructed theme object is valid
const validateTheme = (themeObject) => {
  const THEME_MODES = ['light', 'dark'];
  const mode = themeObject && themeObject.palette && themeObject.palette.mode;

  if (mode && !THEME_MODES.includes(mode)) {
    console.warn(`Invalid palette.mode property ${mode} - valid values: light, dark`);
    return false;
  }

  // Validate primary.main and secondary.main if they exist
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
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 * @uxpindocurl https://v5.mui.com/material-ui/customization/theming/
 * @uxpindescription Use this component to theme this instance of the MUI library.
 */
function ThemeCustomizer(props) {
  const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);

  React.useEffect(() => {
    // Merge properties into the themeObject if they exist
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

    // Validate the updated theme object
    if (validateTheme(updatedThemeObject)) {
      // Create a new theme using MUI's createTheme function
      const newTheme = createTheme(updatedThemeObject);

      // Update the ThemeContext with the new theme
      setThemeOptions((oldTheme) => ({
        ...oldTheme,
        theme: newTheme,
      }));
    }
  }, [props.palettePrimaryMain, props.paletteSecondaryMain, props.themeObject, setThemeOptions]);

  const theme = useTheme(); // Access the current theme for rendering

  return (
    <ThemeProvider theme={theme}>
      <Card elevation={4}>
        <CardContent component="div">
          <Stack direction="row" spacing="16px" justifyContent="space-between" borderBottom={1} borderColor="grey.300">
            <Typography sx={{ fontFamily: 'Roboto', paddingBottom: '5px' }}>ThemeCustomizer</Typography>{' '}
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
                {theme.palette.mode === 'light' ? 'light_mode' : 'dark_mode'}
              </Icon>
              <Box
                sx={{ width: 14, height: 14, bgcolor: theme.palette.primary.main, marginRight: 0.5 }}
                borderRadius={20}
              />
              <Box
                sx={{ width: 14, height: 14, bgcolor: theme.palette.primary.dark, marginRight: 0.5 }}
                borderRadius={20}
              />
              <Box
                sx={{ width: 14, height: 14, bgcolor: theme.palette.primary.light, marginRight: 0.5 }}
                borderRadius={20}
              />

              <Box sx={{ width: '20px' }} />
              <Box
                sx={{ width: 14, height: 14, bgcolor: theme.palette.secondary.main, marginRight: 0.5 }}
                borderRadius={20}
              />
              <Box
                sx={{ width: 14, height: 14, bgcolor: theme.palette.secondary.dark, marginRight: 0.5 }}
                borderRadius={20}
              />
              <Box
                sx={{ width: 14, height: 14, bgcolor: theme.palette.secondary.light, marginRight: 0.5 }}
                borderRadius={20}
              />
            </Stack>
            <Stack spacing="16px" direction="row" alignItems="center">
              <Icon color="action" baseClassName="material-icons-outlined" fontSize="small">
                format_size
              </Icon>
              <Typography variant="body2" noWrap={true}>
                {theme.typography.fontFamily}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActionArea />
      </Card>
    </ThemeProvider>
  );
}

ThemeCustomizer.propTypes = {
  /** The MUI theme object for customization */
  themeObject: PropTypes.object,
  /** The primary color for the theme's palette */
  palettePrimaryMain: PropTypes.string,
  /** The secondary color for the theme's palette */
  paletteSecondaryMain: PropTypes.string,
};

ThemeCustomizer.defaultProps = {
  themeObject: {},
  palettePrimaryMain: '',
  paletteSecondaryMain: '',
};

export default ThemeCustomizer;
