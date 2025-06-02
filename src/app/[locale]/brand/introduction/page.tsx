import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
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
            <div className={styles.overtureContainer}>
                <Image src="/images/Overture.jpg" alt="Overture image" fill />
                <p>2010년부터 청년 주도 사회 혁신 생태계를 조성해 온 씨즈는 팬데믹 이후, 고활력 청년 중심 성장에서 벗어나 저활력 청년 포용 및 시민 공유형 커먼즈 구축을 통해 지역 순환 경제를 주도하는 새로운 전략을 추진합니다. 앞으로도 다양한 사회 구성원과 연대하여, 사회 문제 해결 및 지속 가능한 사회를 위해 노력할 것입니다.</p>
            </div>
            <div className={styles.valuesContainer}>
                <h2>VALUES</h2>
                <h3>모든 생명은 서로에게 기대어 자랍니다. 우리는 연대의 힘을 믿습니다.</h3>
                <div className={styles.socialInnovationContainer}>
                    <div className={styles.socialInnovationText}>
                        <div>
                            <h4>사회 혁신</h4>
                            <h5>(Social Innovation)</h5>
                        </div>
                        <p>우리는 청년 당사자의 삶에서 출발합니다. 기존의 틀을 넘어, 청년 스스로 문제를 정의하고 해법을 만들어가는 과정을 지원합니다. 공공과 민간, 시민 사회가 함께 협력하며, 새로운 방식으로 더 나은 사회를 실현합니다.</p>
                    </div>
                    <Image src="/images/SocialInnovation.jpg" alt="Social Innovation image" fill />
                </div>
                <div className={styles.sustainabilityContainer}>
                    <div className={styles.sustainabilityText}>
                        <div>
                            <h4>지속 가능성</h4>
                            <h5>(Sustainability)</h5>
                        </div>
                        <p>단기적 성과가 아닌, 모두의 내일을 위한 뿌리깊은 변화에 집중합니다. 환경과 공동체, 개인의 삶이 조화를 이루는 지속 가능한 생태계를 지향합니다. 작은 씨앗 하나가 나무가 되고 숲을 이루듯, 함께 자라고, 함께 살아가는 삶을 꿈꿉니다.</p>
                    </div>
                    <Image src="/images/Sustainability.jpg" alt="Sustainability image" fill />
                </div>
                <div className={styles.solidarityContainer}>
                    <div className={styles.solidarityText}>
                        <div>
                            <h4>연대</h4>
                            <h5>(Solidarity)</h5>
                        </div>
                        <p>모든 생명은 연결되어 있습니다. 우리는 고립된 청년이 다시 사회와 연결되고, 세대와 지역을 넘어 연대할 수 있도록 돕습니다. 환대와 신뢰의 문화를 바탕으로, 서로의 다름을 존중하며 함께 살아가는 사회를 만듭니다.</p>
                    </div>
                    <Image src="/images/Solidarity.jpg" alt="Solidarity image" fill />
                </div>
                <div className={styles.fermeture}>
                    <Image src="/images/Fermeture.png" alt="Fermeture image" fill />
                    <h6>우리는 위로 올라가는 성장이 아닌, 옆으로 넓어지는 성장을 만듭니다. 단절과 고립을 경험하는 청년 세대 가운데, 연결의 힘을 되살립니다.</h6>
                </div>
                <div className={styles.peopleContainer}>
                    <h2>PEOPLE</h2>
                    <p>씨즈와 함께 나아가는 직원들을 소개합니다.</p>
                    <Image src="/images/People.jpg" alt="People image" fill />
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
                    <h2>씨즈 사람들의 이야기</h2>
                    <div className={styles.testimonial}>
                        <Image src="/images/Frame.png" alt="Frame image" fill />
                        <Image src="/images/Testimonial.png" alt="Testimonial image" fill />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>;
}