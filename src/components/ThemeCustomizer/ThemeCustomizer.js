import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';
import isEqual from 'lodash.isequal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeContext } from '../UXPinWrapper/UXPinWrapper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import defaultTheme from '../UXPinWrapper/boilerplate-theme';

const addedFonts = {};

//Will add custom font links to the header
const addFont = (link, index) => {
  let newFontLink = document.createElement('link');
  newFontLink.href = link;
  newFontLink.rel = 'stylesheet';
  document.head.appendChild(newFontLink);
};

// Function to validate the theme object structure and values
const validateTheme = (themeObject) => {
  const THEME_MODES = ['light', 'dark'];
  const mode = themeObject.palette.mode;

  if (mode && !THEME_MODES.includes(mode)) {
    console.warn(`Invalid palette.mode property ${mode} - valid values: light, dark`);
    return false;
  }

  // Validate palette.primary.main and palette.secondary.main if they exist
  const palettePrimaryMain = themeObject.palette.primary && themeObject.palette.primary.main;
  const paletteSecondaryMain = themeObject.palette.secondary && themeObject.palette.secondary.main;

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

const traverse = function (o, fn) {
  for (var i in o) {
    fn.apply(this, [i, o[i]]);
    if (o[i] !== null && typeof o[i] == 'object') {
      traverse(o[i], fn);
    }
  }
};

/**
 * ThemeCustomizer Component
 * @uxpinwrappers SkipContainerWrapper, NonResizableWrapper
 * @uxpindocurl https://v5.mui.com/material-ui/customization/theming/
 * @uxpindescription Use this component to theme this instance of the MUI library.
 */
function ThemeCustomizer(props) {
  // check that uxpinOnChange is injected correctly by uxpin app
  const uxpinOnChange = typeof props.uxpinOnChange === 'function' ? props.uxpinOnChange : () => {};
  const [themeOptions, setThemeOptions] = useContext(ThemeContext);
  const [internalThemeObject, setInternalThemeObject] = useState({ ...props.themeObject });

  useEffect(() => {
    // Merge individual properties into the internal theme object
    let updatedThemeObject = cloneDeep(props.themeObject);

    if (!isEqual(props.themeObject, internalThemeObject)) {
      let nextThemeObject = cloneDeep(props.themeObject);

      if (!nextThemeObject.palette) {
        nextThemeObject.palette = nextThemeObject.palette || {};
      }

      if (!nextThemeObject.palette.mode) {
        nextThemeObject.palette.mode = defaultTheme.palette.mode;
      }

      if (!nextThemeObject.palette.primary) {
        nextThemeObject.palette.primary = nextThemeObject.palette.primary || {};
      }

      if (!nextThemeObject.palette.secondary) {
        nextThemeObject.palette.secondary = nextThemeObject.palette.secondary || {};
      }

      if (!nextThemeObject.palette.primary.main) {
        nextThemeObject.palette.primary.main = defaultTheme.palette.primary.main;
      }

      if (!nextThemeObject.palette.secondary.main) {
        nextThemeObject.palette.secondary.main = defaultTheme.palette.secondary.main;
      }

      uxpinOnChange(internalThemeObject, nextThemeObject, 'themeObject');
      setInternalThemeObject(nextThemeObject);

      uxpinOnChange(
        internalThemeObject && internalThemeObject.palette ? internalThemeObject.palette.mode : undefined,
        nextThemeObject.palette.mode,
        'paletteMode'
      );

      uxpinOnChange(
        internalThemeObject && internalThemeObject.palette && internalThemeObject.palette.primary ? internalThemeObject.palette.primary.main : undefined,
        nextThemeObject.palette.primary.main,
        'palettePrimaryMain'
      );

      uxpinOnChange(
        internalThemeObject && internalThemeObject.palette && internalThemeObject.palette.primary ? internalThemeObject.palette.primary.light : undefined,
        nextThemeObject.palette.primary.light,
        'palettePrimaryLight'
      );

      uxpinOnChange(
        internalThemeObject && internalThemeObject.palette && internalThemeObject.palette.primary ? internalThemeObject.palette.primary.dark : undefined,
        nextThemeObject.palette.primary.dark,
        'palettePrimaryDark'
      );

      uxpinOnChange(
        internalThemeObject && internalThemeObject.palette && internalThemeObject.palette.primary ? internalThemeObject.palette.primary.contrastText : undefined,
        nextThemeObject.palette.primary.contrastText,
        'palettePrimaryContrastText'
      );

      uxpinOnChange(
        internalThemeObject && internalThemeObject.palette && internalThemeObject.palette.secondary ? internalThemeObject.palette.secondary.light : undefined,
        nextThemeObject.palette.secondary.light,
        'paletteSecondaryLight'
      );

      uxpinOnChange(
        internalThemeObject && internalThemeObject.palette && internalThemeObject.palette.secondary ? internalThemeObject.palette.secondary.main : undefined,
        nextThemeObject.palette.secondary.main,
        'paletteSecondaryMain'
      );

      uxpinOnChange(
        internalThemeObject && internalThemeObject.palette && internalThemeObject.palette.secondary ? internalThemeObject.palette.secondary.dark : undefined,
        nextThemeObject.palette.dark,
        'paletteSecondaryDark'
      );

      uxpinOnChange(
        internalThemeObject && internalThemeObject.palette && internalThemeObject.palette.secondary ? internalThemeObject.palette.secondary.contrastText : undefined,
        nextThemeObject.palette.secondary.contrastText,
        'paletteSecondaryContrastText'
      );

      uxpinOnChange(
        internalThemeObject && internalThemeObject.typography ? internalThemeObject.typography.fontFamily : undefined,
        nextThemeObject.typography ? nextThemeObject.typography.fontFamily : undefined,
        'typographyFontFamily'
      );

      uxpinOnChange(
        internalThemeObject && internalThemeObject.shape ? internalThemeObject.shape.borderRadius : undefined,
        nextThemeObject.shape ? nextThemeObject.borderRadius : undefined,
        'shapeBorderRadius'
      );

      if (validateTheme(nextThemeObject)) {
        const newTheme = createTheme(nextThemeObject);
        setThemeOptions((oldTheme) => ({
          ...oldTheme,
          theme: newTheme,
        }));
      }
    } else {
      // Merge paletteMode into palette if provided
      if (props.paletteMode) {
        updatedThemeObject.palette = updatedThemeObject.palette || {};
        updatedThemeObject.palette.mode = props.paletteMode;
      } else {
        if (updatedThemeObject.palette) {
          delete updatedThemeObject.palette.mode;
        }
      }

      // Merge primary palette properties
      if (props.palettePrimaryMain) {
        updatedThemeObject.palette = updatedThemeObject.palette || {};
        updatedThemeObject.palette.primary = updatedThemeObject.palette.primary || {};
        updatedThemeObject.palette.primary.main = props.palettePrimaryMain;
      } else {
        if (updatedThemeObject.palette && updatedThemeObject.palette.primary) {
          delete updatedThemeObject.palette.primary.main;
        }
      }

      if (props.palettePrimaryLight) {
        updatedThemeObject.palette = updatedThemeObject.palette || {};
        updatedThemeObject.palette.primary.light = props.palettePrimaryLight;
      } else {
        if (updatedThemeObject.palette && updatedThemeObject.palette.primary) {
          delete updatedThemeObject.palette.primary.light;
        }
      }

      if (props.palettePrimaryDark) {
        updatedThemeObject.palette = updatedThemeObject.palette || {};
        updatedThemeObject.palette.primary.dark = props.palettePrimaryDark;
      } else {
        if (updatedThemeObject.palette && updatedThemeObject.palette.primary) {
          delete updatedThemeObject.palette.primary.dark;
        }
      }

      if (props.palettePrimaryContrastText) {
        updatedThemeObject.palette = updatedThemeObject.palette || {};
        updatedThemeObject.palette.primary.contrastText = props.palettePrimaryContrastText;
      } else {
        if (updatedThemeObject.palette && updatedThemeObject.palette.primary) {
          delete updatedThemeObject.palette.primary.contrastText;
        }
      }

      // Merge secondary palette properties
      if (props.paletteSecondaryMain) {
        updatedThemeObject.palette = updatedThemeObject.palette || {};
        updatedThemeObject.palette.secondary = updatedThemeObject.palette.secondary || {};
        updatedThemeObject.palette.secondary.main = props.paletteSecondaryMain;
      } else {
        if (updatedThemeObject.palette && updatedThemeObject.palette.secondary) {
          delete updatedThemeObject.palette.secondary.main;
        }
      }

      if (props.paletteSecondaryLight) {
        updatedThemeObject.palette = updatedThemeObject.palette || {};
        updatedThemeObject.palette.secondary.light = props.paletteSecondaryLight;
      } else {
        if (updatedThemeObject.palette && updatedThemeObject.palette.secondary) {
          delete updatedThemeObject.palette.secondary.light;
        }
      }

      if (props.paletteSecondaryDark) {
        updatedThemeObject.palette = updatedThemeObject.palette || {};
        updatedThemeObject.palette.secondary.dark = props.paletteSecondaryDark;
      } else {
        if (updatedThemeObject.palette && updatedThemeObject.palette.secondary) {
          delete updatedThemeObject.palette.secondary.dark;
        }
      }

      if (props.paletteSecondaryContrastText) {
        updatedThemeObject.palette = updatedThemeObject.palette || {};
        updatedThemeObject.palette.secondary.contrastText = props.paletteSecondaryContrastText;
      } else {
        if (updatedThemeObject.palette && updatedThemeObject.palette.secondary) {
          delete updatedThemeObject.palette.secondary.contrastText;
        }
      }

      // Merge typographyFontFamily if provided
      if (props.typographyFontFamily) {
        updatedThemeObject.typography = updatedThemeObject.typography || {};
        updatedThemeObject.typography.fontFamily = props.typographyFontFamily;
      }  else {
        if (updatedThemeObject.typography) {
          delete updatedThemeObject.typography.fontFamily;
        }
      }

      // Merge shape.borderRadius if provided
      if (props.shapeBorderRadius !== undefined) {
        updatedThemeObject.shape = updatedThemeObject.shape || {};
        updatedThemeObject.shape.borderRadius = props.shapeBorderRadius;
      } else {
        if (updatedThemeObject.shape) {
          delete updatedThemeObject.shape.borderRadius;
        }
      }

      // Update the internal state with the merged theme object
      setInternalThemeObject(updatedThemeObject);

      //handle updating themeObject property on uxpin side
      uxpinOnChange(props.themeObject, updatedThemeObject, 'themeObject');

      // Validate and update the ThemeContext with the new merged theme object
      if (validateTheme(updatedThemeObject)) {
        const newTheme = createTheme(updatedThemeObject);
        setThemeOptions((oldTheme) => ({
          ...oldTheme,
          theme: newTheme,
        }));
      }
    }

    //GET ALL GOOGLE FONT NAMES AT ANY LEVEL OF THE THEME WITH RECURSION
    var obj = props.themeObject;
    const fonts = [];
    traverse(obj, function (k, v) {
      if (k === 'fontFamily') {
        //ADD SOURCING FOR EACH FONT FOUND IN THEME
        if (!addedFonts[v]) {
          addFont('https://fonts.googleapis.com/css?family=' + v);
          addedFonts[v] = true;
        }
        fonts.push(v);
      }
    });
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
              {internalThemeObject.palette.primary && <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.primary.light, marginRight: 0.5 }}
                borderRadius={20}
              />}
              {internalThemeObject.palette.primary && <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.primary.main, marginRight: 0.5 }}
                borderRadius={20}
              />}
              {internalThemeObject.palette.primary && <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.primary.dark, marginRight: 0.5 }}
                borderRadius={20}
              />}

              <Box sx={{ width: '20px' }} />
              {internalThemeObject.palette.secondary && <Box
                sx={{
                  width: 14,
                  height: 14,
                  bgcolor: internalThemeObject.palette.secondary.light,
                  marginRight: 0.5,
                }}
                borderRadius={20}
              />}
              {internalThemeObject.palette.secondary && <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.secondary.main, marginRight: 0.5 }}
                borderRadius={20}
              />}
              {internalThemeObject.palette.secondary && <Box
                sx={{ width: 14, height: 14, bgcolor: internalThemeObject.palette.secondary.dark, marginRight: 0.5 }}
                borderRadius={20}
              />}
            </Stack>
            <Stack spacing="16px" direction="row" alignItems="center">
              <Icon color="action" baseClassName="material-icons-outlined" fontSize="small">
                format_size
              </Icon>
              {internalThemeObject.typography && <Typography variant="body2" noWrap={true}>
                {internalThemeObject.typography.fontFamily}
              </Typography>}
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
  paletteMode: PropTypes.oneOf(['light', 'dark']).isRequired,

  /**
   * @uxpincontroltype color
   */
  palettePrimaryMain: PropTypes.string.isRequired,
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
  paletteSecondaryMain: PropTypes.string.isRequired,
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
  paletteMode: 'light',
  palettePrimaryMain: '#1976d2',
  paletteSecondaryMain: '#9c27b0',
  themeObject: {
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#9c27b0',
      },
    },
  },
};
export default ThemeCustomizer;
