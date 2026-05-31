"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section7() {
  // انیمیشن برای عناوین بالا
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // انیمیشن برای کارد چپ (از چپ)
  const leftVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // انیمیشن برای کل بخش راست (از راست)
  const rightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // انیمیشن برای المنت‌های داخلی راست (با کمی استگر)
  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const rightContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full mt-10 md:mt-22 flex justify-center px-4 sm:px-0">
      <div className="w-full sm:w-16/20 flex flex-col justify-start">
        {/* عنوان Featured */}
        <motion.div
          className="sm:w-1/4 flex items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <div className="bg-red-700 w-1/5 sm:w-1/15 h-12 sm:h-16 rounded-md"></div>
          <h2 className="text-red-700 ms-3 sm:ms-5 text-sm sm:text-base">Featured</h2>
        </motion.div>

        {/* عنوان New Arrival */}
        <motion.div
          className="w-full mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <div className="w-full">
            <h2 className="font-semibold text-xl sm:text-4xl mt-3 sm:mt-5 whitespace-normal">
              New Arrival
            </h2>
          </div>
        </motion.div>

        {/* بخش اصلی با دو ستون چپ و راست */}
        <div className="w-full flex flex-col lg:flex-row justify-center mt-6 sm:mt-10 gap-6 lg:gap-4">
          {/* کارد چپ (PlayStation) - از چپ */}
          <motion.div
            className="bg-black w-full lg:w-1/2 flex flex-col justify-center relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftVariants}
          >
            <div className="relative cursor-pointer">
              <Image
                src="/Home/f1.svg"
                alt="ps5"
                width={666}
                height={444}
                className="w-full h-auto"
              />
              <div className="absolute left-0 bottom-0 w-full lg:w-1/2 p-4 sm:p-6 lg:p-10 bg-gradient-to-t from-black/80 to-transparent lg:bg-transparent">
                <h2 className="text-xl sm:text-3xl font-semibold text-white">
                  PlayStation 5
                </h2>
                <p className="text-xs sm:text-sm mt-2 text-white whitespace-normal">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="underline text-white text-sm sm:text-base mt-3 sm:mt-5">
                  Shop Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* بخش راست (زنانه + اسپیکر + عطر) - از راست */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rightVariants}
          >
            {/* Women's Collection */}
            <div className="bg-black w-full relative cursor-pointer">
              <Image
                src="/Home/r.svg"
                alt="women"
                width={777}
                height={214}
                className="w-full h-auto"
              />
              <div className="absolute left-0 bottom-0 w-full md:w-1/2 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent md:bg-transparent">
                <h2 className="text-lg sm:text-2xl font-semibold text-white">
                  Women's Collections
                </h2>
                <p className="text-xs mt-2 text-white whitespace-normal">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="underline text-white text-sm mt-3">
                  Shop Now
                </button>
              </div>
            </div>

            {/* دو کارد کوچک (Speakers & Perfume) با استگر داخلی */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              variants={rightContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="bg-black w-full sm:w-1/2 relative cursor-pointer"
                variants={rightItemVariants}
              >
                <Image
                  src="/Home/lb.svg"
                  alt="speakers"
                  width={444}
                  height={444}
                  className="w-full h-auto"
                />
                <div className="absolute left-0 bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-xl font-semibold text-white">Speakers</h2>
                  <p className="text-xs mt-1 text-white">Amazon wireless speakers</p>
                  <button className="underline text-white text-sm mt-2">Shop Now</button>
                </div>
              </motion.div>

              <motion.div
                className="bg-black w-full sm:w-1/2 relative cursor-pointer"
                variants={rightItemVariants}
              >
                <Image
                  src="/Home/rb.svg"
                  alt="perfume"
                  width={444}
                  height={444}
                  className="w-full h-auto"
                />
                <div className="absolute left-0 bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-xl font-semibold text-white">Perfume</h2>
                  <p className="text-xs mt-1 text-white">GUCCI INTENSE OUD EDP</p>
                  <button className="underline text-white text-sm mt-2">Shop Now</button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}