import Image from "next/image";

export default function ProductSlideAdmin(){
    return(
        <>
            <div className={" w-full h-full rounded-2xl flex flex-col"}>
                {/*product image*/}
                <div className={" h-6/10 w-full"}>
                    <Image src={"/Picture/macbook.webp"} alt={"producy-i,age"} width={444} height={0}
                           className={"rounded-tl-2xl rounded-tr-2xl w-full h-full"}
                    />
                </div>

                <div className={"  pl-6 w-full h-full flex flex-col-2"}>
                    {/*Title*/}
                    <div className={" w-3/4 h-full flex flex-col"}>
                        <span className={"  text-gray-800  block text-nowrap"}>Apple Macbook M4 Pro</span>
                        <span className={" text-blue-500 block text-sm"}>$2500</span>
                        <div className={" w-full flex flex-col-2"}>
                            <div className={" flex flex-col-2 w-5/6 mt-2"}>
                                {/*Star Components*/}
                                <div className={" w-3/4 flex flex-col-5"}>
                                    <Image src={"/Star/Star.png"} alt={"Star"}
                                           width={111} height={111}
                                           className={"w-4 h-4"}
                                    />
                                    <Image src={"/Star/Star.png"} alt={"Star"}
                                           width={111} height={111}
                                           className={"w-4 h-4 cursor-pointer"}
                                    />
                                    <Image src={"/Star/Star.png"} alt={"Star"}
                                           width={111} height={111}
                                           className={"w-4 h-4 cursor-pointer"}
                                    />
                                    <Image src={"/Star/Star.png"} alt={"Star"}
                                           width={111} height={111}
                                           className={"w-4 h-4 cursor-pointer"}
                                    />
                                    <Image src={"/Star/gray-star.png"} alt={"Star"}
                                           width={111} height={111}
                                           className={"w-4 h-4 cursor-pointer"}
                                    />
                                </div>
                                <div className={" w-1/4"}>
                                    <span className={"text-gray-500 text-sm"}>(143)</span>
                                </div>
                            </div>

                        </div>

                        <div className={" w-full h-full flex flex-row items-center"}>
                            <button className={"bg-blue-100 w-[60%] h-[46%] rounded-xl text-nowrap h-4 text-gray-800 cursor-pointer text-sm"}>
                                Edit Product
                            </button>
                        </div>
                    </div>

                    {/*like*/}
                    <div className={"pr-3 w-1/4 h-full flex flex-col"}>
                        {/*invisble like*/}
                        <div className={" w-full items-center flex justify-center flex-row invisible"}>
                            <div>
                                <Image src={'/Picture/love-it.png'} alt={'love-it'}
                                       width={22} height={22}
                                />
                            </div>
                        </div>
                        {/*Real Like*/}
                        <div className={" w-full items-center flex justify-center flex-row"}>
                            <div className={"bg-gray-200 w-7 h-7 flex items-center justify-center rounded-full cursor-pointer"}>
                                <Image src={'/Picture/love-it.png'} alt={'love-it'}
                                       width={11} height={11}
                                       className={"w-3 h-3"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}