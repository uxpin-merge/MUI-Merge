// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../style.css';
import boilerplateTheme from './boilerplate-theme';

export const ThemeContext = React.createContext();

function setColor (newColor){
  document.documentElement.style.setProperty('--color-primary-lighter', newColor);
}

let listeners = [];

const addListener = (listener) => {
  listeners.push(listener);
};

const removeListener = (listener) => {
  listeners = listeners.filter((lis) => lis !== listener);
};

//global theme object for all wrapper instances
let themeOptions = {
  theme: boilerplateTheme,
};

//allows to update the global theme object and updates all wrapper instances with the new theme
//expects a function as a parameter, which itself expects the old theme as a parameter
const setThemeOptions = (callback) => {
  //the callback function is called and given the old theme as a parameter
  //the result of the callback function is saved in themeOptions (the new theme)
  themeOptions = callback(themeOptions);
  console.log('theme was updated');
  //each listener is a function which sets the theme in the state of its UXPinWrapper component to a given theme
  //each function (listener) is executed with the given theme as a parameter, so all UXPinWrapper instances are updated with the same theme
  listeners.forEach((listener) => {
    listener(themeOptions);
  });
};

export default function UXPinWrapper({ children }) {
  const [theme, setTheme] = React.useState(themeOptions);
  const color = getComputedStyle(document.documentElement).getPropertyValue('--color-primary-lighter');
  console.log('color!', color);

  React.useEffect(() => {
    //updates the component state to a given theme
    const onThemeChange = (newTheme) => {
      setTheme(newTheme);
    };

    setColor(theme.theme.colors.primary)
    console.log('uxpinWrapper-theme', theme);
    //the component adds a function to the listener array, which allows to update its state with a given theme
    addListener(onThemeChange);
    //the listener is removed when the component unmounts (is deleted from the canvas)
    return () => removeListener(onThemeChange);
  });

  return <ThemeContext.Provider value={[theme, setThemeOptions]}>{children}</ThemeContext.Provider>;
}
