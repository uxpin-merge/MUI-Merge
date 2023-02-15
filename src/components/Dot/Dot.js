import PropTypes from 'prop-types';
import * as React from 'react';
import { Box, Stack } from '@mui/material';

function Dot(props) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Box
        sx={{
          width: props.size || 8,
          height: props.size || 8,
          borderRadius: '50%',
          bgcolor: props.color,
        }}
      />
      {props.children}
    </Stack>
  );
}

Dot.propTypes = {
  color: PropTypes.oneOf([
    'white',
    'grey.100',
    'grey.200',
    'grey.300',
    'grey.400',
    'grey.500',
    'primary.main',
    'primary.light',
    'primary.dark',
    'secondary.main',
    'secondary.light',
    'secondary.dark',
    'error.main',
    'warning.main',
    'info.main',
    'success.main',
    'text.primary',
    'text.secondary',
    'text.disabled',
    'red',
    'pink',
    'purple',
    'indigo',
    'blue',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'orange',
    'brown',
    'grey',
  ]),

  size: PropTypes.number,

  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,
};

export default Dot;
