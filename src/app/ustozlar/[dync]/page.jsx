"use client";

import { useParams } from "next/navigation";
import { teacherData } from "@/data/Teachers";

export default function UstozDetails() {
  const params = useParams(); // URL dan parametrlarni olish
  const { dync } = params; // `dync` ni olish

  return (
    <div className="pt-20 px-4">
      <div className="flex flex-col xl:flex-row justify-between xl:px-14 items-center">
        <div className="min-w-[305px] min-h-[203px]">
            <img src={teacherData[dync].photo } alt="" />
        </div>
        <div className="pt-4  text-center ">
            <p className="text-golder text-3xl mb-3 font-bold">{teacherData[dync].fullnae}</p>
            <p className="text-white text-2xl ">{teacherData[dync].scince} ustozi</p>
        </div>
      </div>
    </div>
  );
}
