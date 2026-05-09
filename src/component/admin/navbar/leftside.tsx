import AdminSearchBox from "@/component/admin/navbar/admin-search-box";

export default function LeftSide(){
    return(
        <>
            {/*left side*/}
            <div className={" w-5/10 flex"}>
                <AdminSearchBox/>
            </div>
        </>
    )
}