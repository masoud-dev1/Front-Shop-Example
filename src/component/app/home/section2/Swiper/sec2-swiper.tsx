"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import Sec2Slide from "@/component/app/home/section2/Slides/sec2slide";
import Sec2Slide1 from "@/component/app/home/section2/Slides/sec2slide1";
import Sec2Slide2 from "@/component/app/home/section2/Slides/sec2slide2";
import Sec2Slide3 from "@/component/app/home/section2/Slides/sec2slide3";

export default function Sec2Swiper() {
  const swiperRef = useRef<SwiperType | null>(null);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const slides = [
    <Sec2Slide key={1} />,
    <Sec2Slide1 key={2} />,
    <Sec2Slide2 key={3} />,
    <Sec2Slide3 key={4} />,
    <Sec2Slide key={5} />,
    <Sec2Slide1 key={6} />,
    <Sec2Slide2 key={7} />,
    <Sec2Slide3 key={8} />,
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
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        onBeforeInit={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        className="w-full mt-6"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <motion.div variants={itemVariants}>
              {slide}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* دکمه قبلی - بدون motion، فقط CSS */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute right-20 top-[-10] sm:top-8 h-10 w-10 bg-gray-300 text-black p-2 rounded-full z-10 cursor-pointer hover:bg-black hover:text-white transition"
        aria-label="اسلاید قبلی"
      >
        ❮
      </button>

      {/* دکمه بعدی - بدون motion */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-8 top-[-10] sm:top-8 h-10 w-10 bg-gray-300 text-black p-2 rounded-full z-10 cursor-pointer hover:bg-black hover:text-white transition"
        aria-label="اسلاید بعدی"
      >
        ❯
      </button>
    </motion.div>
  );
}