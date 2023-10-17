import Sponsors from "@/components/parthner-swiper";
import Videocar from "@/components/videocard";
import { barlow } from "@/config/fonts";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 bg-transparent">
            <div className="relative h-screen w-full overflow-hidden text-center justify-center">
                <video
                    className="absolute brightness-[0.25] right-1/2 bottom-1/2 min-w-full min-h-full max-w-none w-auto h-auto translate-x-1/2 translate-y-1/2 z-0 dark:block "
                    autoPlay={true}
                    muted={true}
                    preload="auto"
                    loop={true}
                    poster=""
                >
                    <source src="/videos/videoplayback.webm" />
                </video>
                <section className="absolute max-w-sm h-44 top-[calc(30%-88px)] left-[calc(50%-192px)] lg:max-w-xl lg:h-80 lg:top-[calc(30%-160px)] lg:left-[calc(50%-288px)] overflow-hidden">
                    <h1
                        className={
                            barlow.className +
                            " text-6xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent lg:text-9xl"
                        }
                    >
                        RHINESTONE PROJECT
                    </h1>
                    <p
                        className={
                            barlow.className +
                            " mt-4 text-2xl font-normal lg:text-4xl"
                        }
                    >
                        Corre hacia la grandeza con nosotros.
                    </p>
                </section>
                <section className="absolute w-full h-40 top-[calc(100%-160px)] left-0 overflow-hidden backdrop-blur-xl bg-black/30">
                    <Sponsors />
                </section>
            </div>
            <section className="flex justify-center items-center h-[512px] w-full">
                <div className="flex items-center justify-between h-96 w-3/4 max-w-4xl rounded-md bg-[url('/img/landing/fondonoise2.jpg')] bg-cover">
                    <div className="flex w-1/2 h-full justify-center items-center">
                        <video
                            className="min-w-full min-h-full max-w-none max-h-none w-full h-full bg-cover"
                            autoPlay={true}
                            muted={true}
                            preload="auto"
                            loop={true}
                            poster=""
                        >
                            <source src="/videos/videoplayback.webm" />
                        </video>
                    </div>
                    <div className="flex flex-col w-1/2 h-auto p-4 justify-center items-star">
                        <h2
                            className={barlow.className + " text-4xl font-bold"}
                        >
                            Preparación para el Éxito
                        </h2>
                        <p className="text-xl font-normal mt-4">
                            Somos una empresa de renombre que produce videos de
                            entrenamiento de última generación y ofrece
                            artículos de alto rendimiento deportivo. Inspiramos
                            a hombres y mujeres a alcanzar su grandeza de manera
                            realista, respaldados por una sólida trayectoria.
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex justify-center items-center h-[512px] w-full">
                <div className="flex items-center justify-around h-96 w-3/4 max-w-4xl">
                    <Videocar />
                    <Videocar />
                    <Videocar />
                </div>
            </section>
        </section>
    );
}
