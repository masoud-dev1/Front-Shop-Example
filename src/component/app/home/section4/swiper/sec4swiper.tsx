'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import Sec4Slide from '@/component/app/home/section4/slider/sec4slider';
import Sec4Slide1 from '@/component/app/home/section4/slider/sec4slide1';
import Sec4Slide2 from '@/component/app/home/section4/slider/sec4slide2';
import Sec4Slide3 from '@/component/app/home/section4/slider/sec4slide3';

export default function Sec4Swiper() {
  const swiperRef = useRef<SwiperType | null>(null);

  // انیمیشن تکی برای هر اسلاید – سریع‌تر
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  // انیمیشن کانتینر – دیلی کمتر بین اسلایدها
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,    // کاهش یافته از 0.25 به 0.1
        delayChildren: 0.05,
      },
    },
  };

  const slides = [
    <Sec4Slide key={1} />,
    <Sec4Slide1 key={2} />,
    <Sec4Slide2 key={3} />,
    <Sec4Slide3 key={4} />,
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
            <motion.div variants={itemVariants}>{slide}</motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* دکمه View All بدون تغییر */}
      <button className="bg-red-600 w-40 h-15 rounded absolute sm:top-3 sm:right-6 text-white">
        View All
      </button>
    </motion.div>
  );
}