"use client";

import Image from "next/image";
import {useState} from "react";

export default function Sec2Slide1(){

    const [add , setAdd] = useState(false);

    return (
        <div className="h-90  flex flex-col items-center justify-center rounded-lg px-5">
            <div className={" w-full h-full flex flex-col"}>
                {/*image*/}
                <div className={"bg-gray-200 w-full h-14/20 relative"}>
                    <Image src={"/Home/1.svg"} alt={"sad"} width={277} height={277}
                           className={"w-full h-full "} onMouseEnter={() => setAdd(true)} onMouseLeave={() => setAdd(false)} />
                    <div className={"bg-red-500 top-2 left-2 rounded absolute w-12 h-6 text-center cursor-pointer"}>
                        <h2 className={"text-white text-sm mt-0.5"}>50%</h2>
                    </div>
                    {/*Like Absolute*/}
                    <div className={"bg-white top-2 right-2 rounded-full absolute w-8 h-8 text-center  flex justify-center items-center"}>
                        <Image src={"/Home/Like.svg"} alt={"Like"} width={20} height={10} className={"cursor-pointer"} />
                    </div>
                    {/*Eye Absolute*/}
                    <div className={"bg-white top-12 right-2 rounded-full absolute w-8 h-8 text-center  flex justify-center items-center"}>
                        <Image src={"/Home/eye.svg"} alt={"Like"} width={20} height={10} className={"cursor-pointer"} />
                    </div>

                    {add === true ?
                        <div className={"bg-black text-center cursor-pointer text-white bottom-0 w-full h-10  absolute text-center  flex justify-center items-center font-semibold"} onMouseEnter={() => setAdd(true)} onMouseLeave={() => setAdd(false)}>
                            Add To Cart
                        </div>
                        : null}

                </div>
                {/*name product*/}
                <h2 className={" mt-5 text-xs font-semibold"}>
                    Heavi Controller for Gamin Usb
                </h2>
                {/*price*/}
                <div className={" flex flex-col-2 mt-3"}>
                    <h2 className={" text-sm text-red-600"}>
                        $130
                    </h2>
                    <h2 className={" text-sm line-through ms-4 text-gray-600"}>
                        $160
                    </h2>
                </div>
                {/*start*/}
                <div className={" flex flex-col-2 mt-3"}>
                    <Image src={"/Star/Star.png"} alt={"star"} width={22} height={22} className={"cursor-pointer"} />
                    <Image src={"/Star/Star.png"} alt={"star"} width={22} height={22} className={"cursor-pointer"} />
                    <Image src={"/Star/Star.png"} alt={"star"} width={22} height={22} className={"cursor-pointer"} />
                    <Image src={"/Star/Star.png"} alt={"star"} width={22} height={22} className={"cursor-pointer"} />
                    <Image src={"/Star/Star.png"} alt={"star"} width={22} height={22} className={"cursor-pointer"} />
                    <h2 className={"text-gray-600 text-sm"}>(43)</h2>
                </div>
            </div>

        </div>
    )
}