"use client";

import { motion } from "framer-motion";
import Sec6Swiper from "@/component/app/home/section6/swiper/sec6swiper";

export default function Section6() {
  // انیمیشن برای المان‌های تکی (دقیقاً مشابه Section3)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // انیمیشن برای کانتینر با استگر چیلدرن (دقیقاً مشابه Section3)
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
    <div className="w-full mt-166 flex justify-center">
      <div className="w-16/20 flex flex-col justify-start">
        {/* بخش عنوان */}
        <motion.div
          className="sm:w-1/4 flex items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <div className="bg-red-700 w-1/15 h-16 rounded-md"></div>
          <h2 className="text-red-700 ms-5">Our Products</h2>
        </motion.div>

        {/* بخش اصلی با Swiper */}
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
                Explore Our Products
              </motion.h2>
            </div>
            {/* راست خالی (در صورت نیاز) */}
          </div>

          {/* Swiper Slider با انیمیشن تکی */}
          <motion.div className="w-full mt-8" variants={itemVariants}>
            <Sec6Swiper />
          </motion.div>
        </motion.div>

        {/* بخش سوم - دکمه View All Products */}
        <motion.div
          className="w-full mt-10 flex flex-col justify-center items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <button className="bg-red-600 w-53 h-13 rounded-md text-white cursor-pointer">
            View All Products
          </button>
        </motion.div>
      </div>
    </div>
  );
}