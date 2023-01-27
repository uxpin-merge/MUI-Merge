import * as React from 'react';
import PropTypes from 'prop-types';
import { DataGrid as DataGridM } from '@mui/x-data-grid';

function DataGrid(props) {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGridM
        {...props}
        aria-label={props.ariaLabel}
        aria-labelledby={props.ariaLabelLedBy}/>
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

  ariaLabel: PropTypes.string,

  ariaLabelLedBy: PropTypes.string,

  autoHeight: PropTypes.bool,

  autoPageSize: PropTypes.bool,

  cellModesModel: PropTypes.object,

  checkboxSelection: PropTypes.bool,

  classes: PropTypes.object,

  columnBuffer: PropTypes.number,

  columnThreshold: PropTypes.number,

  columnTypes: PropTypes.object,

  columnVisibilityModel: PropTypes.object,

  components: PropTypes.object,

  componentsProps: PropTypes.object,

  density: PropTypes.oneOf(['comfortable', 'compact', 'standard']),

  disableColumnFilter: PropTypes.bool,

  disableColumnMenu: PropTypes.bool,

  disableColumnSelector: PropTypes.bool,

  disableDensitySelector: PropTypes.bool,

  disableExtendRowFullWidth: PropTypes.bool,

  disableIgnoreModificationsIfProcessingProps: PropTypes.bool,

  disableSelectionOnClick: PropTypes.bool,

  disableVirtualization: PropTypes.bool,

  editMode: PropTypes.oneOf(['cell', 'row']),

  editRowsModel: PropTypes.object,

  error: PropTypes.string,

  headerHeight: PropTypes.number,

  hideFooter: PropTypes.bool,

  hideFooterPagination: PropTypes.bool,

  hideFooterSelectedRowCount: PropTypes.bool,

  initialState: PropTypes.object,

}

export default DataGrid;