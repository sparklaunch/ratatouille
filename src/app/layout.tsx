import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
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
    const messages = await getMessages();
    return <NextIntlClientProvider messages={messages}>
        {children}
    </NextIntlClientProvider>;
}
