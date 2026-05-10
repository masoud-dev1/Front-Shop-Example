import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/query";
import {setNumber} from "@/redux/slice/sidebar-button";

export default function FavoritesButton(){
    const clicked = useSelector((state: any) => state.sidebarButton.number);
    const dispatch = useDispatch();
    return(
        <>
            {/*Favorites [3] */}
            <div className={" flex flex-col-2 w-full h-3/55"}>
                <div className={" w-1/10 flex justify-start"}>
                    {clicked === 3 && <div className={"bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl "}></div>}
                </div>
                <div className={" w-9/10 flex justify-start"}>
                    <div className={`${clicked === 3 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-center cursor-pointer`} onClick={() => dispatch(setNumber(3))}>
                                <span className={` ${clicked === 3 ? 'text-white' : 'text-gray-700'} `}>
                                    Favorites
                                </span>
                    </div>
                </div>
            </div>
        </>
    )
}