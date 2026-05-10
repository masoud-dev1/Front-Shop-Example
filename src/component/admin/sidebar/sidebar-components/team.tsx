import {useDispatch, useSelector} from "react-redux";
import {setNumber} from "@/redux/slice/sidebar-button";
import Image from "next/image";

export default function Team(){
    const clicked = useSelector((state: any) => state.sidebarButton.number);
    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    const dispatch = useDispatch();
    return(
        <>
            {/* Team [13] */}
            <div className={" flex flex-col-2 w-full h-3/60"}>
                <div className={" w-1/10 flex justify-start"}>
                    {clicked === 13 && <div className={` ${isOpen ? "w-2/10" : 'w-10/10'} bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl `}></div>}
                </div>
                {
                    isOpen
                    ?
                        <div className={" w-9/10 flex justify-start"}>
                            <div className={`${clicked === 13 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-between cursor-pointer`} onClick={() => dispatch(setNumber(13))}>
                                <div className={`${clicked === 13 ? 'invisible' : 'visible'}`}>
                                    <Image
                                        src={'/Logo/admin-sidebar/main/team.svg'}
                                        alt={'dashboard'}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <span className={` me-4 ${clicked === 13 ? 'text-white' : 'text-gray-700'} `}>
                                    Team
                            </span>
                                <div className={"bg-red-300 invisible"}>sssss

                                </div>
                            </div>
                        </div>
                        :
                        <div className={"mx-auto my-auto cursor-pointer"} onClick={() => dispatch(setNumber(13))}>
                            <Image src={'/Logo/admin-sidebar/main/team.svg'} alt={'team'} width={30} height={30}/>
                        </div>
                }
            </div>
        </>
    )
}