import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import styles from "./style.module.scss";

export default async function IntroductionPage() {
    const locale = await getLocale();
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
            <div className={styles.overtureContainer}>
                <Image src="/images/Overture.jpg" alt={t("overture-image-alternate")} fill />
                <p>{t("overture-text")}</p>
            </div>
            <div className={styles.valuesContainer}>
                <h2>VALUES</h2>
                <h3>{t("values-header")}</h3>
                <div className={styles.socialInnovationContainer}>
                    <div className={styles.socialInnovationText}>
                        <div>
                            <h4>{t("social-innovation")}</h4>
                            {locale !== "en" && <h5>(Social Innovation)</h5>}
                        </div>
                        <p>{t("social-innovation-text")}</p>
                    </div>
                    <Image src="/images/SocialInnovation.jpg" alt={t("social-innovation-image-alternate")} fill />
                </div>
                <div className={styles.sustainabilityContainer}>
                    <div className={styles.sustainabilityText}>
                        <div>
                            <h4>{t("sustainability")}</h4>
                            {locale !== "en" && <h5>(Sustainability)</h5>}
                        </div>
                        <p>{t("sustainability-text")}</p>
                    </div>
                    <Image src="/images/Sustainability.jpg" alt={t("sustainability-image-alternate")} fill />
                </div>
                <div className={styles.solidarityContainer}>
                    <div className={styles.solidarityText}>
                        <div>
                            <h4>{t("solidarity")}</h4>
                            {locale !== "en" && <h5>(Solidarity)</h5>}
                        </div>
                        <p>{t("solidarity-text")}</p>
                    </div>
                    <Image src="/images/Solidarity.jpg" alt={t("solidarity-image-alternate")} fill />
                </div>
                <div className={styles.fermeture}>
                    <Image src="/images/Fermeture.png" alt={t("fermeture-image-alternate")} fill />
                    <h6>{t("fermeture-text")}</h6>
                </div>
                <div className={styles.peopleContainer}>
                    <h2>PEOPLE</h2>
                    <p>{t("people-header")}</p>
                    <Image src="/images/People.jpg" alt={t("people-image-alternate")} fill />
                    <div className={styles.people}>
                        <div className={styles.person}>
                            <Image src="/images/FirstPerson.webp" alt="First person image" width={286} height={286} />
                            <h3>코기</h3>
                            <p>이 시대 청년들의 어려움에 공감하는 또 한 명의 청년. 씨즈와 함께 작은 씨앗을 심는 마음으로 청년들을 만나고 있습니다.</p>
                        </div>
                        <div className={styles.person}>
                            <Image src="/images/SecondPerson.webp" alt="Second person image" width={286} height={286} />
                            <h3>시바</h3>
                            <p>팍팍한 현실 속에서도 꿈을 잃지 않는 청춘들을 응원하는 또 다른 동료. 청년들의 이야기에 귀 기울이며, 함께 희망을 만들어 갑니다.</p>
                        </div>
                        <div className={styles.person}>
                            <Image src="/images/ThirdPerson.jpg" alt="Third person image" width={286} height={286} />
                            <h3>시고르 자브종</h3>
                            <p>청년들이 겪는 고충을 그 누구보다 잘 이해하는 동료. 그의 존재는 팀에 작지만 밝은 미래를 향해 나아가는 힘이 됩니다.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.testimonials}>
                    <h2>{t("testimonial-header")}</h2>
                    <div className={styles.testimonial}>
                        <Image src="/images/Frame.png" alt={t("testimonial-frame-alternate")} fill />
                        <Image src="/images/Testimonial.png" alt={t("testimonial-image-alternate")} fill />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>;
}