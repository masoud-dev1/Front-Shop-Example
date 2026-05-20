import Image from "next/image";

export default function TopHome() {
    return (
        // mother component
        <div className={"bg-stone-950 w-full flex flex-col-3 justify-start  lg:justify-center md:h-10 items-center "}>

             {/*invisible Div*/}
             <div className={"  invisible md:w-3/10 "}>s
             </div>

             {/*/!*Text Center*!/*/}
             <div className={" w-full md:w-4/10 flex flex-col-2 md:justify-center sm:justify-center items-center"}>

                 <span className={" w-10/10 text-white text-nowrap md:text-md text-xs whitespace-normal break-normal"}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className={" font-semibold ms-2 cursor-pointer"}>ShopNow</span></span>

             </div>

             {/*English drop down*/}
             <div className={" w-1/10 md:w-3/10 flex flex-col justify-start"}>
                 <div className={" md:w-2/4 flex flex-col-2 justify-center"}>
                     {/*english*/}
                     <div className={" md:w-6/5 text-center flex justify-end"}>
                         <span className={"text-white text-center text-xs md:text-md md:block hidden"}>English</span>
                     </div>
                     {/*logo drop down*/}
                     <div className={" md:w-2/5 flex items-center "}>
                         <Image src={"/Home/Vector.svg"} alt={'sda'} width={12} //logo
                                height={22}
                                className={"mx-auto"}
                         />
                     </div>
                 </div>
             </div>

        </div>
    )
}