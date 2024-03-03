import type { Metadata } from "next";
import Navbar from "@/app/(site)/profile/Component/Navbar/Navbar";

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
             <div className="mt-20 min-h-screen mx-20">
                 <Navbar />

                 {children}
            </div>
        </>
    );
}
