"use client";

import Image from "next/image";
import React from "react";
import trophyImoji from "../../assets/images/trophy_emoji.webp";
import badge from "../../assets/images/software-advice-2023-badge.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const Award = () => {
  return (
    <section className="py-20 relative">
      <div className="z-10 relative">
        <div className="text-center w-full md:w-[40%] lg:w-[55%] mx-auto mb-10">
          <div className="flex items-center justify-center mb-4">
            <Image width={40} height={40} alt="TrophyEmoji" src={trophyImoji} />
          </div>
          <h1 className="text-3xl font-bold mb-4">Just a few of our awards…</h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image alt="Badge icon" src={badge} width={130} height={100} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image alt="Badge icon" src={badge} width={130} height={130} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image alt="Badge icon" src={badge} width={130} height={130} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image alt="Badge icon" src={badge} width={130} height={130} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image alt="Badge icon" src={badge} width={130} height={130} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image alt="Badge icon" src={badge} width={130} height={130} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image alt="Badge icon" src={badge} width={130} height={130} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image alt="Badge icon" src={badge} width={130} height={130} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center">
              <Image alt="Badge icon" src={badge} width={130} height={130} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Award;
