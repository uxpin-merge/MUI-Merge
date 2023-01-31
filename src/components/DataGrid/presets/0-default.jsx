import React from 'react';
import DataGrid from '../DataGrid';

const rows = [
    { id: 1, col1: 'Hello', col2: 'World', col3: 'is here' },
    { id: 2, col1: 'DataGrid', col2: 'is Awesome', col3: 'with UXPin' },
    { id: 3, col1: 'MUI', col2: 'is Amazing', col3: 'with UXPin' },
];

const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
    { field: 'col3', headerName: 'Column 3', width: 150 },

];

export default (
    <DataGrid
        uxpId='data-grid'
        columns={columns}
        rows={rows}
        sx={{ height: '350px', width: '500px'}}
        />
);