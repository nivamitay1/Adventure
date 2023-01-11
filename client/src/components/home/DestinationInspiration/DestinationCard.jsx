import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./destinationInspiration.module.css";

export default function DestinationCard({ destination }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        ":hover": {
          boxShadow: 10, // theme.shadows[10]
        },
      }}
    >
      <CardMedia
        component="img"
        height="230"
        image={destination.image}
        alt={destination.name}
        title={destination.name}
        className={styles.destinationImg}
      />
      <CardContent
        sx={{ height: 180, overflow: "hidden", whiteSpace: "pre-wrap" }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          align="center"
          color="main.main"
        >
          {destination.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {destination.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          color="main"
          sx={{
            color: "white",
          }}
          variant="contained"
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
