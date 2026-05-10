'use client';

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggle} from "@/redux/slice/adminNavbarAnimation";
import Image from "next/image";

export default function Sidebar() {

    const isOpen = useSelector(state => state.adminNavbarAnimation.isOpen);
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState<number>(0);

    return (
        <>

            <div className={`bg-sky-200  h-237 fixed left-0 ease-out transition-all duration-460 ${isOpen ? 'w-6/40' : 'w-1/40'}`}>

                <div className={"bg-green-200 w-full  flex flex-row "}>

                    {/*Toggle (Humborger) open / close*/}
                    <div className={`bg-amber-400  duration-450 ease-in-out w-full h-10 flex items-center ${isOpen ? 'flex-cols-2' : 'flex-col'} justify-between mt-5`}>

                        {isOpen && <div className={"ms-4 "}>
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

                <div className={"bg-gray-400 h-full w-full"}>

                    {/*Dashboarad  [1] */}
                    <div className={"bg-red-300 flex flex-col-2 w-full h-3/50 mt-5"}>
                        <div className={"bg-emerald-100 w-1/10 flex justify-start"}>
                            {clicked === 1 && <div className={"bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl "}></div>}
                        </div>
                        <div className={"bg-emerald-200 w-9/10 flex justify-start"}>
                            <div className={`${clicked === 1 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-center cursor-pointer`} onClick={() => setClicked(1)}>
                                <span className={` ${clicked === 1 ? 'text-white' : 'text-gray-700'} text-lg `}>
                                    Dashboard
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*Products  [2] */}
                    <div className={"bg-red-300 flex flex-col-2 w-full h-3/50"}>
                        <div className={"bg-emerald-100 w-1/10 flex justify-start"}>
                            {clicked === 2 && <div className={"bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl "}></div>}
                        </div>
                        <div className={"bg-emerald-200 w-9/10 flex justify-start"}>
                            <div className={`${clicked === 2 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-center cursor-pointer`} onClick={() => setClicked(2)}>
                                <span className={` ${clicked === 2 ? 'text-white' : 'text-gray-700'} text-lg `}>
                                    Products
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*Favorites [3] */}
                    <div className={"bg-red-300 flex flex-col-2 w-full h-3/50"}>
                        <div className={"bg-emerald-100 w-1/10 flex justify-start"}>
                            {clicked === 3 && <div className={"bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl "}></div>}
                        </div>
                        <div className={"bg-emerald-200 w-9/10 flex justify-start"}>
                            <div className={`${clicked === 3 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-center cursor-pointer`} onClick={() => setClicked(3)}>
                                <span className={` ${clicked === 3 ? 'text-white' : 'text-gray-700'} text-lg `}>
                                    Favorites
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*Inbox  [4] */}
                    <div className={"bg-red-300 flex flex-col-2 w-full h-3/50"}>
                        <div className={"bg-emerald-100 w-1/10 flex justify-start"}>
                            {clicked === 4 && <div className={"bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl "}></div>}
                        </div>
                        <div className={"bg-emerald-200 w-9/10 flex justify-start"}>
                            <div className={`${clicked === 4 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-center cursor-pointer`} onClick={() => setClicked(4)}>
                                <span className={` ${clicked === 4 ? 'text-white' : 'text-gray-700'} text-lg `}>
                                    Inbox
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*Order Lists  [5] */}
                    <div className={"bg-red-300 flex flex-col-2 w-full h-3/50"}>
                        <div className={"bg-emerald-100 w-1/10 flex justify-start"}>
                            {clicked === 5 && <div className={"bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl "}></div>}
                        </div>
                        <div className={"bg-emerald-200 w-9/10 flex justify-start"}>
                            <div className={`${clicked === 5 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-center cursor-pointer`} onClick={() => setClicked(5)}>
                                <span className={` ${clicked === 5 ? 'text-white' : 'text-gray-700'} text-lg `}>
                                    Order Lists
                                </span>
                            </div>
                        </div>
                    </div>

                    {/*Products Stock  [6] */}
                    <div className={"bg-red-300 flex flex-col-2 w-full h-3/50"}>
                        <div className={"bg-emerald-100 w-1/10 flex justify-start"}>
                            {clicked === 6 && <div className={"bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl "}></div>}
                        </div>
                        <div className={"bg-emerald-200 w-9/10 flex justify-start"}>
                            <div className={`${clicked === 6 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-center cursor-pointer`} onClick={() => setClicked(6)}>
                                <span className={` ${clicked === 6 ? 'text-white' : 'text-gray-700'} text-lg `}>
                                    Products Stock
                                </span>
                            </div>
                        </div>
                    </div>

                </div>





            </div>
        </>
    )
}