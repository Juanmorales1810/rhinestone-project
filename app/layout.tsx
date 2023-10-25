import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { barlow } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head />
            <body
                className={clsx(
                    "min-h-screen font-sans antialiased",
                    fontSans.variable
                )}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "dark" }}
                >
                    <div className="relative flex flex-col h-full bg-gradient-to-bl from-amber-50 via-amber-200 to-yellow-300 dark:bg-gradient-to-br dark:from-amber-400 dark:via-amber-950 dark:to-slate-950">
                        <Navbar />
                        <main className="flex-grow">{children}</main>
                        <footer className="w-full flex items-center justify-center py-3">
                            <Link
                                isExternal
                                className="flex items-center  gap-1 text-current"
                                href="https://github.com/Juanmorales1810"
                                title="GitHub"
                            >
                                <p
                                    className={
                                        barlow.className +
                                        " text-xl font-normal"
                                    }
                                >
                                    © Echo con amor por
                                </p>
                                <p
                                    className={
                                        barlow.className +
                                        " text-xl font-normal bg-gradient-to-br from-amber-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent"
                                    }
                                >
                                    {" "}
                                    Juan Morales.
                                </p>
                                <p>💖</p>
                            </Link>
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
