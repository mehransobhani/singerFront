import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import('./Component/NotFind'), {
    ssr: false,
});
export default function notFound() {
    return (
        <>
            <DynamicComponent/>
         </>
    )
}
