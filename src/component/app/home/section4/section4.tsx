import Section1 from '@/component/app/home/section2/Swiper/sec2-swiper';
import Sec2Swiper from '@/component/app/home/section2/Swiper/sec2-swiper';
import Sec4Swiper from '@/component/app/home/section4/swiper/sec4swiper';

export default function Section4() {
  return (
    <div className={' w-full mt-20 flex justify-center'}>
      <div className={' w-16/20 flex flex-col justify-start'}>
        {/*first*/}
        <div className={' sm:w-1/4 flex flex-col-2 items-center '}>
          <div className={'bg-red-700 w-1/15 h-16 rounded-md'}></div>
          <h2 className={'text-red-700 ms-5'}>This Mounth</h2>
        </div>
        {/*secend Time*/}
        <div className={'bg- w-full flex flex-col justify-start mt-4 relative'}>
          {/*div for times*/}
          <div className={' lg:w-6/10 xl:w-5/10 sm:flex sm:flex-col-2 hidden'}>
            {/*left*/}
            <div className={'w-1/3'}>
              <h2 className={'text-nowrap font-semibold text-lg md:text-4xl mt-5 '}>
                Best Selling Products
              </h2>
            </div>
          </div>

          {/*Swiper Slider*/}
          <div className={' w-full mt-8 '}>
            <Sec4Swiper />
          </div>
        </div>
      </div>
    </div>
  );
}
