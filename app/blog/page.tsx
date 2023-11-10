import Cardb from "@/components/cardb";
export default function BlogPage() {
    return (
        <section className="flex flex-col justify-center items-center w-full gap-5 text-center">
            <h1 className="text-6xl font-bold pb-6 bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent lg:text-9xl dark:from-amber-100 dark:via-orange-100">
                Blogs
            </h1>
            <div className="pt-7 flex flex-wrap justify-center gap-5 items-center w-full">
                <Cardb />
            </div>
        </section>
    );
}
