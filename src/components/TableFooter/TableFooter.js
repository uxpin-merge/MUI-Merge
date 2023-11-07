import React from 'react';
import PropTypes from 'prop-types';
import TableFooterM from '@mui/material/TableFooter';

/**
 * @uxpindocurl https://mui.com/api/table-footer/
  * @uxpindescription Tables display sets of data. They can be fully customized.
 */
function TableFooter(props) {
  return <TableFooterM {...props}>{props.children}</TableFooterM>;
}

TableFooter.propTypes = {
  /**
   * The content of the component, normally TableRow.
   * */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See CSS API below for more details.
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details.
   */
  sx: PropTypes.object,
};

export default TableFooter;
