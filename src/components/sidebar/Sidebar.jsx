import React from 'react'
import "./Sidebar.css"
import LineStyleIcon from "@mui/icons-material/LineStyle"
import TimelineIcon from "@mui/icons-material/Timeline "
import  TrendingUpIcon  from '@mui/icons-material/TrendingUp '
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                            <LineStyleIcon className="sidebarIcon "> </LineStyleIcon>
                            Home
                    </li>    
                    <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon "> </TimelineIcon>
                            Analytics
                    </li>    
                    <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon "> </TrendingUpIcon>
                            Sales
                    </li>    
                </ul> 
            </div>
        </div>
    </div>
  )
}
 