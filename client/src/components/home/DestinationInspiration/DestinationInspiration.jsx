import React from "react";
import Container from "@mui/material/Container";
import styles from "./destinationInspiration.module.css";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import DestinationsList from "./DestinationsList";
import inspirationArrs from "./inspirationArrs.json";

export default function DestinationInspiration() {
  const isSmallerMdScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  const typographyProps = {
    variant: isSmallerMdScreen ? "h4" : "h3",
    fontFamily: "Karla",
    my: 10,
    component: "h2",
    align: "center",
  };

  return (
    <Container>
      <Typography {...typographyProps} gutterBottom>
        Most Popular Destination
      </Typography>
      <DestinationsList destinationsArr={inspirationArrs.popularDestinations} />
      <Typography {...typographyProps} gutterBottom>
        Our Recommendation
      </Typography>
      <DestinationsList destinationsArr={inspirationArrs.ourRecommendation} />
    </Container>
  );
}
