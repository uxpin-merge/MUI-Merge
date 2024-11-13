import React from 'react';
import PropTypes from 'prop-types';

function GlobalStyles({ styles }) {
  // Convert the CSS object into a valid CSS string
  const cssString = Object.entries(styles)
    .map(([selector, styles]) => {
      const styleString = Object.entries(styles)
        .map(([property, value]) => `${property}: ${value};`)
        .join(' ');
      return `${selector} { ${styleString} }`;
    })
    .join(' ');

  return (
    <>
      <style>{cssString}</style>
      <div //A visual aid for the designer to see in UXPin
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
   */
  styles: PropTypes.object,
};

export default GlobalStyles;
