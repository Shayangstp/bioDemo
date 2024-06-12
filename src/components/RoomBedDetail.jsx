import React from "react";
import { roomSvg } from "../assets/svg";
import BedCardReserve from "./BedCardReserve";

const RoomBedDetail = () => {
  return (
    <div id="container" style={{ fontFamily: "iranSans" }}>
      <header className="inline-block">
        <div className="flex items-start gap-2 bg-[#F4F6FB] px-6 py-3 rounded-md text-[#36459B]">
          <span>{roomSvg}</span>
          <span className="mt-1">اتاق R101</span>
        </div>
      </header>
      <div id="bedsCardContainer" className="p-5 bg-[#F4F6FB]">
        <BedCardReserve />
      </div>
    </div>
  );
};

export default RoomBedDetail;
