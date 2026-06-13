"use client"

import TopHome from "@/component/app/home/top-off/home-component";
import HomeNavbar from "@/component/app/home/navbar/home-navbar";
import Footer from "@/component/app/home/footer/footer";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { useState } from "react";

export default function ProductPage() {
    const [size, setSize] = useState("M");
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1);
    };

    return (
        <>
            <TopHome />
            <HomeNavbar />

            <div className="w-full mt-20">
                <div className="w-[80%] mx-auto flex flex-col lg:flex-row">

                    {/* left - تصاویر کوچک - ارتفاع برابر با center */}
                    <div className="w-full lg:w-2/10 h-auto lg:h-[64vh] flex flex-row lg:flex-col gap-4 lg:justify-between">
                        <div className="relative flex-1 min-h-0 w-[200px] lg:w-full cursor-pointer">
                            <Image src="/product/1111.svg" alt="product" fill className="object-contain" />
                        </div>
                        <div className="relative flex-1 min-h-0 w-[200px] lg:w-full cursor-pointer">
                            <Image src="/product/1111.svg" alt="product" fill className="object-contain" />
                        </div>
                        <div className="relative flex-1 min-h-0 w-[200px] lg:w-full cursor-pointer">
                            <Image src="/product/1111.svg" alt="product" fill className="object-contain" />
                        </div>
                        <div className="relative flex-1 min-h-0 w-[200px] lg:w-full cursor-pointer">
                            <Image src="/product/1111.svg" alt="product" fill className="object-contain" />
                        </div>
                    </div>

                    {/* center - تصویر اصلی */}
                    <div className=" w-full lg:w-4/10">
                        <div className="relative w-full h-[64vh] cursor-pointer">
                            <Image src="/product/2222.svg" alt="main" fill className="object-cover" />
                        </div>
                    </div>

                    {/* right - جزئیات محصول (دست نخورده) */}
                    <div className="w-full lg:w-4/10 px-10 flex flex-col">
                        <h2 className="text-2xl font-semibold">Havic HV G932 Gamepad</h2>

                        <div className="flex items-center mt-3">
                            <div className="flex">
                                <FaStar className="text-yellow-400 ms-1" size="1.3em" />
                                <FaStar className="text-yellow-400 ms-1" size="1.3em" />
                                <FaStar className="text-yellow-400 ms-1" size="1.3em" />
                                <FaStar className="text-yellow-400 ms-1" size="1.3em" />
                                <FaStar className="text-gray-400 ms-1" size="1.3em" />
                            </div>
                            <div className="ms-6 text-gray-600">(150 review)</div>
                            <div className="ms-6 border-l border-gray-500 pl-4 text-green-600">In Stock</div>
                        </div>

                        <h3 className="text-2xl mt-3">$192.00</h3>

                        <p className="mt-4 pb-6 border-b border-gray-400">
                            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                        </p>

                        <div className="mt-5 flex items-center">
                            <h2 className="text-xl">Colours:</h2>
                            <div className="flex items-center">
                                <div className="flex gap-4 ms-7">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="myColor" value="red" className="appearance-none w-6 h-6 rounded-full border-2 border-red-600 bg-red-500 checked:bg-red-600 checked:border-red-600 relative before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:bg-white checked:before:bg-red-600" />
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="myColor" value="blue" className="appearance-none w-6 h-6 rounded-full border-2 border-blue-600 bg-blue-500 checked:bg-blue-600 checked:border-blue-600 relative before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:bg-white checked:before:bg-blue-600" />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center">
                            <h2 className="text-xl">Size:</h2>
                            <div className={`${size === "XS" ? "bg-red-500 text-white" : "bg-white"} px-2 py-1 ms-6 rounded border-2 cursor-pointer my-auto border-gray-400`} onClick={() => setSize("XS")}>XS</div>
                            <div className={`${size === "S" ? "bg-red-500 text-white" : "bg-white"} px-2 py-1 ms-6 rounded border-2 cursor-pointer my-auto border-gray-400`} onClick={() => setSize("S")}>S</div>
                            <div className={`${size === "M" ? "bg-red-500 text-white" : "bg-white"} px-2 py-1 ms-6 rounded border-2 cursor-pointer my-auto border-gray-400`} onClick={() => setSize("M")}>M</div>
                            <div className={`${size === "L" ? "bg-red-500 text-white" : "bg-white"} px-2 py-1 ms-6 rounded border-2 cursor-pointer my-auto border-gray-400`} onClick={() => setSize("L")}>L</div>
                            <div className={`${size === "XL" ? "bg-red-500 text-white" : "bg-white"} px-2 py-1 ms-6 rounded border-2 cursor-pointer my-auto border-gray-400`} onClick={() => setSize("XL")}>XL</div>
                        </div>

                        <div className="mt-6 flex items-center gap-6">
                            <div className="bg-white w-4/10 flex rounded border-2 border-gray-400">
                                <button className="w-5/20 text-center text-3xl p-1 border-r-2 border-gray-400 cursor-pointer" onClick={handleQuantityChange}>-</button>
                                <div className="w-10/20 text-center text-xl my-auto">{quantity}</div>
                                <button className="bg-red-600 text-white w-5/20 text-center text-3xl p-1 border-l-2 border-gray-400 cursor-pointer" onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <button className="bg-red-600 w-4/10 rounded text-white cursor-pointer py-2">Buy Now</button>
                            <div className="bg-white w-1/10 rounded border-2 border-gray-400 flex justify-center items-center cursor-pointer p-2">
                                <FaRegHeart size="1.6em" />
                            </div>
                        </div>

                        <div className="w-full rounded border-2 border-gray-400 flex flex-col mt-6">
                            <div className="flex border-b border-gray-400">
                                <div className="w-1/4 flex justify-center items-center">
                                    <CiDeliveryTruck size="3em" />
                                </div>
                                <div className="w-3/4 flex flex-col p-5">
                                    <h2 className="font-semibold">Free Delivery</h2>
                                    <h2 className="text-sm">Enter Your Postal code for delivery Available</h2>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-1/4 flex justify-center items-center">
                                    <GiReturnArrow size="3em" />
                                </div>
                                <div className="w-3/4 flex flex-col p-5">
                                    <h2 className="font-semibold">Return Delivery</h2>
                                    <h2 className="text-sm">Enter Your Postal code for delivery Available</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}