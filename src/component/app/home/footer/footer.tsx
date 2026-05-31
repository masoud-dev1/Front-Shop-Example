"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
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
    <div className="bg-black w-full flex justify-center mt-20 md:mt-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto py-10 md:pt-30 md:pb-15">
        {/* گرید متحرک */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* ستون ۱: Exclusive + Subscribe */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h2 className="font-semibold text-xl sm:text-2xl text-white">Exclusive</h2>
            <h3 className="mt-4 text-lg text-white font-medium">Subscribe</h3>
            <p className="mt-2 text-sm text-gray-300">Get 10% off your first order</p>

            {/* فرم ایمیل با آیکون ارسال */}
            <div className="relative w-full max-w-[220px] mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-10 px-3 pr-10 bg-transparent border border-gray-400 rounded-md text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-white"
              />
              <div className="absolute inset-y-0 right-2 flex items-center cursor-pointer">
                <Image
                  src="/icon-send.svg"
                  alt="send"
                  width={20}
                  height={20}
                  className="opacity-80 hover:opacity-100 transition"
                />
              </div>
            </div>
          </motion.div>

          {/* ستون ۲: Support */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h2 className="font-semibold text-xl sm:text-2xl text-white">Support</h2>
            <address className="not-italic mt-5 text-white text-sm sm:text-base">
              Iran, Tehran, Vanak, VK Square, No. 44
            </address>
            <a
              href="mailto:exclusive@gmail.com"
              className="mt-3 text-white text-sm sm:text-base hover:underline"
            >
              exclusive@gmail.com
            </a>
            <a
              href="tel:+888811232132143"
              className="mt-3 text-white text-sm sm:text-base hover:underline"
            >
              +88881-123213-32143
            </a>
          </motion.div>

          {/* ستون ۳: Account */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h2 className="font-semibold text-xl sm:text-2xl text-white">Account</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="#" className="text-white text-sm sm:text-base hover:underline">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm sm:text-base hover:underline">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm sm:text-base hover:underline">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm sm:text-base hover:underline">
                  Wishlist
                </a>
              </li>
            </ul>
          </motion.div>

          {/* ستون ۴: Quick Link */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h2 className="font-semibold text-xl sm:text-2xl text-white">Quick Link</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="#" className="text-white text-sm sm:text-base hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm sm:text-base hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm sm:text-base hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-sm sm:text-base hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* ستون ۵: دانلود اپ و شبکه‌های اجتماعی */}
          <motion.div className="flex flex-col" variants={itemVariants}>
            <h2 className="font-semibold text-xl sm:text-2xl text-white">Get App</h2>
            <p className="text-gray-300 text-sm mt-2">Save $3 with App New User Only</p>

            {/* QR + App Store buttons */}
            <div className="flex flex-row flex-wrap items-center gap-4 mt-2">
              <div className="w-[80px] h-[80px] bg-white p-1 rounded-lg">
                <Image
                  src="/Home/qr.svg"
                  alt="QR code"
                  width={80}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  src="/Home/google.svg"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="cursor-pointer"
                />
                <Image
                  src="/Home/appstore.svg"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {/* شبکه‌های اجتماعی */}
            <div className="flex gap-4 mt-3">
              <a href="#" aria-label="Facebook">
                <Image
                  src="/Home/11.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                  className="hover:opacity-80"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <Image
                  src="/Home/12.svg"
                  alt="twitter"
                  width={14}
                  height={14}
                  className="hover:opacity-80"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <Image
                  src="/Home/13.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                  className="hover:opacity-80"
                />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Image
                  src="/Home/14.svg"
                  alt="linkedin"
                  width={24}
                  height={24}
                  className="hover:opacity-80"
                />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}