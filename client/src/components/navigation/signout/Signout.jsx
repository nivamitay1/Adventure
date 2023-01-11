import React from "react";
import styles from "./signout.module.css";
import Button from "@mui/material/Button";

export default function Signout() {
  return (
    <Button variant="text" id={styles.signoutBtn}>
      Signout
    </Button>
  );
}
