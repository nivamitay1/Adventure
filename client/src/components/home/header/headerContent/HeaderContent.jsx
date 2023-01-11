import React from "react";
import Search from "./search/Search";
import styles from "./headerContent.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";

export default function HeaderContent() {
  const isSmallerMdScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  const typographyProps = {
    variant: isSmallerMdScreen ? "h4" : "h2",
    fontFamily: "Karla",
  };

  return (
    <>
      <div className={styles.bg}></div>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className={styles.headerContent}
        >
          <Grid item xs={12} md={6}>
            <Typography {...typographyProps} className={styles.moto}>
              Let The Adventure Begin{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Search />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
