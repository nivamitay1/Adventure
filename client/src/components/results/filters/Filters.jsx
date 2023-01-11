import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import TimeSlider from "./TimeSlider";
import Sort from "./Sort";

const drawerWidth = 240;

export default function Filters() {
  const [value, setValue] = useState([0, 24]);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        borderRight: "0px",
        "& .MuiDrawer-root": {
          position: "relative",
        },
        "& .MuiPaper-root": {
          width: drawerWidth,

          position: "relative",
        },
      }}
      PaperProps={{
        sx: { borderRight: "0px", backgroundColor: "transparent" },
      }}
      variant="permanent"
    >
      <Sort />

      <List>
        <Typography id="outboundLabel">Outbound</Typography>

        <ListItem style={{ height: "100px", overflow: "hidden" }} divider>
          <TimeSlider
            value={value}
            setValue={setValue}
            labelId={"outboundLabel"}
          />
        </ListItem>
        <Typography id="returnLabel">Return</Typography>

        <ListItem style={{ height: "100px", overflow: "hidden" }} divider>
          <TimeSlider
            value={value}
            setValue={setValue}
            labelId={"returnLabel"}
          />
        </ListItem>
      </List>
    </Drawer>
  );
}
