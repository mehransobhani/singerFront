import type {Metadata} from "next";
import Sidebar from "@/app/admin/Component/Sidebar/Sidebar";
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex h-screen bg-gray-100">
                <Sidebar/>
                <div className="flex flex-col flex-1 overflow-y-auto mt-16">
                     {children}
                </div>
            </div>
        </>
    );
}
