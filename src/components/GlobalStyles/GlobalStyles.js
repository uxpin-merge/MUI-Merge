import React from 'react';
import PropTypes from 'prop-types';

// Helper function to convert camelCase to kebab-case
const toKebabCase = (str) => str.replace(/([A-Z])/g, '-$1').toLowerCase();

function GlobalStyles({ styles }) {
  // Convert the CSS object into a valid CSS string
  const cssString = Object.entries(styles)
    .map(([selector, styleObj]) => {
      const styleString = Object.entries(styleObj)
        .map(([property, value]) => `${toKebabCase(property)}: ${value};`)
        .join(' ');
      return `${selector} { ${styleString} }`;
    })
    .join(' ');

  return (
    <>
      <style>{cssString}</style>
      <div
        style={{
          width: '160px',
          color: 'white',
          textAlign: 'center',
          background: '#2E7D32',
          borderRadius: 10,
          padding: '20px',
        }}
      >
        <strong>GlobalStyles:</strong>
        <br />
        Please move this <br />
        marker offscreen
      </div>
    </>
  );
}

GlobalStyles.propTypes = {
  /**
   * CSS to inject directly at the point of the component in the DOM.
   * Example: { ".my-class": { padding: "20px", backgroundColor: "blue" } }
   */
  styles: PropTypes.object.isRequired,
};

export default GlobalStyles;
