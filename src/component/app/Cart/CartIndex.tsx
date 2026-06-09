import Cart from "@/app/cart/page";
import Image from "next/image";

export default function CartIndex() {
    return (
        <>
            <div className={" grid grid-rows-1 w-16/20 mx-auto mt-10 "}>
                <div
                    className={" w-full flex flex-row justify-between p-6 shadow shadow-3xl shadow-gray-300"}>
                    <div className={" w-1/8"}>
                        <h2>Product</h2>
                    </div>
                    <div className={" w-1/8"}>
                        <h2>Price</h2>
                    </div>
                    <div className={" w-1/8"}>
                        <h2>Quantity</h2>
                    </div>
                    <div className={" w-1/8"}>
                        <h2>Subtotal</h2>
                    </div>
                </div>
                <div
                    className={" w-full flex flex-row justify-between p-8 shadow  shadow-gray-300 mt-10"}>
                    <div className={" w-1/8 flex flex-row-2 justify-around  my-auto"}>
                        <Image src={"/Home/1.svg"} alt={"ada"} width={80} height={40}/>
                        <h2 className={"text-center my-auto ms-10 "}>Keyboard Mps 122</h2>
                    </div>
                    <div className={"bg-green-500n w-1/8 my-auto"}>
                        <h2>$650</h2>
                    </div>
                    <div className={" w-1/8  my-auto"}>
                        <input
                            type="number"
                            min="1"
                            className="h-16 w-16 text-lg border-2 border-gray-200 rounded-lg focus:outline-none
        [&::-webkit-inner-spin-button]:w-6
        [&::-webkit-inner-spin-button]:h-6
        [&::-webkit-inner-spin-button]:bg-gray-100
        [&::-webkit-inner-spin-button]:rounded-md
        [&::-webkit-inner-spin-button]:mx-1 text-center"
                        />
                    </div>
                    <div className={" w-1/8  my-auto"}>
                        <h2>Subtotal</h2>
                    </div>
                </div>

                <div className={" w-full mt-15 flex flex-row-2 justify-between "}>
                    <div className={" w-1/6 p-5 rounded-md border-2 border-gray-300 text-center font-semibold  cursor-pointer"}> Return To Shop</div>
                    <div className={" w-1/7 p-5 rounded-md border-2 border-gray-300 text-center font-semibold  cursor-pointer"}> Update Cart</div>
                </div>

                <div className={" w-full flex flex-row-3 mt-20"}>
                    <input type={"text"}  className={" w-1/6 h-16 p-5 rounded-md border-2 border-gray-300 text-start font-semibold  cursor-pointer"} placeholder={"Coupon Code"}/>

                    <div className={"ms-6 bg-red-600 text-white w-1/7 h-16 p-5 rounded-md  text-center font-semibold  cursor-pointer "}> Apply Coupon</div>

                    <div className={" w-1/3 p-5 rounded-md flex flex-col border-2 border-gray-300 text-start font-semibold ml-auto"}>
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
            </div>
        </>
    )
}