import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styles from "./flightCard.module.css";
import FlightInformation from "./FlightInformation";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";

export default function FlightCard({ flight }) {
  return (
    <Box component={"div"}>
      <Paper
        elevation={0}
        className={styles.flightCard}
        sx={{
          borderRadius: ".500rem",
          ":hover": {
            boxShadow: 5, // theme.shadows[5]
          },
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={9} className={styles.firstGridItem}>
            <div className={styles.flightInformationWrap}>
              <div className={styles.flightInformation}>
                <FlightInformation
                  date={flight.departDate}
                  fromCode={flight.from.code}
                  destinationCode={flight.destination.code}
                  duration={flight.duration}
                />
                <FlightInformation
                  date={flight.returnDate}
                  fromCode={flight.destination.code}
                  destinationCode={flight.from.code}
                  duration={flight.duration}
                />
              </div>
            </div>
            <div className={`${styles.divider} ${styles.cardPunchline}`}>
              <div className={`${styles.cardNotchs} ${styles.notchTop}`}></div>
              <div
                className={`${styles.cardNotchs} ${styles.notchBottom}`}
              ></div>
            </div>
          </Grid>

          <Grid item xs={12} sm={3} className={styles.priceGridItem}>
            <div className={styles.cardStub}>
              <Typography variant="h6">{flight.price}$</Typography>
              <div className={styles.availableSits}>
                <Typography variant="body2" color={"text.secondary"} my={1}>
                  {flight.availableSits} Sits Left
                </Typography>
              </div>
              <Button
                color="main"
                sx={{ color: "white", fontWeight: 700, fontFamily: "Lato" }}
                variant="contained"
              >
                Select <ArrowForwardIcon color="white" />
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
