import React, { useEffect, useState } from "react";
import FlightsList from "./flightsList/FlightsList";
import Filters from "./filters/Filters";
import FilterDialog from "./filters/FilterDialog";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import locations from "../locations.json";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from "./results.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Results() {
  let navigate = useNavigate();

  const [flights, setFlights] = useState([]);
  const [searchParams] = useSearchParams();

  const isBiggerMd = useMediaQuery("(min-width:900px)");

  const findLocationById = (locationId) => {
    let locationFound = null;
    locations.forEach((location) => {
      if (location.id === locationId) {
        locationFound = location;
      }
    });
    return locationFound;
  };

  const dialogOrSideFilter = () => {
    return isBiggerMd ? (
      <Grid item md={4} xl={3}>
        <Filters />
      </Grid>
    ) : (
      <Grid item xs={12}>
        <FilterDialog />
      </Grid>
    );
  };

  useEffect(() => {
    const getData = async () => {
      const params = {
        from: undefined,
        destination: undefined,
        departDate: undefined,
        returnDate: undefined,
        tripClass: undefined,
      };
      searchParams.forEach((value, key) => {
        params[key] = value;
      });
      params.from = findLocationById(params.from);
      params.destination = findLocationById(params.destination);
      if (Object.values(params).every((key) => key)) {
        try {
          const res = await axios.post(
            "http://localhost:8002/api/v1/trips/search",
            params,
            { withCredentials: true }
          );
          const data = await res.data;
          setFlights(data);
        } catch (error) {
          alert("Something went wrong");
          console.log(error.response.data.errors);
        }
      } else {
        navigate("/");
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.resultsWrap}>
      <Container>
        <Grid container mt={5} spacing={5}>
          {dialogOrSideFilter()}
          <Grid item md={8} xl={9}>
            <FlightsList flights={flights} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
