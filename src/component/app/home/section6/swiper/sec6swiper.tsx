"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";     // ← Grid رو اضافه کن
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";                               // ← CSS گرید رو هم ایمپورت کن

import Sec2Slide from "@/component/app/home/section2/Slides/sec2slide";
import Sec2Slide1 from "@/component/app/home/section2/Slides/sec2slide1";
import Sec2Slide2 from "@/component/app/home/section2/Slides/sec2slide2";
import Sec2Slide3 from "@/component/app/home/section2/Slides/sec2slide3";

export default function Sec6Swiper() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="group">   {/* ← position relative برای دکمه‌ها ضروریست */}
      <Swiper
        modules={[Navigation, Grid]}   // ← Grid رو به modules اضافه کن
        spaceBetween={20}
        slidesPerView={4}              // تعداد ستون‌ها در هر سطر (توی دسکتاپ)
        grid={{
          rows: 2,                     // تعداد سطرها = 2
          fill: "row",                // پر کردن سطر به سطر (بعد از پر شدن سطر اول، برو سطر دوم)
        }}
        breakpoints={{
          0: { 
            slidesPerView: 1,
            grid: { rows: 2, fill: "row" }   // موبایل: 1 ستون × 2 سطر = 2 اسلاید قابل مشاهده
          },
          640: { 
            slidesPerView: 2,
            grid: { rows: 2, fill: "row" }   // تبلت کوچک: 2×2 = 4 اسلاید
          },
          1024: { 
            slidesPerView: 3,
            grid: { rows: 2, fill: "row" }   // تبلت بزرگ: 3×2 = 6 اسلاید
          },
          1280: { 
            slidesPerView: 4,
            grid: { rows: 2, fill: "row" }   // دسکتاپ: 4×2 = 8 اسلاید
          },
        }}
        onBeforeInit={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        className="w-full mt-6"
      >
        {/* اسلایدها – می‌تونی هر تعدادی که داری بذاری، خودش مرتب می‌کنه */}
        <SwiperSlide><Sec2Slide/></SwiperSlide>
        <SwiperSlide><Sec2Slide1/></SwiperSlide>
        <SwiperSlide><Sec2Slide2/></SwiperSlide>
        <SwiperSlide><Sec2Slide3/></SwiperSlide>
        <SwiperSlide><Sec2Slide/></SwiperSlide>
        <SwiperSlide><Sec2Slide1/></SwiperSlide>
        <SwiperSlide><Sec2Slide2/></SwiperSlide>
        <SwiperSlide><Sec2Slide3/></SwiperSlide>
         <SwiperSlide><Sec2Slide/></SwiperSlide>
        <SwiperSlide><Sec2Slide1/></SwiperSlide>
        <SwiperSlide><Sec2Slide2/></SwiperSlide>
        <SwiperSlide><Sec2Slide3/></SwiperSlide>
        <SwiperSlide><Sec2Slide/></SwiperSlide>
        <SwiperSlide><Sec2Slide1/></SwiperSlide>
        <SwiperSlide><Sec2Slide2/></SwiperSlide>
        <SwiperSlide><Sec2Slide3/></SwiperSlide>
        {/* می‌تونی بیشتر هم اضافه کنی */}
      </Swiper>

      {/* دکمه قبلی */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute right-20 top-[-10] sm:top-8 h-10 w-10 bg-gray-300 text-black p-2 rounded-full z-10 hover:bg-black hover:text-white transition cursor-pointer"
        aria-label="اسلاید قبلی"
      >
        ❮
      </button>

      {/* دکمه بعدی */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-8 top-[-10] sm:top-8 h-10 w-10 bg-gray-300 text-black p-2 rounded-full z-10 hover:bg-black hover:text-white transition cursor-pointer"
        aria-label="اسلاید بعدی"
      >
        ❯
      </button>
    </div>
  );
}