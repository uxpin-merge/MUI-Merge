import React from 'react';
import AutocompleteM, { AutocompleteProps } from '@mui/material/Autocomplete';
import TextField from '../TextField/TextField';

interface AutocompletePropsMerge< T,
Multiple extends boolean | undefined,
DisableClearable extends boolean | undefined,
FreeSolo extends boolean | undefined> extends Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {
  label?: string;
}
/**
 * @uxpindocurl https://mui.com/api/autocomplete/
 */
function Autocomplete< T,
Multiple extends boolean | undefined,
DisableClearable extends boolean | undefined,
FreeSolo extends boolean | undefined,>(props: AutocompletePropsMerge<T, Multiple, DisableClearable, FreeSolo> ) {
  const { label, ...moreProps } = props;
  return <AutocompleteM renderInput={(params) => <TextField {...params} label={label} />} {...moreProps}/>
}

export default Autocomplete;
