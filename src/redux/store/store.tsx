import {configureStore} from "@reduxjs/toolkit";
import AdminNavbarAnimation from "@/redux/slice/adminNavbarAnimation";

const store = configureStore({
    reducer: {
        adminNavbarAnimation: AdminNavbarAnimation,
    }
});

export default store;