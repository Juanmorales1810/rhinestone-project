import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs",
    description: "Curiosidades y noticias sobre programación",

    openGraph: {
        images: ["/img/meta/image-meta.jpg"],
        title: siteConfig.name,
        description: siteConfig.description,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: ["/img/meta/image-meta.jpg"],
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center gap-4 pt-16 w-full">
            <div className="inline-block text-center justify-center items-center h-full min-h-[calc(100vh-116px)] w-full max-w-5xl">
                {children}
            </div>
        </section>
    );
}
