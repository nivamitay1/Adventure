import React from "react";
import styles from "./header.module.css";
import HeaderContent from "./headerContent/HeaderContent";

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderContent />
    </header>
  );
}
