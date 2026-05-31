"use client";

import HomeNavbar from '@/component/app/home/navbar/home-navbar';
import Footer from '@/component/app/home/footer/footer';
import TopHome from '@/component/app/home/top-off/home-component';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Register() {
  return (
    <>
      <TopHome />
      <HomeNavbar />
      <motion.div
        className="w-full flex flex-col-2 mt-15 mb-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-[#cbe4e9] 2xl:w-24/40 md:flex xs:hidden">
          <Image
            src={'/Home/register/register.svg'}
            alt=""
            width={666}
            height={55}
            className="mx-auto"
          />
        </div>
        <div className="2xl:w-16/40 flex flex-col pt-20 pb-20 pr-40 pl-40">
          <motion.h2
            className="text-4xl font-semibold text-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Create an Account
          </motion.h2>
          <motion.h2
            className="mt-4 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            enter Your Details Blow
          </motion.h2>
          <motion.div
            className="border-b border-b-gray-300 mt-13"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input className="w-full font-semibold focus:outline-none py-2" placeholder="Name" />
          </motion.div>
          <motion.div
            className="border-b border-b-gray-300 mt-13"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input className="w-full font-semibold focus:outline-none py-2" placeholder="Email" />
          </motion.div>
          <motion.div
            className="border-b border-b-gray-300 mt-13"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <input
              className="w-full font-semibold focus:outline-none py-2"
              placeholder="Password"
            />
          </motion.div>
          <motion.div
            className="bg-red-600 mt-13 w-full h-15 rounded items-center flex justify-center cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-white font-semibold">Create Account</h2>
          </motion.div>
          <motion.div
            className="bg-white mt-4 w-full h-15 rounded items-center flex flex-col-2 justify-center border-1 border-gray-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="">
              <Image
                src={'/Home/register/icon-Google.svg'}
                alt={''}
                height={35}
                width={33}
                className="me-5"
              />
            </div>
            <h2 className="font-semibold">Sign Up With Google</h2>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}