import {
    Fira_Code as FontMono,
    Inter as FontSans,
    Barlow_Condensed,
} from "next/font/google";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
});
export const barlow = Barlow_Condensed({
    subsets: ["latin"],
    weight: ["700", "400"],
    style: "italic",
});
