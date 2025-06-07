import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { Skeleton } from "@mui/material";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import NewsLetterList from "./NewsLetterList";
import styles from "./style.module.scss";

export default async function NewsLetterPage() {
    const t = await getTranslations("news-letters");
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>{t("communication")}</h1>
            <div className={styles.subheader}>
                <Link href="/communication/newsletter">
                    <span className={styles.activeSubheader}>{t("news-letter")}</span>
                </Link>
                <Link href="/communication/direction">
                    <span>{t("directions")}</span>
                </Link>
                <Link href="/communication/inquiry">
                    <span>{t("inquiry")}</span>
                </Link>
            </div>
            <Suspense fallback={<Skeleton />}>
                <NewsLetterList />
            </Suspense>
        </div>
        <Footer />
    </>;
}