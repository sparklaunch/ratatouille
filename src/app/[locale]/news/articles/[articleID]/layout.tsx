import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { ReactNode } from "react";

export default async function PressReleaseContentLayout({ children }: { children: ReactNode }) {
    return <>
        <Header />
        {children}
        <Footer />
    </>;
}