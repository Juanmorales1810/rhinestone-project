"use client";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { blogPosts } from "../config/blogs-db";
import { barlow } from "@/config/fonts";
import { motion } from "framer-motion";

export default function Cardb() {
    const route = useRouter();
    return (
        <>
            {blogPosts.map((post, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        delay: 0.3 + index / 10,
                        duration: 0.4,
                    }}
                >
                    <Card
                        isPressable
                        onClick={() => route.push(`/blog/${post.slug}`)}
                        className="w-60 h-72 bg-yellow-100 dark:dark:bg-yellow-400/10"
                    >
                        <CardHeader className="pb-0 pt-2 px-4 h-[120px] flex-col items-start">
                            <h4
                                className={
                                    barlow.className +
                                    " font-bold text-large text-left"
                                }
                            >
                                {post.titulo}
                            </h4>
                            <small
                                className={
                                    barlow.className + " text-default-500"
                                }
                            >
                                Juan Morales
                            </small>
                        </CardHeader>
                        <CardBody className="flex justify-center items-center overflow-visible w-full h-[200px] p-0 px-4">
                            <Image
                                isBlurred
                                alt={post.titulo}
                                className="object-cover rounded-xl"
                                src={post.image}
                                width={240}
                                height={200}
                            />
                        </CardBody>
                    </Card>
                </motion.div>
            ))}
        </>
    );
}
