import React, { useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon, { ICONS_NAME } from "@/components/Icons/Icon";
import LeftMenu from "@/components/LeftMenu";
import styles from "@/components/Sidebar/_index.module.scss";

function Sidebar({ show, onToggleSidebar }) {
  const sidebarContainer = useRef();

  const handleClickContainer = (e) => {
    if (sidebarContainer.current === e.target) {
      onToggleSidebar(false);
    }
  };

  return (
    <div
      className={classNames(styles.sidebarContainer, {
        [styles.open]: show,
      })}
      onClick={handleClickContainer}
      ref={sidebarContainer}
    >
      <nav
        className={classNames(styles.sidebar, {
          [styles.open]: show,
        })}
      >
        <ul>
          <li className={classNames(styles.sidebarItem, styles.margin)}>
            <LeftMenu onToggleSidebar={onToggleSidebar} />
          </li>
          <li className={classNames(styles.sidebarItem, styles.background)}>
            <Icon
              name={ICONS_NAME.HOME}
              className={classNames(styles.sidebarItemLeftIcon)}
              width={24}
              height={24}
              fill="white"
            />
            <span>Home</span>
          </li>
          <li className={classNames(styles.sidebarItem, styles.background)}>
            <Icon
              name={ICONS_NAME.SUBCRIPTIONS}
              className={classNames(styles.sidebarItemLeftIcon)}
              width={24}
              height={24}
              fill="white"
            />
            <span>Subscriptions</span>
          </li>
          <li className={classNames(styles.sidebarItem, styles.background)}>
            <Icon
              name={ICONS_NAME.LIKED_VIDEOS}
              className={classNames(styles.sidebarItemLeftIcon)}
              width={24}
              height={24}
              fill="white"
            />
            <span>Liked videos</span>
          </li>
          <li className={classNames(styles.sidebarItem, styles.background)}>
            <Icon
              name={ICONS_NAME.HISTORY}
              className={classNames(styles.sidebarItemLeftIcon)}
              width={24}
              height={24}
              fill="white"
            />
            <span>History</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

Sidebar.propTypes = {
  show: PropTypes.bool.isRequired,
  onToggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
