import { title } from "@/components/primitives";
import AboutScroll from "@/components/aboutScroll";

export default function AboutPage() {
    return (
        <section className="">
            <h1 className={title()}>About</h1>
            <section className="flex justify-center items-center h-full min-h-[calc(100vh-116px)]">
                cosas
            </section>
            <AboutScroll />
            <section className="flex justify-center items-center h-full min-h-[calc(100vh-116px)]">
                otras cosas
            </section>
        </section>
    );
}
