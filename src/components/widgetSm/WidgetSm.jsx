import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle"></span>
      <ul className="widgetSmList">
        <li className="widgetSmlistItem">
          {" "}
          <img src="images/4.jpg" alt="  widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">sam sloi</span>
            <span className="widgetSmUserTitle">Webentwicklwer</span>
          </div>
          <button className="widgetSmButton">
          <VisibilityIcon className="widgetSmicon"></VisibilityIcon>
          </button>
        </li>
      </ul>
    </div>
  );
}
