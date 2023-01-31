import React from 'react';
import TablePaginationM from '@mui/material/TablePagination';
import PropTypes from 'prop-types';

function TablePagination(props) {
  return <TablePaginationM {...props} />;
}

TablePagination.propTypes = {
  /**
   * Customize the rows per page label.
   * For localization purposes, you can use the provided translations.
   */
  labelRowsPerPage: PropTypes.node,

  /**
   *
   * If true, show the first-page button.
   */
  showFirstButton: PropTypes.bool,

  /**
   *
   * If true, show the first-page button.
   */
  showLastButton: PropTypes.bool,

  /**
   *  The total number of rows.
   *  To enable server side pagination for an unknown number of items, provide -1.
   */
  count: PropTypes.number,

  /**
   * The zero-based index of the current page.
   */
  page: PropTypes.number,

  /**
   * The number of rows per page.
   * Set -1 to display all the rows.
   */
  rowsPerPage: PropTypes.number,

  /**
   * The component used for displaying the actions. Either a string to use a HTML element or a component.
   */
  ActionsComponent: PropTypes.elementType,

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * Props applied to the back arrow IconButton component.
   */
  backIconButtonProps: PropTypes.object,

  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * Props applied to the next arrow IconButton element.
   */
  nextIconButtonProps: PropTypes.object,

  /**
   * Props applied to the rows per page Select element.
   */
  SelectProps: PropTypes.object,

  /**
   *  Callback fired when the page is changed.
   *   Signature:
   *   function(event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void
   *  event: The event source of the callback.
   *   page: The page selected.
   */
  onPageChange: PropTypes.func,

  /**
   * Customize the displayed rows label. Invoked with a { from, to, count, page } object.
   * For localization purposes, you can use the provided translations.
   */
  labelDisplayedRows: PropTypes.func,

  /**
   * Callback fired when the number of rows per page is changed.
   * Signature:
   * function(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
   * event: The event source of the callback.
   */
  onRowsPerPageChange: PropTypes.func,

  /**
   * [10, 25, 50, 100]
   * Customizes the options of the rows per page select field. If less than two options are available, no select field will be displayed. Use -1 for the value with a custom label to show all the rows.
   */
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),

  /**
   *
   * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
   */
  sx: PropTypes.object,
};

export default TablePagination;
