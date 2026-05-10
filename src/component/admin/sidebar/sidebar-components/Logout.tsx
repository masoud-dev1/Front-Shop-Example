import {useDispatch, useSelector} from "react-redux";
import {setNumber} from "@/redux/slice/sidebar-button";
import Image from "next/image";

export default function Logout(){
    const clicked = useSelector((state: any) => state.sidebarButton.number);
    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    const dispatch = useDispatch();
    return(
        <>
            {/* Logout [16] */}
            <div className={" flex flex-col-2 w-full h-3/60 mt-5"}>
                <div className={" w-1/10 flex justify-start"}>
                    {clicked === 16 && <div className={` ${isOpen ? 'w-2/10' : 'w-10/10'} bg-blue-400  w-2/10 rounded-br-3xl rounded-tr-3xl `}></div>}
                </div>
                {
                    isOpen
                    ?
                        <div className={" w-9/10 flex justify-start"}>
                            <div className={`${clicked === 16 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-between cursor-pointer`} onClick={() => dispatch(setNumber(16))}>
                                <div className={`${clicked === 16 ? 'invisible' : 'visible'}`}>
                                    <Image
                                        src={'/Logo/admin-sidebar/main/power.svg'}
                                        alt={'dashboard'}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <span className={` me-4 ${clicked === 16 ? 'text-white' : 'text-gray-700'} `}>
                                    Logout
                            </span>
                                <div className={"bg-red-300 invisible"}>sssss

                                </div>
                            </div>
                        </div>
                        :
                        <div className={"mx-auto my-auto cursor-pointer"} onClick={() => dispatch(setNumber(16))}>
                            <Image
                            src={'/Logo/admin-sidebar/main/power.svg'}
                            alt={'power'}
                            width={30}
                            height={30}
                            />
                        </div>
                }
            </div>
        </>
    )
}