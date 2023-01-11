import React from "react";
import styles from "./login.module.css";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <Button variant="text" id={styles.loginBtn}>
      Login
    </Button>
  );
}
