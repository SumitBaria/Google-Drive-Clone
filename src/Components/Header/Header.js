import { auth } from "../../firebase";
import React, { useEffect, useState } from "react";
import DriveImg from "../../Media/driveImage.png";
import "../../Styles/Header.css";

import Avatar from "@material-ui/core/Avatar";

import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import {
  Fade,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";

const Header = () => {
  const [userPic, setUserPic] = useState(auth.currentUser.photoURL);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // useEffect(() => {}, [auth.currentUser]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("Clicked");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    auth.signOut();
    localStorage.removeItem("User:");
    window.location.reload();
  };

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
        <div onClick={handleClick}>
          <Avatar src={userPic} alt="Image" />
        </div>
      </div>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        className="headerMenuContainer"
      >
        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText secondary="SignOut" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
