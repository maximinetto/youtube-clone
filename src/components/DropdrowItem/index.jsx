import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./_index.module.scss";

function DropdownItem({ children, onClick }) {
  return (
    <li className={classNames(styles.profileItem)}>
      <button
        className={classNames(styles.button, styles.buttonWithoutStyle)}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default DropdownItem;
