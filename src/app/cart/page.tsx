import TopHome from "@/component/app/home/top-off/home-component";
import HomeNavbar from "@/component/app/home/navbar/home-navbar";
import Footer from "@/component/app/home/footer/footer";
import CartIndex from "@/component/app/Cart/CartIndex";

export default function Cart(){
    return(
        <>
            <TopHome />
            {/*Navbar*/}
            <HomeNavbar />

            <CartIndex/>

            <Footer/>
        </>
    )
}