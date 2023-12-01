"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { Image } from "@nextui-org/image";
import { barlow } from "@/config/fonts";

interface ScrollAnimationProps {
    control: any;
    start: number;
    end: number;
}

const useScrollAnimation = ({ control, start, end }: ScrollAnimationProps) => {
    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;

            if (scrollY >= start && scrollY <= end) {
                control.start("onscreen");
            } else {
                control.start("offscreen");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control, start, end]);
};

const variants: Variants = {
    initial: {
        x: "50%",
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    left: {
        x: "100%",
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    right: {
        x: 0,
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
};

const variant: Variants = {
    initial: {
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    offscreen: {
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.3,
        },
    },
};

export default function AboutScroll() {
    const control1 = useAnimation();
    const control2 = useAnimation();
    const control3 = useAnimation();
    const control4 = useAnimation();
    const control5 = useAnimation();

    useScrollAnimation({ control: control2, start: 1300, end: 2200 });
    useScrollAnimation({ control: control3, start: 2200, end: 3100 });
    useScrollAnimation({ control: control4, start: 3100, end: Infinity });
    useScrollAnimation({ control: control5, start: 0, end: 1400 });
    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;

            if (scrollY > 1500) {
                control1.start("right");
            }

            if (scrollY > 2200) {
                control1.start("left");
            }
            if (scrollY > 3100) {
                control1.start("right");
            }

            if (scrollY <= 1400) {
                control1.start("initial");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control1]);

    return (
        <section className="my-40 w-full max-w-6xl">
            <motion.div
                className="sticky flex justify-center items-center top-16 w-1/2 h-full min-h-[calc(100vh-116px)] z-20"
                variants={variants}
                initial="initial"
                animate={control1}
            >
                <motion.div
                    variants={variant}
                    initial="offscreen"
                    animate={control5}
                    className="absolute top-[calc(20%-144px)] left-[calc(50%-256px)] flex flex-col justify-center items-center h-72 w-[512px] z-40"
                >
                    <h2
                        className={
                            barlow.className +
                            " p-2 text-6xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent dark:drop-shadow-[0_0px_7px_rgba(255,165,0,0.75)]"
                        }
                    >
                        ¿COMO TRABAJAMOS?
                    </h2>
                    <p
                        className={
                            barlow.className +
                            " mt-4 text-xl font-normal lg:text-2xl text-white drop-shadow-[0_0px_7px_rgba(0,0,0,0.95)] dark:drop-shadow-[0_0px_7px_rgba(255,255,255,0.65)]"
                        }
                    >
                        Integrando innovadores videos de entrenamiento con
                        artículos de alto rendimiento, guiamos a hombres y
                        mujeres hacia el éxito en maratones. Nuestra experiencia
                        respalda una experiencia realista y transformadora.
                    </p>
                    <figure className="absolute top-[90px] left-[580px] w-20 h-20 z-10">
                        <Image
                            isBlurred
                            isZoomed
                            width={80}
                            alt="NextUI hero Image"
                            src="img/about/photoshop.svg"
                            className=""
                        />
                    </figure>
                    <figure className="absolute top-[270px] left-[440px] w-20 h-20 z-10">
                        <Image
                            isBlurred
                            width={80}
                            alt="NextUI hero Image"
                            src="img/about/mp4.svg"
                            className=""
                        />
                    </figure>
                    <figure className="absolute top-[320px] left-[240px] w-20 h-20 z-10">
                        <Image
                            isBlurred
                            isZoomed
                            width={80}
                            alt="NextUI hero Image"
                            src="img/about/premier.svg"
                            className=""
                        />
                    </figure>
                    <figure className="absolute top-[270px] left-[40px] w-20 h-20 z-10">
                        <Image
                            isBlurred
                            width={80}
                            alt="NextUI hero Image"
                            src="img/about/avi.svg"
                            className=""
                        />
                    </figure>
                    <figure className="absolute top-[90px] -left-[140px] w-20 h-20 z-10">
                        <Image
                            isBlurred
                            isZoomed
                            width={80}
                            alt="NextUI hero Image"
                            src="img/about/after.svg"
                            className=""
                        />
                    </figure>
                </motion.div>
                <motion.div
                    variants={variant}
                    initial="initial"
                    animate={control2}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-210px)] flex flex-col justify-center items-center h-72 w-[420px]"
                >
                    <figure>
                        <Image
                            isBlurred
                            width={420}
                            alt="NextUI hero Image"
                            src="img/about/reunion.jpg"
                        />
                    </figure>
                    <figure className="absolute -top-[80px] -left-[140px] w-40 h-40">
                        <Image
                            isBlurred
                            width={160}
                            alt="NextUI hero Image"
                            src="img/about/grafico1.webp"
                        />
                    </figure>
                    <figure className="absolute top-[240px] left-[300px] w-48 h-48">
                        <Image
                            isBlurred
                            width={192}
                            alt="NextUI hero Image"
                            src="img/about/grafico2.webp"
                        />
                    </figure>
                </motion.div>
                <motion.div
                    variants={variant}
                    initial="offscreen"
                    animate={control3}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-210px)] flex flex-col justify-center items-center h-72 w-[420px]"
                >
                    <figure>
                        <Image
                            isBlurred
                            width={420}
                            alt="NextUI hero Image"
                            src="img/about/realidad.jpg"
                        />
                    </figure>
                    <figure className="absolute -top-[80px] left-[300px] w-48 h-48">
                        <Image
                            isBlurred
                            width={192}
                            alt="NextUI hero Image"
                            src="img/about/thumb-up.webp"
                        />
                    </figure>
                    <figure className="absolute top-[200px] -left-[100px] w-40 h-40">
                        <Image
                            isBlurred
                            width={160}
                            alt="NextUI hero Image"
                            src="img/about/camera.webp"
                        />
                    </figure>
                </motion.div>
                <motion.div
                    variants={variant}
                    initial="offscreen"
                    animate={control4}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-210px)] flex flex-col justify-center items-center h-72 w-[420px]"
                >
                    <figure>
                        <Image
                            isBlurred
                            width={420}
                            alt="NextUI hero Image"
                            src="img/about/edicion.jpg"
                        />
                    </figure>
                    <figure className="absolute top-[200px] left-[300px] w-48 h-48">
                        <Image
                            isBlurred
                            width={192}
                            alt="NextUI hero Image"
                            src="img/about/next.webp"
                        />
                    </figure>
                    <figure className="absolute top-[190px] left-[120px] w-40 h-40">
                        <Image
                            isBlurred
                            width={160}
                            alt="NextUI hero Image"
                            src="img/about/play.webp"
                        />
                    </figure>
                    <figure className="absolute top-[180px] -left-[90px] w-40 h-40">
                        <Image
                            isBlurred
                            width={160}
                            alt="NextUI hero Image"
                            src="img/about/back.webp"
                        />
                    </figure>
                </motion.div>
            </motion.div>
            <div className="relative flex w-full h-full min-h-[calc(100vh-116px)]">
                <div className="flex justify-center items-center w-1/2">
                    <Image
                        isBlurred
                        width={512}
                        alt="NextUI hero Image"
                        src="img/about/back1.svg"
                    />
                </div>
                <div className="flex flex-col justify-center items-start text-left p-4 w-1/2">
                    <h3
                        className={
                            barlow.className +
                            " p-2 text-6xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent dark:drop-shadow-[0_0px_7px_rgba(255,165,0,0.75)]"
                        }
                    >
                        Exploración de Metas y Estilo Personalizado
                    </h3>
                    <p
                        className={
                            barlow.className +
                            " mt-4 text-xl font-normal lg:text-2xl text-white drop-shadow-[0_0px_7px_rgba(0,0,0,0.95)] dark:drop-shadow-[0_0px_7px_rgba(255,255,255,0.65)]"
                        }
                    >
                        Comenzamos evaluando tus objetivos y preferencias.
                        Juntos, diseñamos un plan personalizado que refleje
                        nuestra experiencia comprobada en videos de
                        entrenamiento de última generación.
                    </p>
                </div>
            </div>
            <div className="relative flex w-full h-full min-h-[calc(100vh-116px)] z-10">
                <div className="flex flex-col justify-center items-center text-right p-4 w-1/2">
                    <h3
                        className={
                            barlow.className +
                            " p-2 text-6xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent dark:drop-shadow-[0_0px_7px_rgba(255,165,0,0.75)]"
                        }
                    >
                        Inmersión en el Éxito Pasado y Actual
                    </h3>
                    <p
                        className={
                            barlow.className +
                            " mt-4 text-xl font-normal lg:text-2xl text-white drop-shadow-[0_0px_7px_rgba(0,0,0,0.95)] dark:drop-shadow-[0_0px_7px_rgba(255,255,255,0.65)]"
                        }
                    >
                        Exploramos nuestra rica trayectoria de éxitos,
                        inspirándote con historias reales. Te sumergirás en
                        sesiones de entrenamiento que capturan la esencia de la
                        fama, equilibrando la ambición con la realidad.
                    </p>
                </div>
                <div className="flex justify-center items-center w-1/2">
                    <Image
                        isBlurred
                        width={512}
                        alt="NextUI hero Image"
                        src="img/about/back2.svg"
                        className=""
                    />
                </div>
            </div>
            <div className="relative flex w-full h-full min-h-[calc(100vh-116px)] z-10">
                <div className="flex justify-center items-center w-1/2">
                    <Image
                        isBlurred
                        width={512}
                        alt="NextUI hero Image"
                        src="img/about/back3.svg"
                        className=""
                    />
                </div>
                <div className="flex flex-col justify-center items-start text-left p-4 w-1/2">
                    <h3
                        className={
                            barlow.className +
                            " p-2 text-6xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent dark:drop-shadow-[0_0px_7px_rgba(255,165,0,0.75)]"
                        }
                    >
                        Entrenamiento Estelar y Conexión Personalizada
                    </h3>
                    <p
                        className={
                            barlow.className +
                            " mt-4 text-xl font-normal lg:text-2xl text-white drop-shadow-[0_0px_7px_rgba(0,0,0,0.95)] dark:drop-shadow-[0_0px_7px_rgba(255,255,255,0.65)]"
                        }
                    >
                        Experimenta la grandeza a través de nuestros videos
                        exclusivos. Mantenemos una conexión cercana, brindando
                        apoyo realista y ajustes personalizados. Así, te guiamos
                        hacia el estrellato en tus propias metas de maratón.
                    </p>
                </div>
            </div>
        </section>
    );
}
