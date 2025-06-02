import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import styles from "./style.module.scss";

export default async function SolidarityPage() {
    const t = await getTranslations("solidarity");
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>{t("projects")}</h1>
            <div className={styles.subheader}>
                <Link href="/projects/innovation">
                    <span>{t("social-innovation")}</span>
                </Link>
                <Link href="/projects/sustainability">
                    <span>{t("sustainability")}</span>
                </Link>
                <Link href="/projects/solidarity" className={styles.activeSubheader}>
                    <span>{t("solidarity")}</span>
                </Link>
            </div>
        </div>
        <Footer />
    </>;
}