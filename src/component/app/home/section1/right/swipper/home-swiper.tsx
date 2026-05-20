'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperComponent from "@/component/app/home/section1/right/swipper/swiper-component";

export default function HomeSwiper() {
    return (
        <div className="w-full h-full">
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
                    <SwiperComponent/>
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperComponent/>
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperComponent/>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}