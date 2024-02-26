
import Image from "next/image";
import React from "react";
import banner from "@/public/image/banner/hero.svg"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="flex h-screen">
          <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
              <div className="max-w-md w-full p-6">
                  {children}
              </div>
          </div>

          <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
              <div className="max-w-md text-center">
                  <Image
                      src={banner}
                      alt="Login Banner"
                      width={1025}
                      height={662}
                      quality={75}
                      sizes="100vw"
                      priority
                  />
              </div>
          </div>
      </div>

  )
}
