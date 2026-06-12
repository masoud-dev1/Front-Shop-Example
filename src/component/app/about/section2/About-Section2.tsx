import Footer from "@/component/app/home/footer/footer";
import Image from "next/image";

export default function AboutSection2(){
    return (
        <div className="w-4/5 mx-auto mt-10 md:mt-20 lg:mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* هر کارت */}
            <div className="flex flex-col justify-center py-10 rounded border border-gray-300 cursor-pointer ">
                <div className="bg-gray-400 flex flex-col justify-center rounded-full w-25 h-25 mx-auto">
                    <div className="mx-auto my-auto bg-black rounded-full w-18 h-18 flex items-center justify-center">
                        <Image src="/about/e.svg" alt="asd" width={33} height={33} className="mx-auto my-auto mt-3" />
                    </div>
                </div>
                <h2 className="mx-auto mt-5 text-4xl font-semibold">10.5k</h2>
                <h2 className="text-lg mx-auto mt-4 whitespace-nowrap">Sellers active our site</h2>
            </div>
            <div className="flex flex-col justify-center py-10 rounded border border-gray-300 cursor-pointer ">
                <div className="bg-gray-400 flex flex-col justify-center rounded-full w-25 h-25 mx-auto">
                    <div className="mx-auto my-auto bg-black rounded-full w-18 h-18 flex items-center justify-center">
                        <Image src="/about/e.svg" alt="asd" width={33} height={33} className="mx-auto my-auto mt-3" />
                    </div>
                </div>
                <h2 className="mx-auto mt-5 text-4xl font-semibold">10.5k</h2>
                <h2 className="text-lg mx-auto mt-4 whitespace-nowrap">Sellers active our site</h2>
            </div>
            <div className="flex flex-col justify-center py-10 rounded border border-gray-300 cursor-pointer ">
                <div className="bg-gray-400 flex flex-col justify-center rounded-full w-25 h-25 mx-auto">
                    <div className="mx-auto my-auto bg-black rounded-full w-18 h-18 flex items-center justify-center">
                        <Image src="/about/e.svg" alt="asd" width={33} height={33} className="mx-auto my-auto mt-3" />
                    </div>
                </div>
                <h2 className="mx-auto mt-5 text-4xl font-semibold">10.5k</h2>
                <h2 className="text-lg mx-auto mt-4 whitespace-nowrap">Sellers active our site</h2>
            </div>
            <div className="flex flex-col justify-center py-10 rounded border border-gray-300 cursor-pointer ">
                <div className="bg-gray-400 flex flex-col justify-center rounded-full w-25 h-25 mx-auto">
                    <div className="mx-auto my-auto bg-black rounded-full w-18 h-18 flex items-center justify-center">
                        <Image src="/about/e.svg" alt="asd" width={33} height={33} className="mx-auto my-auto mt-3" />
                    </div>
                </div>
                <h2 className="mx-auto mt-5 text-4xl font-semibold">10.5k</h2>
                <h2 className="text-lg mx-auto mt-4 whitespace-nowrap">Sellers active our site</h2>
            </div>
        </div>

    )
}