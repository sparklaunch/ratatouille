import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { Skeleton } from "@mui/material";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import NoticeList from "./NoticeList";
import styles from "./style.module.scss";

export default async function NoticesPage() {
    const t = await getTranslations("notices");
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>{t("news")}</h1>
            <div className={styles.subheader}>
                <Link href="/news/notices">
                    <span className={styles.activeSubheader}>{t("notices")}</span>
                </Link>
                <Link href="/news/press-releases">
                    <span>{t("press-releases")}</span>
                </Link>
            </div>
            <Suspense fallback={<Skeleton />}>
                <NoticeList />
            </Suspense>
        </div>
        <Footer />
    </>;
}