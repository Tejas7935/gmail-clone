import { Button, IconButton } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import {
  AccessTime,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
      >
        compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={54} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportant} title="Important" number={54} />
      <SidebarOption Icon={NearMe} title="Sent" number={54} />
      <SidebarOption Icon={Note} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMore} title="More" number={54} />
      <div className="sidebar_footer">
          <div className="sidebar_footericons">
              <IconButton>
                  <Person />
              </IconButton>
              <IconButton>
                  <Duo />
              </IconButton>
              <IconButton>
                  <Phone />
              </IconButton>
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
