import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import  ArrowDropDownIcon  from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps"
import NotificationIcon from "@material-ui/icons/Notifications"
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://www.amocrm.com/static/images/pages/integrations/logo/gmail.png"
          alt=""
        />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail"/>
        <ArrowDropDownIcon className="header_inputcaret" />
      </div>
      <div className="header_right">
      <IconButton>
        <AppsIcon />
      </IconButton>
      <IconButton>
        <NotificationIcon />
      </IconButton>
      <Avatar />
      </div>
    </div>
  );
}

export default Header;
