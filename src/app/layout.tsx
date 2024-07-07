import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { TrackProvider } from "./components/context/track";
import ReduxProvider from "@/store/ReduxProvider";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
    title: "TopMusic",
    description: "Music",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <ReduxProvider>
                <TrackProvider>
                    <body className={montserrat.className}>{children}</body>
                </TrackProvider>
            </ReduxProvider>
        </html>
    );
}
