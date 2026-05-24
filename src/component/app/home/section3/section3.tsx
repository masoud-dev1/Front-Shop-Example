"use client";

import { motion } from "framer-motion";
import Sec3Swiper from "@/component/app/home/section3/swiper3/sec3swiper";

export default function Section3() {
  // انیمیشن برای المان‌های تکی
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // انیمیشن برای کانتینر با استگر چیلدرن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="w-full mt-20 flex justify-center">
      <div className="w-15/20 flex flex-col justify-start">
        {/* بخش عنوان */}
        <motion.div
          className="sm:w-1/4 flex items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <div className="bg-red-700 w-1/15 h-16 rounded-md"></div>
          <h2 className="text-red-700 ms-5">Categories</h2>
        </motion.div>

        {/* بخش اصلی */}
        <motion.div
          className="w-full flex flex-col justify-start mt-4 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="lg:w-6/10 xl:w-5/10 sm:flex hidden">
            <div className="w-1/3">
              <motion.h2
                className="text-nowrap font-semibold text-lg sm:text-4xl mt-5"
                variants={itemVariants}
              >
                Browse By Categories
              </motion.h2>
            </div>
          </div>

          {/* Swiper Slider */}
          <motion.div className="w-full mt-4" variants={itemVariants}>
            <Sec3Swiper />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}