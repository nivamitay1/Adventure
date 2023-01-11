import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Sort() {
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value || "");
  };

  return (
    <FormControl sx={{ my: 2 }} fullWidth>
      <InputLabel id="sort-label">Sort</InputLabel>
      <Select
        labelId="sort-label"
        id="sort-select"
        value={sort}
        onChange={handleChange}
        input={<OutlinedInput label="sort" />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"price"}>Price</MenuItem>
        <MenuItem value={"outbound"}>Outbound: Departure time</MenuItem>
        <MenuItem value={"return"}>Return: Departure time</MenuItem>
      </Select>
    </FormControl>
  );
}
