"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { teacherData } from "@/data/Teachers";

export default function SwiperComponent() {
  return (
    <div className="w-full max-w-3xl mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20} // Slaydlar orasidagi masofa
        slidesPerView={3} // Bir vaqtning o‘zida nechta slayd chiqishini belgilaydi
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
        {teacherData.map((e) => {
          return (
            <SwiperSlide key={e.id}>
              <div className="w-full h-full ">
                <div className="text-center flex flex-col items-center justify-center pt-10 ">
                  <img src={e.img} alt="" className="w-40" />
                  <p className="text-3xl text-white h-40">{e.name}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
