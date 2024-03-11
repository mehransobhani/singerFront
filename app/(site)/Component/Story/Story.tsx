'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/virtual';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import avatar from "@/public/image/avatar/avatar.png"
import Image from "next/image";
import {Pagination} from 'swiper/modules';
import Modal from "@/app/Component/Modal";
import {ReactNode, useState} from "react";

export const Story = () => {
    const storys = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];
    const [openModal,setOpenModal]=useState<boolean>(false);
    const [modalTitle,setModalTitle]=useState<string>("");
    const [modalChild,setModalChild]=useState<ReactNode>(<></>);

    function openModals(title:string){
        setOpenModal(true);
     return
    }
    return (
        <>
        <Modal isOpen={openModal} title={ modalTitle} onClose={()=>{ setOpenModal(false)}}>
            <h1>
                {modalChild}
            </h1>
        </Modal>
        <div className={" py-8 bg-[#f8f8f8] px-6 w-full "} style={{cursor: "grab"}} title={"رویداد ها"}>
            <Swiper
                spaceBetween={3}
                slidesPerView={10}
                grabCursor={true}

                className="mySwiper"

                modules={[Pagination]}

                breakpoints={{
                    0: {
                        slidesPerView: 2.5,
                        spaceBetween: 10
                    },
                    300: {
                        slidesPerView: 3.5,
                        spaceBetween: 10
                    },
                    400: {
                        slidesPerView: 4.5,
                        spaceBetween: 10
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 5.5,
                        spaceBetween: 10
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 9.5,
                        spaceBetween: 10

                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 10.5,
                        spaceBetween: 20

                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    storys.map((item, index) => (
                        <SwiperSlide>
                            <div className={"flex-col flex justify-center items-center my-1"} onClick={()=>{setOpenModal(true);setModalTitle(index+"اموزش  ");setModalChild(<Image src={avatar} alt={"test"}/>)}}>
                                <div
                                    className={"rounded-full w-16 overflow-hidden h-16   bg-white border-2 ring-1 ring-rose-500 ring-offset-1 border-rose-500  cursor-pointer"}>
                                    <Image src={avatar} alt={"avatar"}/>
                                </div>
                                <span className={"text-center text-gray-700 line-clamp-1 text-sm mt-2"}>
                       آموزش {index}
                                </span>
                            </div>



                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
        </>
    );
};
