import * as React from 'react';
import RadioGroup from '../RadioGroup';
import Radio from '../../Radio/Radio';
import FormControlLabel from '../../FormControlLabel/FormControlLabel';

export default (
  <RadioGroup uxpId="RadioGroup" defaultValue="female" name="radio-group">
    <FormControlLabel uxpId="FormControlLabel-1" value="female" control={<Radio uxpId="radio-1" />} label="Female" />
    <FormControlLabel uxpId="FormControlLabel-2" value="male" control={<Radio uxpId="radio-2" />} label="Male" />
    <FormControlLabel uxpId="FormControlLabel-3" value="other" control={<Radio uxpId="radio-3" />} label="Other" />
  </RadioGroup>
);
