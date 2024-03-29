import * as React from 'react';
import CheckboxGroup from '../CheckboxGroup';
import Checkbox from '../../Checkbox/Checkbox';
import CheckboxWithLabel from '../../CheckboxWithLabel/CheckboxWithLabel';

export default (
  <CheckboxGroup uxpId="3" name="checkbox-group" grouplabel="Favorite Colors">
    <CheckboxWithLabel value="red" control={<Checkbox uxpId="checkbox1" />} label="Red" uxpId="FormControlLabel1" />
    <CheckboxWithLabel
      value="blue"
      control={<Checkbox uxpId="checkbox2" />}
      label="Blue"
      uxpId="FormControlLabel2"
      // checked={false}
    />
    <CheckboxWithLabel
      value="yellow"
      control={<Checkbox uxpId="checkbox3" />}
      label="Yellow"
      uxpId="FormControlLabel3"
      // checked={false}
    />
    <CheckboxWithLabel
      value="disabled"
      disabled={true}
      control={<Checkbox uxpId="checkbox4" />}
      label="(Disabled option)"
      uxpId="FormControlLabel4"
      // checked={false}
    />
  </CheckboxGroup>
);
