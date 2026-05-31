"use client";

import { motion } from "framer-motion";
import Sec2Swiper from "@/component/app/home/section2/Swiper/sec2-swiper";

export default function Section2() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

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
    <div className="w-full mt-40 flex justify-center">
      <div className="w-16/20 flex flex-col justify-start">
        {/* بخش عنوان "Today's" */}
        <motion.div
          className="sm:w-1/4 flex items-center"
          initial="hidden"
          animate="visible"   // ← تغییر از whileInView به animate
          variants={itemVariants}
        >
          <div className="bg-red-700 w-1/15 h-16 rounded-md"></div>
          <h2 className="text-red-700 ms-5">Todays</h2>
        </motion.div>

        {/* بخش اصلی با تایمر و اسلایدر */}
        <motion.div
          className="w-full flex flex-col justify-start mt-4 relative"
          initial="hidden"
          animate="visible"   // ← تغییر از whileInView به animate
          variants={containerVariants}
        >
          <div className="lg:w-6/10 xl:w-5/10 sm:flex hidden">
            <div className="w-1/3">
              <motion.h2
                className="text-nowrap font-semibold text-lg sm:text-4xl mt-5"
                variants={itemVariants}
              >
                Flash Sales
              </motion.h2>
            </div>
            <motion.div
              className="md:ms-10 lg:ms-10 w-2/3 flex justify-start xl:ms-10 sm:ms-10"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-sm">Days</h2>
                <div className="font-bold text-3xl">03</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-bold text-3xl text-red-600 mt-5">:</h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-sm">Hours</h2>
                <div className="font-bold text-3xl">25</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-bold text-3xl text-red-600 mt-5">:</h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-sm">Minutes</h2>
                <div className="font-bold text-3xl">55</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-bold text-3xl text-red-600 mt-5">:</h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-sm">Seconds</h2>
                <div className="font-bold text-3xl">15</div>
              </div>
            </motion.div>
          </div>

          <motion.div className="w-full mt-8" variants={itemVariants}>
            <Sec2Swiper />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full mt-10 flex justify-center items-center text-center"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <button className="bg-red-600 w-53 h-13 rounded-md text-white cursor-pointer hover:bg-red-700 transition">
            View All Products
          </button>
        </motion.div>
      </div>
    </div>
  );
}