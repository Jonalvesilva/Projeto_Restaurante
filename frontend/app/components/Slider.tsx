"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import "../styles/styles.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import data from "../../utils/restApi.json";
import { breakpoints } from "../constants/breakpointsSwiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        grabCursor={true}
        pagination={false}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={breakpoints}
        className="mySwiper w-full h-[320px] min-h-[320px]"
      >
        {data.data[0].team.map((data) => {
          return (
            <SwiperSlide
              className="relative flex justify-center items-center"
              key={`${data.name}_chef`}
            >
              <img src={data.image} alt={data.name} className="w-full h-full" />
              <span className="text-white absolute top-0 left-0 p-2 bg-orange-500 rounded-r-sm">
                {data.name}
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
