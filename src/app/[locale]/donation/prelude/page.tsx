import Statistic from "@/components/statistic/Statistic";
import { richFormatter } from "@/i18n/richFormatter";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import styles from "./style.module.scss";

export default async function PreludePage() {
    const t = await getTranslations("prelude");
    return <>
        <div className={styles.donateButton}>
            <Link href="#">{t("donate")}</Link>
        </div>
        <div className={styles.preludeMainContainer}>
            <Image src="/images/PreludeMain.png" alt={t("main-image-alternate")} fill />
            <Link href="/">
                <Image src="/logos/Logo.svg" alt={t("logo-alternate")} fill className={styles.logo} />
            </Link>
            <h2>{t.rich("main-text", richFormatter())}</h2>
        </div>
        <div className={styles.preludeBackgroundContainer}>
            <Image src="/images/PreludeBackground.png" alt={t("background-image-alternate")} fill />
            <div className={styles.preludeBackgroundContent}>
                <h3>{t.rich("background-text", richFormatter())}</h3>
                <Image src="/images/PreludeForeground.png" alt={t("foreground-image-alternate")} fill />
            </div>
        </div>
        <div className={styles.statisticContainer}>
            <div className={styles.statistic}>
                <Statistic percentage={5.2} size={500} strokeWidth={80} duration={1500} />
                <h4>{t("proportion-first-text")}</h4>
            </div>
            <div className={styles.statistic}>
                <Statistic percentage={92.7} size={500} strokeWidth={80} duration={1500} />
                <h4>{t("proportion-last-text")}</h4>
            </div>
        </div>
        <div className={styles.firstAmbientContainer}>
            <Image src="/images/FirstAmbientBackground.png" alt={t("ambient-first-background-image-alternate")} fill />
            <div className={styles.firstAmbientContent}>
                <h5>{t("ambient-first-text-0")}</h5>
                <p>{t.rich("ambient-first-text-1", richFormatter())}</p>
                <p>{t.rich("ambient-first-text-2", richFormatter())}</p>
                <p>{t.rich("ambient-first-text-3", richFormatter())}</p>
                <Image src="/images/FirstAmbient.jpg" alt={t("ambient-first-image-alternate")} fill />
            </div>
        </div>
        <div className={styles.lastAmbientContainer}>
            <Image src="/images/LastAmbientBackground.png" alt={t("ambient-last-background-image-alternate")} fill />
            <div className={styles.lastAmbientContent}>
                <h5>{t("ambient-last-text-0")}</h5>
                <p>{t.rich("ambient-last-text-1", richFormatter())}</p>
                <Image src="/images/LastAmbient.jpg" alt={t("ambient-last-image-alternate")} fill />
            </div>
        </div>
        <div className={styles.segueContainer}>
            <Image src="/images/Segue.png" alt={t("segue-image-alternate")} fill />
            <Link href="/donation/finale">{t("segue-text")}</Link>
        </div>
    </>;
}