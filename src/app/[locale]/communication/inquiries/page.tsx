import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import InquiryForm from "./InquiryForm";
import styles from "./style.module.scss";

export default async function InquiryPage() {
    const t = await getTranslations("inquiry");
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>{t("communication")}</h1>
            <div className={styles.subheader}>
                <Link href="/communication/newsletter">
                    <span>{t("news-letter")}</span>
                </Link>
                <Link href="/communication/direction">
                    <span>{t("directions")}</span>
                </Link>
                <Link href="/communication/inquiry" className={styles.activeSubheader}>
                    <span>{t("inquiry")}</span>
                </Link>
            </div>
        </div>
        <InquiryForm />
        <Footer />
    </>;
}