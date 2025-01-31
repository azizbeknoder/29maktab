import Hero from "@/components/Hero";
import Leader from "@/components/Leader";
import Pride from "@/components/Pride";
import TeacherCorusel from "@/components/TeacherCorusel";
import React from "react";


export default function page() {
  return (
    <div>
      <Hero/>
      <Pride/>
      <Leader/>
      <TeacherCorusel/>
    </div>
  );
}
