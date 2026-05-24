"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import Sec3Slide from "@/component/app/home/section3/slide/sec3slide";
import Sec3Slide1 from "@/component/app/home/section3/slide/sec3slide1";
import Sec3Slide2 from "@/component/app/home/section3/slide/sec3slide2";
import Sec3Slide3 from "@/component/app/home/section3/slide/sec3slide3";
import Sec3Slide4 from "@/component/app/home/section3/slide/sec3slide4";
import Sec3Slide5 from "@/component/app/home/section3/slide/sec3slide5";

export default function Sec3Swiper() {
  const swiperRef = useRef<SwiperType | null>(null);

  // انیمیشن تکی برای هر اسلاید - سریع‌تر
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }, // ← کاهش به 0.3
  };

  // انیمیشن کانتینر با استگر چیلدرن - دیلی کمتر
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,      // ← کاهش به 0.1
        delayChildren: 0.05,
      },
    },
  };

  const slides = [
    <Sec3Slide key={1} />,
    <Sec3Slide1 key={2} />,
    <Sec3Slide2 key={3} />,
    <Sec3Slide3 key={4} />,
    <Sec3Slide4 key={5} />,
    <Sec3Slide5 key={6} />,
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
        slidesPerView={6}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
        onBeforeInit={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-70"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="py-10 px-3">
            <motion.div variants={itemVariants}>
              {slide}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* دکمه قبلی */}
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

      {/* دکمه بعدی */}
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
    </motion.div>
  );
}