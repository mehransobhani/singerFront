'use client';
import djBanner from "@/public/image/banner/dj.jpg"
import singerBanner from "@/public/image/banner/singer.jpg"
import Image, {StaticImageData} from "next/image";

const callouts:{name:string,description:string,imageAlt:string,href:string,imageSrc:StaticImageData}[] = [
    {
        name: 'دیجی ها',
        description: 'یافتن دیجی برای انواع مراسمات و جشن ها',
        imageSrc: djBanner,
        imageAlt: 'یافتن دیجی برای انواع مراسمات و جشن ها',
        href: '#',
    },
    {
        name: 'گروه های موسیقی',
        description:  'یافتن گروه های موسیقی برای انواع مراسمات و جشن ها',
        imageSrc: singerBanner,
        imageAlt:  'یافتن گروه های موسیقی برای انواع مراسمات و جشن ها',
        href: '#',
    }
    ]

    export default function Example():JSX.Element {
    return (

            <div className="bg-[#f8f8f8]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h1 className="text-2xl font-bold text-center">
                            دسته بندی های  <br/>{" "}
                            <span className="text-rose-500 font-extrabold my-3">هنرمندان</span>
                        </h1>
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
                            {callouts.map((callout:{name:string,description:string,imageAlt:string,href:string,imageSrc:StaticImageData}) => (

                                // <div
                                //     className="m-4 w-full   bg-white rounded-2xl shadow-xl overflow-hidden  ">
                                //     <div className="p-8">
                                //         <div className="relative h-72 w-full">
                                //             <Image src={callout.imageSrc} alt="DJ Equipment" layout="fill"
                                //                    objectFit="cover" className="rounded-t-2xl"/>
                                //         </div>
                                //         <div className="pt-6 pb-8">
                                //             <h3 className="text-2xl font-bold">{callout.name}</h3>
                                //             <p className="mt-3 text-gray-700">
                                //                 {
                                //                     callout.description
                                //                 }
                                //             </p>
                                //         </div>
                                //         <div className="flex justify-center pb-6">
                                //             <button
                                //                 className="bg-rose-500 text-white rounded-full px-6 py-3 text-lg font-medium hover:bg-rose-600">
                                //                 مشاهده
                                //             </button>
                                //         </div>
                                //     </div>
                                // </div>

                                // <div className="w-full md:w-1/2 bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                //     <div className="p-5">
                                //         <img src="/microphone.jpg" alt="Microphone" className="w-full h-48 object-cover"/>
                                //         <div className="py-4">
                                //             <h2 className="text-xl font-semibold text-yellow-300 mb-2">Microphones</h2>
                                //             <p className="text-yellow-100 mb-4 text-sm">Capture crystal-clear sound with our studio microphones.</p>
                                //             <a href="#" className="inline-block bg-yellow-500 text-white px-4 py-2 text-sm rounded hover:bg-yellow-600 transition-colors">Shop Now</a>
                                //         </div>
                                //     </div>
                                // </div>

                                //
                                // <div
                                //     className="bg-white rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
                                //     <div className="flex flex-col items-center justify-between p-4">
                                //         <div className="text-center">
                                //             <h2 className="text-3xl font-bold text-rose-500 mb-2">{callout.name}</h2>
                                //             <p className="text-black mb-4">{callout.description}</p>
                                //         </div>
                                //         <Image src={callout.imageSrc} alt="Microphone"
                                //              className="w-full h-64 object-cover mb-4"/>
                                //         <button
                                //             className="bg-rose-500 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-yellow-600 transition">
                                //             مشاهده
                                //         </button>
                                //     </div>
                                // </div>


                                <div
                                    className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg">
                                    <div className="p-6">
                                        <Image src={callout.imageSrc} alt="Microphone"
                                             className="w-full h-64 object-cover rounded"/>
                                        <div className="mt-4">
                                            <h2 className="text-xl font-bold text-rose-500 mb-2">{callout.name}</h2>
                                            <p className="text-base font-semibold text-black mb-2">{callout.description}</p>
                                            <button
                                                className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition">
                                                مشاهده
                                            </button>
                                        </div>
                                    </div>
                                </div>


                                // <div key={callout.name} className="group relative border shadow bg-white rounded-xl pb-10">
                                //     <div
                                //         className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                //         <Image
                                //             src={callout.imageSrc}
                                //             alt={callout.imageAlt}
                                //             className="h-full w-full object-cover object-center"
                                //         />
                                //     </div>
                                //     <div className="px-5">
                                //     <h3 className="mt-6 text-sm text-rose-500">
                                //         <a href={callout.href}>
                                //             <span className="absolute inset-0"/>
                                //             {callout.name}
                                //         </a>
                                //     </h3>
                                //     <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                                //     </div>
                                // </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )
    }
