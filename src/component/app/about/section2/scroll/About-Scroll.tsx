'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import AboutSlide1 from "@/component/app/about/section2/scroll/Slide1";
import AboutSlide2 from "@/component/app/about/section2/scroll/Slide2";
import AboutSlide3 from "@/component/app/about/section2/scroll/Slide3";

export default function AboutScroll() {
    const containerVariants = {
        hidden: { opacity: 0, x: 100, transition: { duration: 0.4, ease: "easeOut" } },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    };

    return (
        <motion.div
            className="w-full h-full"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* استایل سراسری برای pagination */}
            <style jsx global>{`
                .about-swiper {
                    padding-bottom: 40px !important;
                }
                .about-swiper .swiper-pagination {
                    bottom: 0 !important;
                }
                .about-swiper .swiper-pagination-bullet {
                    background-color: #9ca3af !important;
                    opacity: 0.6;
                    width: 10px;
                    height: 10px;
                    margin: 0 6px !important;
                }
                .about-swiper .swiper-pagination-bullet-active {
                    background-color: #ef4444 !important; /* ← این خط را قرمز کنید */
                    opacity: 1;
                    width: 12px;
                    height: 12px;
                }
            `}</style>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    dynamicBullets: false  // نقطه‌های ساده و ثابت
                }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="about-swiper w-full"
            >
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <AboutSlide1 />
                        <AboutSlide2 />
                        <AboutSlide3 />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <AboutSlide1 />
                        <AboutSlide2 />
                        <AboutSlide3 />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <AboutSlide1 />
                        <AboutSlide2 />
                        <AboutSlide3 />
                    </div>
                </SwiperSlide>
                {/* در صورت نیاز اسلایدهای بیشتر اضافه کنید */}
            </Swiper>
        </motion.div>
    );
}