'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// ایمپورت‌های CSS الزامی
import 'swiper/css';
import 'swiper/css/navigation';
import Sec2Slide from '@/component/app/home/section2/Slides/sec2slide';
import Sec2Slide1 from '@/component/app/home/section2/Slides/sec2slide1';
import Sec2Slide2 from '@/component/app/home/section2/Slides/sec2slide2';
import Sec2Slide3 from '@/component/app/home/section2/Slides/sec2slide3';
import Sec4Slide from '@/component/app/home/section4/slider/sec4slider';
import Sec4Slide1 from '@/component/app/home/section4/slider/sec4slide1';
import Sec4Slide2 from '@/component/app/home/section4/slider/sec4slide2';
import Sec4Slide3 from '@/component/app/home/section4/slider/sec4slide3';

export default function Sec4Swiper() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className=" group">
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
          <Sec4Slide />
        </SwiperSlide>

        <SwiperSlide>
          <Sec4Slide1 />
        </SwiperSlide>

        <SwiperSlide>
          <Sec4Slide2 />
        </SwiperSlide>

        <SwiperSlide>
          <Sec4Slide3 />
        </SwiperSlide>

  
      </Swiper>

      <button className="bg-red-600  w-40 h-15 rounded absolute top-3 right-6 text-white">View All</button>
    </div>
  );
}
