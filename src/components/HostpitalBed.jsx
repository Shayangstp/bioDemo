import React from "react";
import SearchBox from "../components/SearchBox";
import HospitalBedList from "./HospitalBedList";

const HostpitalBed = () => {
  return (
    <container>
      <header className="mt-2">
        <h1 className="text-[24px] font-bold ms-5">تخصیص تخت</h1>
      </header>
      <div id="searchBox">
        <SearchBox />
      </div>
      <div
        id="bedList-container"
        className=" bg-white rounded-2xl mt-10 px-8 py-8"
      >
        <header>
          <h1 className="text-[34px]">
            لیست تخت های مجتمع بیمارستانی امام خمینی
          </h1>
        </header>
        <HospitalBedList />
      </div>
    </container>
  );
};

export default HostpitalBed;
