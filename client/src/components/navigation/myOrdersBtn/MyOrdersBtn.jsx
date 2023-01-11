import React from "react";
import styles from "./myOrdersBtn.module.css";
import Button from "@mui/material/Button";

export default function MyOrdersBtn() {
  return (
    <Button variant="text" id={styles.myOrdersBtn}>
      My Orders
    </Button>
  );
}
