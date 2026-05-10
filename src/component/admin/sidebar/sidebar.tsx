'use client';

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggle} from "@/redux/slice/adminNavbarAnimation";
import Image from "next/image";

export default function Sidebar() {
    const isOpen = useSelector(state => state.adminNavbarAnimation.isOpen);
    const dispatch = useDispatch();
    return (
        <>

            <div className={`bg-sky-200 flex  h-237 fixed left-0 ease-out transition-all duration-460 ${isOpen ? 'w-6/40' : 'w-1/40'}`}>

                {/*Toggle (Humborger) open / close*/}
                <div className={`bg-amber-400  duration-450 ease-in-out w-full h-2 flex items-center ${isOpen ? 'flex-cols-2' : 'flex-col'} justify-between mt-5`}>

                    {isOpen && <div className={"bg-green-400 ms-4 "}>
                        <Image
                            src={"/Logo/FigmaName.svg"}
                            alt={"Figma Logo"}
                            width={"200"}
                            height={"60"}
                        />
                    </div>}

                    <button className={`rounded w-10 duration-400 ease-out h-5 ${isOpen ? '' : 'ms-2'}`}
                            onClick={() => dispatch(toggle())}>
                        <Image
                            src={"/Logo/Humborger.png"}
                            alt={'ds'}
                            width={25}
                            height={25}
                        />
                    </button>

                </div>
            </div>
        </>
    )
}