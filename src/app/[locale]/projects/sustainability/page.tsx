import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import styles from "./style.module.scss";

export default async function SustainabilityPage() {
    const t = await getTranslations("sustainability");
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>{t("projects")}</h1>
            <div className={styles.subheader}>
                <Link href="/projects/innovation">
                    <span>{t("social-innovation")}</span>
                </Link>
                <Link href="/projects/sustainability" className={styles.activeSubheader}>
                    <span>{t("sustainability")}</span>
                </Link>
                <Link href="/projects/solidarity">
                    <span>{t("solidarity")}</span>
                </Link>
            </div>
        </div>
        <Footer />
    </>;
}