"use client";

import { useParams } from "next/navigation";
import { teacherData } from "@/data/Teachers";

export default function UstozDetails() {
  const params = useParams(); // URL dan parametrlarni olish
  let { dync } = params; // `dync` ni olish
  dync = parseInt(dync,10)
  dync -= 1

  return (
    <div className="pt-28 xl:pt-[220px] px-4 xl:px-[170px] ">
      <div className="flex flex-col xl:flex-row justify-between xl:px-14 items-center">
        <div className="min-w-[305px] min-h-[203px]  ">
            <img src={teacherData[dync].photo } alt="photo" className="rounded-2xl" />
        </div>
        <div className="pt-4  text-center ">
            <p className="text-golder text-3xl mb-3 font-bold xl:text-6xl">{teacherData[dync].fullnae}</p>
            <p className="text-white text-2xl  xl:text-4xl mb-6">{teacherData[dync].scince} ustozi</p>
            <p className="text-2xl ">{teacherData[dync].goal}</p>
        </div>
      </div>
    </div>
  );
}
