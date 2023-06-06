import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../UXPinWrapper/UXPinWrapper';

function ThemeCustomizer(props) {
  const [colorList, setColorList] = React.useState([]);
  const [newThemeObject, setNewThemeObject] = React.useState({});
  const [themeOptions, setThemeOptions] = React.useContext(ThemeContext);
  const { url } = props;

  // async function getData(url) {
  //   const response = await fetch(url);
  //   const jsonData = await response.json();
  //   setNewThemeObject((prevNewThemeObject) => ({ ...prevNewThemeObject, ...getCategories(jsonData) }));
  // }

  React.useEffect(() => {
    async function getData(url) {
      const response = await fetch(url);
      const jsonData = await response.json();
      // setNewThemeObject((prevNewThemeObject) => ({ ...prevNewThemeObject, ...getCategories(jsonData) }));
      setThemeOptions((oldTheme) => {
        return {
          theme: getCategories(jsonData),
        };
      });
    }
    getData(url);
  }, [url]);

  function getCategories(jsonData) {
    const categories = jsonData.map((data) => {
      return data.categories;
    });
    getColors(categories);
    return createThemeObject(categories[0]);
  }

  function getColors(categories) {
    let colorList = [];
    categories.forEach((category) => {
      category.forEach((details) => {
        details.items.forEach((item) => {
          colorList = [item, ...colorList];
        });
      });
    });
    setColorList(colorList);
  }

  function createThemeObject(colorList) {
    let newTheme = {
      colors: {
        primary: '',
        secondary: '',
      },
    };

    colorList.forEach((list) => {
      if (list.name === 'primary') {
        newTheme.colors.primary = parseItems(list.items);
      } else {
        newTheme.colors.secondary = parseItems(list.items);
      }
    });
    return newTheme;
  }

  function parseItems(items) {
    let newItems = {};
    items.forEach((item) => {
      newItems = item.value;
    });

    return newItems;
  }

  function renderColorsList(colors) {
    return (
      <ul style={{ display: 'grid', gap: 10 }}>
        {colors.map((color, index) => (
          <li key={index} style={{ color: 'black', height: 60, width: 180, backgroundColor: color.value }}>
            {color.value}
            <br />
            {color.name}
          </li>
        ))}
      </ul>
    );
  }

  if (colorList.length <= 0) {
    return;
  }
  // TODO fix render loop coming from setThemeOptions
  if (newThemeObject && Object.keys(newThemeObject).length > 0) {
    // console.log('newThemeObject', newThemeObject)
    // setThemeOptions((oldTheme) => {
    //   return {
    //     theme: newThemeObject,
    //   };
    // });
  }

  return <div style={{ display: 'grid' }}>{renderColorsList(colorList)}</div>;
}

ThemeCustomizer.propTypes = {
  url: PropTypes.string,
};

ThemeCustomizer.defaultProps = {
  url: 'https://designtokens.uxpin.com/designSystems/hash/b77a174c703244d44ed9/data/json',
};

export default ThemeCustomizer;
