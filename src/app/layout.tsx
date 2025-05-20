import { Metadata } from "next";
import { Locale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Script from "next/script";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "씨즈",
    description: "씨즈 웹사이트"
};

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: ReactNode;
    params: Promise<{
        locale: Locale
    }>
}>) {
    const messages = await getMessages();
    const { locale } = await params;
    return (
        <html lang={locale}>
            <Script src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NAVER_MAP_API_ID}`} />
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
