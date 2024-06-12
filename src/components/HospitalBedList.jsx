import React, { useState, useRef } from "react";
import HospitalBedDetail from "./HospitalBedDetail";
import { hostpitalDetail, buildingDetail } from "../utils/data";
import { buildSvg, buildSvgRes, TabBuildSvg } from "../assets/svg";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import RoomBedDetail from "./RoomBedDetail";
import BuildingBedDetail from "./BuildingBedDetail";
import { arrowLeft, arrowRight } from "../assets/svg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HospitalBedList = () => {
  const [activeTab, setActiveTab] = useState(1);

  const swiperRef = useRef(null);

  const slideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const getColor = (id) => {
    if (id === activeTab) {
      return "#36459B";
    } else {
      return "#636366";
    }
  };

  return (
    <div id="container" className="xl:mt-16 mt-10 relative border rounded-2xl">
      {/* <div className="absolute bottom-5 right-10 text-[24] bg-white px-10">
        بیمارستان امام
      </div> */}
      <div id="list" className="mt-5">
        <div id="hospitalDetail">
          {hostpitalDetail.map((item, idx) => {
            return (
              <div
                id="detail"
                className="flex xl:flex-row flex-col gap-5 xl:items-start justify-between xl:p-10 px-3"
              >
                <div id="hostBuild" className="xl:text-[20px] text-[12px] ms-2">
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
              <div className="flex flex-col gap-3 w-[100%] xl:p-10 p-0">
                <div className="flex flex-col items-center gap-2">
                  {/* there was no time for automation this svg */}
                  <span className="xl:inline-block hidden">{buildSvg}</span>
                  <span className="inline-block xl:hidden mt-7">
                    {buildSvgRes}
                  </span>
                  <span className="xl:text-[24px] text-[16px]">
                    {item.buildName}
                  </span>
                  <span className="text-[12px] text-[#858588] xl:inline-block hidden">
                    {item.hospitalName}
                  </span>
                </div>
                <Tabs value={activeTab} className="mt-10">
                  <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent py-0 px-10 "
                    indicatorProps={{
                      className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                  >
                    <div className="flex w-[100%]">
                      <Swiper
                        navigation={true}
                        spaceBetween={10}
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        ref={swiperRef}
                        breakpoints={{
                          640: {
                            slidesPerView: 2,
                          },
                          768: {
                            slidesPerView: 3,
                          },
                          1200: {
                            slidesPerView: 5,
                          },
                        }}
                      >
                        {item.sections.map((item, idx) => (
                          <SwiperSlide key={idx} virtualIndex={idx}>
                            <div
                              // key={idx}
                              // value={item.id}
                              onClick={() => setActiveTab(item.id)}
                              style={{ fontFamily: "iranSans" }}
                              className={`cursor-pointer px-10 ${
                                activeTab === item.id
                                  ? "text-gray-900 border-b-2 border-[#36459B] transition-all"
                                  : ""
                              }`}
                            >
                              <div className="flex flex-col  items-center gap-2">
                                <span>
                                  <TabBuildSvg color={getColor(item.id)} />
                                </span>
                                <span
                                  className={`py-2 pb-3 xl:inline-block hidden ${
                                    activeTab === item.id
                                      ? "text-[#36459B]"
                                      : "text-[#636366]"
                                  }`}
                                >
                                  {item.name}
                                </span>
                                <span
                                  className={`xl:hidden inline-block ${
                                    activeTab === item.id
                                      ? "bg-[#36459B] text-white px-3 py-1 rounded-full"
                                      : "text-[#636366]"
                                  }`}
                                >
                                  {idx + 1}
                                  {item.subName}
                                </span>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </TabsHeader>
                  <TabsBody className="border xl:rounded-lg">
                    {item.sections.map((section, idx) => (
                      <TabPanel key={idx} value={section.id}>
                        <div
                          style={{ fontFamily: "iranSans" }}
                          className="flex xl:flex-row flex-col gap-5 xl:items-start justify-between xl:p-10 p-1"
                          id="detail"
                        >
                          <h1 className="xl:text-[20px] text-[14px]">
                            <span>لیست اتاق های طبقه اول بخش روماتولوژی</span>
                            <span>{item.buildName}</span>:
                          </h1>
                          <BuildingBedDetail detail={item.details} />
                        </div>
                        <div className="xl:mt-0 mt-5">
                          <RoomBedDetail room={item.rooms} />
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
