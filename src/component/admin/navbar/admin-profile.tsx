import Image from "next/image";

export default function AdminProfile(){
    return(
        <>
            {/*profle*/}
            <div className={" w-8/40 flex flex-col-2 items-center"}>
                <div className={" w-9/20"}>
                    <Image
                        src={"/Logo/Profile-Picture.svg"}
                        alt={"d"}
                        width={50}
                        height={50}
                        className={"ms-2"}/>
                </div>
                <div className={""}>
                    <p className={"text-gray-700"}>Mony Roy</p>
                    <p className={"text-[12px] text-gray-600"}>Admin</p>
                </div>
            </div>
        </>
    )
}