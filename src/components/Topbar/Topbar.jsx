import React from 'react'
import "./Topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper"> 
            <div className="topLeft"><span className="logo">RUNLOS ** </span></div>

            <div className="topRight">
              <div className="topbariconContainer">
                <NotificationsNoneIcon />
                <span className='topIconBadge'>2</span>
              </div>
              <div className="topbariconContainer">
                <LanguageIcon />
                <span className='topIconBadge'>2</span>
              </div>
              <div className="topbariconContainer">
                <SettingsIcon />
              </div>
              <img src="./../images/npm.png" alt="" />
            </div>
        </div>
    </div>
  )
}
