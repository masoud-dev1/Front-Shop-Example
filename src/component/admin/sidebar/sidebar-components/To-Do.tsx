import {useDispatch, useSelector} from "react-redux";
import {setNumber} from "@/redux/slice/sidebar-button";
import Image from "next/image";

export default function ToDo(){
    const clicked = useSelector((state: any) => state.sidebarButton.number);
    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    const dispatch = useDispatch();
    return(
        <>
            {/*to-do [9] */}
            <div className={" flex flex-col-2 w-full h-3/60"}>
                <div className={" w-1/10 flex justify-start"}>
                    {clicked === 9 && <div className={` ${isOpen ? 'w-2/10' : 'w-10/10'} bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl `}></div>}
                </div>
                {
                    isOpen 
                    ?
                        <div className={" w-9/10 flex justify-start"}>
                            <div className={`${clicked === 9 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-between cursor-pointer`} onClick={() => dispatch(setNumber(9))}>
                                <div className={`${clicked === 9 ? 'invisible' : 'visible'}`}>
                                    <Image
                                        src={'/Logo/admin-sidebar/main/todo.svg'}
                                        alt={'dashboard'}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <span className={` me-4 ${clicked === 9 ? 'text-white' : 'text-gray-700'} `}>
                                    To Do
                            </span>
                                <div className={"bg-red-300 invisible"}>sssss

                                </div>
                            </div>
                        </div>
                        :
                        <div className={"mx-auto my-auto cursor-pointer"} onClick={() => dispatch(setNumber(9))}>
                            {
                                clicked === 9
                                ?
                                    <Image src={'/Logo/admin-sidebar/color/todo.svg'} alt={'sdad'} width={30} height={30} />
                                    :
                                    <Image src={'/Logo/admin-sidebar/main/todo.svg'} alt={'sdad'} width={30} height={30} />
                            }
                        </div>
                }
            </div>
        </>
    )
}