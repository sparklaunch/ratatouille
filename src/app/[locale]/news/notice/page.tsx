import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { Skeleton } from "@mui/material";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import NoticeList from "./NoticeList";
import styles from "./style.module.scss";

export default async function NoticePage() {
    const t = await getTranslations("notices");
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>{t("news")}</h1>
            <div className={styles.subheader}>
                <Link href="/news/notice">
                    <span className={styles.activeSubheader}>{t("notice")}</span>
                </Link>
                <Link href="/news/press">
                    <span>{t("press-release")}</span>
                </Link>
            </div>
            <Suspense fallback={<Skeleton />}>
                <NoticeList />
            </Suspense>
        </div>
        <Footer />
    </>;
}