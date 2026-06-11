import TopHome from "@/component/app/home/top-off/home-component";
import HomeNavbar from "@/component/app/home/navbar/home-navbar";
import Footer from "@/component/app/home/footer/footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <TopHome/>
            <HomeNavbar/>
            <div className={"w-full bg-red-300 flex flex-col lg:flex-row mt-40"}>
                <div className={"bg-blue-500 lg:w-1/2 xl:p-10 2xl:p-20 p-2"}>
                    <div className={"bg-red-300 w-full xl:py-10 mt-10 flex flex-col"}>
                        
                        <h3 className="text-sm font-semibold sm:text-base md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl">
                            Our Story
                        </h3>
                        
                        <h2 className="mt-10 text-sm sm:text-base md:text-lg lg:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatibus repellendus, reiciendis nihil non vero ab praesentium repudiandae labore deserunt? Porro ex a nam totam laboriosam harum beatae, eius aliquid? onsectetur adipisicing elit. Cum voluptatibus repellendus, reiciendis nihil non vero ab praesentium repudiandae labore deserunt? Porro ex a nam totam laboriosam harum beatae, eius aliquid?
                        </h2>

                        <h3 className="text-sm bg-red-300 mt-7 sm:text-base md:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatibus repellendus, reiciendis nihil non vero ab praesentium repudiandae labore deserunt? Porro ex a nam totam laboriosam harum beatae, eius aliquid?
                        </h3>
                    </div>
                </div>
                <div className={"bg-blue-100 lg:w-1/2"}>
                    <Image src={"/about/right.svg"} alt={"right"} width={1000} height={1000}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}