export default function AdminSearchBox(){
    return(
        <>
            {/*Search Input ....*/}
            <div className="relative w-22/40 ms-30">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full rounded-full border h-11 border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {/* آیکون ذره‌بین (می‌توانید از هر آیکون‌ست مثل Heroicons استفاده کنید) */}
                <svg
                    className="absolute left-3 top-3 h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
            </div>
        </>
    )
}