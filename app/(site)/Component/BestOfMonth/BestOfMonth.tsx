'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/virtual';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from "../Card/Card";
import { Pagination } from 'swiper/modules';

export default function BestOfMonth() {
    return (

        <div className="py-10 bg-[#f8f8f8]">
            <h2 className="text-2xl font-bold text-center">
                برترین های <br/>{" "}
                <span className="text-rose-500 font-extrabold my-3">این ماه</span>
            </h2>
            <div className={"py-10  md:mx-10"} style={{cursor: "grab"}}>
                <Swiper

                    spaceBetween={10}
                    slidesPerView={4.5}

                    pagination={{
                        dynamicBullets: true,
                        clickable: true,


                    }}
                    modules={[Pagination ]}

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
                     <SwiperSlide className={"mb-10"}>
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
