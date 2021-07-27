import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import "./EmailRow.css";
function EmailRow({ id, time, description, subject, title }) {
    const history = useHistory()

  return (
    <div  onClick={() => history.push("/mail")} className="emailrow">
      <div className="emailrow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailrow_title">{title}</h3>
      <div className="emailrow_message">
        <h4>
          {subject}
          {"  "}
          <span className="emailrow_description"> - {description}</span>
        </h4>
      </div>
      <p className="emailrow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
