"use client";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { blogPosts } from "../config/blogs-db";

export default function Cardb() {
    const route = useRouter();
    return (
        <>
            {blogPosts.map((post) => (
                <Card
                    key={post.titulo}
                    isPressable
                    onClick={() => route.push(`/blog/${post.slug}`)}
                    className="py-4 w-60 h-72 bg-yellow-100 dark:bg-slate-950"
                >
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <h4 className="font-bold text-large text-left">
                            {post.titulo}
                        </h4>
                        <small className="text-default-500">Juan Morales</small>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            isBlurred
                            alt={post.titulo}
                            className="object-cover rounded-xl items-end"
                            src={post.image}
                            width={300}
                        />
                    </CardBody>
                </Card>
            ))}
        </>
    );
}
