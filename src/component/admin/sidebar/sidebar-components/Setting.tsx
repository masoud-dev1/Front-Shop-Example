import {useDispatch, useSelector} from "react-redux";
import {setNumber} from "@/redux/slice/sidebar-button";
import Image from "next/image";

export default function Setting(){
    const clicked = useSelector((state: any) => state.sidebarButton.number);
    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    const dispatch = useDispatch();
    return(
        <>
            {/* Setting [15] */}
            <div className={" flex flex-col-2 w-full h-3/60 mt-2"}>
                <div className={" w-1/10 flex justify-start"}>
                    {clicked === 15 && <div className={` ${isOpen ? 'w-2/10' : 'w-10/10'} bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl `}></div>}
                </div>
                {
                    isOpen
                    ?
                        <div className={" w-9/10 flex justify-start"}>
                            <div className={`${clicked === 15 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-between cursor-pointer`} onClick={() => dispatch(setNumber(15))}>
                                <div className={`${clicked === 15 ? 'invisible' : 'visible'}`}>
                                    <Image
                                        src={'/Logo/admin-sidebar/main/settings.svg'}
                                        alt={'dashboard'}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <span className={` me-4 ${clicked === 15 ? 'text-white' : 'text-gray-700'} `}>
                                    Team
                            </span>
                                <div className={"bg-red-300 invisible"}>sssss

                                </div>
                            </div>
                        </div>
                        :
                        <div className={"mx-auto my-auto cursor-pointer"} onClick={() => dispatch(setNumber(15))}>
                            <Image
                            src={"/Logo/admin-sidebar/main/settings.svg"}
                            alt={`Setting`}
                            width={30}
                            height={30}
                            />
                        </div>
                }
            </div>
        </>
    )
}