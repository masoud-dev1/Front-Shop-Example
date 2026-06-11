import Footer from "@/component/app/home/footer/footer";
import HomeNavbar from "@/component/app/home/navbar/home-navbar";
import TopHome from "@/component/app/home/top-off/home-component";

export default function Account() {
    return (
        <>

            <TopHome />
            
            {/*Navbar*/}
            <HomeNavbar />

            <div className={" w-full mt-30 lg:px-20 xl:px-30 2xl:px-50 md:text-base text-sm"}>

                <div className={" w-full flex flex-row-2"}>

                    {/*LEFT SIDE*/}
                    <div className={"w-3/10 flex flex-col"}>
                        <div className={" w-full flex flex-col"}>
                            <h2 className={"text-lg font-semibold"}>Manage My Account</h2>
                            <h3 className={"ms-10 mt-4 text-gray-500"}>My Profile</h3>
                            <h3 className={"ms-10 mt-1 text-gray-500"}>Address Book</h3>
                            <h3 className={"ms-10 mt-1 text-gray-500"}>My Payment Option</h3>
                        </div>
                        <div className={" w-full flex flex-col mt-6"}>
                            <h2 className={"text-lg font-semibold"}>My Order</h2>
                            <h3 className={"ms-10 mt-4 text-gray-500"}>My Return</h3>
                            <h3 className={"ms-10 mt-1 text-gray-500"}>My Cancellations</h3>
                        </div>
                        <div className={" w-full flex flex-col mt-6"}>
                            <h2 className={"text-lg font-semibold"}>My Whishlist</h2>
                        </div>
                    </div>

                    {/*RIGHT SIDE*/}
                    <div className={" w-7/10 md:py-13 md:pl-23 md:pr-10 shadow-[0_0_15px_rgba(0,0,0,0.1)] shadow-gray-200"}>
                        <div className={" w-full flex flex-col "}>
                            <h2 className={"text-red-700 text-xl font-semibold"}>Edit Your Profile</h2>
                            <div className={" flex flex-row-2 mt-5"}>
                                <div className={" w-1/2 flex flex-col"}>
                                    <h2 className={"font-semibold"}>First Name</h2>
                                    <input type={"text"} className={"bg-gray-100 w-9/10 rounded h-12 mt-1"}/>
                                </div>
                                <div className={" w-1/2 flex flex-col"}>
                                    <h2 className={"font-semibold"}>Last Name</h2>
                                    <input type={"text"} className={"bg-gray-100 w-9/10 rounded h-12 mt-1"}/>
                                </div>
                            </div>
                            <div className={" flex flex-row-2 mt-5"}>
                                <div className={" w-1/2 flex flex-col"}>
                                    <h2 className={"font-semibold"}>Email</h2>
                                    <input type={"text"} className={"bg-gray-100 w-9/10 rounded h-12 mt-1"}/>
                                </div>
                                <div className={" w-1/2 flex flex-col"}>
                                    <h2 className={"font-semibold"}>Address</h2>
                                    <input type={"text"} className={"bg-gray-100 w-9/10 rounded h-12 mt-1"}/>
                                </div>
                            </div>
                            <div className={" flex flex-col mt-5"}>
                               <h3 className={"font-semibold"}>Password Changes</h3>
                                <input type={"text"} className={"bg-gray-100 w-19/20 rounded h-12 mt-2 p-2"} placeholder={"Currnet Password"}/>
                                <input type={"text"} className={"bg-gray-100 w-19/20 rounded h-12 mt-3 p-2"} placeholder={"New Password"}/>
                                <input type={"text"} className={"bg-gray-100 w-19/20 rounded h-12 mt-3 p-2"} placeholder={"Confirm New Password"}/>
                            </div>
                            <div className={" flex flex-row-2 justify-end mt-5 w-19/20"}>
                                <button className={"bg-white rounded-md p-4  me-5 border border-gray-200"}>Cancel</button>
                                <button className={"bg-red-600 rounded-md p-4 text-white text-nowrap"}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer/>
        </>

    )
}