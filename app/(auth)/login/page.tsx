import React from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "@/public/image/banner/hero.svg"


export default function Page(){
    return (
        <>
            <h1 className="text-3xl font-semibold mb-6 text-rose-500 text-center">ورود </h1>
            <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
                وارد حساب کاربری خود شوید و از خدمات استفاده کنید
            </h1>
            <form action="#" method="POST" className="space-y-4">

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">ایمیل</label>
                    <input type="text" id="email" name="email"
                           className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
                </div>
                <div>
                    <label htmlFor="password"
                           className="block text-sm font-medium text-gray-700">کلمه عبور</label>
                    <input type="password" id="password" name="password"
                           className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
                </div>
                <div>
                    <button type="submit"
                            className="w-full bg-rose-500 text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
                        ورود

                    </button>
                </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
                <p>حساب کاربری ندارید ؟ <Link href={"register"} className="text-black hover:underline"> ثبت نام
                    کنید</Link>
                </p>
            </div>

        </>
    );
}
