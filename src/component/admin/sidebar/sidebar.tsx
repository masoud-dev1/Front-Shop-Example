'use client';

import {useState} from "react";

export default function Sidebar(){
    const [isOpen, setIsOpen] = useState(true);
    return(
        <>

            <div className={`bg-sky-200 flex  h-237 fixed left-0 ease-out transition-all duration-400 ${isOpen ? 'w-6/40' : 'w-12'}`}>
                <div className={"bg-amber-400 w-full h-2 flex flex-cols-1 flex-col items-center justify-center mt-5"}>
                    <button className={`bg-sky-500 rounded w-10 duration-400 ease-out h-5 `} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? 'Close' : 'Open'}
                    </button>
                </div>
            </div>
        </>
    )
}