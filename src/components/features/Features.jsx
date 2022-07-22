import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./Features.css"
export default function features() {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">$3.233</span>
          <span className="featureRate">
            -11.2<ArrowDownwardIcon className="featureIcon negative"></ArrowDownwardIcon>
          </span>
        </div>
        <span className="featureSub">Lorem ipsum dolor sit amd </span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Sales</span>
        <div className="featureContainer">
          <span className="featureMoney">$3.233</span>
          <span className="featureRate">
            -1.4<ArrowDownwardIcon className="featureIcon negative"></ArrowDownwardIcon>
          </span>
        </div>
        <span className="featureSub">Lorem ipsum dolor sit amd </span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Cost</span>
        <div className="featureContainer">
          <span className="featureMoney">$3.233</span>
          <span className="featureRate">
            +2.4<ArrowUpwardIcon className="featureIcon "></ArrowUpwardIcon>
          </span>
        </div>
        <span className="featureSub">Lorem ipsum dolor sit amd </span>
      </div>
    </div>
  );
}
