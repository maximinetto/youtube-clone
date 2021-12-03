import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "@/components/Spinner/_index.module.scss";

function Spinner({ size, borderWidth }) {
  useEffect(() => {
    if (size) {
      Number.isInteger =
        Number.isInteger ||
        function (value) {
          return (
            typeof value === "number" &&
            isFinite(value) &&
            Math.floor(value) === value
          );
        };
      const sizeString = Number.isInteger(size) ? `${size}px` : size;
      document.documentElement.style.setProperty(
        "--spinner-size",
        `${sizeString}`
      );
    }
  }, [size]);

  useEffect(() => {
    if (borderWidth) {
      document.documentElement.style.setProperty(
        "--spinner-border-width",
        `${borderWidth}px`
      );
    }
  }, [borderWidth]);

  return (
    <div className={styles.ldsRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderWidth: PropTypes.number,
};

export default Spinner;
