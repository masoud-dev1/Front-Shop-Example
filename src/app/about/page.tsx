import TopHome from "@/component/app/home/top-off/home-component";
import HomeNavbar from "@/component/app/home/navbar/home-navbar";
import Footer from "@/component/app/home/footer/footer";
import AboutSection1 from "@/component/app/about/section1/About-Section1";
import Image from "next/image";
import AboutSection2 from "@/component/app/about/section2/About-Section2";
import AboutScroll from "@/component/app/about/section2/scroll/About-Scroll";
import Section8 from "@/component/app/home/section8/section8";

export default function AboutPage() {
    return (
        <>
            <TopHome/>
            <HomeNavbar/>
            <AboutSection1/>
            <AboutSection2/>

            <div className={" w-4/5 mx-auto mt-40"}>
                <AboutScroll/>
            </div>

            <div className={"mt-10"}>
                <Section8 />
            </div>


            <Footer/>
        </>
    )
}