import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import styles from "./style.module.scss";

export default async function IntroductionPage() {
    const t = await getTranslations("introduction");
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>{t("brand-story")}</h1>
            <div className={styles.subheader}>
                <Link href="/brand/introduction" className={styles.activeSubheader}>
                    <span>{t("introduction")}</span>
                </Link>
                <Link href="/brand/history">
                    <span>{t("history")}</span>
                </Link>
            </div>
        </div>
        <Footer />
    </>;
}