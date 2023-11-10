"use client";
import { blogPosts } from "@/config/blogs-db";
import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
interface BlogParams {
    titulo: string;
    description: string;
    image: string;
    lorem: string;
    slug: string;
    id: string;
}

export default function BlogPage({ params }: { params: BlogParams }) {
    const foundBlog = blogPosts.find((blog) => blog.slug === params.id);
    if (!foundBlog) {
        return (
            <div className="flex flex-col justify-center items-center">
                <h2 className=" text-9xl font-bold text-center bg-gradient-to-tr from-pink-200 to-indigo-600 bg-clip-text text-transparent">
                    ERROR 404
                </h2>
                <h2 className=" pt-8 text-3xl font-bold text-center text-black dark:text-white">
                    Entrada de blog no encontrada.
                </h2>
            </div>
        );
    }
    const { titulo, description, image, lorem } = foundBlog;

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className={title()}>{titulo}</h1>
            <div className=" pt-7 flex flex-wrap justify-center gap-5 items-center w-auto  sm:w-[600px]  xl:w-[900px]">
                <Image
                    isBlurred
                    alt={titulo}
                    className="object-cover rounded-xl"
                    src={image}
                    width={300}
                />
                <p className="text-xl font-bold  text-black dark:text-white">
                    {description}
                </p>
                <br />
                <p className="text-lg text-black dark:text-white">{lorem}</p>
            </div>
        </div>
    );
}
