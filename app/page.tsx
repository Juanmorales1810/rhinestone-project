export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4">
            <div className="relative h-screen w-full overflow-hidden text-center justify-center">
                <video
                    className="absolute right-1/2 bottom-1/2 min-w-full min-h-full max-w-none w-auto h-auto translate-x-1/2 translate-y-1/2 bg-cover -z-50"
                    autoPlay={true}
                    muted={true}
                    preload="auto"
                    loop={true}
                    poster=""
                >
                    <source src="/videos/videoplayback.webm" />
                </video>
                <div className="absolute max-w-lg h-60 top-[calc(30%-140px)] left-[calc(50%-256px)] overflow-hidden">
                    <h1 className="text-7xl font-bold drop-shadow-2xl bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">
                        RHINESTONE PROJECT
                    </h1>
                </div>
            </div>
        </section>
    );
}
