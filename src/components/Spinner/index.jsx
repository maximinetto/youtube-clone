import React from "react";
import styles from "./_index.module.scss";

export default function Spinner() {
  return (
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
