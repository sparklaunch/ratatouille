import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
    title: "씨즈",
    description: "씨즈 웹사이트",
    openGraph: {
        type: "website",
        title: "씨즈",
        description: "씨즈 웹사이트",
        siteName: "씨즈"
    }
};

export default async function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return <NextIntlClientProvider>
        {children}
    </NextIntlClientProvider>;
}
