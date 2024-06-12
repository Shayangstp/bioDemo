import React from "react";
import { LittleBedSvg } from "../assets/svg";
import { Button } from "@material-tailwind/react";

const BedCardReserve = () => {
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
    <div
      id="container"
      className="w-[163px] h-[205px] px-4 py-2 border flex flex-col items-center  shadow rounded-md bg-white"
    >
      <header className="flex items-center ">
        <span>
          <LittleBedSvg color={getColor("ready")} />
        </span>
        <span className="text-[15px]">تخت ۳۲۱</span>
      </header>
      <div id="bedNo" className="text-[14px] text-[#858588] ms-2">
        شماره تخت: A121
      </div>
      <div id="actions" className="flex flex-col gap-4 items-center mt-5">
        <Button style={{ fontFamily: "iranSans" }} className=" bg-[#36459B]">
          انتخاب تخت
        </Button>
        <Button
          style={{ fontFamily: "iranSans" }}
          className="bg-[#D7DAEA] text-[#36459B]"
        >
          اطلاعات بیمار
        </Button>
      </div>
    </div>
  );
};

export default BedCardReserve;
