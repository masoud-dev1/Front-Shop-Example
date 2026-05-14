'use client';

import AdminProductLayout from "@/component/admin/layouts/admin-product-layout";
import AdminLayoutPage from "@/component/admin/layouts/admin-product-layout";
import AdminSlider from "@/component/admin/layouts/main-above-slider/admin-slider";
import AdminProductsBottomSlider from "@/component/admin/layouts/main-bottom-slider/admin-products-bottom-slider";
import {useSelector} from "react-redux";
import AdminNavbarAnimation from "@/redux/slice/adminNavbarAnimation";
import {useState} from "react";
import Image from "next/image";
import AddProductModal from "@/component/admin/modal/add-product-modal";

export default function AdminProduct() {

    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    const Modal = useSelector((state: any) => state.adminAddProductModal.productModal);


    return (
        <>

            {/*/!*h1 products*!/*/}

            <h1 className={"pl-17 w-full font-bold text-3xl  pb-2 "}>Products</h1>

        {/*/!*Slider*!/*/}
            <div className={"  rounded-2xl w-full h-[45%] flex justify-center"}>
                <div className={`bg-blue-500 ${isOpen ? 'max-w-[94%]' : 'max-w-[95%]'} rounded-2xl`}>
                    <AdminSlider/>
                </div>
            </div>
        {/*slider Bottmom product*/}
            <div className={' w-full h-full flex flex-col-4 gap-11 justify-center'}>
                <div className={` pt-5 ${isOpen ? 'w-5/24' : 'w-4/24'} duration-450 rounded-2xl flex flex-col`}>
                    <AdminProductsBottomSlider/>
                </div>
                <div className={` pt-5 ${isOpen ? 'w-5/24' : 'w-4/24'} duration-450 rounded-2xl flex flex-col`}>
                    <AdminProductsBottomSlider/>
                </div>
                <div className={` pt-5 ${isOpen ? 'w-5/24' : 'w-4/24'} duration-450 rounded-2xl flex flex-col`}>
                    <AdminProductsBottomSlider/>
                </div>
                <div className={` pt-5 ${isOpen ? 'w-5/24' : 'w-4/24'} duration-450 rounded-2xl flex flex-col`}>
                    <AdminProductsBottomSlider/>
                </div>
                {
                    isOpen === false &&
                    <div
                        className={` pt-5 ${isOpen ? 'w-5/24' : 'w-4/24'} duration-850 ease-in-out rounded-2xl flex flex-col`}>
                        <AdminProductsBottomSlider/>
                    </div>
                }
            </div>
            {
               Modal && <div className={"bg-stone-500 h-screen w-full absolute opacity-50 z-50"}>

               </div>
            }
            {
                Modal && <AddProductModal/>
            }


        </>
    )
}