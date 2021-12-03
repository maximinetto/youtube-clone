import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import ProfileDropdown from "@/components/ProfileDropdown";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import styles from "@/_app.module.scss";

const Layout = ({ children, alwaysVisible }) => {
  const [sidebar, setSidebar] = useState(() => alwaysVisible);
  const [openMenuProfile, setOpenMenuProfile] = useState(false);

  const handleMediaQueryChange = (matches) => {
    if (sidebar) {
      setSidebar(false);
    }
  };

  const isBiggerScreen = useMediaQuery(
    { query: "(min-width: 1500px)" },
    undefined,
    handleMediaQueryChange
  );

  const avatarRef = useRef();

  const handleToggleSidebar = () => setSidebar((value) => !value);
  const handleToggleMenuProfile = () => {
    setOpenMenuProfile(!openMenuProfile);
  };

  const handleOpenMenuProfile = (value) => {
    setOpenMenuProfile(value);
  };

  return (
    <>
      <Header
        onToggleSidebar={handleToggleSidebar}
        onToggleButtonProfile={handleToggleMenuProfile}
        ref={avatarRef}
      />
      <ProfileDropdown
        openMenuProfile={openMenuProfile}
        onClickOutside={handleOpenMenuProfile}
        target={avatarRef}
      />
      <div className={classNames(styles.appContainer)}>
        {!sidebar && (
          <Sidebar
            show={sidebar}
            onToggleSidebar={handleToggleSidebar}
            alwaysVisible={alwaysVisible}
          />
        )}
        {alwaysVisible && isBiggerScreen ? (
          <Sidebar
            show={sidebar}
            onToggleSidebar={handleToggleSidebar}
            alwaysVisible={true}
          />
        ) : (
          <Sidebar
            show={sidebar}
            alwaysVisible={false}
            onToggleSidebar={handleToggleSidebar}
          />
        )}
        <div className={classNames(styles.appMain)}>{children}</div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  alwaysVisible: PropTypes.bool,
};

export default Layout;
