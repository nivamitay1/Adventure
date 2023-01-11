import React from "react";
import Grid from "@mui/material/Grid";
import FlightCard from "./flightCard/FlightCard";

export default function FlightsList({ flights }) {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={5}>
      {flights.map((flight) => {
        return (
          <Grid item xs={12} md={10} key={flight._id}>
            <FlightCard flight={flight} />
          </Grid>
        );
      })}
    </Grid>
  );
}
