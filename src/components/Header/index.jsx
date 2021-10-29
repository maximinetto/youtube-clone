import React from "react";
import Icon, { ICONS_NAME } from "../Icons/Icon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import businessMan from "/businessman.svg";
import "./_index.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__left-menu">
        <Icon name={ICONS_NAME.HAMBURGER} width={24} height={24} fill="white" className="header__menu" />
        <YoutubeIcon width={90} height={20} fi className="header__logo" />
      </div>
      
      <form className="header__form">
        <input type="text" placeholder="Search" />
        <button className="btn btn--thick" type="submit">
          <Icon name={ICONS_NAME.SEARCH} fill="white" width={22} height={22} className="btn__search-icon" />
        </button>
        <button className="btn btn--rounded btn--margin-left btn--black-secondary">
          <Icon name={ICONS_NAME.VOICE} fill="white" width={22} height={22} className=" btn__voice-icon" />
        </button>
      </form>
      <div className="header__icons">
        <Icon name={ICONS_NAME.CREATE_VIDEO} height={24} fill="white" />
        <Icon name={ICONS_NAME.APPS} height={24} fill="white" />
        <Icon name={ICONS_NAME.NOTIFICATIONS} height={24} fill="white" />
        <img
          src={businessMan}
          alt="Avatar"
          width={32}
          height={32}
          className="header__avatar"
        ></img>
      </div>
    </div>
  );
}

export default Header;
