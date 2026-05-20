'use client';

import {Navbar} from "@/component/admin/navbar/navbar";
import Sidebar from "@/component/admin/sidebar/sidebar";
import AdminSidebarNavbar from "@/component/admin/adminSidebarNavbar";
import store from "@/redux/store/store";
import {Provider} from "react-redux";
import HomeComponent from "@/component/app/home/top-off/home-component";
import TopHome from "@/component/app/home/top-off/home-component";
import HomeNavbar from "@/component/app/home/navbar/home-navbar";
import Section1 from "@/component/app/home/section1/section1";

export default function Home() {
    return (
      <div>
          {/*black off*/}
          <TopHome />
          {/*Navbar*/}
          <HomeNavbar/>
          {/*Section1*/}
          <Section1/>
      </div>
    );
}