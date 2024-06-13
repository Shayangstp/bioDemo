import React from "react";
import { roomSvg } from "../assets/svg";
import BedCardReserve from "./BedCardReserve";

const RoomBedDetail = ({ room }) => {
  return (
    <div
      id="container"
      style={{ fontFamily: "iranSans" }}
      className="flex flex-col gap-10"
    >
      {room.map((item, idx) => {
        return (
          <div key={idx}>
            <header className="inline-block">
              <div className="flex items-start gap-2 bg-[#F4F6FB] px-6 py-3 rounded-md text-[#36459B]">
                <span>{roomSvg}</span>
                <span className="mt-1">{item.title}</span>
              </div>
            </header>
            <div id="bedsCardContainer" className="p-5  bg-[#F4F6FB]">
              <BedCardReserve bedsDetail={item.beds} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomBedDetail;
