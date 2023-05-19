import React from 'react';
import PropTypes from 'prop-types';

function TokensComponent(props) {
  const [colorList, setColorList] = React.useState([]);
  const { url } = props;

  async function getData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    getCategories(jsonData);
  }

  React.useEffect(() => {
    getData(url);
  }, [url]);

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
    setColorList(colorList);
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
  return <div style={{ display: 'grid' }}>{renderColorsList(colorList)}</div>;
}

TokensComponent.propTypes = {
  url: PropTypes.string,
};

TokensComponent.defaultProps = {
  url: 'https://designtokens.uxpin.com/designSystems/hash/0abe97cdf3c257f03814/data/json',
};

export default TokensComponent;
