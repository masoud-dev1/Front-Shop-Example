export default function CartSection4(){
    return(
    <div className={" w-full flex flex-row-3 mt-20"}>
        <input type={"text"}  className={"w-1/3 lg:w-1/6 h-16 p-5 rounded-md border-2 border-gray-300 text-start font-semibold  cursor-pointer"} placeholder={"Coupon Code"}/>

        <div className={" text-nowrap ms-2 me-2 xl:ms-6 bg-red-600 text-white w-1/4 lg:w-1/7 h-16 p-5 rounded-md   font-semibold  cursor-pointer text-xs lg:text-base text-center lg:text-center "}>
            <h2 className={"min-[1024]:max-[1180]:ms-[-13px]"}>Apply Coupon</h2>
        </div>

        <div className={"w-80/100 lg:w-1/3 p-5 rounded-md flex flex-col border-2 border-gray-300 text-start font-semibold ml-auto"}>
            <div className={" text-xl font-semibold"}>Cart Total</div>
            <div className={" w-full flex flex-row-2 justify-between py-3 border-b border-b-gray-300 mt-5"}>
                <div className={" w-1/4"}>Subtitle:</div>
                <div className={" w-1/4"}>$1700</div>
            </div>
            <div className={" w-full flex flex-row-2 justify-between py-3 border-b border-b-gray-300"}>
                <div className={" w-1/4"}>shipping:</div>
                <div className={" w-1/4"}>free</div>
            </div>
            <div className={" w-full flex flex-row-2 justify-between py-3 border-b border-b-gray-300"}>
                <div className={" w-1/4"}>Total:</div>
                <div className={" w-1/4"}>$1700</div>
            </div>
            <div className={"bg-red-600 w-6/10 h-17 mx-auto mt-7 rounded-md text-center text-white flex items-center cursor-pointer"}>
                <h2 className={"text-center mx-auto my-auto "}>Process to checkpoint</h2>
            </div>
        </div>
    </div>
    )
}