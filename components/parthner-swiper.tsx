"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "@/styles/globals.css";
import { Autoplay } from "swiper/modules";
import { Image } from "@nextui-org/image";
import { sponsor } from "@/config/sponsor-db";

export default function Sponsors() {
    const breakpoints = {
        640: {
            slidesPerView: 2, // Por ejemplo, 2 en pantallas de ancho 640px o más
        },
        768: {
            slidesPerView: 3, // Por ejemplo, 3 en pantallas de ancho 768px o más
        },
    };
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
                breakpoints={breakpoints}
            >
                {sponsor.map((sponsor) => (
                    <SwiperSlide key={sponsor.alt}>
                        <div className="flex items-center h-40 w-40">
                            <Image
                                isBlurred
                                width={160}
                                height={160}
                                src={sponsor.src}
                                alt={sponsor.alt}
                                className="m-1"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
