import { Checkbox, IconButton } from "@material-ui/core";
import {
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import React from "react";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import Section from "./Section";
function EmailList() {
  return (
    <div className="emaillist">
      <div className="emaillist_settings">
        <div className="emaillist_settingsleft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emaillist_settingsright">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emaillist_section">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emaillist_list">
        <EmailRow title="yt" subject="helloo" description="hii" time="9pm" />
      </div>
    </div>
  );
}

export default EmailList;
