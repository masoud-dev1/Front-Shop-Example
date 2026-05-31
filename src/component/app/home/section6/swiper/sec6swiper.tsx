"use client";

import { useRef } from "react";
import { motion } from "framer-motion";  // ← اضافه کن
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import Sec2Slide from "@/component/app/home/section2/Slides/sec2slide";
import Sec2Slide1 from "@/component/app/home/section2/Slides/sec2slide1";
import Sec2Slide2 from "@/component/app/home/section2/Slides/sec2slide2";
import Sec2Slide3 from "@/component/app/home/section2/Slides/sec2slide3";

export default function Sec6Swiper() {
  const swiperRef = useRef<SwiperType | null>(null);

  // انیمیشن تکی (مثل بقیه بخش‌ها)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  // کانتینر با استگر چیلدرن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,      // ← دیلی خیلی ریز بین اسلایدها
        delayChildren: 0.05,
      },
    },
  };

  // آرایه‌ای از اسلایدها برای رندر تمیزتر (همون محتوایی که قبلاً داری)
  const slides = [
    <Sec2Slide key={1} />,
    <Sec2Slide1 key={2} />,
    <Sec2Slide2 key={3} />,
    <Sec2Slide3 key={4} />,
    <Sec2Slide key={5} />,
    <Sec2Slide1 key={6} />,
    <Sec2Slide2 key={7} />,
    <Sec2Slide3 key={8} />,
    <Sec2Slide key={9} />,
    <Sec2Slide1 key={10} />,
    <Sec2Slide2 key={11} />,
    <Sec2Slide3 key={12} />,
    <Sec2Slide key={13} />,
    <Sec2Slide1 key={14} />,
    <Sec2Slide2 key={15} />,
    <Sec2Slide3 key={16} />,
  ];

  return (
    <motion.div
      className="group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Swiper
        modules={[Navigation, Grid]}
        spaceBetween={20}
        slidesPerView={4}
        grid={{ rows: 2, fill: "row" }}
        breakpoints={{
          0: { slidesPerView: 1, grid: { rows: 2, fill: "row" } },
          640: { slidesPerView: 2, grid: { rows: 2, fill: "row" } },
          1024: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
          1280: { slidesPerView: 4, grid: { rows: 2, fill: "row" } },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full mt-6"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {/* هر اسلاید رو توی motion.div می‌پیچیم تا استگر بگیره */}
            <motion.div variants={itemVariants}>
              {slide}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* دکمه‌های قبلی/بعدی (بدون تغییر) */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute right-20 top-[-10] sm:top-8 h-10 w-10 bg-gray-300 text-black p-2 rounded-full z-10 hover:bg-black hover:text-white transition cursor-pointer"
        aria-label="اسلاید قبلی"
      >
        ❮
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-8 top-[-10] sm:top-8 h-10 w-10 bg-gray-300 text-black p-2 rounded-full z-10 hover:bg-black hover:text-white transition cursor-pointer"
        aria-label="اسلاید بعدی"
      >
        ❯
      </button>
    </motion.div>
  );
}