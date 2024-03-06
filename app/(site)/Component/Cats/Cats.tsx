'use client';
import speaker from "@/public/image/banner/speaker.png"
import djBanner from "@/public/image/banner/dj.jpg"
import singerBanner from "@/public/image/banner/singer.jpg"
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

const callouts: {
    name: string,
    class: string,
    description: string,
    imageAlt: string,
    href: string,
    imageSrc: StaticImageData
}[] = [
    {
        name: 'دیجی ها',
        description: 'یافتن دیجی برای انواع مراسمات و جشن ها',
        imageSrc: djBanner,
        class: "lg:col-start-2",
        imageAlt: 'یافتن دیجی برای انواع مراسمات و جشن ها',
        href: '#',
    },
    {
        name: 'گروه های موسیقی',
        class: "",
        description: 'یافتن گروه های موسیقی برای انواع مراسمات و جشن ها',
        imageSrc: singerBanner,
        imageAlt: 'یافتن گروه های موسیقی برای انواع مراسمات و جشن ها',
        href: '#',
    }
]

export default function Example(): JSX.Element {
    return (

        <div className=" bg-cat bg-cover  bg-fixed ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h1 className="text-2xl font-bold text-center">
                        دسته بندی های <br/>{" "}
                        <span className="text-rose-500 font-extrabold my-3">هنرمندان</span>
                    </h1>
                    <div className="relative overflow-hidden pt-16 pb-32 grid grid-cols-2 gap-5">
                        {callouts.map((callout: {
                            name: string,
                            class: string,
                            description: string, imageAlt: string, href: string, imageSrc: StaticImageData
                        }, index: number) => (


                            <div
                                className=" bg-white border border-gray-200 rounded-lg shadow-md ">
                                <div className={"h-80 overflow-hidden"}>
                                     <Image placeholder="blur" className="rounded-t-lg" src={callout.imageSrc} alt={callout.imageAlt} layout={"response"} />
                                 </div>
                                <div className="p-5">
                                    <Link href={callout.href}>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                                            {callout.name}
                                        </h5>
                                    </Link>
                                    <p className="mb-3 font-normal text-gray-700 flex ">
                                        {callout.description}
                                    </p>
                                    <Link href={callout.href}
                                          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-rose-500 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300">

                                        مشاهده

                                    </Link>
                                </div>
                            </div>



                            // <div className="relative">
                            //     <div
                            //         className="block rounded-lg bg-white text-white shadow-secondary-1 dark:bg-surface-dark">
                            //         <Image
                            //             className="rounded-lg"
                            //             src={callout.imageSrc}
                            //             alt=""/>
                            //         <div className="absolute top-0 p-6 bg-white bg-opacity-60 rounded">
                            //             <h5 className="mb-2 text-xl font-bolder leading-tight text-black ">
                            //                 {callout.name}
                            //             </h5>
                            //             <p className="mb-4 text-base text-bolder text-black">
                            //                 {callout.description}
                            //             </p>
                            //             <div className="mt-6">
                            //                 <a
                            //                     className="inline-flex rounded-lg bg-rose-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-rose-500 hover:bg-rose-700 hover:ring-rose-700"
                            //                     href="/login">
                            //                     مشاهده
                            //                 </a>
                            //             </div>
                            //
                            //         </div>
                            //     </div>
                            // </div>

                            // <>
                            //     <div className="relative">
                            //         <div
                            //             className="lg:mx-auto lg:grid   lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24  rounded border  bg-white ">
                            //             <div className="mt-12 sm:mt-16 lg:mt-0">
                            //                 <div
                            //                     className="lg:relative lg:h-full">
                            //                     <Image alt={callout.imageAlt} loading="lazy" width="647" height="486"
                            //                            className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5  "
                            //                            src={callout.imageSrc}/>
                            //                 </div>
                            //             </div>
                            //             <div
                            //                 className={["mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none py-10 lg:px-0 grid  items-center", callout.class].join(" ")}>
                            //                 <div className={"px-10"}>
                            //
                            //
                            //                     <div className="">
                            //                         <h2 className="text-3xl font-bold tracking-tight text-gray-800">
                            //                             {callout.name}
                            //                         </h2>
                            //                         <p className="mt-4 text-lg text-gray-600">
                            //                             {callout.description}
                            //                         </p>
                            //                         <div className="mt-6">
                            //                             <a className="inline-flex rounded-lg bg-rose-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-rose-500 hover:bg-rose-700 hover:ring-rose-700"
                            //                                href="/login">
                            //                                 مشاهده
                            //                             </a>
                            //                         </div>
                            //                     </div>
                            //                 </div>
                            //             </div>
                            //
                            //         </div>
                            //     </div>
                            //
                            // </>

                            // <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                            //
                            //     <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                            //
                            //         <Link href={callout.href}>
                            //             <Image className="w-full" src={callout.imageSrc} alt="Sunset in the mountains" />
                            //         </Link>
                            //         <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
                            //             <Link href={callout.href}
                            //                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
                            //                 {callout.name}
                            //             </Link>
                            //             <p className="text-gray-500 text-sm">
                            //                 Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!
                            //             </p>
                            //             <p className="mt-5 text-gray-600 text-xs">
                            //                 By
                            //                 <a href="#" className="text-xs text-indigo-600 transition duration-500 ease-in-out">
                            //                     Mehdi Ahmadi
                            //                 </a> | in <a href="#" className="text-xs text-indigo-600 transition duration-500 ease-in-out">
                            //                 Cooking
                            //             </a>, <a href="#" className="text-xs text-indigo-600 transition duration-500 ease-in-out">
                            //                 Recipe
                            //             </a>
                            //             </p>
                            //         </div>
                            //
                            //     </div>
                            //
                            // </div>

                            // <div
                            //     className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg">
                            //     <div className="p-6">
                            //         <Image src={callout.imageSrc} alt="Microphone"
                            //              className="w-full h-64 object-cover rounded"/>
                            //         <div className="mt-4">
                            //             <h2 className="text-xl font-bold text-rose-500 mb-2">{callout.name}</h2>
                            //             <p className="text-base font-semibold text-black mb-2">{callout.description}</p>
                            //             <button
                            //                 className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition">
                            //                 مشاهده
                            //             </button>
                            //         </div>
                            //     </div>
                            // </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
