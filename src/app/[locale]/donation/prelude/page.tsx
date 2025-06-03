import Statistic from "@/components/statistic/Statistic";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import styles from "./style.module.scss";

export default async function PreludePage() {
    return <>
        <div className={styles.donateButton}>
            <Link href="#">후원하기</Link>
        </div>
        <div className={styles.preludeMainContainer}>
            <Image src="/images/PreludeMain.png" alt="Prelude main image" fill />
            <Link href="/">
                <Image src="/logos/Logo.svg" alt="Seeds logo" fill className={styles.logo} />
            </Link>
            <h2>누군가의 '혼자가 아니야'라는 한마디가,<br />당신을 살린 적이 있나요?</h2>
        </div>
        <div className={styles.preludeBackgroundContainer}>
            <Image src="/images/PreludeBackground.png" alt="Prelude background image" fill />
            <div className={styles.preludeBackgroundContent}>
                <h3>그 한마디로 버텨낸 시간.<br />그 따뜻한 눈빛으로 다시 일어선 날.<br />우리 모두는 누군가의 온기로 살아왔습니다.<br />이제, 당신이 그 온기가 되어주세요.<br />단절된 청년들에게 다시 연결될 수 있는 희망을 건네는 일.<br />씨즈와 함께라면 가능합니다.</h3>
                <Image src="/images/PreludeForeground.png" alt="Prelude foreground image" fill />
            </div>
        </div>
        <div className={styles.statisticContainer}>
            <div className={styles.statistic}>
                <Statistic percentage={5.2} size={500} strokeWidth={80} />
                <h4>고립·은둔 청년의 비율은 청년 인구의 5%, 약 51만 명으로 추정.</h4>
            </div>
            <div className={styles.statistic}>
                <Statistic percentage={92.7} size={500} strokeWidth={80} />
                <h4>고립·은둔 청년의 92.7%는 고립 상태를 벗어나고 싶어 하며, 일상 생활 회복을 가장 많이 원하고 있습니다.</h4>
            </div>
        </div>
    </>;
}