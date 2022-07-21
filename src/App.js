import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
export default function App() {
  let router = useRoutes(routes);
  return (
    <>
    <Topbar></Topbar>
    <div className="container">
        <Sidebar></Sidebar>
        {router}
    </div>
    </>
  ) 
  
}
