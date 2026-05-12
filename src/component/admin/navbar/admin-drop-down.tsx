import Image from "next/image";

export default function AdminDropDown(){
    return(
        <>
            {/*end*/}
            <div className={" min-w-10 max-w-30  flex items-center bg-gray-400"}>
                <Image
                    src={"/Logo/Drop-Down.svg"}
                    alt={"drop-down"}
                    width={23}
                    height={23}
                    className={"m-auto"}
                />
            </div>
        </>
    )
}