import {configureStore} from "@reduxjs/toolkit";
import AdminNavbarAnimation from "@/redux/slice/adminNavbarAnimation";
import SidebarButton from "@/redux/slice/sidebar-button";
import AdminAddProductModal from "@/redux/slice/AdminAddProductModal";

const store = configureStore({
    reducer: {
        adminNavbarAnimation: AdminNavbarAnimation,
        sidebarButton: SidebarButton,
        adminAddProductModal: AdminAddProductModal,
    }
});

export default store;