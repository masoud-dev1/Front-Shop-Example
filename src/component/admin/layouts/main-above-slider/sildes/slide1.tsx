export default function Slide1(){
    return (
        <div className=" h-full flex justify-start rounded-xl">
            <div className={" w-1/2  ms-40 h-full flex flex-col"}>
                <p className={"text-gray-300 block mt-5 "}>Septamber 2026-08-02</p>
                <p className={"text-white block mt-5 text-4xl font-semibold"}>Enjoy add new product</p>
                <p className={"text-white block mt-5 text-4xl font-semibold"}>Add your new products in store ! </p>
                <p className={"text-gray-300 block mt-5 "}>Designer Products - Do Whatever You Want And You Can Do CRUD :)</p>
                <button className={"bg-amber-500 w-9/40 h-14 mt-4 mb-8 rounded-xl items-center text-center text-white cursor-pointer duration-150 hover:bg-amber-600 ease-in"}>
                    Get Sterted
                </button>
            </div>
        </div>
    )
}