import {useDispatch, useSelector} from "react-redux";
import {setNumber} from "@/redux/slice/sidebar-button";

export default function ProductStock(){
    const clicked = useSelector((state: any) => state.sidebarButton.number);
    const dispatch = useDispatch();
    return(
        <>
            {/*Products Stock  [6] */}
            <div className={" flex flex-col-2 w-full h-3/60"}>
                <div className={" w-1/10 flex justify-start"}>
                    {clicked === 6 && <div className={"bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl "}></div>}
                </div>
                <div className={" w-9/10 flex justify-start"}>
                    <div className={`${clicked === 6 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-center cursor-pointer`} onClick={() => dispatch(setNumber(6))}>
                                <span className={` ${clicked === 6 ? 'text-white' : 'text-gray-700'}  `}>
                                    Products Stock
                                </span>
                    </div>
                </div>
            </div>
        </>
    )
}