import {ReactNode} from "react";

interface props {
    title: string
}

export default function Thead({heads}: { heads: props[] }) {
    return (<>
        <thead
            className="border-b border-neutral-200 font-medium bg-rose-100 text-center">
        <tr>
            {
                heads.map((head: props, index: number) => (
                    <th scope="col" className="px-6 py-4" key={index}>{head.title}</th>
                ))
            }
        </tr>
        </thead>
    </>)
}
