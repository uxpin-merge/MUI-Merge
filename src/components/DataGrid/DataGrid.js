import { DataGrid as DataGridM } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import * as React from 'react';

/**
 * @upxindocurl https://mui.com/x/react-data-grid/components/
 * @uxpinwrappers
 */
function DataGrid(props) {
  const { uxpinRef, ...other } = props;

  // React.useEffect(() => {});
  React.useEffect(() => {}, [props]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <DataGridM {...other} ref={uxpinRef} aria-label={props.ariaLabel} />
    </div>
  );
}

DataGrid.propTypes = {
  /**
   * Set of columns of type GridColumns.
   */
  columns: PropTypes.array,

  /**
   * Set of rows of type GridRowsProp.
   */
  rows: PropTypes.arrayOf(PropTypes.object),

  /**
   * The label of the grid.
   */
  ariaLabel: PropTypes.string,

  /**
   * The id of the element containing a label for the grid.
   */
  ariaLabelLedBy: PropTypes.string,

  /**
   * If true, the grid height is dynamic and follow the number of rows in the grid.
   */
  autoHeight: PropTypes.bool,

  /**
   * If true, the pageSize is calculated according to the container size and the max number of rows to avoid rendering a vertical scroll bar.
   */
  autoPageSize: PropTypes.bool,

  /**
   * Controls the modes of the cells.
   */
  cellModesModel: PropTypes.object,
  /**
   * If true, the grid get a first column with a checkbox that allows to select rows.
   */
  checkboxSelection: PropTypes.bool,

  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   */
  classes: PropTypes.object,

  /**
   * Number of extra columns to be rendered before/after the visible slice.
   */
  columnBuffer: PropTypes.number,

  /**
   * Number of rows from the columnBuffer that can be visible before a new slice is rendered.
   */
  columnThreshold: PropTypes.number,

  /**
   * Number of rows from the rowBuffer that can be visible before a new slice is rendered.
   */
  rowThreshold: PropTypes.number,

  /**
   * Extend native column types with your new column types.
   */
  columnTypes: PropTypes.object,
  /**
   * Set the column visibility model of the grid. If defined, the grid will ignore the hide property in GridColDef.
   */
  columnVisibilityModel: PropTypes.object,

  /**
   * Overrideable components.
   */
  components: PropTypes.object,

  /**
   * Overrideable components props dynamically passed to the component at rendering.
   */
  componentsProps: PropTypes.object,

  /**
   * Set the density of the grid.
   */
  density: PropTypes.oneOf(['comfortable', 'compact', 'standard']),

  /**
   * If true, column filters are disabled.
   */
  disableColumnFilter: PropTypes.bool,

  /**
   * If true, the column menu is disabled.
   */
  disableColumnMenu: PropTypes.bool,

  /**
   * If true, hiding/showing columns is disabled.
   */
  disableColumnSelector: PropTypes.bool,

  /**
   * If true, the density selector is disabled.
   */
  disableDensitySelector: PropTypes.bool,

  /**
   * If true, rows will not be extended to fill the full width of the grid container.
   */
  disableExtendRowFullWidth: PropTypes.bool,

  /**
   * If true, modification to a cell will not be discarded if the mode is changed from "edit" to "view" while processing props.
   */
  disableIgnoreModificationsIfProcessingProps: PropTypes.bool,

  /**
   * If true, the selection on click on a row or cell is disabled.
   */
  disableSelectionOnClick: PropTypes.bool,

  /**
   * If true, the virtualization is disabled.
   */
  disableVirtualization: PropTypes.bool,

  /**
   * Controls whether to use the cell or row editing.
   */
  editMode: PropTypes.oneOf(['cell', 'row']),

  /**
   * Set the edit rows model of the grid.
   */
  editRowsModel: PropTypes.object,

  /**
   * An error that will turn the grid into its error state and display the error component.
   */
  error: PropTypes.string,

  /**
   * Set the height in pixel of the column headers in the grid.
   */
  headerHeight: PropTypes.number,

  /**
   * If true, the footer component is hidden.
   */
  hideFooter: PropTypes.bool,

  /**
   * If true, the pagination component in the footer is hidden
   */
  hideFooterPagination: PropTypes.bool,

  /**
   * If true, the selected row count in the footer is hidden.
   */
  hideFooterSelectedRowCount: PropTypes.bool,

  /**
   * The initial state of the DataGrid. The data in it will be set in the state on initialization but will not be controlled.
   * If one of the data in initialState is also being controlled, then the control state wins.
   */
  initialState: PropTypes.object,

  /**
   * The zero-based index of the current page.
   */
  page: PropTypes.number,

  /**
   * Set the number of rows in one page. If some of the rows have children (for instance in the tree data),
   * this number represents the amount of top level rows wanted on each page.
   */
  pageSize: PropTypes.number,

  /**
   * Number of extra rows to be rendered before/after the visible slice.
   */
  rowBuffer: PropTypes.number,

  /**
   * Set the total number of rows, if it is different from the length of the value rows prop. If some rows have children (for instance in the tree data), this number represents the amount of top level rows.
   */
  rowCount: PropTypes.number,
  /**
   * Select the pageSize dynamically using the component UI.
   */
  rowsPerPageOptions: PropTypes.array,

  /**
   * Set the height in pixel of a row in the grid.
   */
  rowHeight: PropTypes.number,

  /**
   * Override the height/width of the grid inner scrollbar.
   */
  scrollbarSize: PropTypes.number,

  /**
   * If true, the right border of the cells are displayed.
   */
  showCellRightBorder: PropTypes.bool,

  /**
   * If true, the right border of the column headers are displayed
   */
  showColumnRightBorder: PropTypes.bool,

  /**
   * The order of the sorting sequence.
   */
  sortingOrder: PropTypes.oneOf(['asc', 'desc']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
   */
  sx: PropTypes.object,

  /**
   * Callback fired when any cell is clicked.
   */
  onCellClick: PropTypes.func,

  /**
   * Callback fired when a double click event comes from a cell element.
   */
  onCellDoubleClick: PropTypes.func,

  /**
   * Callback fired when the cell changes are committed.
   */
  onCellEditCommit: PropTypes.func,

  /**
   * Callback fired when the cell turns to edit mode.
   */
  onCellEditStart: PropTypes.func,

  /**
   * Callback fired when the cell turns to view mode.
   */
  onCellEditStop: PropTypes.func,

  /**
   * Callback fired when a cell loses focus.
   */
  onCellFocusOut: PropTypes.func,

  /**
   * Callback fired when a keydown event comes from a cell element.
   */
  onCellKeyDown: PropTypes.func,

  /**
   * Callback fired when the cellModesModel prop changes.
   */
  onCellModesModelChange: PropTypes.func,

  /**
   * Callback fired when a click event comes from a column header element.
   */
  onColumnHeaderClick: PropTypes.func,

  /**
   * Callback fired when a double click event comes from a column header element.
   */
  onColumnHeaderDoubleClick: PropTypes.func,

  /**
   * Callback fired when a mouse enter event comes from a column header element.
   */
  onColumnHeaderEnter: PropTypes.func,

  /**
   * Callback fired when a mouse leave event comes from a column header element.
   */
  onColumnHeaderLeave: PropTypes.func,

  /**
   * Callback fired when a mouseout event comes from a column header element.
   */
  onColumnHeaderOut: PropTypes.func,

  /**
   * Callback fired when a mouseover event comes from a column header element.
   */
  onColumnHeaderOver: PropTypes.func,

  /**
   * Callback fired when a column is reordered.
   */
  onColumnOrderChange: PropTypes.func,

  /**
   * Callback fired when the column visibility model changes.
   */
  onColumnVisibilityModelChange: PropTypes.func,

  /**
   * Callback fired when the editRowsModel changes.
   */
  onEditRowsModelChange: PropTypes.func,

  /**
   * Callback fired when an exception is thrown in the grid.
   */
  onError: PropTypes.func,

  /**
   * Callback fired when the Filter model changes before the filters are applied.
   */
  onFilterModelChange: PropTypes.func,

  /**
   * Callback fired when the menu is closed.
   */
  onMenuClose: PropTypes.func,

  /**
   * Callback fired when the menu is opened.
   */
  onMenuOpen: PropTypes.func,

  /**
   * Callback fired when the current page has changed.
   */
  onPageChange: PropTypes.func,

  /**
   * Callback fired when the page size has changed.
   */
  onPageSizeChange: PropTypes.func,

  /**
   * Callback fired when the preferences panel is closed.
   */
  onPreferencePanelClose: PropTypes.func,

  /**
   * Callback fired when the preferences panel is opened.
   */
  onPreferencePanelOpen: PropTypes.func,

  /**
   * Callback called when processRowUpdate throws an error or rejects.
   */
  onProcessRowUpdateError: PropTypes.func,

  /**
   * Callback fired when the grid is resized.
   */
  onResize: PropTypes.func,

  /**
   * Callback fired when a row is clicked. Not called if the target clicked is an interactive element added by the built-in columns.
   */
  onRowClick: PropTypes.func,

  /**
   * Callback fired when a double click event comes from a row container element.
   */
  onRowDoubleClick: PropTypes.func,

  /**
   * Callback fired when the row changes are committed.
   */
  onRowEditCommit: PropTypes.func,

  /**
   * Callback fired when the row turns to edit mode.
   */
  onRowEditStart: PropTypes.func,

  /**
   * Callback fired when the row turns to view mode.
   */
  onRowEditStop: PropTypes.func,

  /**
   * Callback fired when the rowModesModel prop changes.
   */
  onRowModesModelChange: PropTypes.func,

  /**
   * Callback fired when the selection state of one or multiple rows changes.
   */
  onSelectionModelChange: PropTypes.func,

  /**
   * Callback fired when the sort model changes before a column is sorted.
   */
  onSortModelChange: PropTypes.func,

  /**
   * @uxpinignoreprop
   */
  uxpinRef: PropTypes.any,
};

export default DataGrid;
