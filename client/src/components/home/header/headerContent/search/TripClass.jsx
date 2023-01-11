import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function TripClass({ tripClass, setTripClass, textFieldProps }) {
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-helper-label" {...textFieldProps}>
        Class
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={tripClass}
        label="Class"
        onChange={(e) => {
          setTripClass(e.target.value);
        }}
        {...textFieldProps}
      >
        <MenuItem value={"Economy"}>Economy</MenuItem>
        <MenuItem value={"Business"}>Business</MenuItem>
        <MenuItem value={"First-class"}>First-class</MenuItem>
      </Select>
    </FormControl>
  );
}
