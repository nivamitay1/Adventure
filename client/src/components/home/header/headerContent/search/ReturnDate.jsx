import React from "react";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import TextField from "@mui/material/TextField";

export default function ReturnDate({
  returnDate,
  setReturnDate,
  textFieldProps,
  departDate,
}) {
  return (
    <MobileDatePicker
      label="Return Date"
      inputFormat="dd/MM/yyyy"
      value={returnDate}
      onChange={(val) => {
        setReturnDate(val);
      }}
      minDate={departDate}
      renderInput={(params) => <TextField {...textFieldProps} {...params} />}
    />
  );
}
