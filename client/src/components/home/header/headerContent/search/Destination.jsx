import React, { useState } from "react";
import { locationAutoComplete } from "./searchUtils";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function Destination({
  destination,
  setDestination,
  textFieldProps,
}) {
  const [suggestionsArr, setSuggestionsArr] = useState([]);
  const [inputVal, setInputVal] = useState("");

  return (
    <>
      <Autocomplete
        disablePortal
        autoSelect
        id="combo-box-demo"
        options={suggestionsArr}
        filterOptions={(option) => option}
        onInputChange={(e) => {
          locationAutoComplete(e.target.value, setInputVal, setSuggestionsArr);
        }}
        onChange={(event, value) => setDestination(value)}
        {...textFieldProps}
        renderOption={(props, option) => {
          return (
            <React.Fragment key={`${option.name}_(${option.code})`}>
              <li {...props}>
                <div>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                  >{`${option.name} (${option.code})`}</Typography>
                  <Typography variant="body2"> {option.country}</Typography>
                </div>
              </li>
              <Divider />
            </React.Fragment>
          );
        }}
        renderInput={(params) => (
          <TextField label="Destination" value={inputVal} {...params} />
        )}
      />
    </>
  );
}
