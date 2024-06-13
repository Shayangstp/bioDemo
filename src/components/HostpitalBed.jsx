import React from "react";
import SearchBox from "../components/SearchBox";
import HospitalBedList from "./HospitalBedList";

const HostpitalBed = () => {
  return (
    <div id="container">
      <header className="mt-2">
        <h1 className="text-[24px] font-bold ms-5 xl:inline-block hidden">
          تخصیص تخت
        </h1>
      </header>
      <div id="searchBox">
        <SearchBox />
      </div>
      <div
        id="bedList-container"
        className=" bg-white rounded-2xl mt-10 xl:px-8 px-4 xl:py-8 py-4"
      >
        <header>
          <h1 className="xl:text-[34px] text-[20px] font-bold">
            لیست تخت های مجتمع بیمارستانی امام خمینی
          </h1>
        </header>
        <HospitalBedList />
      </div>
    </div>
  );
};

export default HostpitalBed;
