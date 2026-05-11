import {ReactNode} from "react";
import Sidebar from "@/component/admin/sidebar/sidebar";
import AdminSidebarNavbar from "@/component/admin/adminSidebarNavbar";

export default function AdminLayout({children}: {children: ReactNode})
{

    return(
        <div className={"bg-slate-200 h-screen"}>
            <AdminSidebarNavbar/>
            {children}
        </div>
    )

}