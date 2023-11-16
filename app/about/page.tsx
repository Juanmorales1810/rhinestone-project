import { title } from "@/components/primitives";
import AboutScroll from "@/components/aboutScroll";

export default function AboutPage() {
    return (
        <section className="">
            <h1 className={title()}>About</h1>
            <AboutScroll />
        </section>
    );
}
