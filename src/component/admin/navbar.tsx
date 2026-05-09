'use client';

import LeftSide from "@/component/admin/navbar/leftside";
import RightSide from "@/component/admin/navbar/rightside";

export function Navbar() {
    return (
        <div className={"bg-white w-34/40 fixed right-0 flex flex-col-2 p-4 justify-between"}>
            <LeftSide/>
            <RightSide/>
        </div>
    )
}