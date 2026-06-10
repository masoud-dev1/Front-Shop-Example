import Cart from "@/app/cart/page";
import Image from "next/image";
import CartSection1 from "@/component/app/Cart/Section1/Cart-Section-1";
import CartSection2 from "@/component/app/Cart/Section2/Cart-Section-2";
import CartSection3 from "@/component/app/Cart/Section3/Cart-Section-3";
import CartSection4 from "@/component/app/Cart/Section4/Cart-Section-4";

export function CartIndex() {
    return (
        <>
            <div className={" grid grid-rows-1 w-full sm:w-16/20 mx-auto mt-10 text-xs sm:text-base "}>
                <CartSection1/>
                <CartSection2/>
                <CartSection3/>
                <CartSection4/>
            </div>
        </>
    )
}