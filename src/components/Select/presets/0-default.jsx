import * as React from 'react';
import Select from '../Select';
import MenuItem from '../../MenuItem/MenuItem';

export default (
  <Select uxpId="Select-1" value={["select"]}>
    <MenuItem uxpId="MenuItem-1" value="select">
      Select:
    </MenuItem>
    <MenuItem uxpId="MenuItem-2" value="developer">
      Software Developer
    </MenuItem>
    <MenuItem uxpId="MenuItem-3" value="designer">
      Designer
    </MenuItem>
    <MenuItem uxpId="MenuItem-4" value="other">
      Other
    </MenuItem>
  </Select>
);
