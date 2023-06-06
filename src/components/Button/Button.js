import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../UXPinWrapper/UXPinWrapper';

function Button(props) {
  const themeContext = React.useContext(ThemeContext);
  const { theme } = themeContext[0];
  const { colors } = theme;
  console.log('colors', colors);
  return (
    <button
      {...props}
      style={{
        backgroundColor: colors[props.color],
        borderradius: '25px',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
        border: 'none',
        color: 'white',
        display: 'inline-block',
      }}
    >
      Button
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
