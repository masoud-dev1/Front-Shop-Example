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

  return (
    <div className="group">
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
        <SwiperSlide>
          <Sec2Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Sec2Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Sec2Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Sec2Slide3 />
        </SwiperSlide>
        <SwiperSlide>
          <Sec2Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Sec2Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Sec2Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Sec2Slide3 />
        </SwiperSlide>
      </Swiper>

      {/* دکمه قبلی - دقیقاً مثل Sec3Swiper */}
      <motion.button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute right-20 top-[-10] sm:top-8 h-10 w-10 bg-gray-300 text-black p-2 rounded-full z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        whileHover={{ 
          scale: 1.1, 
          backgroundColor: "#000000", 
          color: "#ffffff",
          transition: { duration: 0.1, type: "tween" }
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="اسلاید قبلی"
      >
        ❮
      </motion.button>

      {/* دکمه بعدی - دقیقاً مثل Sec3Swiper */}
      <motion.button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-8 top-[-10] sm:top-8 h-10 w-10 bg-gray-300 text-black p-2 rounded-full z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        whileHover={{ 
          scale: 1.1, 
          backgroundColor: "#000000", 
          color: "#ffffff",
          transition: { duration: 0.1, type: "tween" }
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="اسلاید بعدی"
      >
        ❯
      </motion.button>
    </div>
  );
}