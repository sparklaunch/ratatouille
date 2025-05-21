"use client";

import { useLocale } from "next-intl";
import localFont from "next/font/local";
import { ReactNode } from "react";

const pretendard = localFont({
    src: "../../fonts/Pretendard.woff2",
    display: "swap",
    variable: "--font-pretendard"
});

const hiragino = localFont({
    src: "../../fonts/HiraginoMaruGothic.otf",
    display: "swap",
    variable: "--font-hiragino"
});

export default function HomeLayout({
    children
}: {
    children: ReactNode
}) {
    const locale = useLocale();
    let fontClassName: string;
    switch (locale) {
        case "ko":
            fontClassName = pretendard.className;
            break;
        case "en":
            fontClassName = pretendard.className;
            break;
        case "ja":
            fontClassName = hiragino.className;
            break;
    }
    return <html lang={locale}>
        <body className={fontClassName}>
            {children}
        </body>
    </html>;
}