import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { Skeleton } from "@mui/material";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import ArticleList from "./ArticleList";
import styles from "./style.module.scss";

export default async function PressPage() {
    const t = await getTranslations("press");
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>{t("news")}</h1>
            <div className={styles.subheader}>
                <Link href="/news/notice">
                    <span>{t("notice")}</span>
                </Link>
                <Link href="/news/press">
                    <span className={styles.activeSubheader}>{t("press-release")}</span>
                </Link>
            </div>
            <Suspense fallback={<Skeleton />}>
                <ArticleList />
            </Suspense>
        </div>
        <Footer />
    </>;
}