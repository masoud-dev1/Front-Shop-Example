import Image from "next/image";

export default function HomeNavbar() {
    return (
        <>
            <div className={"sticky top-0 z-50 bg-white xs:bg-white sm:bg-white md:bg-white  lg:w-full flex xs:justify-between xs:px-2 lg:flex-col-4 items-center pt-10 pb-5 border border-b-gray-300 border-r-white border-t-white"}>
                {/*Exclusive left*/}
                {/*add lg:ms-4*/}
                <div className={" md:w-2/10 flex justify-end xs:hidden sm:flex sm:justify-start md:flex md:justify-start lg:flex lg:justify-center lg:ms-4 "}>
                        <h1 className={" font-semibold text-2xl me-4 w-1/4"}>Exclusive</h1>
                </div>
                {/*navbar main*/}
                <div className={" xs:gap-2 xs:pl-2 xs:w-1/2 md:w-4/10 flex md:flex-col-4 md:gap-13 justify-center "}>
                    <div className={" md:w-1/14 text-center cursor-pointer"}>
                        <span className={"text-gray-800 xs:text-xs sm:text-base"}>Home</span>
                    </div>
                    <div className={" md:w-1/14 text-center cursor-pointer"}>
                        <span className={"text-gray-800 xs:text-xs sm:text-base"}>Contact</span>
                    </div>
                    <div className={" md:w-1/14 text-center cursor-pointer"}>
                        <span className={"text-gray-800 xs:text-xs sm:text-base"}>About</span>
                    </div>
                    <div className={" md:w-1/10 text-center cursor-pointer"}>
                        <span className={"text-gray-800 xs:text-xs sm:text-base text-nowrap"}>Sign Up</span>
                    </div>
                </div>
                {/*searchbar*/}
                <div className={"xs:w-2/10 sm:w-2/10 "}>
                    <div className={" relative xs:w-full sm:w-6/7"}>
                        <input type={"search"} className={"focus:outline-none w-full bg-gray-300 xs:h-9 sm:h-10 rounded-md text-start text-sm"} placeholder={""}/>
                        <div className={"absolute right-2 top-1/5"}>
                            <Image src={"/Home/search.svg"} alt={"search"} width={15} height={15} className={" w-full h-full"}/>
                        </div>
                    </div>
                </div>
                {/*profile*/}
                <div className={" w-2/10 flex flex-col-3 gap-6 "}>
                    <div className={" xs:hidden sm:block"}>
                        <Image src={"/Home/Wishlist.svg"} alt={'Whishlist'} width={15} height={15} className={" w-full h-full"}/>
                    </div>
                    <div className={""}>
                        <Image src={"/Home/Cart.svg"} alt={'Whishlist'} width={15} height={15} className={" w-full h-full"}/>
                    </div>
                    <div className={""}>
                        <Image src={"/Home/user.svg"} alt={'Whishlist'} width={15} height={15} className={" w-full h-full"}/>
                    </div>
                </div>
            </div>
        </>
    )
}