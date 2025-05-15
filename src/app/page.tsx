import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export default function Home() {
    return (
        <>
            <Header />
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
            <Footer />
        </>
    );
}
