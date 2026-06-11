"use client";

import TopHome from "@/component/app/home/top-off/home-component";
import HomeNavbar from "@/component/app/home/navbar/home-navbar";
import Footer from "@/component/app/home/footer/footer";
import Image from "next/image";
import {useState} from "react";

export default function Checkout(){

    const [selectBank , setSelectBank] = useState("bank");

    return (
        <>
            <TopHome />
            {/*Navbar*/}
            <HomeNavbar />
                <div className="md:flex md:flex-row-2 mx-auto mt-40 w-full  md:w-17/20 md:px-19 p-2">
                    <div className={" w-full md:w-1/2 flex flex-col h-full"}>
                        <h2 className={"text-4xl"}>Billing Details</h2>
                        <p className={" mt-10"}>First Name</p>
                        <input type={"text"} className={"w-5/6 h-full bg-gray-300 px-6 py-5 mt-3 focus:outline-none rounded-md"} />
                        <p className={" mt-7"}>Company Name</p>
                        <input type={"text"} className={"w-5/6 h-full bg-gray-300 px-6 py-5 mt-3 focus:outline-none rounded-md"} />
                        <p className={" mt-7"}>Street Address</p>
                        <input type={"text"} className={"w-5/6 h-full bg-gray-300 px-6 py-5 mt-3 focus:outline-none rounded-md"} />
                        <p className={" mt-7"}>Aoartment ,floor, etc (optional)</p>
                        <input type={"text"} className={"w-5/6 h-full bg-gray-300 px-6 py-5 mt-3 focus:outline-none rounded-md"} />
                        <p className={" mt-7"}>Town/City</p>
                        <input type={"text"} className={"w-5/6 h-full bg-gray-300 px-6 py-5 mt-3 focus:outline-none rounded-md"} />
                        <p className={" mt-7"}>Phone Number</p>
                        <input type={"text"} className={"w-5/6 h-full bg-gray-300 px-6 py-5 mt-3 focus:outline-none rounded-md"} />
                        <p className={" mt-7"}>Email Address</p>
                        <input type={"text"} className={"w-5/6 h-full bg-gray-300 px-6 py-5 mt-3 focus:outline-none rounded-md"} />
                        <div className={" w-full flex flex-row-2 h-full mt-6"}>
                            <input type={"checkbox"} className={"w-7 h-7"}/>
                            <span className={"ms-4 my-auto"}>save this information for faster check-out next time</span>
                        </div>
                    </div>
                    <div className={" w-full  md:w-1/2  flex flex-col"}>
                       <div className={" md:w-full lg:w-14/20 flex flex-row-2 mt-20"}>
                           <Image src={'/Home/1.svg'} alt={"ads"} width={77} height={77} className={""}/>
                           <h2 className={"ms-10 my-auto"}>Key boad kb216</h2>
                           <h2 className={"ml-auto my-auto"}>$650</h2>
                       </div>
                        <div className={" md:w-full lg:w-14/20 flex flex-row-2 mt-5"}>
                           <Image src={'/Home/1.svg'} alt={"ads"} width={77} height={77} className={""}/>
                           <h2 className={"ms-10 my-auto"}>Key boad kb216</h2>
                           <h2 className={"ml-auto my-auto "}>$650</h2>
                       </div>
                        <div className={" flex flex-row-2 justify-between mt-5 md:w-full lg:w-14/20 border-b border-gray-400 py-3"}>
                            <div>subtotal:</div>
                            <div>$1750</div>
                        </div>
                        <div className={" flex flex-row-2 justify-between mt-5 md:w-full lg:w-14/20 border-b border-gray-400 py-3"}>
                            <div>shipping:</div>
                            <div>free</div>
                        </div>
                        <div className={" flex flex-row-2 justify-between mt-5 md:w-full lg:w-14/20"}>
                            <div>Total:</div>
                            <div>$1750</div>
                        </div>

                        {/*Radio*/}
                        <div className={" flex flex-row-2 md:w-full lg:w-14/20 mt-10"}>
                            <div className={" w-1/2 flex flex-col"}>
                                <div className={" flex flex-row-2"}>
                                    <input type={"radio"} className={"w-5 h-5 "}
                                    name = "bank" value={"bank"} checked={selectBank === "bank"} onChange={(e)=>setSelectBank(e.target.value)} />
                                    <span className={"mx-auto my-auto ms-3 text-nowrap"}>Bank</span>
                                </div>
                                <div className={" mt-3 "}>
                                    <input type={"radio"} className={"w-5 h-5 "}
                                    name = "bank" value={"cash"} checked={selectBank === "cash"} onChange={(e)=>setSelectBank(e.target.value)} />
                                    <span className={"mx-auto my-auto ms-3   "}>Cash Or Delivary</span>
                                </div>
                            </div>
                            <div className={" w-1/2 flex flex-row"}>
                                {/*<Image src={"/Bank/Bkash.png"} alt={"sad"} width={10} height={20}/>*/}
                                {/*<Image src={"/Bank/Visa.png"} alt={"sad"} width={10} height={20}/>*/}
                                {/*<Image src={"/Bank/Naghd.png"} alt={"sad"} width={10} height={20}/>*/}
                            </div>
                        </div>

                        <div className={" flex flex-row-2 w-full mt-10"}>
                            <input type={"text"} className={"w-9/20  h-15 rounded-md border-2 border-gray-500 p-2 "} placeholder={"coupon code"}/>
                            <button className={"bg-red-600 w-6/20 ms-10 rounded-md p-3 text-white cursor-pointer"}>
                                Apply Coupon
                            </button>
                        </div>

                        <button className={"bg-red-600 w-5/20 h-15 rounded-md p-3 text-white mt-9 cursor-pointer"}>
                            Place Order
                        </button>
                    </div>
                </div>
            <Footer/>
        </>
    )
}