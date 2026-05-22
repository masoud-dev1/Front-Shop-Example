'use client';

import { Navbar } from '@/component/admin/navbar/navbar';
import Sidebar from '@/component/admin/sidebar/sidebar';
import AdminSidebarNavbar from '@/component/admin/adminSidebarNavbar';
import store from '@/redux/store/store';
import { Provider } from 'react-redux';
import HomeComponent from '@/component/app/home/top-off/home-component';
import TopHome from '@/component/app/home/top-off/home-component';
import HomeNavbar from '@/component/app/home/navbar/home-navbar';
import Section1 from '@/component/app/home/section1/section1';
import Section2 from '@/component/app/home/section2/section2';
import Section3 from '@/component/app/home/section3/section3';
import Section4 from '@/component/app/home/section4/section4';

export default function Home() {
  return (
    <div>
      {/*black off*/}
      <TopHome />
      {/*Navbar*/}
      <HomeNavbar />
      {/*Section1*/}
      <Section1 />

      {/*Section2*/}
      <Section2 />

      <div className="w-full flex justify-center">
        <div className="bg-gray-200 w-16/20  h-[2px] mt-20"></div>
      </div>
      {/*section3*/}
      <Section3 />
      <div className="w-full flex justify-center">
        <div className="bg-gray-200 w-16/20 h-[2px] mt-20"></div>
      </div>
      {/*section 4*/}
      <Section4 />

      <div className={'h-1000 '}></div>
    </div>
  );
}
