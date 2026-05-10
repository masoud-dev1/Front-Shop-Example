'use client';

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggle} from "@/redux/slice/adminNavbarAnimation";
import Image from "next/image";
import DashboardButton from "@/component/admin/sidebar/sidebar-components/dashboard-button";
import ProductButton from "@/component/admin/sidebar/sidebar-components/Product-Button";
import FavoritesButton from "@/component/admin/sidebar/sidebar-components/Favorites-Button";
import InboxButton from "@/component/admin/sidebar/sidebar-components/Inbox-Button";
import OrderListButton from "@/component/admin/sidebar/sidebar-components/orderlist-button";
import ProductStock from "@/component/admin/sidebar/sidebar-components/product-stock";

export default function Sidebar() {

    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState<number>(0);

    return (
        <>

            <div className={`bg-sky-200  h-237 fixed left-0 ease-out transition-all duration-460 ${isOpen ? 'w-6/40' : 'w-1/40'}`}>

                <div className={"bg-green-200 w-full  flex flex-row "}>

                    {/*Toggle (Humborger) open / close*/}
                    <div className={`bg-amber-400  duration-450 ease-in-out w-full h-10 flex items-center ${isOpen ? 'flex-cols-2' : 'flex-col'} justify-between mt-5`}>

                        {isOpen && <div className={"ms-4 "}>
                            <Image
                                src={"/Logo/FigmaName.svg"}
                                alt={"Figma Logo"}
                                width={"200"}
                                height={"60"}
                            />
                        </div>}

                        <button className={`rounded w-10 duration-400 ease-out h-5 ${isOpen ? '' : 'ms-2'}`}
                                onClick={() => dispatch(toggle())}>
                            <Image
                                src={"/Logo/Humborger.png"}
                                alt={'ds'}
                                width={25}
                                height={25}
                            />
                        </button>
                    </div>

                </div>

                <div className={"bg-gray-400 h-full w-full"}>
                    <DashboardButton/>
                    <ProductButton/>
                    <FavoritesButton/>
                    <InboxButton/>
                    <OrderListButton/>
                    <ProductStock/>
                </div>

            </div>
        </>
    )
}