import React from 'react';
import PropTypes from 'prop-types';
import CardM from '@mui/material/Card';

/**
 * @uxpindocurl https://mui.com/api/card/
 */
function LoginForm(props) {
  return <CardM {...props}>{props.children}</CardM>;
}

LoginForm.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
};

export default LoginForm;
