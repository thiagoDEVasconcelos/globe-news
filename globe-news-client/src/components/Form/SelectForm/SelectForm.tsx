import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const SelectForm = () => {
  const [theme, setTheme] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setTheme(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 265 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={theme}
          label="Categorias"
          onChange={handleChange}
        >
          <MenuItem value={10}>Esportes</MenuItem>
          <MenuItem value={20}>Culinária</MenuItem>
          <MenuItem value={30}>Jogos</MenuItem>
        </Select>
      </FormControl>
    </Box>
  ) 
}

export default SelectForm;