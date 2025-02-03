import React from "react";
import { prideData } from "@/data/Pride";

export default function Pride() {
  return (
    <div
      className="pt-14 pb-14 bg-cover bg-center "
      style={{ backgroundImage: "url('/pride/pride-bg.jpg')" }}
    >
      <div className="px-4 md:px-7 xl:flex">
        <div className="xl:mr-20">
          <img src="/school-img.jpg" alt="School" />
        </div>
        <div className="xl:w-2/3">
          <h1 className="text-2xl mt-5 text-golder xl:text-4xl font-bold ">
            {prideData.title}
          </h1>
          <p className="mt-5 xl:mt-14 xl:text-md">{prideData.description}</p>
        </div>
      </div>
    </div>
  );
}
