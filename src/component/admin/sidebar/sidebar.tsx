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
import Pricing from "@/component/admin/sidebar/sidebar-components/Pricing";
import Calender from "@/component/admin/sidebar/sidebar-components/Calender";
import ToDo from "@/component/admin/sidebar/sidebar-components/To-Do";
import Contact from "@/component/admin/sidebar/sidebar-components/Contact";
import Invoice from "@/component/admin/sidebar/sidebar-components/Invoice";
import UiElements from "@/component/admin/sidebar/sidebar-components/ui-elements";
import Team from "@/component/admin/sidebar/sidebar-components/team";
import Table from "@/component/admin/sidebar/sidebar-components/Table";
import Setting from "@/component/admin/sidebar/sidebar-components/Setting";
import Logout from "@/component/admin/sidebar/sidebar-components/Logout";
import "../../../app/admin/admin.css"

export default function Sidebar() {

    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    const dispatch = useDispatch();
    const [clicked, setClicked] = useState<number>(0);

    return (
        <>

            <div className={`bg-white h-screen fixed flex flex-col top-0 left-0 ease-out transition-all duration-460 ${isOpen ? 'w-6/40' : 'w-2/40'}`}>
                <div className={"w-full flex flex-row "}>
                    {/*Toggle (Humborger) open / close*/}
                    <div className={`  duration-450 ease-in-out w-full h-10 flex items-center ${isOpen ? 'flex-cols-2 justify-between' : 'flex-col justify-center'}  mt-5`}>

                        {isOpen && <div className={"ms-4"}>
                            <Image
                                src={"/Logo/FigmaName.svg"}
                                alt={"Figma Logo"}
                                width={"200"}
                                height={"60"}
                            />
                        </div>}
                        <button className={` rounded  w-6 duration-400 cursor-pointer ease-in-out h-5 ${isOpen ? 'me-5' : ''}`}
                                onClick={() => dispatch(toggle())}>
                            <Image
                                src={"/Logo/Humborger.png"}
                                alt={'ds'}
                                width={25}
                                height={25}
                                className={"rounded-3xl"}
                            />
                        </button>
                    </div>

                </div>

                {/*title button*/}
                <div className={" flex flex-col h-screen overflow-y-auto"}>
                    <DashboardButton/>
                    <ProductButton/>
                    <FavoritesButton/>
                    <InboxButton/>
                    <OrderListButton/>
                    <ProductStock/>
                    <div className={"bg-gray-300 h-1/900 mt-1"}></div>
                    <div className={`mt-3`}><span className={`ms-8  font-semibold text-gray-600 duration-500 ease-in-out`}>{isOpen && 'pricing'}</span></div>
                    <div className={"h-5/10 overflow-y-auto no-scrollbar w-full text-nowrap"}>
                        <Pricing/>
                        <Calender/>
                        <ToDo/>
                        <Contact/>
                        <Invoice/>
                        <UiElements/>
                        <Team/>
                    </div>
                    <div className={"bg-gray-300 h-1/900 mt-1"}></div>
                    <Setting/>
                    <Logout/>
                </div>
            </div>
        </>
    )
}