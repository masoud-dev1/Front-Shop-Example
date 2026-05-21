
import Image from "next/image";
import {useState} from "react";

export default function Sec3Slide1(){

    return (
        <div className=" h-50  flex flex-col  rounded-lg px-5 p-10 border border-gray-300 rounded border-2">
            <div className={" w-full flex justify-center"}>
                <Image src={"/Home/Category-Computer.svg"} alt={"cell-phone"} width={88} height={44} className={""}/>
            </div>
            <div className={" w-full"}>
                <h2 className={" text-xl text-center mt-3"}>Computer</h2>
            </div>
        </div>
    )
}