import React, { useState } from "react";
import HospitalBedDetail from "./HospitalBedDetail";
import { hostpitalDetail, buildingDetail } from "../utils/data";
import { buildSvg, TabBuildSvg } from "../assets/svg";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import RoomBedDetail from "./RoomBedDetail";

const HospitalBedList = () => {
  const [activeTab, setActiveTab] = useState(1);

  const getColor = (id) => {
    if (id === activeTab) {
      return "#36459B";
    } else {
      return "#636366";
    }
  };
  return (
    <div id="container" className="mt-16 relative border rounded-2xl">
      {/* <div className="absolute bottom-5 right-10 text-[24] bg-white px-10">
        بیمارستان امام
      </div> */}
      <div id="list" className="mt-5">
        <div id="hospitalDetail">
          {hostpitalDetail.map((item, idx) => {
            return (
              <div
                id="detail"
                className="flex items-start justify-between p-10"
              >
                <div id="hostBuild" className="text-[20px]">
                  لیست ساختمان های بیمارستان {item.hospitalName}:
                </div>
                <div id="detailBox">
                  <HospitalBedDetail detail={item.detail} />
                </div>
              </div>
            );
          })}
        </div>
        <div id="buildDetail" className="flex flex-col justify-center ">
          {buildingDetail.map((item, idx) => {
            return (
              <div className="flex flex-col gap-3 w-[100%] p-10">
                <div className="flex flex-col items-center gap-2">
                  <span>{buildSvg}</span>
                  <span className="text-[24px]">{item.buildName}</span>
                  <span className="text-[12px] text-[#858588]">
                    {item.hospitalName}
                  </span>
                </div>
                <Tabs value={activeTab} className="mt-10">
                  <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent py-0 px-10"
                    indicatorProps={{
                      className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                  >
                    {item.sections.map((item, idx) => (
                      <Tab
                        key={idx}
                        value={item.id}
                        onClick={() => setActiveTab(item.id)}
                        style={{ fontFamily: "iranSans" }}
                        className={`${
                          activeTab === item.id ? "text-gray-900" : ""
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <span>
                            <TabBuildSvg color={getColor(item.id)} />
                          </span>
                          <span
                            className={`${
                              activeTab === item.id
                                ? "text-[#36459B]"
                                : "text-[#636366]"
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody className="border rounded-lg">
                    {item.sections.map((section, idx) => (
                      <TabPanel key={idx} value={section.id}>
                        <div
                          style={{ fontFamily: "iranSans" }}
                          className="flex items-start justify-between p-10"
                          id="detail"
                        >
                          <h1 className="text-[20px]">
                            <span>لیست اتاق های طبقه اول بخش روماتولوژی</span>
                            <span>{item.buildName}</span>:
                          </h1>
                          <HospitalBedDetail detail={item.details} />
                        </div>
                        <div>
                          <RoomBedDetail />
                        </div>
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HospitalBedList;
