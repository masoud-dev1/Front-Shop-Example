import Image from 'next/image';

export default function Section8() {
  return (
    <div className="w-full mt-10 md:mt-40 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* grid: موبایل ۱ ستون، تبلت ۲ ستون، دسکتاپ ۳ ستون */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          
          {/* کارت اول */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <Image 
                  src="/Home/sec9/icon-delivery.svg" 
                  alt="Free delivery" 
                  width={28} 
                  height={28} 
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-base sm:text-lg">Free And Fast Delivery</h3>
              <p className="text-gray-600 text-sm sm:text-base">Free delivery for all orders over $140</p>
            </div>
          </div>

          {/* کارت دوم */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <Image 
                  src="/Home/sec9/icon-customer.svg" 
                  alt="24/7 customer service" 
                  width={28} 
                  height={28} 
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-base sm:text-lg">24/7 CUSTOMER SERVICE</h3>
              <p className="text-gray-600 text-sm sm:text-base">Friendly 24/7 customer support</p>
            </div>
          </div>

          {/* کارت سوم */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
                <Image 
                  src="/Home/sec9/icon-secure.svg" 
                  alt="Money back guarantee" 
                  width={28} 
                  height={28} 
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-base sm:text-lg">MONEY BACK GUARANTEE</h3>
              <p className="text-gray-600 text-sm sm:text-base">We return money within 30 days</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}