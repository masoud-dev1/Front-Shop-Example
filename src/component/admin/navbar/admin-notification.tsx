import Image from "next/image";

export default function AdminNotification() {
    return (
        <>
            {/*notification*/}
            <div className={" w-3/40 relative flex items-center  me-5"}>
                <div className={" w-4/5 m-auto flex items-center "}>
                    <Image
                        src="/Logo/Notification.svg"
                        alt="sad"
                        width={24}
                        height={24}
                        className={" m-auto mt-1.5 relative"}
                    />
                    <div
                        className={"absolute bg-pink-600  top-0 rounded-full w-4 h-4 right-4 top-1 flex items-center justify-center"}>
                                    <span className={"text-white text-[13px] font-bold leading-none"}>
                                        6
                                    </span>
                    </div>
                </div>
            </div>
        </>
    )
}