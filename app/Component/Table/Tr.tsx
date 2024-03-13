import {ReactNode} from "react";

interface props {
    children:ReactNode
    cssClass?:string
}

export default function Tr({children , cssClass}:props) {
    return (<>
         <tr
            className={["border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-center",cssClass].join(" ")}>
            {children}
        </tr>
    </>)
}
