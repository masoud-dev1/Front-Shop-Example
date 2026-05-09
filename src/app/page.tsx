'use client';

import {Navbar} from "@/component/admin/navbar/navbar";

export default function Home() {
    return (

        <div className={"bg-slate-100"}>


            {/*Side Bar & Navbar*/}
            <div className={"flex flex-cols-2 "}>

                {/*navbar*/}
                <Navbar/>
                {/*Side Bar */}
                <div className={"bg-sky-200 w-6/40 h-237 fixed left-0"}>

                </div>
            </div>

            <div className={"h-10000 w-222"}>sd</div>

        </div>


    );
}