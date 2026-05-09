'use client';

import Image from "next/image";

export default function Home() {
    return (

        <div className={"bg-slate-100"}>


            {/*Side Bar & Navbar*/}
            <div className={"flex flex-cols-2 "}>

                {/*navbar*/}
                <div className={"bg-white w-34/40 fixed right-0 flex flex-col-2 p-4 justify-between"}>

                    {/*left side*/}
                    <div className={" w-5/10 flex"}>
                        {/*Search Input ....*/}
                        <div className="relative w-22/40 ms-30">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full rounded-full border h-11 border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                            {/* آیکون ذره‌بین (می‌توانید از هر آیکون‌ست مثل Heroicons استفاده کنید) */}
                            <svg
                                className="absolute left-3 top-3 h-4 w-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                    </div>

                    {/*right side*/}
                    <div className={" w-5/10 flex flex-col-5 justify-end "}>
                        {/*notification*/}
                        <div className={" w-3/40 relative flex items-center  me-5"}>
                            <div className={" w-4/5 m-auto flex items-center "}>
                                <Image
                                    src="/Logo/Notification.svg"
                                    alt="sad"
                                    width={24}
                                    height={24}
                                    className={" m-auto mt-1.5 relative"}
                                />
                                <div
                                    className={"absolute bg-pink-600  top-0 rounded-full w-4 h-4 right-4 top-1 flex items-center justify-center"}>
                                    <span className={"text-white text-[13px] font-bold leading-none"}>
                                        6
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*language*/}
                        <div className={" w-8/40 flex flex-col-2 me-7"}>
                           <div className={" w-9/20 flex items-center"}>
                               <Image
                                   src="/Logo/English-Flag.svg"
                                   alt="sad"
                                   width={52}
                                   height={52}
                                   className={""}
                               />
                           </div>
                            <div className={"w-11/20  flex items-center"}>
                                <span className={"text-start  text-gray-600   "}>
                                    English
                                </span>
                                <div className={" ms-3 flex items-center"}>
                                    <Image
                                        src={"/Logo/Drop-Down1.svg"}
                                        alt={"sd"}
                                        width={15}
                                        height={15}
                                    />
                                </div>
                            </div>

                        </div>
                        {/*profle*/}
                        <div className={" w-8/40 flex flex-col-2 items-center"}>
                            <div className={" w-9/20"}>
                                <Image
                                    src={"/Logo/Profile-Picture.svg"}
                                    alt={"d"}
                                    width={50}
                                    height={50}
                                    className={"ms-2"}/>
                            </div>
                            <div className={""}>
                                <p className={"text-gray-700"}>Mony Roy</p>
                                <p className={"text-[12px] text-gray-600"}>Admin</p>
                            </div>
                        </div>
                        {/*end*/}
                        <div className={" w-2/40 flex items-center"}>
                            <Image
                                src={"/Logo/Drop-Down.svg"}
                                alt={"drop-down"}
                                width={23}
                                height={23}
                                className={"m-auto"}
                            />
                        </div>
                    </div>

                </div>

                {/*Side Bar */}
                <div className={"bg-sky-200 w-6/40 h-237 fixed left-0"}>

                </div>
            </div>

            <div className={"h-10000 w-222"}>sd</div>

        </div>


    );
}