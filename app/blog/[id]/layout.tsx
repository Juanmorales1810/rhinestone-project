export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center gap-4 w-full h-full min-h-[calc(100vh-116px)]">
            <div className="inline-block text-center justify-center h-auto w-full p-2 md:px-0">
                {children}
            </div>
        </section>
    );
}
