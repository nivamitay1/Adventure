import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TimeSlider from "./TimeSlider";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import styles from "./filter.module.css";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Sort from "./Sort";

export default function FilterDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <div className={styles.filterDialogWrap}>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          color: "white",
          fontWeight: 500,
          letterSpacing: "1px",
          fontFamily: "Lato",
          textTransform: "none",
        }}
        color="main"
        endIcon={<FilterAltIcon />}
        // size="large"
      >
        Filter
      </Button>{" "}
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Filters</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
            }}
          >
            <Sort />
            <List>
              <Typography id="outboundLabel">Outbound</Typography>

              <ListItem style={{ height: "100px", overflow: "hidden" }} divider>
                <TimeSlider labelId={"outboundLabel"} />
              </ListItem>
              <Typography id="returnLabel">Return</Typography>

              <ListItem style={{ height: "100px", overflow: "hidden" }} divider>
                <TimeSlider labelId={"returnLabel"} />
              </ListItem>
            </List>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Reset</Button>
          <Button onClick={handleClose}>Apply</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
