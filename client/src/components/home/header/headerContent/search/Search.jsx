import React, { useState } from "react";
import From from "./From";
import Destination from "./Destination";
import DepartDate from "./DepartDate";
import ReturnDate from "./ReturnDate";
import TripClass from "./TripClass";
import SearchBtn from "./SearchBtn";
import styles from "./search.module.css";
import Typography from "@mui/material/Typography";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { add } from "date-fns";
import Errors from "./Errors";

export default function Search() {
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(
    add(new Date(), {
      days: 1,
    })
  );
  const [tripClass, setTripClass] = useState("Economy");
  const [errors, setErrors] = useState([]);

  const isSmallerXlScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("xl")
  );

  const textFieldProps = {
    size: isSmallerXlScreen ? "small" : "large",
    sx: { m: 1, minWidth: "90%" },
  };

  const searchParams = { from, destination, departDate, returnDate, tripClass };

  return (
    <div className={styles.formWrap}>
      <div className={styles.tab}>
        <div className={styles.tabContent}>
          <Typography
            variant="h5"
            className={styles.headline}
            sx={{ m: 1, minWidth: "90%" }}
          >
            Book Your Trip
          </Typography>

          <From from={from} setFrom={setFrom} textFieldProps={textFieldProps} />

          <Destination
            destination={destination}
            setDestination={setDestination}
            textFieldProps={textFieldProps}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DepartDate
              departDate={departDate}
              setDepartDate={setDepartDate}
              textFieldProps={textFieldProps}
              returnDate={returnDate}
              setReturnDate={setReturnDate}
            />
            <ReturnDate
              returnDate={returnDate}
              setReturnDate={setReturnDate}
              textFieldProps={textFieldProps}
              departDate={departDate}
            />
          </LocalizationProvider>

          <TripClass
            tripClass={tripClass}
            setTripClass={setTripClass}
            textFieldProps={textFieldProps}
          />
          <Errors errors={errors} />
          <SearchBtn searchParams={searchParams} setErrors={setErrors} />
        </div>
      </div>
    </div>
  );
}
