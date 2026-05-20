import Image from "next/image";

export default function Sec1Left() {
    return (
        <>
            <div className={" w-1/4 flex flex-col-2 hidden md:flex"}>
                <div className={" hidden lg:flex sm:w-1/3 "}>

                </div>
                <div className={"lg:w-2/3 py-4 w-full flex flex-col pt-10 border-r border-r-gray-200"}>
                    <div className={" flex flex-col-2 cursor-pointer"}>
                        <h2 className={"text-nowrap  w-2/3"}>Womens & Fashion</h2>
                        <div className={" w-1/3 flex flex-row justify-center"}>
                            <Image src={"/Home/Vector1.svg"} alt={"sd"} width={10} height={15}/>
                        </div>
                    </div>
                    <div className={" mt-5 flex flex-col-2 cursor-pointer"}>
                        <h2 className={"text-nowrap  w-2/3"}>Mens & Fashion</h2>
                        <div className={" w-1/3 flex flex-row justify-center"}>
                            <Image src={"/Home/Vector1.svg"} alt={"sd"} width={10} height={15}/>
                        </div>
                    </div>
                    <div className={" mt-5 flex flex-col-2 cursor-pointer"}>
                        <h2 className={"text-nowrap  w-2/3"}>Electronics</h2>
                        <div className={" w-1/3 flex flex-row justify-center"}>
                            <Image src={"/Home/Vector1.svg"} alt={"sd"} width={10} height={15}/>
                        </div>
                    </div>
                    <div className={" mt-5 flex flex-col-2 cursor-pointer"}>
                        <h2 className={"text-nowrap  w-2/3"}>Home & LifeStyle</h2>
                        <div className={" w-1/3 flex flex-row justify-center"}>
                            <Image src={"/Home/Vector1.svg"} alt={"sd"} width={10} height={15}/>
                        </div>
                    </div>
                    <div className={" mt-5 flex flex-col-2 cursor-pointer "}>
                        <h2 className={"text-nowrap  w-2/3"}>Medicine</h2>
                        <div className={" w-1/3 flex flex-row justify-center"}>
                            <Image src={"/Home/Vector1.svg"} alt={"sd"} width={10} height={15}/>
                        </div>
                    </div>
                    <div className={" mt-5 flex flex-col-2 cursor-pointer"}>
                        <h2 className={"text-nowrap  w-2/3"}>Sports & Outdors</h2>
                        <div className={" w-1/3 flex flex-row justify-center"}>
                            {/*<Image src={"/Home/Vector1.svg"} alt={"sd"} width={10} height={15}/>*/}
                        </div>
                    </div>
                    <div className={" mt-5 flex flex-col-2 cursor-pointer"}>
                        <h2 className={"text-nowrap  w-2/3"}>Babys & Toys</h2>
                        <div className={" w-1/3 flex flex-row justify-center"}>
                            {/*<Image src={"/Home/Vector1.svg"} alt={"sd"} width={10} height={15}/>*/}
                        </div>
                    </div>
                    <div className={" mt-5 flex flex-col-2 cursor-pointer"}>
                        <h2 className={"text-nowrap  w-2/3"}>Groceries & Pets</h2>
                        <div className={" w-1/3 flex flex-row justify-center"}>
                            {/*<Image src={"/Home/Vector1.svg"} alt={"sd"} width={10} height={15}/>*/}
                        </div>
                    </div>
                    <div className={" mt-5 flex flex-col-2 cursor-pointer"}>
                        <h2 className={"text-nowrap  w-2/3"}>Health & Beauty</h2>
                        <div className={" w-1/3 flex flex-row justify-center"}>
                            {/*<Image src={"/Home/Vector1.svg"} alt={"sd"} width={10} height={15}/>*/}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}