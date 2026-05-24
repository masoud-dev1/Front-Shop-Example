"use client";

import Section1 from "@/component/app/home/section2/Swiper/sec2-swiper";
import Sec2Swiper from "@/component/app/home/section2/Swiper/sec2-swiper";
import { motion } from "framer-motion";

export default function Section2() {
  // انیمیشن اصلی کل بخش (ظاهر شدن از پایین)
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // انیمیشن بچه‌ها (عنوان، تایمر، اسلایدر، دکمه) با تاخیر پله‌ای
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full mt-40 flex justify-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-16/20 flex flex-col justify-start">
        {/* first - عنوان "Today's" با پس‌زمینه قرمز */}
        <motion.div
          className="sm:w-1/4 flex items-center"
          variants={childVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-red-700 w-1/15 h-16 rounded-md"></div>
          <h2 className="text-red-700 ms-5">Todays</h2>
        </motion.div>

        {/* second - تایمر و اسلایدر */}
        <motion.div
          className="w-full flex flex-col justify-start mt-4 relative"
          variants={childVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* div for times */}
          <div className="lg:w-6/10 xl:w-5/10 sm:flex hidden">
            {/* left */}
            <div className="w-1/3">
              <h2 className="text-nowrap font-semibold text-lg sm:text-4xl mt-5">
                Flash Sales
              </h2>
            </div>
            {/* right time */}
            <div className="md:ms-10 lg:ms-10 w-2/3 flex justify-start xl:ms-10 sm:ms-10">
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
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="w-full mt-8">
            <Sec2Swiper />
          </div>
        </motion.div>

        {/* Third Part - دکمه View All Products با انیمیشن */}
        <motion.div
          className="w-full mt-10 flex justify-center items-center text-center"
          variants={childVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            className="bg-red-600 w-53 h-13 rounded-md text-white cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: "#b91c1c" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}