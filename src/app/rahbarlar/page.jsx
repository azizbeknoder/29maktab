import React from "react";
import { leaderData } from "@/data/Leader";

export default function Page() {
  return (
    <div
      className="pt-28 xl:px-60 px-6"
      
    >
      <div>
        <div className="mb-14">
          <h1 className="uppercase text-center text-golder text-3xl md:text-6xl xl:text-7xl font-bold">
            Bizning rahbarlar
          </h1>
        </div>

        {leaderData.map((leader, index) => (
          <div key={index} className="mb-14 h-full w-full ">
            <div
              className={`text-center flex flex-col justify-between md:flex-row   p-4 ${
                index === 1 ? "xl:flex-row-reverse" : ""
              }`}
            >
              <div className="rounded-xl">
                <img src={leader.images} alt="Photos" className="rounded-2xl" />
              </div>

              <div className="flex flex-col justify-center items-center ">
                <p className="text-2xl font-bold text-golder xl:text-6xl mb-2 md:mb-6 xl:md-10">
                  {leader.fullname}
                </p>
                <p className="text-xl font-bold text-white xl:text-4xl">
                  {leader.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
