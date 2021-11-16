import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ProfileDropdown from "../ProfileDropdown";
import Header from "../Header";
import Sidebar from "../Sidebar";
import styles from "../../_app.module.scss";

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [openMenuProfile, setOpenMenuProfile] = useState(false);

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
        <Sidebar show={sidebar} onToggleSidebar={handleToggleSidebar} />
        <div className={classNames(styles.appMain)}>{children}</div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
