import { Locale } from "next-intl";
import localFont from "next/font/local";
import Script from "next/script";
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

export default async function HomeLayout({
    children,
    params
}: {
    children: ReactNode;
    params: Promise<{
        locale: Locale
    }>
}) {
    const { locale } = await params;
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
        case "es":
            fontClassName = pretendard.className;
            break;
        case "fr":
            fontClassName = pretendard.className;
            break;
    }
    return <html lang={locale} >
        <body className={fontClassName}>
            {children}
        </body>
        <Script src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NEXT_PUBLIC_NAVER_MAP_API_ID}`} strategy="afterInteractive" />
    </html>;
}