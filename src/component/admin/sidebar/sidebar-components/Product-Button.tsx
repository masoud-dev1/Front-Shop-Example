'use client';
import {useDispatch, useSelector} from "react-redux";
import {setNumber} from "@/redux/slice/sidebar-button";

export default function ProductButton(){
    const clicked = useSelector((state: any) => state.sidebarButton.number);
    const dispatch = useDispatch();
    return(
        <>
            {/*Products  [2] */}
            <div className={"bg-red-300 flex flex-col-2 w-full h-3/50"}>
                <div className={"bg-emerald-100 w-1/10 flex justify-start"}>
                    {clicked === 2 && <div className={"bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl "}></div>}
                </div>
                <div className={"bg-emerald-200 w-9/10 flex justify-start"}>
                    <div className={`${clicked === 2 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-center cursor-pointer`} onClick={() => dispatch(setNumber(2))}>
                                <span className={` ${clicked === 2 ? 'text-white' : 'text-gray-700'} text-lg `}>
                                    Products
                                </span>
                    </div>
                </div>
            </div>
        </>
    )
}