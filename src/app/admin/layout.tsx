import {ReactNode} from "react";
import Sidebar from "@/component/admin/sidebar/sidebar";
import AdminSidebarNavbar from "@/component/admin/adminSidebarNavbar";
import AdminLayoutPage from "@/component/admin/layouts/admin-product-layout";

export default function AdminLayout({children}: {children: ReactNode})
{
    return(
        <div className={"bg-slate-200 h-screen w-full "}>
            <AdminSidebarNavbar/>
            <AdminLayoutPage>
                {children}
            </AdminLayoutPage>
        </div>
    )

}