import React, { useCallback, useEffect, useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon, { ICONS_NAME } from "@/components/Icons/Icon";
import styles from "@/components/Header/_index.module.scss";
import LeftMenu from "@/components/LeftMenu";
import Avatar from "@/components/Avatar";
import useResizeObserver from "@/hooks/useResizeObserver";

const Header = React.forwardRef(
  ({ onToggleSidebar, onToggleButtonProfile }, ref) => {
    const boxAnimationCloseButton = useRef();
    const headerRef = useRef();

    const setWidthHeader = useCallback(() => {
      const header = headerRef.current;
      const height = header.offsetHeight;
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
      );
    }, []);

    useEffect(() => {
      setWidthHeader();
    }, [setWidthHeader]);

    const width = (entry, observer) => {
      setWidthHeader();
    };

    useResizeObserver(headerRef, width);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <div className={classNames(styles.header)} ref={headerRef}>
        <LeftMenu onToggleSidebar={onToggleSidebar} />
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
              <Icon
                name={ICONS_NAME.CLOSE}
                fill="white"
                width={22}
                height={22}
              />
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
          <button
            className={classNames(styles.button, styles.buttonWithoutStyle)}
            onClick={onToggleButtonProfile}
            ref={ref}
          >
            <Avatar />
          </button>
        </div>
      </div>
    );
  }
);

Header.displayName = "Header";

Header.propTypes = {
  onToggleSidebar: PropTypes.func,
  onToggleButtonProfile: PropTypes.func,
};

export default Header;
