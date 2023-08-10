import React from 'react';
import PropTypes from 'prop-types';
import ToolbarM, { ToolbarProps } from '@mui/material/Toolbar';

/**
 * @uxpindocurl https://mui.com/api/toolbar/
 */
function Toolbar(props: ToolbarProps) {
  return (
    <ToolbarM {...props} />
  );
}

export default Toolbar;
