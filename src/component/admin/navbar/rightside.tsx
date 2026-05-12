import Image from "next/image";
import AdminNotification from "@/component/admin/navbar/admin-notification";
import AdminLanguage from "@/component/admin/navbar/admin-language";
import AdminProfile from "@/component/admin/navbar/admin-profile";
import AdminDropDown from "@/component/admin/navbar/admin-drop-down";

export default function RightSide(){
    return(
        <>
            {/*right side*/}
            <div className={" w-5/10 flex flex-col-5 justify-end "}>
                <AdminNotification/>
                <AdminLanguage/>
                <AdminProfile/>
                {/*<AdminDropDown/>*/}
            </div>
        </>
    )
}