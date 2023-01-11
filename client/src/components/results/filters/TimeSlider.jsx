import React, { useState } from "react";
import Slider from "@mui/material/Slider";

export default function TimeSlider({ labelId }) {
  const [value, setValue] = useState([0, 24]);

  return (
    <Slider
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      color="main"
      min={0}
      max={24}
      valueLabelDisplay={"auto"}
      aria-labelledby={labelId}
    />
  );
}
