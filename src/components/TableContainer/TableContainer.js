import React from 'react';
import PropTypes from 'prop-types';
import TableContainerM from '@mui/material/TableContainer';

/**
 * @uxpindocurl https://mui.com/api/table-container/#main-content
 * @uxpindescription Tables display sets of data. They can be fully customized.
 */
function TableContainer(props) {
  return <TableContainerM {...props}>{props.children}</TableContainerM>;
}

TableContainer.propTypes = {
  /**
   * The content of the component, normally Table.
   * */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * */
  classes: PropTypes.object,
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   * */
  component: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * */
  sx: PropTypes.object,
};

export default TableContainer;
