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

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 bg-transparent">
            <div className="relative text-center justify-center h-[100dvh] w-full overflow-hidden md:h-screen">
                <video
                    className="absolute brightness-[0.25] right-1/2 bottom-1/2 min-w-full min-h-full max-w-none w-auto h-auto translate-x-1/2 translate-y-1/2 z-0"
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
            <section className="flex justify-center items-center h-56 lg:h-[512px] w-full">
                <div className="flex items-center justify-between h-32 w-11/12 lg:h-96 lg:w-3/4 max-w-4xl rounded-xl bg-black/30">
                    <div className="flex w-1/3 h-full justify-center items-center">
                        <video
                            className="relative min-w-full min-h-full max-w-none max-h-none w-full h-full object-cover rounded-l-xl"
                            autoPlay={true}
                            muted={true}
                            preload="auto"
                            loop={true}
                            poster=""
                        >
                            <source src="/videos/videoplayback.webm" />
                        </video>
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
            </section>
            <section className="flex py-12 justify-center items-center h-auto w-full">
                <div className="flex flex-wrap gap-5 items-center justify-center sm:justify-between h-auto w-3/4 max-w-4xl">
                    <Videocar
                        srcimg="/img/runnig.jpg"
                        srcvid="/videos/videocard.mp4"
                        title="VIDEO CARD"
                        subtitle="Subtitle"
                    />
                    <Videocar
                        srcimg="/img/landing/fondonoise.webp"
                        srcvid="/videos/videocard2.mp4"
                        title="VIDEO CARD"
                        subtitle="Subtitle"
                    />
                    <Videocar
                        srcimg="/img/landing/fondonoise2.jpg"
                        srcvid="/videos/videocard3.mp4"
                        title="VIDEO CARD"
                        subtitle="Subtitle"
                    />
                </div>
            </section>
            <section className="flex flex-col justify-center items-center h-auto lg:h-[640px] w-full">
                <h2
                    className={
                        barlow.className +
                        " pb-4 text-xl lg:text-4xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent"
                    }
                >
                    Contacto
                </h2>
                <div className="flex flex-col items-center justify-around h-auto w-11/12 md:flex-row lg:h-auto lg:w-3/4 max-w-4xl rounded-xl bg-black/30">
                    <div className="flex flex-col p-3 w-full h-full md:w-1/2">
                        <h3
                            className={
                                barlow.className +
                                " pb-2 text-xl lg:text-2xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent"
                            }
                        >
                            Nuestros contactos
                        </h3>
                        <ul>
                            <li>
                                <Link href="" className="flex items-center m-3">
                                    <PhoneLogo className="pt-[6px]" />
                                    +54 11 22 33 44
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="flex items-center m-3">
                                    <MailLogo className="pt-[6px]" />
                                    Email: XXXXXXXXXXXXXXXXXXX
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="flex items-center m-3">
                                    <MapLogo className="pt-[6px]" />
                                    Dirección: Calle 123, Cordoba, Argentina
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="flex items-center m-3">
                                    <CuitLogo className="pt-[6px]" />
                                    CUIT: 20-12345678-9
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="flex items-center m-3">
                                    <CalendarLogo className="pt-[6px]" />
                                    Calendario
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="flex items-center m-3">
                                    <InstaLogo className="pt-[6px]" />
                                    @MindBench
                                </Link>
                            </li>
                            <li>
                                <Link href="" className="flex items-center m-3">
                                    <WhatsappLogo className="pt-[6px]" />
                                    WhatsApp
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col p-3 w-full h-full md:w-1/2">
                        <h3
                            className={
                                barlow.className +
                                " pb-2 text-xl lg:text-2xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent"
                            }
                        >
                            Envié sus datos para comunicarnos
                        </h3>
                        <form action="" className="flex flex-col">
                            <Input
                                type="email"
                                label="Email"
                                startContent={<MailLogo className="pt-[6px]" />}
                                className="py-2"
                            />
                            <Input
                                type="text"
                                label="Nombre"
                                startContent={<CuitLogo className="pt-[6px]" />}
                                className="py-2"
                            />
                            <Input
                                type="text"
                                label="Telefono"
                                startContent={
                                    <PhoneLogo className="pt-[6px]" />
                                }
                                className="py-2"
                            />
                            <Textarea
                                label="Description"
                                labelPlacement="inside"
                                placeholder="Enter your description"
                                className="max-w-lg py-2"
                            />
                            <Button
                                color="warning"
                                variant="shadow"
                                className="py-2"
                            >
                                Send
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </section>
    );
}
