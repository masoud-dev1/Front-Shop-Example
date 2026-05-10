'use client';

import LeftSide from "@/component/admin/navbar/leftside";
import RightSide from "@/component/admin/navbar/rightside";
import {useDispatch, useSelector} from "react-redux";

export function Navbar() {
    const isOpen = useSelector(state => state.adminNavbarAnimation.isOpen);
    const dispatch = useDispatch();
    return (
        <div className={`bg-white w-34/40 duration-460 ease-out fixed right-0 flex flex-col-2 p-4 justify-between ${isOpen ? 'w-34/40' : 'w-39/40'}`}>
            <LeftSide/>
            <RightSide/>
        </div>
    )
}