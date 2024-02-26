'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/virtual';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Star from "@/app/(site)/Component/Star/Star";
import Image from "next/image";
import avatar from "@/public/image/avatar/avatar.png"
import {MapPinIcon} from "@heroicons/react/24/solid";

export default function BestOfMonth() {
    return (

        <div className=" h-[500px] bg-[#f5f5f5] py-[50px]">
            <h1 className="text-2xl font-bold text-center">
                برترین های <br/>{" "}
                <span className="text-rose-500 font-extrabold my-3">این ماه</span>
            </h1>
            <div className={"py-[50px]  md:mx-[100px]"} style={{cursor: "grab"}}>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={4.5}
                    breakpoints={{
                        50: {
                            slidesPerView: 1.25,
                            spaceBetween: 5
                        },
                        400: {
                            slidesPerView: 1.75,
                            spaceBetween: 5
                        },

                        600: {
                            slidesPerView: 2.5,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 3.5,
                            spaceBetween: 10
                        },
                        1024: {
                            slidesPerView: 4.5,
                            spaceBetween: 10
                        },
                    }}
                    grabCursor={true}
                >
                     <SwiperSlide>
                        <div
                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"}>

                            <div className="flex flex-col items-center pb-10">
                                <Image className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                       src={avatar} alt="Bonnie image"/>
                                <span className="text-sm text-gray-500 "><Star score={4}/> </span>

                                <h5 className="mb-1 text-xl font-medium text-gray-900">گروه موسیقی
                                    7</h5>
                                <div className={"flex gap-1 "}>
                                    <span className={"grid justify-center items-center"}><MapPinIcon
                                        className="h-4 w-4 text-gray-500"/></span>

                                    <span className="text-sm text-gray-500 ">تهران</span>
                                </div>
                                <div className="flex mt-4 md:mt-6">
                                    <a href="#"
                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                        مشاهده</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"}>

                            <div className="flex flex-col items-center pb-10">
                                <Image className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                       src={avatar} alt="Bonnie image"/>
                                <span className="text-sm text-gray-500 "><Star score={4}/> </span>

                                <h5 className="mb-1 text-xl font-medium text-gray-900">گروه موسیقی
                                    7</h5>
                                <div className={"flex gap-1 "}>
                                    <span className={"grid justify-center items-center"}><MapPinIcon
                                        className="h-4 w-4 text-gray-500"/></span>

                                    <span className="text-sm text-gray-500 ">تهران</span>
                                </div>
                                <div className="flex mt-4 md:mt-6">
                                    <a href="#"
                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                        مشاهده</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"}>

                            <div className="flex flex-col items-center pb-10">
                                <Image className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                       src={avatar} alt="Bonnie image"/>
                                <span className="text-sm text-gray-500 "><Star score={4}/> </span>

                                <h5 className="mb-1 text-xl font-medium text-gray-900">گروه موسیقی
                                    7</h5>
                                <div className={"flex gap-1 "}>
                                    <span className={"grid justify-center items-center"}><MapPinIcon
                                        className="h-4 w-4 text-gray-500"/></span>

                                    <span className="text-sm text-gray-500 ">تهران</span>
                                </div>
                                <div className="flex mt-4 md:mt-6">
                                    <a href="#"
                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                        مشاهده</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"}>

                            <div className="flex flex-col items-center pb-10">
                                <Image className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                       src={avatar} alt="Bonnie image"/>
                                <span className="text-sm text-gray-500 "><Star score={4}/> </span>

                                <h5 className="mb-1 text-xl font-medium text-gray-900">گروه موسیقی
                                    7</h5>
                                <div className={"flex gap-1 "}>
                                    <span className={"grid justify-center items-center"}><MapPinIcon
                                        className="h-4 w-4 text-gray-500"/></span>

                                    <span className="text-sm text-gray-500 ">تهران</span>
                                </div>
                                <div className="flex mt-4 md:mt-6">
                                    <a href="#"
                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                        مشاهده</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"}>

                            <div className="flex flex-col items-center pb-10">
                                <Image className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                       src={avatar} alt="Bonnie image"/>
                                <span className="text-sm text-gray-500 "><Star score={4}/> </span>

                                <h5 className="mb-1 text-xl font-medium text-gray-900">گروه موسیقی
                                    7</h5>
                                <div className={"flex gap-1 "}>
                                    <span className={"grid justify-center items-center"}><MapPinIcon
                                        className="h-4 w-4 text-gray-500"/></span>

                                    <span className="text-sm text-gray-500 ">تهران</span>
                                </div>
                                <div className="flex mt-4 md:mt-6">
                                    <a href="#"
                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                        مشاهده</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"}>

                            <div className="flex flex-col items-center pb-10">
                                <Image className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                       src={avatar} alt="Bonnie image"/>
                                <span className="text-sm text-gray-500 "><Star score={4}/> </span>

                                <h5 className="mb-1 text-xl font-medium text-gray-900">گروه موسیقی
                                    7</h5>
                                <div className={"flex gap-1 "}>
                                    <span className={"grid justify-center items-center"}><MapPinIcon
                                        className="h-4 w-4 text-gray-500"/></span>

                                    <span className="text-sm text-gray-500 ">تهران</span>
                                </div>
                                <div className="flex mt-4 md:mt-6">
                                    <a href="#"
                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                        مشاهده</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"}>

                            <div className="flex flex-col items-center pb-10">
                                <Image className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                       src={avatar} alt="Bonnie image"/>
                                <span className="text-sm text-gray-500 "><Star score={4}/> </span>

                                <h5 className="mb-1 text-xl font-medium text-gray-900">گروه موسیقی
                                    7</h5>
                                <div className={"flex gap-1 "}>
                                    <span className={"grid justify-center items-center"}><MapPinIcon
                                        className="h-4 w-4 text-gray-500"/></span>

                                    <span className="text-sm text-gray-500 ">تهران</span>
                                </div>
                                <div className="flex mt-4 md:mt-6">
                                    <a href="#"
                                       className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-rose-500 rounded-lg  focus:ring-4 focus:outline-none focus:ring-[#491639] ">
                                        مشاهده</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    );
};
