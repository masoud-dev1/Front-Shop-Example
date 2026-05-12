"use client";

import {useSelector} from "react-redux";
import AdminSlider from "@/component/admin/layouts/main-above-slider/admin-slider";
import AdminProductsBottomSlider from "@/component/admin/layouts/main-bottom-slider/admin-products-bottom-slider";

export default function AdminLayoutPage({children}: { children: React.ReactNode }) {
    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    return (
        <div className={"bg-sky-200 h-screen w-full flex justify-start "}>
            {/*sidebar div hide*/}
            <div className={`bg-red-300 ${isOpen ? "w-3/20" : 'w-1/20'} h-screen duration-450 `}>
            </div>
            {/*right sight div*/}
            <div className={` bg-amber-400 ${isOpen ? "w-17/20" : 'w-19/20'} h-screen flex justify-center duration-450 `}>
                <div className={"bg-red-200 w-19/20 h-full flex flex-col"}>

                    {/*Behind navbar*/}
                    <div className={"bg-red-500 w-full h-[8.7%] "}></div>

                    {/*H1 + Slider*/}
                    <div className={"bg-red-700 h-full w-full mt-10 flex flex-col"}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}