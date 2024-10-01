import React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from '../UXPinWrapper/UXPinWrapper';
import { useTheme } from '@mui/material/styles';
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
  const [internalThemeObject, setInternalThemeObject] = React.useState({});

  React.useEffect(() => {
    // Build the theme object dynamically from properties
    const newThemeObject = {
      ...props.themeObject,
      palette: {
        ...props.themeObject.palette,
        mode: props.themeMode || props.themeObject.palette.mode || 'light',
        primary: {
          ...props.themeObject.palette.primary,
          main: props.palettePrimaryMain || props.themeObject.palette.primary.main || '#1976d2',
        },
        secondary: {
          ...props.themeObject.palette.secondary,
          main: props.paletteSecondaryMain || props.themeObject.palette.secondary.main || '#9c27b0',
        },
      },
    };

    // Update the internal state with the new theme object
    setInternalThemeObject(newThemeObject);

    // Validate and update the theme context if the theme object is valid
    if (validateTheme(newThemeObject)) {
      setThemeOptions((oldTheme) => ({
        ...oldTheme,
        theme: createTheme(newThemeObject),
      }));
    }
  }, [props.palettePrimaryMain, props.paletteSecondaryMain, props.themeMode, props.themeObject, setThemeOptions]);

  const theme = useTheme(); // Access the theme

  return (
    <ThemeProvider theme={theme}>
      <Card elevation={4}>
        <CardContent component="div">
          <Typography sx={{ fontFamily: 'Arial', fontWeight: 'bold' }} borderBottom={1} borderColor="grey.300">
            ThemeCustomizer
          </Typography>
          <Stack direction="column" spacing="8px" paddingTop="10px">
            <Stack direction="row" alignItems="center">
              <Icon
                color="action"
                baseClassName="material-icons-outlined"
                fontSize="small"
                style={{ marginRight: '16px' }}
              >
                {theme.palette.mode === 'light' ? 'light_mode' : 'dark_mode'}
              </Icon>
              <Box sx={{ width: 16, height: 16, bgcolor: 'primary.main', marginRight: 0.5 }} borderRadius={20} />
              <Box sx={{ width: 16, height: 16, bgcolor: 'primary.dark', marginRight: 0.5 }} borderRadius={20} />
              <Box sx={{ width: 16, height: 16, bgcolor: 'primary.light', marginRight: 0.5 }} borderRadius={20} />

              <Box sx={{ width: '20px' }} />
              <Box sx={{ width: 16, height: 16, bgcolor: 'secondary.main', marginRight: 0.5 }} borderRadius={20} />
              <Box sx={{ width: 16, height: 16, bgcolor: 'secondary.dark', marginRight: 0.5 }} borderRadius={20} />
              <Box sx={{ width: 16, height: 16, bgcolor: 'secondary.light', marginRight: 0.5 }} borderRadius={20} />
            </Stack>
            <Stack spacing="16px" direction="row" alignItems="center">
              <Icon color="action" baseClassName="material-icons-outlined" fontSize="small">
                font_download
              </Icon>
              <Typography variant="body1" noWrap={true}>
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
  /** The color of palette.primary.main
   * @uxpincontroltype color
   */
  palettePrimaryMain: PropTypes.string,
  /** Specifies the color of the text.
   * @uxpincontroltype color
   */
  paletteSecondaryMain: PropTypes.string,
  themeMode: PropTypes.oneOf(['light', 'dark']), // Add the new themeMode prop
  themeObject: PropTypes.object, // The base theme object to extend
};

ThemeCustomizer.defaultProps = {
  palettePrimaryMain: '#1976d2',
  paletteSecondaryMain: '#9c27b0',
  themeMode: 'light',
  themeObject: {},
};

export default ThemeCustomizer;
