import { barlow } from "@/config/fonts";

export default function Notfound() {
    return (
        <section className="flex flex-col justify-center items-center mt-16 w-full h-full min-h-[calc(100vh-116px)]">
            <h2
                className={
                    barlow.className +
                    " text-6xl lg:text-9xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent pb-6 drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_0px_7px_rgba(255,165,0,0.75)]"
                }
            >
                ERROR 404
            </h2>
            <h2 className=" pt-8 text-3xl font-bold text-center text-black dark:text-white">
                Página no encontrada
            </h2>
        </section>
    );
}
