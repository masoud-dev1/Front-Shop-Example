'use client';

import {Navbar} from "@/component/admin/navbar/navbar";
import Sidebar from "@/component/admin/sidebar/sidebar";
import AdminSidebarNavbar from "@/component/admin/adminSidebarNavbar";
import store from "@/redux/store/store";
import {Provider} from "react-redux";

export default function Home() {
    return (
        <Provider store={store}>
            <div className={"bg-slate-100"}>
                <AdminSidebarNavbar/>
                <div className={"h-10000 w-22"}>sd</div>
            </div>
        </Provider>
    );
}