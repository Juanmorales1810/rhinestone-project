"use client";
import { blogPosts } from "@/config/blogs-db";
import { Image } from "@nextui-org/image";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
interface BlogParams {
    titulo: string;
    description: string;
    image: string;
    lorem: string[];
    slug: string;
    id: string;
}
import { barlow } from "@/config/fonts";
import { User } from "@nextui-org/user";
import { Link } from "@nextui-org/link";

export default function BlogPage({ params }: { params: BlogParams }) {
    const foundBlog = blogPosts.find((blog) => blog.slug === params.id);
    if (!foundBlog) {
        return (
            <section className="flex flex-col justify-center items-center w-full">
                <h2
                    className={
                        barlow.className +
                        " text-9xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent"
                    }
                >
                    ERROR 404
                </h2>
                <h2 className=" pt-8 text-3xl font-bold text-center text-black dark:text-white">
                    Entrada de blog no encontrada.
                </h2>
            </section>
        );
    }
    const { titulo, description, image, lorem } = foundBlog;

    return (
        <section className="flex flex-col md:flex-row gap-5 p-5 w-full h-full bg-yellow-100 dark:bg-yellow-400/10 rounded-lg shadow-xl">
            <header className="flex flex-col md:w-1/3 justify-between items-center md:items-start">
                <div className="text-center md:text-left">
                    <h1
                        className={
                            barlow.className +
                            " text-4xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent"
                        }
                    >
                        {titulo}
                    </h1>
                    <h2 className="text-xl font-normal mt-4 text-black dark:text-white">
                        {description}
                    </h2>
                </div>
                <div>
                    <User
                        className="mt-4"
                        name="Juan Morales"
                        description={
                            <Link
                                href="https://twitter.com/jrgarciadev"
                                size="sm"
                                color="warning"
                                isExternal
                            >
                                @elchiche0_o
                            </Link>
                        }
                        avatarProps={{
                            src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                        }}
                    />
                </div>
            </header>

            <article className="md:w-2/3 text-lg md:text-left indent-5 text-black dark:text-white">
                <figure className="flex flex-wrap justify-center gap-5 items-start">
                    <Image
                        isBlurred
                        alt={titulo}
                        className="object-cover rounded-xl my-5"
                        src={image}
                        width={300}
                    />
                </figure>
                <ScrollShadow hideScrollBar className="w-auto h-[400px]">
                    {Array.isArray(lorem) ? (
                        lorem.map((paragraph, index) => (
                            <p key={index} className="pt-3">
                                {paragraph}
                            </p>
                        ))
                    ) : (
                        <p className="pt-3">{lorem}</p>
                    )}
                </ScrollShadow>
            </article>
        </section>
    );
}
