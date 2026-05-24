"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Sec2Slide1() {
  const [add, setAdd] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="h-90 flex flex-col items-center justify-center rounded-lg px-5"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full h-full flex flex-col">
        <motion.div
          className="bg-gray-200 w-full h-14/20 relative rounded-xl overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/Home/1.svg"
            alt="sad"
            width={250}
            height={150}
            className="mx-auto mt-15"
            onMouseEnter={() => setAdd(true)}
            onMouseLeave={() => setAdd(false)}
          />
          <div className="bg-red-500 top-2 left-2 rounded absolute w-12 h-6 text-center cursor-pointer">
            <h2 className="text-white text-sm mt-0.5">50%</h2>
          </div>
          <div className="bg-white top-2 right-2 rounded-full absolute w-8 h-8 flex justify-center items-center shadow-md">
            <Image src="/Home/Like.svg" alt="Like" width={20} height={10} className="cursor-pointer" />
          </div>
          <div className="bg-white top-12 right-2 rounded-full absolute w-8 h-8 flex justify-center items-center shadow-md">
            <Image src="/Home/eye.svg" alt="Like" width={20} height={10} className="cursor-pointer" />
          </div>

          {add && (
            <motion.div
              className="bg-black text-white text-center cursor-pointer bottom-0 w-full h-10 absolute flex justify-center items-center font-semibold"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              Add To Cart
            </motion.div>
          )}
        </motion.div>

        <h2 className="mt-5 text-xs font-semibold">
          Heavi Controller for Gaming Usb
        </h2>
        <div className="flex flex-col-2 mt-3">
          <h2 className="text-sm text-red-600">$130</h2>
          <h2 className="text-sm line-through ms-4 text-gray-600">$160</h2>
        </div>
        <div className="flex items-center mt-3">
          {[...Array(5)].map((_, i) => (
            <Image key={i} src="/Star/Star.png" alt="star" width={22} height={22} className="cursor-pointer" />
          ))}
          <h2 className="text-gray-600 text-sm ms-2">(43)</h2>
        </div>
      </div>
    </motion.div>
  );
}