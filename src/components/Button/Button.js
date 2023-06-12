import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return <button className="my-button" {...props}></button>;
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
