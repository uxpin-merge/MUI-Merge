import React from 'react';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';
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

//Will add custom font links to the header
const addFont = (link, index) => {
  let newFontLink = document.createElement('link');
  newFontLink.href = link;
  newFontLink.rel = 'stylesheet';
  document.head.appendChild(newFontLink);
};

// Validate theme
const validateTheme = (themeObject) => {
  const THEME_MODES = ['light', 'dark'];
  const mode = themeObject && themeObject.palette && themeObject.palette.mode;
  if (mode && !THEME_MODES.includes(mode)) {
    console.warn(`Invalid palette.mode property ${mode} - valid values: light, dark`);
    return false;
  }

  // Validate primary.main and secondary.main if they exist
  const primaryMain = themeObject.palette.primary.main;
  const secondaryMain = themeObject.palette.secondary.main;

  if (primaryMain && typeof primaryMain !== 'string') {
    console.warn('Invalid palette.primary.main value');
    return false;
  }
  if (secondaryMain && typeof secondaryMain !== 'string') {
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
    setThemeOptions((oldTheme) => {
      let options = { ...props };

      options.currentTheme = oldTheme.theme;

      let newTheme;

      // Create a deep copy of the theme object
      let themeObjCopy = props.themeObject ? JSON.parse(JSON.stringify(props.themeObject)) : {};

      // Merge in themeMode, primaryMain, and secondaryMain if provided
      if (props.themeMode) {
        themeObjCopy.palette = themeObjCopy.palette || {};
        themeObjCopy.palette.mode = props.themeMode;
      }
      if (props.primaryMain) {
        themeObjCopy.palette = themeObjCopy.palette || {};
        themeObjCopy.palette.primary = themeObjCopy.palette.primary || {};
        themeObjCopy.palette.primary.main = props.primaryMain;
      }
      if (props.secondaryMain) {
        themeObjCopy.palette = themeObjCopy.palette || {};
        themeObjCopy.palette.secondary = themeObjCopy.palette.secondary || {};
        themeObjCopy.palette.secondary.main = props.secondaryMain;
      }

      // Validate and create the theme if valid
      if (validateTheme(themeObjCopy)) {
        options.currentTheme = createTheme({
          ...themeObjCopy,
        });
      }

      newTheme = options.currentTheme;

      //GET ALL GOOGLE FONT NAMES AT ANY LEVEL OF THE THEME WITH RECURSION
      const traverse = function (o, fn) {
        for (var i in o) {
          fn.apply(this, [i, o[i]]);
          if (o[i] !== null && typeof o[i] == 'object') {
            traverse(o[i], fn);
          }
        }
      };

      const fonts = [];
      traverse(props.themeObject, function (k, v) {
        if (k === 'fontFamily') {
          //ADD SOURCING FOR EACH FONT FOUND IN THEME
          if (!addedFonts[v]) {
            addFont('https://fonts.googleapis.com/css?family=' + v);
            addedFonts[v] = true;
          }
          fonts.push(v);
        }
      });

      return {
        theme: newTheme,
      };
    });
  }, [props, setThemeOptions, themeOptions.themeCustomizerProps]); // Only re-run if any of these change

  const theme = useTheme(); // Access the theme

  return (
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
  );
}

ThemeCustomizer.propTypes = {
  themeObject: PropTypes.object,
  primaryMain: PropTypes.string,
  secondaryMain: PropTypes.string,
  themeMode: PropTypes.oneOf(['light', 'dark']), // Add the new themeMode prop
};

ThemeCustomizer.defaultProps = {
  primaryMain: '',
  secondaryMain: '',
  themeMode: 'light', // Default to 'light' mode if not specified
};

export default ThemeCustomizer;
