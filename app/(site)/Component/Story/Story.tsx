'use client';
import { Swiper, SwiperSlide} from "swiper/react";
 import 'swiper/css/virtual';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Star from "@/app/Star/Star";
export const Story = () => {
    return (

            <div className={"mt-16 py-8 bg-[#f5f5f5] px-6 "} style={{cursor: "grab"}} title={"رویداد ها"}>
                <Swiper
                    spaceBetween={3}
                    slidesPerView={4}
                    breakpoints={{
                        400: {
                            slidesPerView: 5,
                            spaceBetween: 10
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 10
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 10,
                            spaceBetween: 10

                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 10,
                            spaceBetween: 20

                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div
                            className={"rounded-full w-16 h-16 bg-rose-100 border-4 border-rose-500  cursor-pointer"}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"rounded-full w-16 h-16 bg-rose-100 border-4 border-rose-500  cursor-pointer"}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"rounded-full w-16 h-16 bg-rose-100  border-4 border-rose-500 cursor-pointer "}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"rounded-full w-16 h-16 bg-rose-100 border-4 border-rose-500  cursor-pointer"}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"rounded-full w-16 h-16 bg-rose-100 border-4 border-rose-500  cursor-pointer"}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"rounded-full w-16 h-16 bg-rose-100 border-4 border-rose-500  cursor-pointer"}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"rounded-full w-16 h-16 bg-rose-100 border-4 border-rose-500  cursor-pointer"}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"rounded-full w-16 h-16 bg-rose-100 border-4 border-rose-500  cursor-pointer"}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"rounded-full w-16 h-16 bg-rose-100 border-4 border-rose-500  cursor-pointer"}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"rounded-full w-16 h-16 bg-rose-100 border-4 border-rose-500  cursor-pointer"}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"rounded-full w-16 h-16 bg-rose-100 border-4 border-rose-500  cursor-pointer"}>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={"rounded-full w-16 h-16 bg-rose-100 border-4 border-rose-500  cursor-pointer"}>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
    );
};
