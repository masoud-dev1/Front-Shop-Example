'use client';

import {Navbar} from "@/component/admin/navbar/navbar";
import Sidebar from "@/component/admin/sidebar/sidebar";
import AdminSidebarNavbar from "@/component/admin/adminSidebarNavbar";
import store from "@/redux/store/store";
import {Provider} from "react-redux";
import HomeComponent from "@/component/app/home/home-component";
import TopHome from "@/component/app/home/home-component";
import HomeNavbar from "@/component/app/home/home-navbar";

export default function Home() {
    return (
      <div>
          <TopHome />
          <HomeNavbar/>
      </div>
    );
}