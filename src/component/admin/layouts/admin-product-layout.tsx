"use client";

import {useSelector} from "react-redux";
import AdminSlider from "@/component/admin/layouts/slider/admin-slider";

export default function AdminLayoutPage({children}: {children: React.ReactNode}) {
    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    return (
        <div className={"bg-sky-200-300 h-screen w-full flex justify-start "}>
            {/*sidebar div hide*/}
            <div className={`bg-red-300 ${isOpen ? "w-3/20" : 'w-1/20'} h-screen duration-450 ease-in ease-out`}>
            </div>
            {/*right sight div*/}
            <div className={` bg-amber-400 ${isOpen ? "w-17/20" : 'w-19/20'} h-screen flex justify-center`}>
                <div className={"bg-slate-500 w-19/20 h-screen flex flex-col"}>

                    <div className={"bg-red-500 w-full h-[8%] "}>
sdassdaad //چرا اینجا مگس height تغییر نمیکنه ؟
                    </div>

                    <div className={"bg-gray-700 w-full max-h-30 "}>
                        {/*/!*h1 products*!/*/}
                        <h1 className={"font-bold text-3xl block pb-2"}>Products</h1>
                        {/*/!*layout template*!/*/}
                        <div className={"bg-red-500 w-full max-h-190 z-50"}>
                            <AdminSlider/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}