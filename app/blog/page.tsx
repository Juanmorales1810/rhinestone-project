import Cardb from "@/components/cardb";
import { barlow } from "@/config/fonts";
export default function BlogPage() {
    return (
        <section className="flex flex-col justify-center items-center w-full gap-5 text-center">
            <h1
                className={
                    barlow.className +
                    " text-6xl lg:text-9xl font-bold bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent pb-6"
                }
            >
                Blogs
            </h1>
            <div className="pt-7 flex flex-wrap justify-center gap-5 items-center w-full">
                <Cardb />
            </div>
        </section>
    );
}
