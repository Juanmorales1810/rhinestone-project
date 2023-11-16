"use client";

import Cardb from "@/components/cardb";
import { barlow } from "@/config/fonts";
import { motion } from "framer-motion";
export default function BlogPage() {
    return (
        <section className="flex flex-col justify-center items-center w-full gap-5 text-center">
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0, duration: 0.4 }}
                className={
                    barlow.className +
                    " text-6xl lg:text-9xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent pb-6 drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_0px_7px_rgba(255,165,0,0.75)]"
                }
            >
                Blogs
            </motion.h1>
            <div className="pt-7 flex flex-wrap justify-center gap-5 items-center w-full">
                <Cardb />
            </div>
        </section>
    );
}
