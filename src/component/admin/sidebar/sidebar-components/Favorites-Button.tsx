import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@reduxjs/toolkit/query";
import {setNumber} from "@/redux/slice/sidebar-button";
import Image from "next/image";

export default function FavoritesButton(){
    const clicked = useSelector((state: any) => state.sidebarButton.number);
    const isOpen = useSelector((state: any) => state.adminNavbarAnimation.isOpen);
    const dispatch = useDispatch();
    return(
        <>
            {/*Favorites [3] */}
            <div className={" flex flex-col-2 w-full h-4/60"}>
                <div className={" w-1/10 flex justify-start"}>
                    {clicked === 3 && <div className={`${isOpen ? 'w-2/10' : 'w-10/10'} bg-blue-400 w-2/10 rounded-br-3xl rounded-tr-3xl `}></div>}
                </div>
                {isOpen
                    ? <div className={" w-9/10 flex justify-start"}>
                        <div className={`${clicked === 3 ? 'bg-blue-400 ' : 'bg-white'} w-9/10 rounded-lg items-center duration-150 end-auto flex justify-between cursor-pointer`} onClick={() => dispatch(setNumber(3))}>
                            <div className={`${clicked === 3 ? 'invisible' : 'visible'}`}>
                                <Image
                                    src={'/Logo/admin-sidebar/main/Favourites.svg'}
                                    alt={'dashboard'}
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <span className={` me-4 ${clicked === 3 ? 'text-white' : 'text-gray-700'} `}>
                                    Favourites
                                </span>
                            <div className={"bg-red-300 invisible"}>sssss

                            </div>
                        </div>
                    </div>
                    :
                    <div className={"mx-auto my-auto cursor-pointer"} onClick={() => dispatch(setNumber(3))}>
                        {
                            clicked === 3
                            ?
                                <Image
                                    src={'/Logo/admin-sidebar/color/Favourites.svg'}
                                    alt={'favorites'}
                                    width={30}
                                    height={30}
                                />
                                :
                                <Image
                                    src={'/Logo/admin-sidebar/main/Favourites.svg'}
                                    alt={'favorites'}
                                    width={30}
                                    height={30}
                                />
                        }
                    </div>
                }
            </div>
        </>
    )
}