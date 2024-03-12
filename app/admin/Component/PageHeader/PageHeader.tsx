import {ReactNode} from "react";
import {Squares2X2Icon} from "@heroicons/react/20/solid";

interface pageProps {
    title: string,
    icon: ReactNode,
    description: string
}

export default function PageHeader({title, icon, description}: pageProps): ReactNode {
    return (<>
        <div className={"flex flex-col justify-center mb-10"}>
            <span className={"grid justify-center mb-2"}>
                {icon}
            </span>
            <h1 className={"text-center text-2xl  font-bold  "}>
                {title}
            </h1>
            <p className="mt-1 text-sm font-normal text-gray-500 text-center ">
                {description}
            </p>
        </div>
    </>)
}
