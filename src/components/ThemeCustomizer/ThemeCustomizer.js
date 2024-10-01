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

// Function to validate the theme object structure and values
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
 * ThemeCustomizer Component
 * @uxpinwrappers SkipContainerWrapper, NonResizableWrapper
 * @uxpindocurl https://v5.mui.com/material-ui/customization/theming/
 * @uxpindescription Use this component to theme this instance of the MUI library.
 */
function ThemeCustomizer(props) {
  const [themeOptions, setThemeOptions] = useContext(ThemeContext);
  const [internalThemeObject, setInternalThemeObject] = useState({ ...props.themeObject });

  useEffect(() => {
    // Merge individual properties into the internal theme object
    let updatedThemeObject = { ...props.themeObject };

    // Merge paletteMode into palette if provided
    if (props.paletteMode) {
      updatedThemeObject.palette = updatedThemeObject.palette || {};
      updatedThemeObject.palette.mode = props.paletteMode;
    }

    // Merge primary palette properties
    if (props.palettePrimaryMain) {
      updatedThemeObject.palette = updatedThemeObject.palette || {};
      updatedThemeObject.palette.primary = updatedThemeObject.palette.primary || {};
      updatedThemeObject.palette.primary.main = props.palettePrimaryMain;
    }
    if (props.palettePrimaryLight) {
      updatedThemeObject.palette = updatedThemeObject.palette || {};
      updatedThemeObject.palette.primary.light = props.palettePrimaryLight;
    }
    if (props.palettePrimaryDark) {
      updatedThemeObject.palette = updatedThemeObject.palette || {};
      updatedThemeObject.palette.primary.dark = props.palettePrimaryDark;
    }
    if (props.palettePrimaryContrastText) {
      updatedThemeObject.palette = updatedThemeObject.palette || {};
      updatedThemeObject.palette.primary.contrastText = props.palettePrimaryContrastText;
    }

    // Merge secondary palette properties
    if (props.paletteSecondaryMain) {
      updatedThemeObject.palette = updatedThemeObject.palette || {};
      updatedThemeObject.palette.secondary = updatedThemeObject.palette.secondary || {};
      updatedThemeObject.palette.secondary.main = props.paletteSecondaryMain;
    }
    if (props.paletteSecondaryLight) {
      updatedThemeObject.palette = updatedThemeObject.palette || {};
      updatedThemeObject.palette.secondary.light = props.paletteSecondaryLight;
    }
    if (props.paletteSecondaryDark) {
      updatedThemeObject.palette = updatedThemeObject.palette || {};
      updatedThemeObject.palette.secondary.dark = props.paletteSecondaryDark;
    }
    if (props.paletteSecondaryContrastText) {
      updatedThemeObject.palette = updatedThemeObject.palette || {};
      updatedThemeObject.palette.secondary.contrastText = props.paletteSecondaryContrastText;
    }

    // Merge typographyFontFamily if provided
    if (props.typographyFontFamily) {
      updatedThemeObject.typography = updatedThemeObject.typography || {};
      updatedThemeObject.typography.fontFamily = props.typographyFontFamily;
    }

    // Merge shape.borderRadius if provided
    if (props.shapeBorderRadius !== undefined) {
      updatedThemeObject.shape = updatedThemeObject.shape || {};
      updatedThemeObject.shape.borderRadius = props.shapeBorderRadius;
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
  }, [
    props.paletteMode,
    props.palettePrimaryMain,
    props.palettePrimaryLight,
    props.palettePrimaryDark,
    props.palettePrimaryContrastText,
    props.paletteSecondaryMain,
    props.paletteSecondaryLight,
    props.paletteSecondaryDark,
    props.paletteSecondaryContrastText,
    props.typographyFontFamily,
    props.shapeBorderRadius, // Include shapeBorderRadius in dependencies
    props.themeObject,
    setThemeOptions,
  ]); // Track changes in props and setThemeOptions

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
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.primary.light, marginRight: 0.5 }}
                borderRadius={20}
              />
              <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.primary.main, marginRight: 0.5 }}
                borderRadius={20}
              />
              <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.primary.dark, marginRight: 0.5 }}
                borderRadius={20}
              />

              <Box sx={{ width: '20px' }} />
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  bgcolor: internalThemeObject.palette.secondary.light,
                  marginRight: 0.5,
                }}
                borderRadius={20}
              />
              <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.secondary.main, marginRight: 0.5 }}
                borderRadius={20}
              />
              <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.secondary.dark, marginRight: 0.5 }}
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

// Define the prop types for the component
ThemeCustomizer.propTypes = {
  /** Palette mode (light or dark) */
  paletteMode: PropTypes.oneOf(['light', 'dark']),

  /**
   * @uxpincontroltype color
   */
  palettePrimaryMain: PropTypes.string,
  /**
   * @uxpincontroltype color
   */
  palettePrimaryLight: PropTypes.string,
  /**
   * @uxpincontroltype color
   */
  palettePrimaryDark: PropTypes.string,
  /**
   * @uxpincontroltype color
   */
  palettePrimaryContrastText: PropTypes.string,

  /**
   * @uxpincontroltype color
   */
  paletteSecondaryMain: PropTypes.string,
  /**
   * @uxpincontroltype color
   */
  paletteSecondaryLight: PropTypes.string,
  /**
   * @uxpincontroltype color
   */
  paletteSecondaryDark: PropTypes.string,
  /**
   * @uxpincontroltype color
   */
  paletteSecondaryContrastText: PropTypes.string,

  /** Font family for the theme's typography */
  typographyFontFamily: PropTypes.string,

  /** The border radius for MUI shape */
  shapeBorderRadius: PropTypes.number,

  /** Override any other property with MUI theme object */
  themeObject: PropTypes.object,
};
ThemeCustomizer.defaultProps = {
  themeObject: {},
};
export default ThemeCustomizer;
