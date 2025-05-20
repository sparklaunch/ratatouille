import { LocaleTypes } from "@/utilities/localization/settings";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
    title: "씨즈",
    description: "씨즈 웹사이트"
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: {
        locale: LocaleTypes
    }
}>) {
    const { locale } = params;
    return (
        <html lang={locale}>
            <Script src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NAVER_MAP_API_ID}`} />
            <body>
                {children}
            </body>
        </html>
    );
}
