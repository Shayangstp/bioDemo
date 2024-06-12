import React from "react";
import { BedSvg } from "../assets/svg";

const HospitalBedDetail = ({ detail }) => {
  const midIndex = Math.ceil(detail.length / 2);
  const firstColumn = detail.slice(0, midIndex);
  const secondColumn = detail.slice(midIndex);

  const getColor = (active) => {
    if (active === "ready") {
      return "#949EDA";
    } else if (active === "reserved") {
      return "#FFC684";
    } else if (active === "fill") {
      return "#D3D3D3";
    } else {
      return "black"; // default color
    }
  };

  return (
    <div id="container">
      <div id="hospitalBuild" className="bg-[#F4F6FB] px-10 py-5 rounded-md">
        <div
          id="buildDetail"
          className="grid grid-cols-2 gap-4 justify-between"
        >
          <div className="flex flex-col gap-2 items-start">
            {firstColumn.map((item, idx) => (
              <h1 key={idx} className="flex gap-2 text-[14px] mt-2">
                <span>{item.title} :</span>
                <span>{item.count}</span>
              </h1>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-start ms-auto">
            {secondColumn.map((item, idx) => (
              <h1 key={idx} className="flex gap-2 text-[14px] mt-2">
                <span>
                  <BedSvg color={getColor(item.active)} />
                </span>
                <span>{item.title} :</span>
                <span>{item.count}</span>
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalBedDetail;
