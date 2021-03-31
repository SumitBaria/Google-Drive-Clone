import React from "react";
import DriveImg from "../../Media/driveImage.png";
import "../../Styles/Header.css";

import Avatar from "@material-ui/core/Avatar";

import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";

const Header = () => {
  return (
    <div className="headerWrepper">
      <div className="logoWrepper">
        <img src={DriveImg} alt="Logo Image" />
        <span>Drive</span>
      </div>
      <div className="searchBarWrepper">
        <div className="searchWrepper">
          <SearchIcon />
          <input type="text" placeholder="Search in Drive" />
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="headerIcons">
        <HelpOutlineIcon />
        <SettingsIcon />

        <AppsIcon />
        <Avatar src="" alt="Image" />
      </div>
    </div>
  );
};

export default Header;
