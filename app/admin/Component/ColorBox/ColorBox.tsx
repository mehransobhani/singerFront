import {ReactNode} from "react";
import {Squares2X2Icon} from "@heroicons/react/20/solid";

interface pageProps {
    title: string,
    color: string,
    icon: ReactNode,
    value: string
}

export default function ColorBox({title, icon, value, color}: pageProps): ReactNode {
    return (<>
        <div
            className={[" rounded-2xl  gap-2 flex flex-col justify-center w-full h-52 justify-items-center items-center ",color].join(" ")}>
            <span>
               {icon}
            </span>
            <span className={"text-white font-bold text-lg"}>
               {title}
            </span>
            <span className={"text-slate-100 font-bold "}>
               {value}
            </span>
        </div>
    </>)
}
