import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { vector } from "../assets/svg";
import Select from "react-select";

const options1 = [
  { value: "1", label: "مجتمع بیمارستانی امام خمینی" },
  { value: "2", label: "2مجتمع خمینی" },
];
const options2 = [
  { value: "1", label: "همه ساختمان ها" },
  { value: "2", label: "همه ساختمان ها" },
];
const options3 = [
  { value: "1", label: "تخت قابل رزرو" },
  { value: "2", label: "تخت قابل رزرو" },
];
const options4 = [
  { value: "1", label: "انتخاب نوع تخت" },
  { value: "2", label: "انتخاب نوع تخت" },
];
const options5 = [
  { value: "1", label: "مرد" },
  { value: "2", label: "مرد" },
];

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
      className="bg-white rounded-2xl mt-7 flex justify-between"
    >
      <div className="p-1 flex items-center">
        <Select
          id="hospitals"
          styles={customStyles}
          options={options1}
          className="text-[16px] p-2 w-[250px]"
          value={selectedValue[0]}
          onChange={(e) => {
            handleSelect(e);
          }}
        />
        <Select
          id="buildings"
          styles={customStyles}
          placeholder={options2[0].label}
          options={options2}
          className="text-[16px] p-2 w-[250px]"
          value={selectedValue[1]}
          onChange={(e) => {
            handleSelect(e);
          }}
        />
        <Select
          id="reserved"
          styles={customStyles}
          placeholder={options3[0].label}
          options={options3}
          className="text-[16px] p-2 w-[250px]"
          value={selectedValue[2]}
          onChange={(e) => {
            handleSelect(e);
          }}
        />
        <Select
          id="beds"
          styles={customStyles}
          placeholder={options4[0].label}
          options={options4}
          className="text-[16px] p-2 w-[250px]"
          value={selectedValue[3]}
          onChange={(e) => {
            handleSelect(e);
          }}
        />
        <Select
          id="gender"
          styles={customStyles}
          placeholder={options5[0].label}
          options={options5}
          className="text-[16px] p-2 w-[200px]"
          value={selectedValue[4]}
          onChange={(e) => {
            handleSelect(e);
          }}
        />
        <button className="text-[16px] flex items-center gap-2">
          <span>{vector}</span>
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
