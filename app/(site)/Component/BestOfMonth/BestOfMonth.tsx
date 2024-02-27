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
import Card from "../Card/Card";

export default function BestOfMonth() {
    return (

        <div className="py-5">
            <h2 className="text-2xl font-bold text-center">
                برترین های <br/>{" "}
                <span className="text-rose-500 font-extrabold my-3">این ماه</span>
            </h2>
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
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Card />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
