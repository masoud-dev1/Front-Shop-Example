'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

// برای استایل‌های پیش‌فرض (حتماً یکبار در پروژه ایمپورت کنید)
import 'swiper/css';
import Image from "next/image";
import ProductSlideAdmin from "@/component/admin/layouts/main-bottom-slider/slides/product-slide-admin";

export default function AdminProductsBottomSlider() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className={" w-full h-full flex flex-col"}>
            <div className="bg-white w-full rounded-xl shadow shadow-lg relative group h-full">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={20}
                    onBeforeInit={(swiper: SwiperType) => {
                        swiperRef.current = swiper;
                    }}
                    className="w-full h-full  "
                >

                    <SwiperSlide>
                        <ProductSlideAdmin/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductSlideAdmin/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductSlideAdmin/>
                    </SwiperSlide>
                </Swiper>

                {/* دکمه قبلی */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full z-10 hover:bg-black transition cursor-pointer"
                    aria-label="اسلاید قبلی"
                >
                    ❮
                </button>

                {/* دکمه بعدی */}
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full z-10 hover:bg-black transition cursor-pointer"
                    aria-label="اسلاید بعدی"
                >
                    ❯
                </button>
            </div>

        </div>
    );

}