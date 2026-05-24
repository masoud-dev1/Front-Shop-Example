"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Section8() {
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
    <div className="w-full mt-10 md:mt-40 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* گرید متحرک */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* کارت اول */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <Image
                  src="/Home/sec9/icon-delivery.svg"
                  alt="Free delivery"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-base sm:text-lg">Free And Fast Delivery</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Free delivery for all orders over $140
              </p>
            </div>
          </motion.div>

          {/* کارت دوم */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <Image
                  src="/Home/sec9/icon-customer.svg"
                  alt="24/7 customer service"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-base sm:text-lg">24/7 CUSTOMER SERVICE</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Friendly 24/7 customer support
              </p>
            </div>
          </motion.div>

          {/* کارت سوم */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <Image
                  src="/Home/sec9/icon-secure.svg"
                  alt="Money back guarantee"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-base sm:text-lg">MONEY BACK GUARANTEE</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We return money within 30 days
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}