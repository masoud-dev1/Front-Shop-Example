"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// ایمپورت‌های CSS الزامی
import "swiper/css";
import "swiper/css/navigation";
import Slide1 from "@/component/admin/layouts/main-above-slider/sildes/slide1";

export default function AdminSlider() {
    // رفرنس برای دسترسی به نمونه Swiper
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="w-full h-full flex relative">

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={20}
                    onBeforeInit={(swiper: SwiperType) => {
                        swiperRef.current = swiper;
                    }}
                    className="w-full h-full rounded-3xl "
                >
                    <SwiperSlide>
                        <Slide1/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide1/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide1/>
                    </SwiperSlide>
                </Swiper>

                {/* دکمه قبلی */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-10 w-10 h-10 top-1/2 -translate-y-1/2 bg-gray-300 text-blac p-2 rounded-full z-10  transition
                    cursor-pointer"
                    aria-label="اسلاید قبلی"
                >
                    ❮
                </button>

                {/* دکمه بعدی */}
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute w-10 h-10 right-10 top-1/2 -translate-y-1/2 bg-gray-300 text-black p-2 rounded-full z-10  transition cursor-pointer"
                    aria-label="اسلاید بعدی"
                >
                    ❯
                </button>


        </div>
    );
}