export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center mt-16 gap-4 py-8 md:py-10 w-full">
            <div className="inline-block text-center justify-center h-auto w-full">
                {children}
            </div>
        </section>
    );
}
