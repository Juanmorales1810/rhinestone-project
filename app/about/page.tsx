"use client";

import AboutScroll from "@/components/aboutScroll";
import { Image } from "@nextui-org/image";
import { barlow } from "@/config/fonts";
import Contact from "@/components/contact";

export default function AboutPage() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 bg-transparent">
            <section className="relative flex justify-center w-full h-full min-h-[calc(100vh-64px)] overflow-hidden">
                <div className="absolute right-1/2 bottom-1/2 min-w-full min-h-full max-w-none w-auto h-auto translate-x-1/2 translate-y-1/2">
                    <Image
                        isBlurred
                        src="background.svg"
                        alt="About"
                        width={1920}
                        height={1080}
                        className="hidden lg:block"
                    />
                    <Image
                        isBlurred
                        src="backgroundmd.svg"
                        alt="About"
                        width={1080}
                        height={1080}
                        className="object-contain lg:hidden"
                    />
                </div>
                <div className="flex justify-center p-4 w-full max-w-5xl h-auto">
                    <div>
                        <h1
                            className={
                                barlow.className +
                                " text-6xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent lg:text-9xl dark:drop-shadow-[0_0px_7px_rgba(255,165,0,0.75)]"
                            }
                        >
                            RHINESTONE PROJECT
                        </h1>
                        <p
                            className={
                                barlow.className +
                                " mt-4 text-xl font-normal lg:text-2xl text-white drop-shadow-[0_0px_7px_rgba(0,0,0,0.95)] dark:drop-shadow-[0_0px_7px_rgba(255,255,255,0.65)]"
                            }
                        >
                            Somos una empresa de renombre que produce videos de
                            entrenamiento de última generación y ofrece
                            artículos de alto rendimiento deportivo. Inspiramos
                            a hombres y mujeres a alcanzar su grandeza de manera
                            realista, respaldados por una sólida trayectoria.
                        </p>
                        <div className="">
                            <video
                                className="absolute right-1/2 bottom-[38%] w-full max-w-4xl h-auto translate-x-1/2 translate-y-1/2 z-10 rounded-xl "
                                autoPlay={true}
                                muted={true}
                                preload="auto"
                                loop={true}
                                poster="/img/landing/videoplayback.jpg"
                                src="/videos/videoplayback.webm"
                            />
                            <video
                                className="absolute right-1/2 bottom-[38%] w-full max-w-4xl h-auto translate-x-1/2 translate-y-1/2 z-0 blur-lg rounded-xl "
                                autoPlay={true}
                                muted={true}
                                preload="auto"
                                loop={true}
                                poster="/img/landing/videoplayback.jpg"
                                src="/videos/videoplayback.webm"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <AboutScroll />
            <section className="flex justify-center items-center w-full h-full min-h-[calc(100vh-116px)]">
                <Contact />
            </section>
        </section>
    );
}
