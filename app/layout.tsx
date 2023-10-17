import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
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
                                className="flex items-center gap-1 text-current"
                                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                                title="nextui.org homepage"
                            >
                                <span className="text-default-600">
                                    Powered by
                                </span>
                                <p className="text-primary">NextUI</p>
                            </Link>
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
