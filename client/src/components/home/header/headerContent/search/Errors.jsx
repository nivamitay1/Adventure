import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";

export default function Errors({ errors }) {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  useEffect(() => {
    if (errors.length > 0) {
      setOpen(true);
    }
  }, [errors]);

  return (
    <Stack>
      {errors.map((error, index) => {
        console.log(error);
        return (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            TransitionComponent={Slide}
            key={index}
          >
            <Alert variant="filled" severity="error" sx={{ width: "300px" }}>
              {error.message}
            </Alert>
          </Snackbar>
        );
      })}
    </Stack>
  );
}
