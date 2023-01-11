import React from "react";
import styles from "./signup.module.css";
import Button from "@mui/material/Button";

export default function Signup() {
  return (
    <Button variant="text" id={styles.signupBtn}>
      Signup
    </Button>
  );
}
