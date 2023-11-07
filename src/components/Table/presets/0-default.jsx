import * as React from 'react';
import Table from '../Table';
import TableBody from '../../TableBody/TableBody';
import TableCell from '../../TableCell/TableCell';
import TableHead from '../../TableHead/TableHead';
import TableRow from '../../TableRow/TableRow';
import Typography from '../../Typography/Typography';

export default (
  <Table uxpId="Table-1">
    <TableHead uxpId="Table-Head-1">
      <TableRow uxpId="Table-Row-0">
        <TableCell uxpId="Table-Cell-0-0">
          <Typography variant="body2" fontWeight="bold" uxpId="typography-0" >Dessert (100g serving)</Typography>

        </TableCell>
        <TableCell uxpId="Table-Cell-0-1"><Typography variant="body2" fontWeight="bold" uxpId="typography-1" >Calories</Typography></TableCell>
        <TableCell uxpId="Table-Cell-0-2"><Typography variant="body2" fontWeight="bold" uxpId="typography-2" >Fat (g)</Typography></TableCell>
        <TableCell uxpId="Table-Cell-0-3"><Typography variant="body2" fontWeight="bold" uxpId="typography-3" >Carbs (g)</Typography></TableCell>
        <TableCell uxpId="Table-Cell-0-4"><Typography variant="body2" fontWeight="bold" uxpId="typography-4" >Protein (g)</Typography></TableCell>
      </TableRow>
    </TableHead>
    <TableBody uxpId="Table-Body-1">
      <TableRow uxpId="Table-Row-1">
        <TableCell uxpId="Table-Cell-1-0">Ice Cream</TableCell>
        <TableCell uxpId="Table-Cell-1-1">237</TableCell>
        <TableCell uxpId="Table-Cell-1-2">9</TableCell>
        <TableCell uxpId="Table-Cell-1-3">37</TableCell>
        <TableCell uxpId="Table-Cell-1-4">4.9</TableCell>
      </TableRow>
      <TableRow uxpId="Table-Row-2">
        <TableCell uxpId="Table-Cell-2-0">Cupcake</TableCell>
        <TableCell uxpId="Table-Cell-2-1">305</TableCell>
        <TableCell uxpId="Table-Cell-2-2">3.7</TableCell>
        <TableCell uxpId="Table-Cell-2-3">67</TableCell>
        <TableCell uxpId="Table-Cell-2-4">4.3</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
