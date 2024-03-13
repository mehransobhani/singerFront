"use client"
import Link from "next/link";

export default function error() {
    return (
        <>
            <main className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">

                <div className="text-center">

                    <p className="text-9xl font-bold text-rose-500">500</p>

                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">خطای سمت سرور پیش آمده است
                    </h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">متاسفانه خطای سمت سرور پیش آمده است لطفا دقایقی دیگر تلاش کنید
                        !</p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href={"/"}
                            className="rounded-md bg-rose-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            بازگشت به صفحه اصلی
                        </Link>
                    </div>


                </div>
            </main>
        </>
    )
}
