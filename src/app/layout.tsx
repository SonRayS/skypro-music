import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ReduxProvider from "@/store/ReduxProvider";
import Selector from "./components/selector/selector";
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
                <Selector>
                    <body className={montserrat.className}>{children}</body>
                </Selector>
            </ReduxProvider>
        </html>
    );
}
