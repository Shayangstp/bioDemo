import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { filterSvg } from "../assets/svg";
import Select from "react-select";
import {
  options1,
  options2,
  options3,
  options4,
  options5,
} from "../utils/data";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    padding: "5px 10px",
    border: "1px solid white",
    "&:hover": {
      //   backgroundColor: "white",
      borderColor: "white",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
  }),
};

const SearchBox = () => {
  const [selectedValue, setSelectedValue] = useState([
    options1[0],
    options2[0],
    options3[0],
    options4[0],
    options5[0],
  ]);

  const handleSelect = (selectedOptions) => {
    setSelectedValue(selectedOptions);
  };

  return (
    <div
      id="container"
      className="bg-white rounded-2xl mt-7 xl:flex justify-between border hidden"
    >
      <div className="p-1 flex items-center w-full">
        <Select
          id="hospitals"
          styles={customStyles}
          options={options1}
          className="text-[16px] px-2 w-[50%]"
          value={selectedValue[0]}
          onChange={(e) => {
            handleSelect(e);
          }}
        />
        <Select
          id="buildings"
          styles={customStyles}
          placeholder="همه ساختمان ها"
          options={options2}
          className="text-[16px] px-2 w-[40%]"
          // value={selectedValue[1]}
          onChange={(e) => {
            handleSelect(e);
          }}
        />
        <Select
          id="reserved"
          styles={customStyles}
          placeholder="تخت قابل رزرو"
          options={options3}
          className="text-[16px] px-2 w-[30%]"
          // value={selectedValue[2]}
          onChange={(e) => {
            handleSelect(e);
          }}
        />
        <Select
          id="beds"
          styles={customStyles}
          placeholder="انواع تخت"
          options={options4}
          className="text-[16px] px-2 w-[30%]"
          // value={selectedValue[3]}
          onChange={(e) => {
            handleSelect(e);
          }}
        />
        <Select
          id="gender"
          styles={customStyles}
          placeholder={options5[0].label}
          options={options5}
          className="text-[16px] px-2 w-[20%]"
          value={selectedValue[4]}
          onChange={(e) => {
            handleSelect(e);
          }}
        />
        <button className="text-[16px] flex items-center gap-2 w-[30%]">
          <span>{filterSvg}</span>
          <span>فیلتر بیشتر </span>
        </button>
      </div>
      <Button
        style={{ fontFamily: "iranSans" }}
        className="rounded-none txt rounded-l-2xl bg-[#36459B] text-[14px]"
      >
        جستجو
      </Button>
    </div>
  );
};

export default SearchBox;
