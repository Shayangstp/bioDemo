import React from "react";
import SearchBox from "../components/SearchBox";



const HostpitalBed = () => {
  return (
    <container>
      <header className="mt-2">
        <h1 className="text-[24px] font-bold ms-5">تخصیص تخت</h1>
      </header>
      <div id="searchBox">
        <SearchBox />
      </div>
    </container>
  );
};

export default HostpitalBed;
