import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function FilterDropdown(props) {
    const [pFilter, setPFilter] = React.useState('Default');

    const handleChangeFilter = event => {
      setPFilter(event.target.value);
    };
  
        return (
            <FormControl className="productFilter">
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={pFilter}
              onChange={handleChangeFilter}
            >
              <MenuItem value="Default">
                <em>For Whom</em>
              </MenuItem>
              <MenuItem value="men">Men</MenuItem>
              <MenuItem value="women">Women</MenuItem>
              <MenuItem value="girl">Girl</MenuItem>
            </Select>
          </FormControl>
        );
    
}
