import Image from "next/image";

function CartSection2() {
    return (
        <div
            className={" w-full flex flex-row justify-between p-8 shadow  shadow-gray-300 mt-10"}>
            <div className={" w-1/8 flex flex-row-2 justify-around  my-auto "}>
                <Image src={"/Home/1.svg"} alt={"ada"} width={80} height={40}/>
                <h2 className={"text-center my-auto ms-5"}>Keyboard Mps 122</h2>
            </div>
            <div className={"bg-green-500n w-1/8 my-auto sm:ms-0 ms-15"}>
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
    )
}

export default CartSection2