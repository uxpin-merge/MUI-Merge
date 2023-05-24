import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

function ColorComponent(props) {
  let { colorOption, colorTokensLink } = props;
  console.log(colorOption)

  async function getColorToken(colorTokensLink) {
    const response = await fetch(colorTokensLink);
    const jsonData = await response.json();
    getCategories(jsonData);
  }

  React.useEffect(() => {
    getColorToken(colorTokensLink);
  }, [colorTokensLink]);

  function getCategories(jsonData) {
    const categories = jsonData.map((data) => {
      return data.categories;
    });
    getColors(categories);
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
    populateColorProp(colorList);
  }

  function populateColorProp(colorList) {
    colorList.forEach((color) => {
      colorOption = [color.name, ...colorOption];
    });
    console.log(colorOption)
  }

  return <Box sx={{ backgroundColor: colorOption, height: 300, width: 300 }}>test</Box>;
}

ColorComponent.propTypes = {
  colorOption: PropTypes.oneOf([]),
  colorTokensLink: PropTypes.string,
};

ColorComponent.defaultProps = {
  colorTokensLink: 'https://designtokens.uxpin.com/designSystems/hash/0abe97cdf3c257f03814/data/json',
};

export default ColorComponent;
