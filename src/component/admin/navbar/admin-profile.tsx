import Image from "next/image";

export default function AdminProfile(){
    return(
        <>
            {/*profle*/}
            <div className={" w-10/40 flex flex-col-2 items-center "}>
                <div className={" max-w-9/20 flex justify-center"}>
                    <Image
                        src={"/Logo/Profile-Picture.svg"}
                        alt={"d"}
                        width={50}
                        height={50}
                        className={"ms-2"}/>
                </div>
                <div className={"max-w-5/9  ms-4"}>
                    <p className={"text-gray-700 text-nowrap "}>Mony Roy</p>
                    <p className={"text-[12px] text-gray-600 text-nowrap "}>Admin</p>
                </div>
            </div>
        </>
    )
}