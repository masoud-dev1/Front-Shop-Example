import Section1 from "@/component/app/home/section2/Swiper/sec2-swiper";
import Sec2Swiper from "@/component/app/home/section2/Swiper/sec2-swiper";
import Sec3Swiper from "@/component/app/home/section3/swiper3/sec3swiper";

export default function Section3(){
    return (
        <div className={" w-full mt-40 flex justify-center"}>
            <div className={" w-15/20 flex flex-col justify-start"}>
                {/*first*/}
                <div className={" sm:w-1/4 flex flex-col-2 items-center "}>
                    <div className={"bg-red-700 w-1/15 h-16 rounded-md"}></div>
                    <h2 className={"text-red-700 ms-5"}>Categories</h2>
                </div>
                {/*secend Time*/}
                <div className={" w-full flex flex-col justify-start mt-4 relative"}>
                    {/*div for times*/}
                    <div className={" lg:w-6/10 xl:w-5/10 sm:flex sm:flex-col-2 hidden"}>
                        {/*left*/}
                        <div className={"w-1/3"}>
                            <h2 className={"text-nowrap font-semibold text-lg sm:text-4xl mt-5"}>Browse By Categories</h2>
                        </div>
                        {/*right time*/}
                    </div>

                    {/*Swiper Slider*/}
                    <div className={" w-full mt-8"}>
                        <Sec3Swiper/>
                    </div>
                </div>



            </div>
        </div>
    )
}