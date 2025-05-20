import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { LocaleTypes } from "@/utilities/localization/settings";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export default async function HomePage({ params }: {
    params: Promise<{ locale: LocaleTypes }>
}) {
    const { locale } = await params;
    return (
        <>
            <Header params={{ locale }} />
            <div className={styles.videoContainer}>
                <video autoPlay loop muted playsInline className={styles.video}>
                    <source src="/videos/Video.mp4" type="video/mp4" />
                    비디오를 플레이할 수 없습니다.
                </video>
            </div>
            <div className={styles.preludeContainer}>
                <div className={styles.prelude}>
                    <h1>우리는 작은 씨앗의 힘을 믿습니다.</h1>
                    <p>우리는 청년에게 회복과 연대, 성장의 힘이 있다고 생각합니다. 작은 씨앗이 자라 모두가 쉬어갈 나무가 됩니다. 사단법인 씨즈는 청년의 힘과 가능성을 믿으며, 힘껏 지지하고 환대합니다.</p>
                    <Link href="#" className={styles.moreLink}>
                        <p>More</p>
                        <Image src="/icons/RightArrow.svg" alt="오른쪽 화살표" width={19} height={13} />
                    </Link>
                </div>
                <Image src="/images/Prelude.jpg" alt="새싹이 자라나는 이미지" fill className={styles.preludeImage} />
            </div>
            <div className={styles.jumbotronContainer}>
                <Image src="/images/Jumbotron.jpg" alt="씨즈 점보트론 이미지" fill />
                <h2>We Believe in The Power of Small SEED:S</h2>
            </div>
            <div className={styles.valuesContainer}>
                <h3>VALUES</h3>
                <p>모든 생명은 서로에게 기대어 자랍니다. 우리는 연대의 힘을 믿습니다.</p>
                <div className={styles.valuesGridContainer}>
                    <div className={styles.value}>
                        <Image src="/images/Value.png" alt="가치 이미지" fill />
                        <h4>청년 다차원적 빈곤 해결의 씨앗</h4>
                        <p>사회 혁신가로 성장하는 과정 및 생태계 조성에 함께 합니다.</p>
                    </div>
                    <div className={styles.value}>
                        <Image src="/images/Value.png" alt="가치 이미지" fill />
                        <h4>모두를 위한 경제의 씨앗</h4>
                        <p>경제가 아닌 삶을 중심에 두는 새로운 길을 엽니다.</p>
                    </div>
                    <div className={styles.value}>
                        <Image src="/images/Value.png" alt="가치 이미지" fill />
                        <h4>경계를 허무는 씨앗</h4>
                        <p>경계를 넘어 연결되고 협력하는 사회를 만듭니다.</p>
                    </div>
                </div>
            </div>
            <div className={styles.projectsContainer}>
                <h3>PROJECT: OUR 3 SEED:S</h3>
                <div className={styles.projectsGridContainer}>
                    <div className={styles.project}>
                        <Image src="/images/Project.gif" alt="프로젝트 이미지" fill unoptimized />
                        <h4>사회 혁신</h4>
                        <p>우리는 청년 당사자의 삶에서 출발합니다.</p>
                    </div>
                    <div className={styles.project}>
                        <Image src="/images/Project.gif" alt="프로젝트 이미지" fill unoptimized />
                        <h4>지속 가능성</h4>
                        <p>모두의 내일을 위한 뿌리깊은 변화에 집중합니다.</p>
                    </div>
                    <div className={styles.project}>
                        <Image src="/images/Project.gif" alt="프로젝트 이미지" fill unoptimized />
                        <h4>연대</h4>
                        <p>고립된 청년이 사회와 연결되고, 세대와 지역을 넘어 연대합니다.</p>
                    </div>
                </div>
            </div>
            <Footer params={{ locale }} />
        </>
    );
}
