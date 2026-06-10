export default function CartSection1(){
    return(
    <div className={" w-full flex flex-row justify-between p-6 shadow shadow-3xl shadow-gray-300"}>
        <div className={" w-1/8"}>
            <h2>Product</h2>
        </div>
        <div className={" w-1/8 sm:ms-0 ms-15"}>
            <h2>Price</h2>
        </div>
        <div className={" w-1/8"}>
            <h2>Quantity</h2>
        </div>
        <div className={" w-1/8"}>
            <h2>Subtotal</h2>
        </div>
    </div>
    );
}