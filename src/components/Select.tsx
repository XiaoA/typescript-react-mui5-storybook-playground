import * as React from 'react';
import Box from '@mui/material/Box';
//import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ width: 150 }}>
      <FormControl fullWidth>
       
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={value}
          onChange={handleChange}
        >
          <MenuItem value={0}>Item One</MenuItem>
          <MenuItem value={1}>Item Two</MenuItem>
          <MenuItem value={2}>Item Three</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
