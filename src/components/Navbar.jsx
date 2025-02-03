"use client";
import React, { useState } from "react";
import { navbarData } from "@/data/Navbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-20 flex justify-between px-4 md:px-10  pt-3 items-center  z-50 fixed bg-asosiy ">
      <div>
        <a href="/">
          <h1 className="text-white text-2xl md:text-3xl xl:text-5xl font-bold uppercase">
            <em className="text-golder">29-</em>maktab
          </h1>
        </a>
      </div>

      <div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <img
            src="/navbar/Burger.svg"
            alt="Menu"
            className="cursor-pointer w-8 h-8"
          />
        </div>

        <ul
          className={`absolute top-20 left-0 w-full  flex flex-col gap-3 p-5 text-white 
            transition-all duration-500 transform origin-top
            ${
              isOpen
                ? "scale-y-100 opacity-100 bg-asosiy"
                : "scale-y-0 opacity-0"
            } md:hidden`}
        >
          {navbarData.map((e) => (
            <li key={e.id} className="uppercase font-bold text-center">
              <a href={e.sources} className="block py-2 hover:text-gray-300">
                {e.text}
              </a>
              <hr className="border-white/50 " />
            </li>
          ))}
        </ul>

        <ul className="flex gap-5 max-md:hidden ">
          {navbarData.map((e) => (
            <li key={e.id}>
              <a href={e.sources} className="uppercase font-bold">
                {e.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
