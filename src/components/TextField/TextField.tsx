import React from 'react';
import PropTypes from 'prop-types';
import TextFieldM, { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants';

/**
 * @uxpindocurl https://mui.com/api/text-field/
 */
function TextField(props: TextFieldProps) {
  return <TextFieldM {...props}/>
}

export default TextField;
