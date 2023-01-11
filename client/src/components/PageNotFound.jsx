import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main style={{ padding: "1rem", textAlign: "center" }}>
      <Typography variant="h4" component="h1">
        Page not found
      </Typography>
      <Typography variant="h6" component="h3" marginY={5}>
        With Adventure you can go anywhere. But first you need to go back to the
        homepage.
      </Typography>
      <Button
        color="main"
        component={Link}
        to="/"
        sx={{
          color: "white",
        }}
        variant="contained"
      >
        Go Back
      </Button>
    </main>
  );
}
