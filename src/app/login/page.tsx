import HomeNavbar from "@/component/app/home/navbar/home-navbar";
import Footer from "@/component/app/home/section9/section9";
import TopHome from "@/component/app/home/top-off/home-component";
import Image from "next/image";

export default function Login(){
  return(

    <>
    {/*black off*/}
      <TopHome />
      {/*Navbar*/}
      <HomeNavbar />
    <div className=" w-full flex flex-col-2 mt-20 mb-40">
      <div className="bg-[#cbe4e9] 2xl:w-24/40 md:flex xs:hidden">
        <Image src={"/Home/register/register.svg"} alt="" width={666} height={55}
         className="mx-auto"/>
      </div>
      <div className=" 2xl:w-16/40 flex flex-col pt-20 pb-20 pr-40 pl-40 ">
        <h2 className=" text-4xl font-semibold text-nowrap">Login In To Exclusive</h2>
        <h2 className=" mt-4 font-semibold">enter Your Details Blow</h2>

         <div className=" border-b border-b-gray-300 mt-13">
          <input className="w-full font-semibold focus:outline-none py-2" placeholder="Email"/>
        </div>
        <div className=" border-b border-b-gray-300 mt-13">
          <input className="w-full font-semibold focus:outline-none py-2" placeholder="Password"/>
        </div>
        <div className="bg-red-600 mt-13 w-full h-15 rounded items-center flex justify-center cursor-pointer ">
          <h2 className="text-white font-semibold ">Login</h2>
        </div>
        <div className="bg-white mt-4 w-full h-15 rounded items-center flex flex-col-2 justify-center border-1 border-gray-300 cursor-pointer ">
         <div className="">
          <Image src={"/Home/register/icon-Google.svg"} alt={""} height={35} width={33} className="me-5 "/>
         </div>
          <h2 className=" font-semibold ">Sign Up With Google</h2>
        </div>
      </div>
    </div>

    <Footer/>
    </>
    
  )
}