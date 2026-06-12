import TopHome from "@/component/app/home/top-off/home-component";
import HomeNavbar from "@/component/app/home/navbar/home-navbar";
import Footer from "@/component/app/home/footer/footer";
import AboutSection1 from "@/component/app/about/section1/About-Section1";
import Image from "next/image";
import AboutSection2 from "@/component/app/about/section2/About-Section2";

export default function AboutPage() {
    return (
        <>
            <TopHome/>
            <HomeNavbar/>
            <AboutSection1/>
            <AboutSection2/>
            <Footer/>
        </>
    )
}