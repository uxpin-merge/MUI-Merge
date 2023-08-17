import React from 'react';
import PropTypes from 'prop-types';
import BadgeM, { BadgeProps } from '@mui/material/Badge';

/**
 * @uxpindocurl https://mui.com/api/badge/
 */
function Badge(props: BadgeProps) {
  return <BadgeM {...props}/>
}

export default Badge;
