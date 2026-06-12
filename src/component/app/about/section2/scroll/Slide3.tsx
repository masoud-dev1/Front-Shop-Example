import Image from "next/image";

export default function AboutSlide3(){
    return(
        <>
            <div className={" w-full grid grid-cols-1 cursor-pointer"}>
                <Image src={"/about/frame1.svg"} alt="Image 1" width={1111} height={1111} />
                <h2 className={"text-black mt-10 text-4xl"}>Tom Cruise</h2>
                <h3 className={"tex-lg text-black mt-2"}>Founder & Chairman</h3>
                <div className={" flex flex-row gap-4 w-full mt-4"}>
                    <Image src={"/about/icon-instagram.svg"} alt={"sad"} width={33} height={33} />

                    <Image src={"/about/icon-Linkedin.svg"} alt={"sad"} width={33} height={33}
                    />

                    <Image src={"/about/icon-Twitter.svg"} alt={"sad"} width={33} height={33}
                    />
                </div>
            </div>
        </>
    )
}