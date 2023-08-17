import React from 'react';
import PropTypes from 'prop-types';
import BottomNavigationActionM, { BottomNavigationActionProps } from '@mui/material/BottomNavigationAction';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants';

/**
 * @uxpindocurl https://mui.com/api/bottom-navigation-action/
 */
function BottomNavigationAction(props: BottomNavigationActionProps) {
  return <BottomNavigationActionM {...props} />;
}

export default BottomNavigationAction;
