import React from "react";
import "./Home.css";
import Features from "./../../components/features/Features";
import Chart from "./../../components/Chart/Chart.jsx";
import { xAxisData } from "./../../datas";
import WidgetSm from "../../components/widgetSm/WidgetSm.jsx";
import WidgetLg from "../../components/widgetLg/WidgetLg";
export default function Home() {
  return (
    <div className="home">
      <Features></Features>
      {/* grid is for backgroung charts ///show chart value in background =>dataKey="Sale" // */}
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale"></Chart>
      <div className="homeWidgets">
        <WidgetSm> </WidgetSm>
        <WidgetLg> </WidgetLg>
      </div>
    </div>
  ); 
}
