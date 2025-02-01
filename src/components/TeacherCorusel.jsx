"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { teacherData } from "@/data/Teachers";
import Link from "next/link";

export default function SwiperComponent() {
  return (
    <div className="w-full  mb-14">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10} // Slaydlar orasidagi masofa
        slidesPerView={1} // Bir vaqtning o‘zida nechta slayd chiqishini belgilaydi
        breakpoints={{
          640: { slidesPerView: 1 }, // Kichik ekranlar uchun 1 ta slayd
          768: { slidesPerView: 2 }, // O‘rta ekranlar uchun 2 ta slayd
          1024: { slidesPerView: 3 }, // Katta ekranlar uchun 3 ta slayd
          1280: { slidesPerView: 4 }, // Juda katta ekranlar uchun 4 ta slayd
        }}
        loop={true}
        navigation
        pagination={{ clickable: true }}

        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-xl shadow-lg"
      >
        {teacherData.map((e,idx) => {
          return (
            
              
                <SwiperSlide key={idx}>
                  <a href={`/${e.name}`}>
                  <div className="w-full h-full ">
                    <div className="text-center flex flex-col items-center justify-center pt-10 ">
                      <img src={e.img} alt="" className="w-[300px]" />
                      <p className="text-3xl text-white ">{e.name}</p>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  </a>
                </SwiperSlide>
              
            
          );
        })}
      </Swiper>
    </div>
  );
}



