"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// ایمپورت‌های CSS الزامی
import "swiper/css";
import "swiper/css/navigation";
import Slide1 from "@/component/admin/layouts/slider/sildes/slide1";

export default function AdminSlider() {
    // رفرنس برای دسترسی به نمونه Swiper
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className=" bg-red-500 flex max-h-full  group">

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={20}
                    onBeforeInit={(swiper: SwiperType) => {
                        swiperRef.current = swiper;
                    }}
                    className="w-full"
                >
                    <SwiperSlide>
                        <Slide1/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-64 bg-gray-300 flex items-center justify-center rounded-lg">
                            اسلاید ۲
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-64 bg-gray-400 flex items-center justify-center rounded-lg">
                            اسلاید ۳
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* دکمه قبلی */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full z-10 hover:bg-black transition"
                    aria-label="اسلاید قبلی"
                >
                    ❮
                </button>

                {/* دکمه بعدی */}
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full z-10 hover:bg-black transition"
                    aria-label="اسلاید بعدی"
                >
                    ❯
                </button>


        </div>
    );
}