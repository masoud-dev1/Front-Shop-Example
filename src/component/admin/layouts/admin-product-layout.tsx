"use client";

import {useSelector} from "react-redux";
import AdminSlider from "@/component/admin/layouts/main-above-slider/admin-slider";
import AdminProductsBottomSlider from "@/component/admin/layouts/main-bottom-slider/admin-products-bottom-slider";

export default function AdminLayoutPage({children}: { children: React.ReactNode }) {
    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    return (
        <div className={"bg-stone-200 h-screen w-full flex justify-start "}>
            {/*sidebar div hide*/}
            <div className={` ${isOpen ? "w-3/20" : 'w-1/20'} h-screen duration-450 `}>
            </div>
            {/*right sight div*/}
            <div className={`  ${isOpen ? "w-17/20" : 'w-19/20'} h-screen flex justify-center duration-450 `}>
                <div className={" w-19/20 h-full flex flex-col"}>

                    {/*Behind navbar*/}
                    <div className={" w-full h-[8.7%] "}></div>

                    {/*H1 + Slider + Bottom Slider*/}
                    <div className={" h-full w-full mt-10 flex flex-col justify-end"}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}