import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./WidgetSm.css"
import {newMembers} from "./../../datas"
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Memeber</span>
      <ul className="widgetSmList">
      {newMembers.map((user)=>(

              <li key={user.id} className="widgetSmlistItem">
              <img src={user.img} className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUserName"> {user.username}</span>
                <span className="widgetSmUserTitle">{user.title}</span>
              </div>
              <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmicon"></VisibilityIcon>
              </button>
              </li> 

      ))}
          
      </ul>
    </div>
  ); 
}
