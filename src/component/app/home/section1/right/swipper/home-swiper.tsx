'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperComponent from "@/component/app/home/section1/right/swipper/swiper-component";

export default function HomeSwiper() {
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      transition: { duration: 1, ease: "easeOut" }  // ← حرکت آهسته هنگام ورود
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    },
  };

  return (
    <motion.div
      className="w-full h-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }} // ← فقط برای هاور
    >
      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          background-color: white;
          opacity: 0.6;
        }
        :global(.swiper-pagination-bullet-active) {
          background-color: white;
          opacity: 1;
        }
      `}</style>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <SwiperComponent />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperComponent />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperComponent />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}