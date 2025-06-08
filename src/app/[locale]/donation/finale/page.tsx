import { richFormatter } from "@/i18n/richFormatter";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import styles from "./style.module.scss";

export default async function FinalePage() {
    const t = await getTranslations("finale");
    return <>
        <div className={styles.donateButton}>
            <Link href="#">{t("donate")}</Link>
        </div>
        <div className={styles.finaleMainContainer}>
            <Image src="/images/FinaleMainBackground.webp" alt={t("main-background-image-alternate")} fill />
            <Link href="/">
                <Image src="/logos/Logo.svg" alt={t("logo")} fill className={styles.logo} />
            </Link>
            <div className={styles.finaleMainContent}>
                <h1>{t("story-title")}</h1>
                <blockquote>{t.rich("story-text", richFormatter())}</blockquote>
                <Image src="/images/FinaleMain.webp" alt={t("main-image-alternate")} fill />
            </div>
        </div>
        <div className={styles.hopeContainer}>
            <Image src="/images/HopeBackground.webp" alt={t("hope-background-image-alternate")} fill />
            <div className={styles.hopeContent}>
                <p>{t("hope-text-0")}</p>
                <h2>{t.rich("hope-text-1", richFormatter())}</h2>
                <p>{t.rich("hope-text-2", richFormatter())}</p>
                <Image src="/images/Hope.webp" alt={t("hope-image-alternate")} fill />
            </div>
        </div>
        <div className={styles.segueContainer}>
            <Image src="/images/Segue.webp" alt={t("segue-image-alternate")} fill />
            <div className={styles.segueContent}>
                <h3>{t("segue-text")}</h3>
                <div className={styles.segues}>
                    <Link href="/donation/main" className={styles.segue}>
                        <p>{t("donate")}</p>
                        <Image src="/icons/RightArrow.svg" alt={t("right-arrow-icon")} width={31} height={22} />
                    </Link>
                    <Link href="/" className={styles.segue}>
                        <p>{t("homepage")}</p>
                        <Image src="/icons/RightArrow.svg" alt={t("right-arrow-icon")} width={31} height={22} />
                    </Link>
                </div>
            </div>
        </div>
    </>;
}