"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sec1Left() {
  // انیمیشن از سمت چپ با سرعت بیشتر
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="w-1/4 flex flex-col-2 hidden md:flex"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.4, ease: "easeOut" }}   // ← کاهش زمان به 0.4 ثانیه
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* بقیه محتوا بدون تغییر */}
      <div className="hidden lg:flex sm:w-1/3"></div>

      <div className="lg:w-2/3 py-4 w-full flex flex-col pt-10 border-r border-r-gray-200">
        <div className="flex flex-col-2 cursor-pointer">
          <h2 className="text-nowrap w-2/3">Womens & Fashion</h2>
          <div className="w-1/3 flex flex-row justify-center">
            <Image src="/Home/Vector1.svg" alt="sd" width={10} height={15} />
          </div>
        </div>
        <div className="mt-5 flex flex-col-2 cursor-pointer">
          <h2 className="text-nowrap w-2/3">Mens & Fashion</h2>
          <div className="w-1/3 flex flex-row justify-center">
            <Image src="/Home/Vector1.svg" alt="sd" width={10} height={15} />
          </div>
        </div>
        <div className="mt-5 flex flex-col-2 cursor-pointer">
          <h2 className="text-nowrap w-2/3">Electronics</h2>
          <div className="w-1/3 flex flex-row justify-center">
            <Image src="/Home/Vector1.svg" alt="sd" width={10} height={15} />
          </div>
        </div>
        <div className="mt-5 flex flex-col-2 cursor-pointer">
          <h2 className="text-nowrap w-2/3">Home & LifeStyle</h2>
          <div className="w-1/3 flex flex-row justify-center">
            <Image src="/Home/Vector1.svg" alt="sd" width={10} height={15} />
          </div>
        </div>
        <div className="mt-5 flex flex-col-2 cursor-pointer">
          <h2 className="text-nowrap w-2/3">Medicine</h2>
          <div className="w-1/3 flex flex-row justify-center">
            <Image src="/Home/Vector1.svg" alt="sd" width={10} height={15} />
          </div>
        </div>
        <div className="mt-5 flex flex-col-2 cursor-pointer">
          <h2 className="text-nowrap w-2/3">Sports & Outdors</h2>
          <div className="w-1/3 flex flex-row justify-center">{/*<Image ... />*/}</div>
        </div>
        <div className="mt-5 flex flex-col-2 cursor-pointer">
          <h2 className="text-nowrap w-2/3">Babys & Toys</h2>
          <div className="w-1/3 flex flex-row justify-center">{/*<Image ... />*/}</div>
        </div>
        <div className="mt-5 flex flex-col-2 cursor-pointer">
          <h2 className="text-nowrap w-2/3">Groceries & Pets</h2>
          <div className="w-1/3 flex flex-row justify-center">{/*<Image ... />*/}</div>
        </div>
        <div className="mt-5 flex flex-col-2 cursor-pointer">
          <h2 className="text-nowrap w-2/3">Health & Beauty</h2>
          <div className="w-1/3 flex flex-row justify-center">{/*<Image ... />*/}</div>
        </div>
      </div>
    </motion.div>
  );
}