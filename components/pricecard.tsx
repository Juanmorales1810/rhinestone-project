"use client";
import { barlow } from "@/config/fonts";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/modal";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
interface PricecardProps {
    // Define las propiedades y sus tipos aquí.
    nombre: string;
    precio: number;
    descripcion: string;
    servicios: string[];
}

export default function Pricecard(props: PricecardProps) {
    const { nombre, precio, descripcion, servicios } = props;
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const handleConfetti = () => {
        confetti({
            scalar: 1,
            spread: 170,
            particleCount: 300,
            origin: { y: -0.1 },
            startVelocity: -35,
        });
    };

    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
            }}
            className="flex flex-col items-center w-full md:w-80 h-auto rounded-lg transition-background bg-yellow-100 dark:dark:bg-yellow-400/10 dark:hover:bg-slate-900"
        >
            <div className="flex flex-col justify-center">
                <h2
                    className={
                        barlow.className +
                        " py-1 md:py-2 text-xl md:text-3xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent"
                    }
                >
                    {nombre}
                </h2>
                <p className="p-2 md:p-4 text-black dark:text-white">
                    {descripcion}{" "}
                    <span className="text-yellow-500">(máximo 15 días)</span>
                </p>
                <div className="flex justify-center items-center gap-2 py-2">
                    <p className="line-through text-yellow-500">
                        {"$"}
                        {precio * 2}
                    </p>
                    <Chip color="warning" variant="shadow" size="sm">
                        Ahorra 50%
                    </Chip>
                </div>

                <p
                    className={
                        barlow.className +
                        "  pb-2 text-6xl md:text-8xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent"
                    }
                >
                    {"$" + precio}
                </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1 md:gap-2">
                <Button
                    onPress={onOpen}
                    color="default"
                    variant="shadow"
                    size="sm"
                    className={barlow.className + " text-base font-normal w-20"}
                >
                    Mas info +
                </Button>
                <Button
                    color="warning"
                    variant="shadow"
                    className={
                        barlow.className +
                        " text-base font-bold w-32 my-2 md:my-4"
                    }
                    onPress={handleConfetti}
                >
                    Contactar
                </Button>
            </div>
            <Modal
                isOpen={isOpen}
                backdrop="opaque"
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col justify-center items-center gap-1">
                                {nombre}
                            </ModalHeader>
                            <ModalBody>
                                <ul className="p-1 w-full flex flex-col justify-center items-start text-left">
                                    {servicios.map((servicio, index) => {
                                        return (
                                            <li className="pb-1" key={index}>
                                                <p
                                                    className={
                                                        barlow.className +
                                                        "  pb-2 text-base font-normal"
                                                    }
                                                >
                                                    {servicio}
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="warning"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button
                                    color="warning"
                                    variant="shadow"
                                    className={
                                        barlow.className +
                                        " text-base font-bold"
                                    }
                                    onPress={handleConfetti}
                                >
                                    Contactar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </motion.div>
    );
}
