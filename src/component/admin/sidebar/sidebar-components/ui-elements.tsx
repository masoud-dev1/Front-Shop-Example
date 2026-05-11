import {useDispatch, useSelector} from "react-redux";
import {setNumber} from "@/redux/slice/sidebar-button";
import Image from "next/image";

export default function UiElements(){
    const clicked = useSelector((state: any) => state.sidebarButton.number);
    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    const dispatch = useDispatch();
    return(
        <>
            {/*Ui Element [12] */}
            <div className={" flex flex-col-2 w-full h-8/60"}>
                <div className={" w-1/10 flex justify-start"}>
                    {clicked === 12 && <div className={` ${isOpen ? 'w-2/10' : 'w-10/10'} bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl `}></div>}
                </div>
                {
                    isOpen ?
                        <div className={" w-9/10 flex justify-start"}>
                            <div className={`${clicked === 12 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-between cursor-pointer`} onClick={() => dispatch(setNumber(12))}>
                                <div className={`${clicked === 12 ? 'invisible' : 'visible'}`}>
                                    <Image
                                        src={'/Logo/admin-sidebar/main/uielement.svg'}
                                        alt={'dashboard'}
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <span className={` me-4 ${clicked === 12 ? 'text-white' : 'text-gray-700'} `}>
                                    Ui Element
                            </span>
                                <div className={"bg-red-300 invisible"}>sssss

                                </div>
                            </div>
                        </div>
                        :
                        <div className={"mx-auto my-auto cursor-pointer"} onClick={() => dispatch(setNumber(12))}>
                            {
                                clicked === 12
                                ?
                                    <Image src={'/Logo/admin-sidebar/color/uielement.svg'} alt={'ui'} width={30} height={30}/>
                                    :
                                    <Image src={'/Logo/admin-sidebar/main/uielement.svg'} alt={'ui'} width={30} height={30}/>
                            }
                        </div>
                }
            </div>
        </>
    )
}