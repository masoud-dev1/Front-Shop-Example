import Image from "next/image";

export default function SwiperComponent() {
    return (
        <div className="flex flex-row md:flex-row bg-black text-white h-full">
            {/* سمت راست (متن) */}
            <div className="flex-1 p-6 md:p-12 flex flex-col justify-center">
                {/* لوگو و عنوان */}
                <div className="flex items-center gap-3 mb-4">
                    <Image src="/Home/apple.svg" alt="apple" width={40} height={40} />
                    <h2 className="text-white font-semibold text-lg">iPhone 14 Series</h2>
                </div>

                {/* متن اصلی */}
                <div className="mb-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Up to 10% <br /> off Voucher
                    </h1>
                </div>

                {/* دکمه */}
                <div>
                    <h2 className="inline-block text-white underline decoration-white decoration-2 underline-offset-4 cursor-pointer hover:opacity-80 transition">
                        Shop Now
                    </h2>
                </div>
            </div>

            {/* سمت چپ (تصویر) */}
            <div className="flex-1 relative min-h-[300px] md:min-h-auto">
                <Image
                    src="/Home/home-phone.png"
                    alt="iPhone"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </div>
        </div>
    )
}
