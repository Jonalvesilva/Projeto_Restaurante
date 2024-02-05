"use client";

import data from "../../utils/restApi.json";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export function Depoimentos() {
  return (
    <section className="min-w-[500px] flex h-[500px] bg-orange-900">
      <div className="flex max-w-screen-lg items-center justify-center flex-col w-full lg:mx-auto gap-y-6">
        <div>
          <h2 className="text-white text-3xl">Depoimentos</h2>
        </div>
        <>
          <Swiper
            slidesPerView={1}
            pagination={false}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper2 w-[90%] md:w-[80%] lg:w-[70%]"
            key="swiper2"
          >
            {data.data[0].testimonials.map((data) => {
              return (
                <SwiperSlide
                  key={data.userName}
                  className="bg-black/80 rounded-xl p-10"
                >
                  <div>
                    <p className="text-white text-center text-lg sm:text-xl">
                      {data.description}
                    </p>
                    <div className="flex flex-row mt-4 w-full items-center justify-center gap-x-2">
                      {Array(data.rating)
                        .fill(1)
                        .map((_, index) => (
                          <Image
                            src="/star.svg"
                            key={index}
                            alt="star"
                            width={24}
                            height={24}
                          />
                        ))}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </div>
    </section>
  );
}
