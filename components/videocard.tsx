"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { barlow } from "@/config/fonts";
interface VideoCardProps {
    srcimg: string;
    srcvid: string;
    title: string;
    subtitle: string;
}

export default function Videocar({
    srcimg,
    srcvid,
    subtitle,
    title,
}: VideoCardProps) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    // Función para manejar el evento cuando el mouse entra en el componente
    const handleMouseEnter = () => {
        setIsMouseOver(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        setIsMouseOver(false);
    };
    return (
        <div
            className="relative w-60 h-80 p-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Image
                src={srcimg}
                width={240}
                height={320}
                priority={true}
                alt="Picture of the author"
                className={`absolute brightness-[0.3] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 rounded-xl object-cover w-full h-full z-20  ${
                    isMouseOver
                        ? "blur-none  opacity-0 ease-out duration-400"
                        : "hover:opacity-100 hover:blur-xl hover:ease-out hover:duration-400"
                }`}
            />
            <div className="absolute w-full text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-20">
                <h2
                    className={
                        barlow.className +
                        ` text-3xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent select-none ${
                            isMouseOver
                                ? "animate-fade-down animate-once animate-duration-100 animate-ease-in-out animate-reverse"
                                : "animate-fade-up animate-once animate-duration-500  animate-ease-in-out animate-normal"
                        }`
                    }
                >
                    {title}
                </h2>
                <p
                    className={`text-xl font-bold select-none text-white ${
                        isMouseOver
                            ? "animate-fade-down animate-once animate-duration-100 animate-delay-100 animate-ease-in-out animate-reverse "
                            : "animate-fade-up animate-once animate-duration-500 animate-delay-300 animate-ease-in-out animate-normal"
                    }`}
                >
                    {subtitle}
                </p>
            </div>
            <video
                controls={false}
                ref={videoRef}
                className="absolute max-w-none max-h-none w-[calc(100%-2px)] h-[calc(100%-2px)] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 z-10 rounded-xl object-cover"
                autoPlay={true}
                muted={true}
                preload="auto"
                loop={true}
                poster={srcimg}
                src={srcvid}
            />

            <video
                controls={false}
                ref={videoRef}
                className={`absolute hidden md:block saturate-150 max-w-none max-h-none w-[calc(100%-2px)] h-[calc(100%-2px)] right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 rounded-2xl z-0 object-cover ${
                    isMouseOver
                        ? "blur-2xl ease-out duration-1000"
                        : "blur-none ease-out duration-400"
                }`}
                autoPlay={true}
                muted={true}
                preload="auto"
                loop={true}
                poster={srcimg}
                src={srcvid}
            />
        </div>
    );
}
