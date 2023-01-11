import React from "react";
import { useSelector } from "react-redux";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import MyOrdersBtn from "./myOrdersBtn/MyOrdersBtn";
import Signout from "./signout/Signout";
import styles from "./navigation.module.css";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";

export default function Navigation() {
  const currentUser = useSelector((state) => state.authReducer);

  const loggedIn = () => {
    return (
      <ButtonGroup>
        <MyOrdersBtn />
        <Signout />
      </ButtonGroup>
    );
  };
  const notLoggedIn = () => {
    return (
      <ButtonGroup>
        <Signup />
        <Login />
      </ButtonGroup>
    );
  };

  return (
    <Container>
      <nav className={styles.nav}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <img src={"/assets/logo.png"} alt="Logo" />
          </Grid>
          <Grid item>{currentUser ? loggedIn() : notLoggedIn()}</Grid>
        </Grid>
      </nav>
    </Container>
  );
}
