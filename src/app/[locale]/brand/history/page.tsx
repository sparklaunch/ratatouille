import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import HistoryAccordion from "./HistoryAccordion";
import styles from "./style.module.scss";

export default async function HistoryPage() {
    const t = await getTranslations("history");
    return <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.header}>{t("brand-story")}</h1>
            <div className={styles.subheader}>
                <Link href="/brand/introduction">
                    <span>{t("introduction")}</span>
                </Link>
                <Link href="/brand/history" className={styles.activeSubheader}>
                    <span>{t("history")}</span>
                </Link>
            </div>
            <HistoryAccordion />
            <div className={styles.partnersContainer}>
                <h2 className={styles.partnersHeader}>Partners</h2>
                <div className={styles.partners}>
                    <Image src="/partners/MOEL.svg" alt={t("moel-alternate")} fill />
                    <Image src="/partners/KHS.svg" alt={t("khs-alternate")} fill />
                    <Image src="/partners/NTS.svg" alt={t("nts-alternate")} fill />
                    <Image src="/partners/ACRC.svg" alt={t("acrc-alternate")} fill />
                    <Image src="/partners/KSEPA.svg" alt={t("ksepa-alternate")} fill />
                    <Image src="/partners/GangwonState.svg" alt={t("gangwon-state-alternate")} fill />
                    <Image src="/partners/Gyeonggido.svg" alt={t("gyeonggido-alternate")} fill />
                    <Image src="/partners/GwangjuMetropolitanCity.svg" alt={t("gwangju-metropolitan-city-alternate")} fill />
                    <Image src="/partners/Gangnamgu.svg" alt={t("gangnamgu-alternate")} fill />
                    <Image src="/partners/Gwangjingu.svg" alt={t("gwangjingu-alternate")} fill />
                    <Image src="/partners/BucheonCity.svg" alt={t("bucheon-city-alternate")} fill />
                    <Image src="/partners/SeoulSpecialMetropolitanCity.svg" alt={t("seoul-special-metropolitan-city-alternate")} fill />
                    <Image src="/partners/Seochogu.svg" alt={t("seochogu-alternate")} fill />
                    <Image src="/partners/Eunpyeonggu.svg" alt={t("eunpyeonggu-alternate")} fill />
                    <Image src="/partners/Chungcheongnamdo.svg" alt={t("chungcheongnamdo-alternate")} fill />
                    <Image src="/partners/NHN.svg" alt={t("nhn-alternate")} fill />
                    <Image src="/partners/SK.svg" alt={t("sk-alternate")} fill />
                    <Image src="/partners/KyoboLife.svg" alt={t("kyobo-life-alternate")} fill />
                    <Image src="/partners/LISCC.svg" alt={t("liscc-alternate")} fill />
                    <Image src="/partners/ShinhanBank.svg" alt={t("shinhan-bank-alternate")} fill />
                    <Image src="/partners/IncheonAirport.svg" alt={t("incheon-airport-alternate")} fill />
                    <Image src="/partners/POSCO.svg" alt={t("posco-alternate")} fill />
                    <Image src="/partners/HanwhaLife.svg" alt={t("hanwha-life-alternate")} fill />
                    <Image src="/partners/HyundaiMotors.svg" alt={t("hyundai-motors-alternate")} fill />
                    <Image src="/partners/ChungMongKooFoundation.svg" alt={t("chungmongkoo-foundation-alternate")} fill />
                    <Image src="/partners/KCCSE.svg" alt={t("kccse-alternate")} fill />
                    <Image src="/partners/CCEI.svg" alt={t("ccei-alternate")} fill />
                    <Image src="/partners/DDP.svg" alt={t("ddp-alternate")} fill />
                    <Image src="/partners/KAIST.svg" alt={t("kaist-alternate")} fill />
                    <Image src="/partners/CCK.svg" alt={t("cck-alternate")} fill />
                    <Image src="/partners/SamseonNanum.svg" alt={t("samseon-nanum-alternate")} fill />
                    <Image src="/partners/SFAC.svg" alt={t("sfac-alternate")} fill />
                    <Image src="/partners/SSEC.svg" alt={t("ssec-alternate")} fill />
                    <Image src="/partners/HajaCenter.svg" alt={t("haja-center-alternate")} fill />
                    <Image src="/partners/KMA.svg" alt={t("kma-alternate")} fill />
                    <Image src="/partners/Ubuntu.svg" alt={t("ubuntu-alternate")} fill />
                    <Image src="/partners/WorldVision.svg" alt={t("world-vision-alternate")} fill />
                    <Image src="/partners/Byeopssi.svg" alt={t("byeopssi-alternate")} fill />
                </div>
            </div>
        </div>
        <Footer />
    </>;
}