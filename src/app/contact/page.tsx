import TopHome from "@/component/app/home/top-off/home-component";
import { Navbar } from "@/component/admin/navbar/navbar";
import Footer from "@/component/app/home/footer/footer";
import HomeNavbar from "@/component/app/home/navbar/home-navbar";
import Image from "next/image";

export default function ContactPage() {
    return (
        <>
            <TopHome />
            <HomeNavbar />

            <div className="w-[85%] mx-auto mt-8 md:mt-30 flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Left side - Contact Info */}
                <div className="w-full md:w-1/3 flex flex-col p-6 md:p-10 shadow-[0_0_15px_rgba(0,0,0,0.1)] shadow-gray-200 rounded-lg">
                    {/* Call To Us section */}
                    <div className="flex items-center">
                        <div className="bg-red-500 flex justify-center items-center w-12 h-12 rounded-full shrink-0">
                            <Image src="/contact/ww1.svg" alt="call icon" width={30} height={30} />
                        </div>
                        <h3 className="ms-2 text-xl font-semibold">Call To Us</h3>
                    </div>
                    <h3 className="mt-5">We are available 24/7, 7 days a week</h3>
                    <h3 className="mt-2 border-b-2 pb-8 border-gray-200">Phone: +9927202232</h3>

                    {/* Write To Us section */}
                    <div className="flex items-center mt-8 md:mt-10">
                        <div className="bg-red-500 flex justify-center items-center w-12 h-12 rounded-full shrink-0">
                            <Image src="/contact/ww.svg" alt="write icon" width={30} height={30} />
                        </div>
                        <h3 className="ms-2 text-xl font-semibold">Write To Us</h3>
                    </div>
                    <h3 className="mt-5">We are available 24/7, 7 days a week</h3>
                    <h3 className="mt-2">Emails: masoudabbasnejad1@gmail.com</h3>
                    <h3 className="mt-2 pb-6">Emails: masoudabbasnejad1@gmail.com</h3>
                </div>

                {/* Right side - Contact Form */}
                <div className="w-full md:w-2/3  rounded-lg p-4 md:p-6 shadow-[0_0_15px_rgba(0,0,0,0.1)] shadow-gray-200">
                    {/* Name inputs row */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <input
                            type="text"
                            className="bg-gray-200 w-full md:w-1/3 h-13 p-4 text-lg rounded"
                            placeholder="Your Name"
                        />
                        <input
                            type="text"
                            className="bg-gray-200 w-full md:w-1/3 h-13 p-4 text-lg rounded"
                            placeholder="Your Email"
                        />
                        <input
                            type="text"
                            className="bg-gray-200 w-full md:w-1/3 h-13 p-4 text-lg rounded"
                            placeholder="Your Phone"
                        />
                    </div>

                    {/* Message textarea */}
                    <div className="mt-6">
            <textarea
                className=" w-full rounded h-48 md:h-55 p-4 text-lg bg-gray-200"
                placeholder="Your Message"
            />
                    </div>

                    {/* Send button */}
                    <div className="flex justify-end mt-6">
                        <button className="bg-red-600 px-6 md:px-10 py-3 md:py-4 rounded text-white cursor-pointer hover:bg-red-700 transition w-full md:w-auto">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}