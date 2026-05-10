import {useDispatch, useSelector} from "react-redux";
import {setNumber} from "@/redux/slice/sidebar-button";
import Image from "next/image";

export default function Contact(){
    const clicked = useSelector((state: any) => state.sidebarButton.number);
    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    const dispatch = useDispatch();
    return(
        <>
            {/*contact [10] */}
            <div className={" flex flex-col-2 w-full h-3/60"}>
                <div className={" w-1/10 flex justify-start"}>
                    {clicked === 10 && <div className={` ${isOpen ? 'w-2/10' : 'w-10/10'} bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl `}></div>}
                </div>
                {
                    isOpen
                    ?
                        <div className={" w-9/10 flex justify-start"}>
                            <div className={`${clicked === 10 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-center cursor-pointer`} onClick={() => dispatch(setNumber(10))}>
                                <span className={` ${clicked === 10 ? 'text-white' : 'text-gray-700'}  `}>
                                    Contact
                                </span>
                            </div>
                        </div>
                        :
                        <div className={"mx-auto my-auto cursor-pointer"} onClick={() => dispatch(setNumber(10))}>
                            <Image src={'/Logo/admin-sidebar/main/contact.svg'} alt={'contact'} width={30} height={30} />
                        </div>
                }
            </div>
        </>
    )
}