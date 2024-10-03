import React from 'react';
import ThemeCustomizer from '../ThemeCustomizer';
import defaultTheme from '../../UXPinWrapper/boilerplate-theme';

export default <ThemeCustomizer uxpId="theme-customizer-1"
  paletteMode={defaultTheme.palette.mode}
  palettePrimaryMain={defaultTheme.palette.primary.main}
  palettePrimaryDark={defaultTheme.palette.primary.dark}
  palettePrimaryContrastText={defaultTheme.palette.primary.contrastText}
  palettePrimaryLight={defaultTheme.palette.primary.light}
  paletteSecondaryMain={defaultTheme.palette.secondary.main}
  paletteSecondaryLight={defaultTheme.palette.secondary.light}
  paletteSecondaryDark={defaultTheme.palette.secondary.dark}
  paletteSecondaryContrastText={defaultTheme.palette.secondary.contrastText}
  typographyFontFamily={defaultTheme.typography.fontFamily}
  shapeBorderRadius={defaultTheme.shape.borderRadius}
  themeObject={defaultTheme}
/>;
