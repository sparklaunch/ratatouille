import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import InquiryForm from "./InquiryForm";
import styles from "./style.module.scss";

export default async function InquiriesPage() {
    const t = await getTranslations("inquiries");
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>{t("communication")}</h1>
            <div className={styles.subheader}>
                <Link href="/communication/news-letters">
                    <span>{t("news-letters")}</span>
                </Link>
                <Link href="/communication/directions">
                    <span>{t("directions")}</span>
                </Link>
                <Link href="/communication/inquiries" className={styles.activeSubheader}>
                    <span>{t("inquiries")}</span>
                </Link>
            </div>
        </div>
        <InquiryForm />
        <Footer />
    </>;
}