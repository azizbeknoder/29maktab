import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row pt-4 items-center mx-auto px-4 text-golder font-bold mb-14 xl:px-14">
      {/* Kartani markazga olib kelish uchun w-full va justify-center qo‘shildi */}
      <div className="text-center md:ml-14 md:w-1/2 mb-10">
        <p className="xl:text-2xl">
          Bizning maktabga tashrif buyurmoqchi bo'lsangiz, ushbu kartada
          ko'rsatilgan manzil orqali oson topishingiz mumkin. Biz sizni
          intizorlik bilan kutib qolamiz.
        </p>
      </div>
      <div className="w-full flex justify-center ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.0060480766924!2d71.69793609325883!3d40.413942698929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb9dd0047c1685%3A0x521c27fb05fd1eb2!2s29-sonli%20orta%20ta%CA%BClim%20maktab!5e0!3m2!1sru!2s!4v1738689710000!5m2!1sru!2s"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="max-w-[300px] max-h-[300px] xl:max-w-[500px] xl:max-h-[500px] block rounded-xl"
        ></iframe>
      </div>
    </div>
  );
}
