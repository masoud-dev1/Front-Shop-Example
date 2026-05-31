import Sec1Left from "@/component/app/home/section1/left/sec1left";
import Sec1Right from "@/component/app/home/section1/right/sec1right";

export default function Section1() {
    return (
        <div className={"flex flex-col-2"}>
            <Sec1Left/>
            <Sec1Right/>
        </div>
    )
}