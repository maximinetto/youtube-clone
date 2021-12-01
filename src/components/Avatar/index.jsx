import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import styles from "@/components/Avatar/_index.module.scss";
import businessMan from "/businessman.svg";

function Avatar({ width = 32, height = 32, className, text, ...props }) {
  return (
    <>
      <img
        src={businessMan}
        alt="Avatar"
        width={width}
        height={height}
        className={classNames(styles.avatar, className)}
        {...props}
      />
      {text && (
        <span className={classNames(styles.dropdownItemText)}>{text}</span>
      )}
    </>
  );
}

Avatar.propTypes = {
  width: PropTypes.number || PropTypes.string,
  height: PropTypes.number || PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Avatar;
