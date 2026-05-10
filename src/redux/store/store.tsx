import {configureStore} from "@reduxjs/toolkit";
import AdminNavbarAnimation from "@/redux/slice/adminNavbarAnimation";
import SidebarButton from "@/redux/slice/sidebar-button";

const store = configureStore({
    reducer: {
        adminNavbarAnimation: AdminNavbarAnimation,
        sidebarButton: SidebarButton,
    }
});

export default store;