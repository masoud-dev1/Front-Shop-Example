"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Sec3Slide() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className=" h-50 flex flex-col rounded-lg px-5 p-10 border border-gray-300 rounded border-2 cursor-pointer"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-full flex justify-center">
        <Image
          src="/Home/Category-Gamepad.svg"
          alt="cell-phone"
          width={88}
          height={44}
        />
      </div>
      <div className="w-full">
        <h2 className="text-xl text-center mt-3">Phones</h2>
      </div>
    </motion.div>
  );
}