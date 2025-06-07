import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Script from "next/script";
import Map from "./Map";
import styles from "./style.module.scss";

export default async function DirectionPage() {
    const t = await getTranslations("directions");
    return <>
        <Script src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${process.env.NAVER_MAP_API_ID}`} strategy="beforeInteractive" />
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>{t("communication")}</h1>
            <div className={styles.subheader}>
                <Link href="/communication/newsletter">
                    <span>{t("news-letter")}</span>
                </Link>
                <Link href="/communication/direction" className={styles.activeSubheader}>
                    <span>{t("directions")}</span>
                </Link>
                <Link href="/communication/inquiry">
                    <span>{t("inquiry")}</span>
                </Link>
            </div>
            <div className={styles.addressContainer}>
                <Image src="/images/Disney.webp" alt={t("photo")} fill className={styles.addressPhoto} />
                <div className={styles.address}>
                    <div className={styles.addressItem}>
                        <h2>{t("address-title")}</h2>
                        <p>{t("address")}</p>
                    </div>
                    <div className={styles.addressItem}>
                        <h2>{t("contact-title")}</h2>
                        <p>{t("contact")}</p>
                    </div>
                    <div className={styles.addressItem}>
                        <h2>{t("email-title")}</h2>
                        <p>{t("email")}</p>
                    </div>
                    <div className={styles.addressItem}>
                        <h2>{t("hours-title")}</h2>
                        <p>{t("hours")}</p>
                    </div>
                </div>
            </div>
        </div>
        <Map />
        <Footer />
    </>;
}