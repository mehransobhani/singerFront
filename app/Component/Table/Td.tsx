import {ReactNode} from "react";

interface props {
    children:ReactNode
}

export default function Td({children}:props) {
    return (<>
        <td className="whitespace-nowrap px-6 py-4">{children}</td>
    </>)
}
