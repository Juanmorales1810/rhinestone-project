"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function AboutScroll() {
    const control1 = useAnimation();
    const control2 = useAnimation();
    const control3 = useAnimation();
    const control4 = useAnimation();
    const control5 = useAnimation();

    const variants = {
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
        offscreenleft: {
            x: "5%",
            y: "5%",
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.3,
                type: "spring",
            },
        },
        onscreen: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1.1,

            transition: {
                type: "spring",
                duration: 0.3,
            },
        },
        offscreenright: {
            x: "-5%",
            y: "5%",
            opacity: 0,
            scale: 0,
            transition: {
                duration: 0.3,
                type: "spring",
            },
        },
    };

    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;
            // console.log(scrollY);
            if (scrollY > 1300) {
                control1.start("right");
            }

            if (scrollY > 1900) {
                control1.start("left");
            }
            if (scrollY > 2700) {
                control1.start("right");
            }

            if (scrollY <= 1000) {
                control1.start("initial");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control1]);
    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;
            console.log(scrollY);
            if (scrollY < 1000) {
                control2.start("offscreenleft");
            }
            if (scrollY > 1300) {
                control2.start("onscreen");
            }

            if (scrollY > 1900) {
                control2.start("offscreenleft");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control2]);
    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;
            // console.log(scrollY);
            if (scrollY < 1900) {
                control3.start("offscreenleft");
            }
            if (scrollY > 1900) {
                control3.start("onscreen");
            }

            if (scrollY > 2700) {
                control3.start("offscreenleft");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control3]);
    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;
            // console.log(scrollY);
            if (scrollY < 2700) {
                control4.start("offscreenleft");
            }
            if (scrollY > 2700) {
                control4.start("onscreen");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control4]);
    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;
            // console.log(scrollY);
            if (scrollY < 1000) {
                control5.start("onscreen");
            }
            if (scrollY > 1300) {
                control5.start("offscreenleft");
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [control5]);

    return (
        <section className="w-full">
            <motion.div
                className="sticky top-16 w-1/2 h-full min-h-[calc(100vh-116px)] bg-slate-800/30 rounded-lg z-0"
                variants={variants}
                initial="initial"
                animate={control1}
            >
                <motion.div
                    variants={variants}
                    animate={control5}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-160px)] translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center h-72 w-[320px] bg-slate-100 rounded-lg shadow-2xl"
                >
                    <h2 className="text-slate-700">Hola mundo!</h2>
                </motion.div>
                <motion.div
                    variants={variants}
                    animate={control2}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-160px)] translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center h-72 w-[320px] bg-slate-200 rounded-lg shadow-2xl"
                >
                    <h2 className="text-slate-700">Hola mundo!</h2>
                </motion.div>
                <motion.div
                    variants={variants}
                    animate={control3}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-160px)] translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center h-72 w-[320px] bg-slate-300 rounded-lg shadow-2xl"
                >
                    <h2 className="text-slate-700">Hola mundo!</h2>
                </motion.div>
                <motion.div
                    variants={variants}
                    animate={control4}
                    className="absolute top-[calc(50%-144px)] left-[calc(50%-160px)] translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center h-72 w-[320px] bg-slate-400 rounded-lg shadow-2xl"
                >
                    <h2 className="text-slate-700">Hola mundo!</h2>
                </motion.div>
            </motion.div>
            <div className="flex w-full h-full min-h-[calc(100vh-116px)] z-10">
                <div className="flex justify-center items-center w-1/2 rounded-lg"></div>
                <div className="w-1/2 bg-slate-800 rounded-lg"></div>
            </div>
            <div className="flex w-full h-full min-h-[calc(100vh-116px)]">
                <div className="w-1/2 bg-slate-800 rounded-lg"></div>
                <div className="flex justify-center items-center w-1/2 rounded-lg z-10"></div>
            </div>
            <div className="flex w-full h-full min-h-[calc(100vh-116px)]">
                <div className="flex justify-center items-center w-1/2 rounded-lg z-10"></div>
                <div className="w-1/2 bg-slate-800 rounded-lg"></div>
            </div>
        </section>
    );
}
