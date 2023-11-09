"use client";
import Pricecard from "@/components/pricecard";
import Tableprice from "@/components/table";
import { tarjetasPrecios } from "@/config/cardsprice-db";

export default function PricingPage() {
    return (
        <section className="flex flex-col justify-center items-center w-full">
            <h1 className="text-6xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent lg:text-9xl  dark:from-amber-100 dark:via-orange-100">
                Precios
            </h1>
            <p className="text-center text-lg mb-10">
                Los precios son calculados a partir de la cantidad de horas
                trabajadas.
            </p>
            <hr className="mb-10" />
            <section className="flex flex-wrap justify-between gap-2 items-center h-auto w-full max-w-5xl px-2 md:px-0">
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
            </section>
            <section className="flex justify-center items-center h-auto w-full max-w-5xl mt-16 md:mt-20 px-2 md:px-0">
                <Tableprice />
            </section>
        </section>
    );
}
