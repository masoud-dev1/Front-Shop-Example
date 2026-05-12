import AdminProductLayout from "@/component/admin/layouts/admin-product-layout";
import AdminLayoutPage from "@/component/admin/layouts/admin-product-layout";
import AdminSlider from "@/component/admin/layouts/main-above-slider/admin-slider";
import AdminProductsBottomSlider from "@/component/admin/layouts/main-bottom-slider/admin-products-bottom-slider";

export default function AdminProduct(){
    return (
        <>

            {/*/!*h1 products*!/*/}
            <h1 className={"bg-sky-200 font-bold text-3xl block pb-2 h-[10%]"}>Products</h1>
            {/*/!*Slider*!/*/}
            <div className={" bg-blue-500 rounded-2xl w-full h-[45%] flex"}>
                <AdminSlider/>
            </div>
            <div className={' w-full h-full flex flex-col-4 gap-11'}>
                <div className={" pt-5 w-5/24 rounded-2xl flex flex-col"}>
                    <AdminProductsBottomSlider/>
                </div>
                <div className={" pt-5 w-5/24 rounded-2xl flex flex-col"}>
                    <AdminProductsBottomSlider/>
                </div>
                <div className={" pt-5 w-5/24 rounded-2xl flex flex-col"}>
                    <AdminProductsBottomSlider/>
                </div>
                <div className={" pt-5 w-5/24 rounded-2xl flex flex-col"}>
                    <AdminProductsBottomSlider/>
                </div>
            </div>
        </>
    )
}