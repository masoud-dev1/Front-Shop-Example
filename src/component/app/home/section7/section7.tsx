import Image from 'next/image';

export default function Section7() {
  return (
    <div className="w-full mt-10 md:mt-22 flex justify-center px-4 sm:px-0">
      <div className="w-full sm:w-16/20 flex flex-col justify-start">
        {/* first: Featured */}
        <div className="sm:w-1/4 flex items-center">
          <div className="bg-red-700 w-1/5 sm:w-1/15 h-12 sm:h-16 rounded-md"></div>
          <h2 className="text-red-700 ms-3 sm:ms-5 text-sm sm:text-base">Featured</h2>
        </div>

        {/* second: New Arrival title */}
        <div className="w-full mt-4">
          <div className="w-full">
            <h2 className="font-semibold text-xl sm:text-4xl mt-3 sm:mt-5 whitespace-normal">
              New Arrival
            </h2>
          </div>
        </div>

        {/* pictures - responsive grid */}
        <div className="w-full flex flex-col lg:flex-row justify-center mt-6 sm:mt-10 gap-6 lg:gap-4">
          {/* left: PlayStation card */}
          <div className="bg-black w-full lg:w-1/2 flex flex-col justify-center relative">
            <div className="relative cursor-pointer">
              <Image
                src="/Home/f1.svg"
                alt="ps5"
                width={666}
                height={444}
                className="w-full h-auto"
              />
              <div className="absolute left-0 bottom-0 w-full lg:w-1/2 p-4 sm:p-6 lg:p-10 bg-gradient-to-t from-black/80 to-transparent lg:bg-transparent">
                <h2 className="text-xl sm:text-3xl font-semibold text-white">
                  PlayStation 5
                </h2>
                <p className="text-xs sm:text-sm mt-2 text-white whitespace-normal">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="underline text-white text-sm sm:text-base mt-3 sm:mt-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* right side: two columns (women + bottom items) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Women's Collection card */}
            <div className="bg-black w-full relative cursor-pointer">
              <Image
                src="/Home/r.svg"
                alt="women"
                width={777}
                height={214}
                className="w-full h-auto"
              />
              <div className="absolute left-0 bottom-0 w-full md:w-1/2 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent md:bg-transparent">
                <h2 className="text-lg sm:text-2xl font-semibold text-white">
                  Women's Collections
                </h2>
                <p className="text-xs mt-2 text-white whitespace-normal">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="underline text-white text-sm mt-3">
                  Shop Now
                </button>
              </div>
            </div>

            {/* two small cards (Speakers & Perfume) */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="bg-black w-full sm:w-1/2 relative cursor-pointer">
                <Image
                  src="/Home/lb.svg"
                  alt="speakers"
                  width={444}
                  height={444}
                  className="w-full h-auto"
                />
                <div className="absolute left-0 bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-xl font-semibold text-white">Speakers</h2>
                  <p className="text-xs mt-1 text-white">Amazon wireless speakers</p>
                  <button className="underline text-white text-sm mt-2">Shop Now</button>
                </div>
              </div>

              <div className="bg-black w-full sm:w-1/2 relative cursor-pointer">
                <Image
                  src="/Home/rb.svg"
                  alt="perfume"
                  width={444}
                  height={444}
                  className="w-full h-auto"
                />
                <div className="absolute left-0 bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-xl font-semibold text-white">Perfume</h2>
                  <p className="text-xs mt-1 text-white">GUCCI INTENSE OUD EDP</p>
                  <button className="underline text-white text-sm mt-2">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}