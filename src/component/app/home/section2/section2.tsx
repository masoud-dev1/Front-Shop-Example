import Section1 from "@/component/app/home/section2/Swiper/sec2-swiper";
import Sec2Swiper from "@/component/app/home/section2/Swiper/sec2-swiper";

export default function Section2(){
    return (
        <div className={" w-full mt-40 flex justify-center"}>
            <div className={" w-16/20 flex flex-col justify-start"}>
                {/*first*/}
                <div className={" sm:w-1/4 flex flex-col-2 items-center "}>
                    <div className={"bg-red-700 w-1/15 h-16 rounded-md"}></div>
                    <h2 className={"text-red-700 ms-5"}>Todays</h2>
                </div>
                {/*secend Time*/}
                <div className={"bg- w-full flex flex-col justify-start mt-4 relative"}>
                    {/*div for times*/}
                   <div className={" lg:w-6/10 xl:w-5/10 sm:flex sm:flex-col-2 hidden"}>
                       {/*left*/}
                       <div className={"w-1/3"}>
                           <h2 className={"text-nowrap font-semibold text-lg sm:text-4xl mt-5"}>Flash Sales</h2>
                       </div>
                       {/*right time*/}
                       <div className={" md:ms-10 lg:ms-10  w-2/3 flex flex-col-6 justify-start xl:ms-10 sm:ms-10"}>
                           <div className={" w-1/10 flex flex-col items-center justify-center"}>
                               <h2 className={"text-sm"}>Days</h2>
                               <div className={" font-bold text-3xl"}>03</div>
                           </div>
                           <div className={" w-1/20 flex flex-col items-center justify-center"}>
                               <h2 className={" font-bold text-3xl text-red-600  mt-5"}>:</h2>
                           </div>
                           <div className={" w-1/10 flex flex-col items-center justify-center"}>
                               <h2 className={"text-sm"}>Hours</h2>
                               <div className={" font-bold text-3xl"}>25</div>
                           </div>
                           <div className={" w-1/20 flex flex-col items-center justify-center"}>
                               <h2 className={" font-bold text-3xl text-red-600  mt-5"}>:</h2>
                           </div>
                           <div className={" w-1/10 flex flex-col items-center justify-center"}>
                               <h2 className={"text-sm"}>Minutes</h2>
                               <div className={" font-bold text-3xl"}>55</div>
                           </div>
                           <div className={" w-1/20 flex flex-col items-center justify-center"}>
                               <h2 className={" font-bold text-3xl text-red-600  mt-5"}>:</h2>
                           </div>
                           <div className={" w-1/10 flex flex-col items-center justify-center"}>
                               <h2 className={"text-sm"}>Secends</h2>
                               <div className={" font-bold text-3xl"}>15</div>
                           </div>
                       </div>
                   </div>

                    {/*Swiper Slider*/}
                    <div className={" w-full mt-8"}>
                        <Sec2Swiper/>
                    </div>
                </div>

                {/*Thirs Part*/}
                <div className={" w-full mt-10 flex flex-col justify-center items-center text-center"}>
                    <button className={"bg-red-600 w-53 h-13 rounded-md text-white cursor-pointer"}>
                        View All Products
                    </button>
                </div>

            </div>
        </div>
    )
}