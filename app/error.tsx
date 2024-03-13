"use client"
import dynamic from "next/dynamic";
const DynamicComponent = dynamic(() => import('./Component/error'), {
    ssr: false,
});
export default function ErrorBounDary() {
    return (
        <>
     <DynamicComponent/>
        </>
    )
}
