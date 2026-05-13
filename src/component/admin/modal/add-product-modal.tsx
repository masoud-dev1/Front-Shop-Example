'use client';

import {useEffect, useState} from "react";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {toggleAddProductModal} from "@/redux/slice/AdminAddProductModal";

export default function AddProductModal() {
    const adminAddProductModal = useSelector((state: any) => state.adminAddProductModal.productModal);
    const dispatch = useDispatch();
    // این state برای نگهداری آدرس موقتی تصویر است
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    // می‌توانید خود فایل اصلی را هم در state ذخیره کنید تا بعداً برای آپلود استفاده کنید
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        // حذف آدرس قبلی برای جلوگیری از نشت حافظه (memory leak)
        if (imagePreview) {
            URL.revokeObjectURL(imagePreview);
        }

        if (file && file.type.startsWith('image/')) {
            setSelectedFile(file);
            // ایجاد آدرس موقتی برای فایل جدید
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl);
        } else {
            // اگر فایلی انتخاب نشد یا فایل تصویر نبود
            setSelectedFile(null);
            setImagePreview(null);
        }
    };

    return (
        <div
            className={"bg-white absolute z-300 left-1/3 top-2/16  w-4/10 h-8/10 z-100 rounded-xl px-20 pt-30 flex flex-col shadow overflow-y-auto duration-200 ease-in"}>

            <div className={" w-full flex flex-col p-3 border border-stone-300 rounded"}>
                {imagePreview
                    ?
                    <Image src={imagePreview} alt={'sada'} width={111} height={111}
                           className={"w-full object-cover object-center"}
                    />
                    :
                    <span className={"text-gray-700 text-sm font-semibold"}>
                    There ins't any image here !
                </span>
                }

                <input type={"file"}
                       onChange={handleImageChange}
                       className={"w-full mt-2 bg-stone-200 cursor-pointer hover:bg-taupe-300 duration-55 text-gray-700 text-sm font-semibold focus:outline-none border border-stone-300 rounded p-2 focus:ring-stone-500 focus:outline-none focus:ring-1 text-red-400"}/>

            </div>
            {/*product name & company */}
            <div className={" flex flex-col-2 pt-10"}>
                <div className={" w-1/2 flex flex-col"}>
                    {/*Name*/}
                    <div className={"w-19/20"}>
                        <span className={"text-gray-700 text-sm font-semibold"}>
                            Name
                        </span>
                    </div>
                    <div className={"w-19/20"}>
                        <input type={"text"}
                               className={"w-full  text-gray-700 text-sm font-semibold focus:outline-none border border-stone-300 rounded p-2 focus:ring-stone-500 focus:outline-none focus:ring-1"}
                               placeholder={"Product Name"}/>
                    </div>
                </div>
                {/*Companey*/}
                <div className={" w-1/2 flex flex-col"}>
                    <div className={"w-19/20"}>
                        <span className={"text-gray-700 text-sm font-semibold"}>
                            Companey
                        </span>
                    </div>
                    <div className={"w-19/20"}>
                        <input type={"text"}
                               className={"w-full  text-gray-700 text-sm font-semibold focus:outline-none border border-stone-300 rounded p-2 focus:ring-stone-500 focus:outline-none focus:ring-1"}
                               placeholder={"Product Companey"}/>
                    </div>
                </div>
            </div>

            {/*product price % quantity*/}
            <div className={" flex flex-col-2 pt-6"}>
                {/*quantity*/}
                <div className={" w-1/2 flex flex-col"}>
                    <div className={" w-19/20"}>
                        <span className={"text-gray-700 text-sm font-semibold"}>
                            Quantity
                        </span>
                    </div>
                    <div className={"w-19/20"}>
                        <input type={"text"}
                               className={"w-full  text-gray-700 text-sm font-semibold focus:outline-none border border-stone-300 rounded p-2 focus:ring-stone-500 focus:outline-none focus:ring-1"}
                               placeholder={"Product Quantity"}/>
                    </div>
                </div>
                {/*price*/}
                <div className={" w-1/2 flex flex-col"}>
                    <div className={" w-19/20"}>
                        <span className={"text-gray-700 text-sm font-semibold"}>
                            Price
                        </span>
                    </div>
                    <div className={"w-19/20"}>
                        <input type={"text"}
                               className={"w-full focus:ring-stone-500 text-gray-700 focus:outline-none focus:ring-1 text-sm font-semibold  border border-stone-300 rounded p-2"}
                               placeholder={"Product Price"}/>
                    </div>
                </div>
            </div>

            {/*product title*/}
            <div className={"w-full  flex flex-col pt-9"}>
                <div className={"w-full flex flex-col"}>
                    <div className={" w-19/20"}>
                        <span className={"text-gray-700 text-sm font-semibold"}>
                            Title
                        </span>
                    </div>
                    <div className={" w-full"}>
                        <textarea
                            className={"w-full focus:outline-none focus:ring-1 focus:ring-stone-500 rounded h- text-gray-900  border border-stone-300 h-40 "}/>
                    </div>
                </div>
            </div>

            {/*product button*/}
            <div className={"w-full flex flex-col  justify-end border border-stone-300 mt-4 py-3 rounded "}>
                <div className={"flex flex-col-2 justify-end  gap-2"}>
                    <button
                        className={"bg-white text-stone-950 w-1/6 h-10 text-nowrap rounded-md  text-sm font-semibold  duration-60 ease-linear cursor-pointer border border-stone-500 hover:bg-stone-500 hover:text-white"}
                        onClick={() => dispatch(toggleAddProductModal(false))}
                    >cancle
                    </button>

                    <button
                        className={"bg-stone-950 w-1/4 h-10 text-nowrap rounded-md text-white text-sm font-semibold hover:bg-stone-500 0 duration-20 ease-linear cursor-pointer border border-stone-500"}
                    >Add Product
                    </button>
                </div>
            </div>
        </div>
    )
}