import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { Skeleton } from "@mui/material";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import PressReleaseList from "./PressReleaseList";
import styles from "./style.module.scss";

export default async function PressReleasesPage() {
    const t = await getTranslations("press-releases");
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>{t("news")}</h1>
            <div className={styles.subheader}>
                <Link href="/news/notices">
                    <span>{t("notices")}</span>
                </Link>
                <Link href="/news/press-releases">
                    <span className={styles.activeSubheader}>{t("press-releases")}</span>
                </Link>
            </div>
            <Suspense fallback={<Skeleton />}>
                <PressReleaseList />
            </Suspense>
        </div>
        <Footer />
    </>;
}