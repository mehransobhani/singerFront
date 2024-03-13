import {ReactNode} from "react";

interface props{
    children:ReactNode
}
export default function Panel({children}:props) {
    return (
        <div className={"bg-white  py-10 px-2 sm:px-10"}>
            {children}
        </div>
    )
}
