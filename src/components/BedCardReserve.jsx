import React from "react";
import { LittleBedSvg } from "../assets/svg";
import { Button } from "@material-tailwind/react";

const BedCardReserve = ({ bedsDetail }) => {
  const getColor = (active) => {
    if (active === "ready") {
      return "#949EDA";
    } else if (active === "reserved") {
      return "#FFC684";
    } else if (active === "fill") {
      return "#D3D3D3";
    }
  };
  return (
    <div id="container" className="flex flex-row  flex-wrap gap-4">
      {bedsDetail.map((item, idx) => {
        return (
          <div className="xl:w-[163px] xl:h-[205px] w-[259px] h-[112px] px-4 py-2 border flex xl:flex-col flex-row items-center gap-3 shadow rounded-md bg-white">
            <header className="flex flex-col items-center ">
              <div className="flex items-center">
                <span>
                  <LittleBedSvg color={getColor(item.active)} />
                </span>
                <span className="xl:text-[15px] text-[12px]">
                  {item.bedTitle}
                </span>
              </div>
              <div
                id="bedNo"
                className="xl:text-[14px] text-[12px] text-[#858588] ms-2"
              >
                شماره تخت: {item.bedNo}
              </div>
            </header>
            <div id="actions" className="flex flex-col gap-4 items-center">
              <Button
                disabled={item.active === "ready" ? false : true}
                size="sm"
                style={{ fontFamily: "iranSans" }}
                className=" bg-[#36459B] xl:text-[14px] text-[11px]"
              >
                انتخاب تخت
              </Button>
              <Button
                size="sm"
                style={{ fontFamily: "iranSans" }}
                className="bg-[#D7DAEA] text-[#36459B] xl:text-[14px] text-[10px]"
              >
                مشاهده بیشتر
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BedCardReserve;
