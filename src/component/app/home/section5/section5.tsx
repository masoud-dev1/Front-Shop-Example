"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section5() {
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
    <div className="w-full h-1 flex justify-center mt-30">
      <motion.div
        className="bg-gray-800 sm:w-16/20 md:h-130 h-110 flex flex-col-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* بخش چپ */}
        <div className="w-1/2 flex flex-col pl-26 py-16">
          <motion.h2
            className="text-green-500 font-semibold"
            variants={itemVariants}
          >
            Categories
          </motion.h2>
          <motion.h2
            className="text-white md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold pt-6"
            variants={itemVariants}
          >
            Enhance Your
          </motion.h2>
          <motion.h2
            className="text-white md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold pt-3"
            variants={itemVariants}
          >
            Music Experience
          </motion.h2>

          {/* دایره‌های شمارنده */}
          <motion.div
            className="flex flex-col-4 gap-4 pt-8 pb-12"
            variants={itemVariants}
          >
            <div className="bg-blue bg-white rounded-full w-16 h-16 flex flex-col cursor-pointer">
              <div className="mx-auto my-auto text-center">
                <h2 className="text-sm font-semibold">23</h2>
                <h2 className="text-[10px] pb-1">Hours</h2>
              </div>
            </div>
            <div className="bg-blue bg-white rounded-full w-16 h-16 flex flex-col cursor-pointer">
              <div className="mx-auto my-auto text-center">
                <h2 className="text-sm font-semibold">05</h2>
                <h2 className="text-[10px] pb-1">Days</h2>
              </div>
            </div>
            <div className="bg-blue bg-white rounded-full w-16 h-16 flex flex-col cursor-pointer">
              <div className="mx-auto my-auto text-center">
                <h2 className="text-sm font-semibold">59</h2>
                <h2 className="text-[10px] pb-1">Minuets</h2>
              </div>
            </div>
            <div className="bg-blue bg-white rounded-full w-16 h-16 flex flex-col cursor-pointer">
              <div className="mx-auto my-auto text-center">
                <h2 className="text-sm font-semibold">35</h2>
                <h2 className="text-[10px] pb-1">Secends</h2>
              </div>
            </div>
          </motion.div>

          {/* دکمه خرید */}
          <motion.div variants={itemVariants}>
            <div className="bg-green-500 w-20 h-10 md:w-50 md:h-17 rounded text-center items-center flex cursor-pointer hover:bg-green-700 duration-75">
              <h2 className="text-white m-auto font-semibold md:text-lg text-xs">
                Buy Now!
              </h2>
            </div>
          </motion.div>
        </div>

        {/* بخش راست (تصویر) */}
        <motion.div className="w-1/2" variants={itemVariants}>
          <Image
            src="/Home/jbl.svg"
            alt="sd"
            width={640}
            height={121}
            className="mx-auto pt-17"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}