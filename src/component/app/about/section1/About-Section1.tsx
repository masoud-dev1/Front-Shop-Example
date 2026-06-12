import Image from "next/image"

export default function AboutSection1(){
  return(
    <div className={"w-full  flex flex-col lg:flex-row mt-40 "}>
                <div className={" lg:w-1/2 xl:p-10 2xl:px-30 p-2"}>
                    <div className={" w-full xl:py-10 2xl:px-10 xl:mt-20 2xl:mt-20 flex flex-col"}>
                        
                        <h3 className="text-sm font-semibold sm:text-base md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl">
                            Our Story
                        </h3>
                        
                        <h2 className="mt-10 text-sm sm:text-base md:text-lg lg:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatibus repellendus, reiciendis nihil non vero ab praesentium repudiandae labore deserunt? Porro ex a nam totam laboriosam harum beatae, eius aliquid? onsectetur adipisicing elit. Cum voluptatibus repellendus, reiciendis nihil non vero ab praesentium repudiandae labore deserunt? Porro ex a nam totam laboriosam harum beatae, eius aliquid?
                        </h2>

                        <h3 className="text-sm mt-7 sm:text-base md:text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatibus repellendus, reiciendis nihil non vero ab praesentium repudiandae labore deserunt? Porro ex a nam totam laboriosam harum beatae, eius aliquid?
                        </h3>
                    </div>
                </div>
                
                <div className={" lg:w-1/2"}>
                    <Image src={"/about/right.svg"} alt={"right"} width={930} height={1000}/>
                </div>
                
            </div>
  )
}