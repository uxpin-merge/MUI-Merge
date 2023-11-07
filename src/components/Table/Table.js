import React from 'react';
import PropTypes from 'prop-types';
import TableM from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

/**
 * @uxpindocurl https://mui.com/components/tables/#main-content
 * @uxpindescription Tables display sets of data. They can be fully customized.
 */
function Table(props) {
  return (
    <TableContainer>
      <TableM {...props}>{props.children}</TableM>
    </TableContainer>
  );
}

Table.propTypes = {
  /**
   * The content of the component, normally TableRow.
   * */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See CSS API below for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.string,

  /**
   * Allows TableCells to inherit padding of the Table.
   */
  padding: PropTypes.oneOf(['checkbox', 'none', 'normal']),

  /**
   * Allows TableCells to inherit size of the Table.
   */
  size: PropTypes.oneOf(['small', 'medium']),

  /**
   * Set the header sticky.
   * ⚠️ It doesn't work with IE11.
   */
  stickyHeader: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * See the `sx` page for more details.
   */
  sx: PropTypes.object,
};

export default Table;
