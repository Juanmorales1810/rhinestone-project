"use client";

import Sponsors from "@/components/parthner-swiper";
import Videocar from "@/components/videocard";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import {
    WhatsappLogo,
    MailLogo,
    MapLogo,
    CuitLogo,
    CalendarLogo,
    PhoneLogo,
    InstaLogo,
} from "@/components/icons";
import { barlow } from "@/config/fonts";
import Link from "next/link";
import { Variants, motion } from "framer-motion";
import Contact from "@/components/contact";

export default function Home() {
    const Variants: Variants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,

            transition: {
                duration: 1.5,
            },
        },
    };
    return (
        <section className="flex flex-col items-center justify-center gap-4 bg-transparent">
            <section className="relative text-center justify-center h-[100svh] w-full overflow-hidden md:h-screen">
                <video
                    className="absolute brightness-[1.25] right-1/2 bottom-1/2 min-w-full min-h-full max-w-none w-auto h-auto translate-x-1/2 translate-y-1/2 z-0 dark:brightness-[0.25] blur-sm md:blur-none"
                    autoPlay={true}
                    muted={true}
                    preload="auto"
                    loop={true}
                    poster="/img/landing/videoplayback.jpg"
                    src="/videos/videoplayback.webm"
                />

                <div className="absolute w-full max-w-sm h-44 top-[calc(30%-88px)] left-[calc(50%-192px)] lg:w-full lg:max-w-2xl lg:h-96 lg:top-[calc(30%-160px)] lg:left-[calc(50%-336px)]">
                    <h1
                        className={
                            barlow.className +
                            " text-6xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent lg:text-9xl drop-shadow-[0_0px_7px_rgba(255,165,0,0.75)]"
                        }
                    >
                        RHINESTONE PROJECT
                    </h1>
                    <p
                        className={
                            barlow.className +
                            " mt-4 text-2xl font-normal lg:text-4xl text-white drop-shadow-[0_0px_7px_rgba(0,0,0,0.95)] dark:drop-shadow-[0_0px_7px_rgba(255,255,255,0.65)]"
                        }
                    >
                        Corre hacia la grandeza con nosotros.
                    </p>
                </div>
                <section className="absolute w-full h-40 top-[calc(100%-160px)] left-0 overflow-hidden backdrop-blur-xl bg-amber-100/30 dark:bg-black/30">
                    <Sponsors />
                </section>
            </section>
            <motion.section
                variants={Variants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                className="flex justify-center items-center h-56 lg:h-[512px] w-full"
            >
                <div className="flex items-center justify-between h-32 w-11/12 lg:h-96 lg:w-3/4 max-w-4xl rounded-xl bg-yellow-100 dark:bg-yellow-400/10 shadow-xl">
                    <div className="flex w-1/3 h-full justify-center items-center">
                        <video
                            className="relative min-w-full min-h-full max-w-none max-h-none w-full h-full object-cover rounded-l-xl"
                            autoPlay={true}
                            muted={true}
                            preload="auto"
                            loop={true}
                            poster=""
                            src="/videos/videocard2.webm"
                        />
                    </div>
                    <div className="flex flex-col w-2/3 h-full p-4 justify-center items-star">
                        <h2
                            className={
                                barlow.className +
                                " text-xl lg:text-4xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent"
                            }
                        >
                            PREPARACIÓN PARA EL ÉXITO
                        </h2>
                        <p className="text-sm lg:text-xl font-normal mt-2 lg:mt-4 overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
                            Somos una empresa de renombre que produce videos de
                            entrenamiento de última generación y ofrece
                            artículos de alto rendimiento deportivo. Inspiramos
                            a hombres y mujeres a alcanzar su grandeza de manera
                            realista, respaldados por una sólida trayectoria.
                        </p>
                    </div>
                </div>
            </motion.section>
            <motion.section
                variants={Variants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.7 }}
                className="flex py-12 justify-center items-center h-auto w-full"
            >
                <div className="flex flex-wrap gap-5 items-center justify-center sm:justify-between h-auto w-3/4 max-w-4xl">
                    <Videocar
                        srcimg="/img/runnig.jpg"
                        srcvid="/videos/videocard.webm"
                        title="VIDEO CARD"
                        subtitle="Subtitle"
                    />
                    <Videocar
                        srcimg="/img/landing/fondonoise.webp"
                        srcvid="/videos/videocard2.webm"
                        title="VIDEO CARD"
                        subtitle="Subtitle"
                    />
                    <Videocar
                        srcimg="/img/landing/fondonoise2.jpg"
                        srcvid="/videos/videocard3.webm"
                        title="VIDEO CARD"
                        subtitle="Subtitle"
                    />
                </div>
            </motion.section>
            <Contact />
        </section>
    );
}
