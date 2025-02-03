import React from "react";

export default function VideoBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden px-4 md:px-7">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover px-4 md:px-7 "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero/hero-bg.mp4" type="video/mp4" />
        Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-asosiy bg-opacity-80"></div>

      <div className="relative z-10 flex items-center justify-center h-full uppercase flex-col">
        <p className="font-bold text-md mb-4">
          Farg'ona viloyati farg'ona tumani
        </p>
        <p className="font-bold text-4xl">
          <strong className="text-golder">29-</strong>maktab
        </p>
        <a href="/">
          <button className="uppercase bg-golder text-white mt-6 w-[140px] h-[56px] font-bold text-md hover:opacity-60">
            batafsil
          </button>
        </a>
      </div>
    </div>
  );
}
