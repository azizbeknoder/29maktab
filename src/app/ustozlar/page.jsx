import Teachers from "@/components/Teachers";
import React from "react";
import { teacherData } from "@/data/Teachers";
import Image from "next/image";
export default function page() {
  return (
    <div
      className="pt-28 px-4"
      style={{ backgroundImage: "url('/pride/pride-bg.jpg')" }}
    >
      <div className="">
        <div className="mb-6">
          <h1 className="text-golder text-4xl md:text-6xl xl:text-7xl text-center uppercase font-bold">
            Bizning ustozlar
          </h1>
        </div>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 ">
            {teacherData.map((e) => {
              return (
                <li className="">
                  <a href={`/ustozlar/${e.id}`}>
                    <div className=" flex flex-col justify-center items-center">
                      <img
                        src={e.photo}
                        alt=""
                        className="rounded-2xl min-x-[394px] min-h-[286px] "
                      />
                      <p>{e.fullnae}</p>
                      <p>{e.scince}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
