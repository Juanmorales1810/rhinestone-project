"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

export default function Videocar() {
    const [isMouseOver, setIsMouseOver] = useState(false);

    const video1Ref = useRef<HTMLVideoElement | null>(null);
    const video2Ref = useRef<HTMLVideoElement | null>(null);

    // Función para manejar el evento cuando el mouse entra en el componente
    const handleMouseEnter = () => {
        setIsMouseOver(true);
        if (video1Ref.current) {
            video1Ref.current.play();
        }
        if (video2Ref.current) {
            video2Ref.current.play();
        }
    };

    // Función para manejar el evento cuando el mouse sale del componente
    const handleMouseLeave = () => {
        if (video1Ref.current) {
            video1Ref.current.pause();
            video1Ref.current.currentTime = 0; // Reiniciar el video al inicio
        }
        if (video2Ref.current) {
            video2Ref.current.pause();
            video2Ref.current.currentTime = 0; // Reiniciar el video al inicio
        }
        setTimeout(() => setIsMouseOver(false), 0); // Establece una demora para cambiar la clase
    };
    return (
        <div
            className="relative w-56 h-80"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isMouseOver ? (
                <video
                    ref={video1Ref}
                    className={`relative brightness-[0.5] min-w-full min-h-full max-w-none max-h-none w-56 h-80 z-10 rounded-xl object-cover ${
                        isMouseOver
                            ? "brightness-[0.5] ease-out duration-1000"
                            : "brightness-75 ease-out duration-400"
                    }`}
                    autoPlay={true}
                    muted={true}
                    preload="auto"
                    loop={true}
                    poster="/img/landing/fondonoise.webp"
                >
                    <source src="/videos/videocard.mp4" />
                </video>
            ) : (
                <Image
                    src="/img/runnig.jpg"
                    width={224}
                    height={320}
                    objectFit="cover"
                    alt="Picture of the author"
                    className={`relative rounded-xl object-cover h-80 z-10 ${
                        isMouseOver
                            ? " blur-2xl ease-out duration-100"
                            : " blur-none ease-out duration-400"
                    }`}
                />
            )}
            <video
                ref={video2Ref}
                className={`absolute saturate-150 min-w-full min-h-full max-w-none max-h-none w-full h-full right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 rounded-2xl object-cover ${
                    isMouseOver
                        ? "blur-2xl ease-out duration-1000"
                        : "blur-none ease-out duration-400"
                }`}
                autoPlay={true}
                muted={true}
                preload="auto"
                loop={true}
                poster="/img/landing/fondonoise.webp"
            >
                <source src="/videos/videocard.mp4" />
            </video>
        </div>
    );
}
