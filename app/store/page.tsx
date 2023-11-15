"use client";
import Pricecard from "@/components/pricecard";
import Tableprice from "@/components/table";
import { tarjetasPrecios } from "@/config/cardsprice-db";
import { barlow } from "@/config/fonts";
import { motion } from "framer-motion";

export default function PricingPage() {
    return (
        <section className="flex flex-col justify-center items-center w-full">
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.3, duration: 0.4 }}
                className={
                    barlow.className +
                    " text-6xl lg:text-9xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent"
                }
            >
                Precios
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.6, duration: 0.4 }}
                className="text-center text-lg mb-10"
            >
                Los precios son calculados a partir de la cantidad de horas
                trabajadas.
            </motion.p>
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.9, duration: 0.4 }}
                className="flex flex-wrap justify-between gap-2 items-center h-auto w-full max-w-5xl px-2 md:px-0"
            >
                {tarjetasPrecios.map((tarjeta, index) => {
                    return (
                        <Pricecard
                            key={index}
                            nombre={tarjeta.nombre}
                            precio={tarjeta.precio}
                            descripcion={tarjeta.descripcion}
                            servicios={tarjeta.servicios}
                        />
                    );
                })}
            </motion.section>
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 1.2, duration: 0.4 }}
                className="flex justify-center items-center h-auto w-full max-w-5xl mt-16 md:mt-20 px-2 md:px-0"
            >
                <Tableprice />
            </motion.section>
        </section>
    );
}
