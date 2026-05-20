import HomeSwiper from "@/component/app/home/section1/right/swipper/home-swiper";

export default function Sec1Right() {
    return (

            <div className={"w-full md:w-3/4 flex lg:flex-col-2 h-108"}>
                <div className={"  w-full 2xl:w-9/10 lg:pr-10 xl:pr-25 2xl:pr-17 md:pl-10 pt-10 md:pr-10"}>
                    <div className={" w-full h-full flex flex-col"}>
                        <HomeSwiper/>
                    </div>
                </div>
                <div className={" w-1/10 hidden 2xl:block"}>

                </div>
            </div>

    )
}