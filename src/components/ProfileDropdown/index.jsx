import classNames from "classnames";
import React, { useRef } from "react";
import PropTypes from "prop-types";

import styles from "./_index.module.scss";
import Icon, { ICONS_NAME } from "../Icons/Icon";
import useAuth from "../../hooks/useAuth";
import DropdownItem from "../DropdrowItem";
import useClickOutside from "../../hooks/useClickOutside";
import Avatar from "../Avatar";

function ProfileDropdown({ openMenuProfile, onClickOutside, target }) {
  const { logout } = useAuth();
  const ref = useRef();
  useClickOutside({
    ref,
    handler: () => {
      onClickOutside(false);
    },
    targetException: target,
  });

  const handleLogout = () => {
    logout();
  };

  return (
    <ul
      className={classNames(styles.profile, {
        [styles.open]: openMenuProfile,
      })}
      ref={ref}
    >
      <DropdownItem>
        <Avatar text="Maximiliano Minetto" />
      </DropdownItem>
      <DropdownItem onClick={handleLogout}>
        <Icon name={ICONS_NAME.LOGOUT} height={24} width={24} fill="white" />
        <span className={classNames(styles.dropdownItemText)}>Sign out</span>
      </DropdownItem>
    </ul>
  );
}

ProfileDropdown.propTypes = {
  openMenuProfile: PropTypes.bool,
  onClickOutside: PropTypes.func,
  target: PropTypes.object,
};

export default ProfileDropdown;
