import { barlow } from "@/config/fonts";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import {
    CalendarLogo,
    CuitLogo,
    InstaLogo,
    MailLogo,
    MapLogo,
    PhoneLogo,
    WhatsappLogo,
} from "./icons";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function Contact() {
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
        <motion.section
            variants={Variants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.7 }}
            className="flex flex-col justify-center items-center h-auto lg:h-[640px] w-full"
        >
            <h2
                className={
                    barlow.className +
                    " pb-4 text-xl lg:text-4xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent"
                }
            >
                Contacto
            </h2>
            <div className="flex flex-col items-center justify-around h-auto w-11/12 md:flex-row lg:h-auto lg:w-3/4 max-w-4xl rounded-xl bg-yellow-100 dark:dark:bg-yellow-400/10 shadow-xl">
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
                            startContent={<PhoneLogo className="pt-[6px]" />}
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
                            Enviar
                        </Button>
                    </form>
                </div>
            </div>
        </motion.section>
    );
}
