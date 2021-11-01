import classNames from "classnames";
import React from "react";
import Icon, { ICONS_NAME } from "../Icons/Icon";
import styles from "./_index.module.scss";

function Sidebar({show}) {
  return (
    <nav className={classNames(styles.sidebar, {
        [styles.open]: show
    })}>
      <ul>
        <li className={classNames(styles.sidebarItem)}>
          <Icon name={ICONS_NAME.HOME} width={24} height={24} fill="white" />
          <span>Home</span>
        </li>
        <li className={classNames(styles.sidebarItem)}>
          <Icon name={ICONS_NAME.SUBCRIPTIONS} width={24} height={24} fill="white" />
          <span>Subscriptions</span>
        </li>
        <li className={classNames(styles.sidebarItem)}>
          <Icon name={ICONS_NAME.LIKED_VIDEOS} width={24} height={24} fill="white" />
          <span>Liked videos</span>
        </li>
        <li className={classNames(styles.sidebarItem)}>
          <Icon name={ICONS_NAME.HISTORY} width={24} height={24} fill="white" />
          <span>History</span>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
