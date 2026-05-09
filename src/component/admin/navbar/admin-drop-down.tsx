import Image from "next/image";

export default function AdminDropDown(){
    return(
        <>
            {/*end*/}
            <div className={" w-2/40 flex items-center"}>
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