import React from "react";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import TextField from "@mui/material/TextField";
import { add } from "date-fns";

export default function DepartDate({
  departDate,
  setDepartDate,
  textFieldProps,
  returnDate,
  setReturnDate,
}) {
  const handleChange = (val) => {
    if (returnDate < departDate) {
      setDepartDate(val);
      setReturnDate(
        add(departDate, {
          days: 1,
        })
      );
    } else {
      setDepartDate(val);
    }
  };
  return (
    <MobileDatePicker
      label="Depart Date"
      inputFormat="dd/MM/yyyy"
      value={departDate}
      onChange={(val) => {
        handleChange(val);
      }}
      disablePast
      renderInput={(params) => <TextField {...textFieldProps} {...params} />}
    />
  );
}
