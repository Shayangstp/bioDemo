import React from "react";
import { BedSvg } from "../assets/svg";

const BuildingBedDetail = ({ detail }) => {
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
      <div
        id="hospitalBuild"
        className="bg-[#F4F6FB] px-5 xl:py-5 py-3 rounded-md"
      >
        <div
          id="buildDetail"
          className="grid grid-cols-2 gap-4 justify-between"
        >
          <div className="xl:flex xl:flex-col gap-2 items-start hidden col-span-1">
            {firstColumn.map((item, idx) => (
              <h1
                key={idx}
                className="flex gap-2 xl:text-[14px] text-[11px] mt-2"
              >
                <span>{item.title} :</span>
                <span>{item.count}</span>
              </h1>
            ))}
          </div>
          <div className="flex xl:flex-col flex-row xl:gap-2 gap-10 xl:items-start justify-center  xl:ms-auto col-span-2 xl:col-span-1">
            {secondColumn.map((item, idx) => (
              <h1
                key={idx}
                className="flex gap-2 xl:text-[14px] text-[11px] mt-2"
              >
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

export default BuildingBedDetail;
