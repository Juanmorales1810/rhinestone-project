"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function AboutScroll() {
    const controls = useAnimation();

    const variants = {
        initial: { x: 0 },
        animate: { x: "100%" },
    };

    useEffect(() => {
        const scrollHandler = () => {
            const scrollY = window.scrollY;
            console.log(scrollY);
            controls.start(scrollY > 250 ? "animate" : "initial");
        };

        // Agrega el evento de scroll al montar el componente
        window.addEventListener("scroll", scrollHandler);

        // Limpia el evento de scroll al desmontar el componente
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [controls]);
    return (
        <section className="relative w-full">
            <div className="flex justify-end w-full h-full min-h-[500px]">
                <div className="w-1/2 bg-slate-800 rounded-lg"></div>
            </div>
            <div className="flex justify-start w-full h-full min-h-[500px]">
                <div className="w-1/2 bg-slate-800 rounded-lg"></div>
            </div>
            <div className="flex justify-end w-full h-full min-h-[500px]">
                <div className="w-1/2 bg-slate-800 rounded-lg"></div>
            </div>
            <div className="flex justify-start w-full h-full min-h-[500px]">
                <div className="w-1/2 bg-slate-800 rounded-lg"></div>
            </div>
            <motion.div
                className="fixed right-1/2 bottom-[33%] w-[512px] h-full max-h-[500px] bg-slate-800 rounded-lg z-10"
                variants={variants}
                initial="initial"
                animate={controls}
            ></motion.div>
        </section>
    );
}
