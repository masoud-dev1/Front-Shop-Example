'use client';

import {Navbar} from "@/component/admin/navbar";
import Sidebar from "@/component/admin/sidebar/sidebar";

export default function Home() {
    return (

        <div className={"bg-slate-100"}>


            {/*Side Bar & Navbar*/}
            <div className={"flex flex-cols-2 "}>

                {/*navbar*/}
                <Navbar/>
                {/*Side Bar */}
                <Sidebar/>
            </div>

            <div className={"h-10000 w-222"}>sd</div>

        </div>


    );
}