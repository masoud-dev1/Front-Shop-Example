import TopHome from "@/component/app/home/top-off/home-component";
import HomeNavbar from "@/component/app/home/navbar/home-navbar";
import Footer from "@/component/app/home/footer/footer";

export default function NotFound() {
    return (
        <>
            <TopHome />
            <HomeNavbar />
            <div className="flex flex-col items-center w-11/12 md:w-4/5 mx-auto mt-20 md:mt-30 text-center">
                <h1 className="text-5xl md:text-7xl font-bold">404 Not Found</h1>
                <h2 className="mt-6 md:mt-8 text-base md:text-lg">
                    Your visited page not found. You may go back to home page.
                </h2>
                <button className="bg-red-600 py-3 md:py-4 px-6 md:px-15 text-white rounded mt-10 md:mt-13 cursor-pointer hover:bg-red-700 transition w-full md:w-auto">
                    Back To Home
                </button>
            </div>
            <Footer />
        </>
    );
}