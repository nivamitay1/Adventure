import React from "react";
import DestinationCard from "./DestinationCard";
import Grid from "@mui/material/Grid";

export default function DestinationsList({ destinationsArr }) {
  return (
    <Grid container spacing={2}>
      {destinationsArr.map((destination, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DestinationCard destination={destination} />
          </Grid>
        );
      })}
    </Grid>
  );
}
