import Image from "next/image";

export default function AdminLanguage(){
    return(
        <>
            {/*language*/}
            <div className={" w-8/40 flex flex-col-2 me-7"}>
                <div className={" w-9/20 flex items-center"}>
                    <Image
                        src="/Logo/English-Flag.svg"
                        alt="sad"
                        width={52}
                        height={52}
                        className={""}
                    />
                </div>
                <div className={"w-11/20  flex items-center"}>
                                <span className={"text-start  text-gray-600   "}>
                                    English
                                </span>
                    <div className={" ms-3 flex items-center"}>
                        <Image
                            src={"/Logo/Drop-Down1.svg"}
                            alt={"sd"}
                            width={15}
                            height={15}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}