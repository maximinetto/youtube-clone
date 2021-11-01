import React, { useRef } from "react";
import classNames from "classnames";
import Icon, { ICONS_NAME } from "../Icons/Icon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import businessMan from "/businessman.svg";
import styles from "./_index.module.scss";

function Header({ sidebar, onToggleSidebar }) {
  const boxAnimationCloseButton = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classNames(styles.header)}>
      <div className={classNames(styles.headerLeftMenu)}>
        <button
          className={(styles.headerButtonMenu)}
          onClick={onToggleSidebar}
        >
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

      <form className={classNames(styles.headerForm)} onChange={handleSubmit}>
        <div className={classNames(styles.searchContainer)}>
          <input type="text" placeholder="Search" />
          <button
            className={classNames(
              styles.btn,
              styles.btnTransparent,
              styles.btnOverlay
            )}
            type="button"
          >
            <Icon name={ICONS_NAME.CLOSE} fill="white" width={22} height={22} />
            <div
              className="animation-close"
              ref={boxAnimationCloseButton}
            ></div>
          </button>
        </div>
        <button
          className={classNames(styles.btn, styles.btnThick)}
          type="submit"
        >
          <Icon
            name={ICONS_NAME.SEARCH}
            fill="white"
            width={22}
            height={22}
            className={classNames(styles.btnSearchIcon)}
          />
        </button>
        <button
          className={classNames(
            styles.btn,
            styles.btnRounded,
            styles.btnMarginLeft,
            styles.btnBlackSecondary
          )}
          type="button"
        >
          <Icon
            name={ICONS_NAME.VOICE}
            fill="white"
            width={22}
            height={22}
            className={classNames(styles.btnVoiceIcon)}
          />
        </button>
      </form>
      <div className={classNames(styles.headerIcons)}>
        <Icon name={ICONS_NAME.CREATE_VIDEO} height={24} fill="white" />
        <Icon name={ICONS_NAME.APPS} height={24} fill="white" />
        <Icon name={ICONS_NAME.NOTIFICATIONS} height={24} fill="white" />
        <img
          src={businessMan}
          alt="Avatar"
          width={32}
          height={32}
          className={classNames(styles.headerAvatar)}
        ></img>
      </div>
    </div>
  );
}

export default Header;
