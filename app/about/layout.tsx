export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center gap-4 pt-16 w-full">
            <div className="inline-block text-center justify-center h-auto w-full">
                {children}
            </div>
        </section>
    );
}
