'use client';

import {Navbar} from "@/component/admin/navbar/navbar";
import Sidebar from "@/component/admin/sidebar/sidebar";

export default function AdminSidebarNavbar(){
    return(
        <>
            {/*Side Bar & Navbar*/}
            <div className={"flex flex-cols-2 "}>
                {/*navbar*/}
                <Navbar/>
                {/*Side Bar */}
                <Sidebar/>
            </div>

        </>
    )
}