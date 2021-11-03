import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon, { ICONS_NAME } from "../Icons/Icon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import styles from "./_index.module.scss";

function LeftMenu({ onToggleSidebar }) {
  return (
    <div className={classNames(styles.headerLeftMenu)}>
      <button className={styles.headerButtonMenu} onClick={onToggleSidebar}>
        <Icon
          name={ICONS_NAME.HAMBURGER}
          width={24}
          height={24}
          fill="white"
          className={classNames(styles.headerMenu)}
        />
      </button>

      <YoutubeIcon
        width={90}
        height={20}
        className={classNames(styles.headerLogo)}
      />
    </div>
  );
}

LeftMenu.propTypes = {
  onToggleSidebar: PropTypes.func,
};

export default LeftMenu;
