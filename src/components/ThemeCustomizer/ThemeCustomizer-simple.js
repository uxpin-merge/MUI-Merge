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
import Divider from '@mui/material/Divider';

const addedFonts = {};

//Will add custom font links to the header
const addFont = (link, index) => {
  let newFontLink = document.createElement('link');
  newFontLink.href = link;
  newFontLink.rel = 'stylesheet';
  document.head.appendChild(newFontLink);
};

//validate theme
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
    setThemeOptions((oldTheme) => {
      let options = { ...props };

      options.currentTheme = oldTheme.theme;

      let newTheme;

      //if there is a theme object given, it will be the basis for any customizations
      if (props.themeObject && props.themeObject !== '') {
        if (validateTheme(props.themeObject)) {
          options.currentTheme = createTheme({
            ...JSON.parse(JSON.stringify(props.themeObject)),
          });
        }
      }

      newTheme = options.currentTheme;

      console.log('parsed ', props.themeObject);

      //GET ALL GOOGLE FONT NAMES AT ANY LEVEL OF THE THEME WITH RECURSION

      var traverse = function (o, fn) {
        for (var i in o) {
          fn.apply(this, [i, o[i]]);
          if (o[i] !== null && typeof o[i] == 'object') {
            traverse(o[i], fn);
          }
        }
      };

      var obj = props.themeObject;
      const fonts = [];

      traverse(obj, function (k, v) {
        if (k == 'fontFamily') {
          //ADD SOURCING FOR EACH FONT FOUND IN THEME
          if (!addedFonts[v]) {
            addFont('https://fonts.googleapis.com/css?family=' + v);
            addedFonts[v] = true;
          }
          fonts.push(v);
        }
      });

      // console.log("fonts", fonts)

      return {
        theme: newTheme,
      };
    });
  }, [props, setThemeOptions, themeOptions.themeCustomizerProps]); //only re-run if any of these change

  const theme = useTheme(); // Access the theme

  return (
    <Card elevation={4}>
      <CardContent component="div">
        <Stack direction="row" spacing="16px" justifyContent="space-between" borderBottom={1} borderColor="grey.300">
          <Typography sx={{ fontFamily: 'Roboto', paddingBottom: '5px' }}>ThemeCustomizer</Typography>{' '}
          <Icon color="action">drag_handle</Icon>
        </Stack>

        <Stack direction="column" spacing="10px" paddingTop="15px">
          <Stack direction="row" alignItems="center">
            <Icon color="action" baseClassName="material-icons-outlined" fontSize="small" sx={{ marginRight: '16px' }}>
              {props.themeObject.palette.mode === 'light' ? 'light_mode' : 'dark_mode'}
            </Icon>
            <Box
              sx={{ width: 14, height: 14, bgcolor: props.themeObject.palette.primary.main, marginRight: 0.5 }}
              borderRadius={20}
            />
            <Box sx={{ width: 14, height: 14, bgcolor: 'primary.dark', marginRight: 0.5 }} borderRadius={20} />
            <Box sx={{ width: 14, height: 14, bgcolor: 'primary.light', marginRight: 0.5 }} borderRadius={20} />

            <Box sx={{ width: '20px' }} />
            <Box sx={{ width: 14, height: 14, bgcolor: 'secondary.main', marginRight: 0.5 }} borderRadius={20} />
            <Box sx={{ width: 14, height: 14, bgcolor: 'secondary.dark', marginRight: 0.5 }} borderRadius={20} />
            <Box sx={{ width: 14, height: 14, bgcolor: 'secondary.light', marginRight: 0.5 }} borderRadius={20} />
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
  );
}

ThemeCustomizer.propTypes = {
  themeObject: PropTypes.object,
};

export default ThemeCustomizer;
