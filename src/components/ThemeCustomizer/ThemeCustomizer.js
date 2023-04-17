import React from 'react';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';
import { ThemeContext } from '../UXPinWrapper/UXPinWrapperWithThemeCustomizer';
import { Portal } from '@mui/base';
//Will add custom font links to the header
const addFont = (link, index) => {
  let newFontLink = document.createElement('link');
  newFontLink.href = link;
  newFontLink.rel = 'stylesheet';
  newFontLink.id = 'muiCCustomFont' + index;
  document.head.appendChild(newFontLink);
  //console.log("added: ", newFontLink);
};

function ThemeCustomizer(props) {
  const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);

  React.useEffect(() => {
    setThemeOptions((oldTheme) => {
      let options = { ...props };

      options.currentTheme = oldTheme.theme;

      let newTheme;

      //if there is a theme object given, it will be the basis for any customizations
      if (props.themeObject && props.themeObject !== '') {
        options.currentTheme = createTheme({
          ...JSON.parse(JSON.stringify(props.themeObject)),
        });
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
        console.log(k + ' : ' + v);
        if (k == 'fontFamily') {
          //ADD SOURCING FOR EACH FONT FOUND IN THEME
          let index = 0;
          if (document.querySelectorAll("link[href='" + v + "']").length === 0) {
            addFont('https://fonts.googleapis.com/css?family=' + v, index++);
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

  return (
    <Portal container={document.querySelector('.ng-canvas')}>
      <iframe width={300} height={300}>
        <h1>Global Theme Customizer</h1>
        <p>Should change global theme props</p>
        <a href="http://www.google.com">test</a>{' '}
      </iframe>
    </Portal>
  );
}

ThemeCustomizer.propTypes = {
  themeObject: PropTypes.object,
};

export default ThemeCustomizer;
