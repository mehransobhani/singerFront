"use client"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import 'swiper/css/virtual';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
import banner from "@/public/image/banner/band.jpg";

export  default function Slider()
{
    return(<>
         <Swiper
            className={"w-full"}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            dir={"rtl"}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            grabCursor={true}

        >
            <SwiperSlide >
                <Image src={banner} alt={"banner"} layout={"response"} className=" justify-center mx-auto rounded-lg shadow-lg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={banner} alt={"banner"} layout={"response"} className="max-w-full rounded-lg shadow-lg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={banner} alt={"banner"} layout={"response"} className="max-w-full rounded-lg shadow-lg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={banner} alt={"banner"} layout={"response"} className="max-w-full rounded-lg shadow-lg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={banner} alt={"banner"} layout={"response"} className="max-w-full rounded-lg shadow-lg"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src={banner} alt={"banner"} layout={"response"} className="max-w-full rounded-lg shadow-lg"/>

            </SwiperSlide>
            <SwiperSlide>
                <Image src={banner} alt={"banner"} layout={"response"} className="max-w-full rounded-lg shadow-lg"/>

            </SwiperSlide>
            <SwiperSlide>
                <Image src={banner} alt={"banner"} layout={"response"} className="max-w-full rounded-lg shadow-lg"/>
            </SwiperSlide>
        </Swiper>
     </>)
}
