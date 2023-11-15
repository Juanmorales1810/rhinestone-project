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
