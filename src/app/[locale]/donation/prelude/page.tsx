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
        <div className={styles.firstAmbientContainer}>
            <Image src="/images/FirstAmbientBackground.png" alt="First ambient background image" fill />
            <div className={styles.firstAmbientContent}>
                <h5>단절된 사회, 혼자가 아닌 함께하는 세상을 만들 수 있을까요?</h5>
                <p>씨즈는 '그렇다'고 믿습니다.<br />그리고 그 시작은 당신의 연대입니다.</p>
                <p>우리는 함께 집밥을 만들어 먹으며,<br />잠시 쉬어갈 수 있는 제주 리트릿에서 서로를 만납니다.<br />비폭력 대화를 통해 건강한 관계를 배우며,<br />인문학 속에서 사회와 연결된 나를 발견합니다.<br />치유와 회복을 위한 다양한 프로그램들을 통해,<br />청년들은 다시 연결되고, 삶은 조금씩 자라납니다.</p>
                <p>당신의 후원은 이 모든 여정을 가능케 합니다.<br />씨앗처럼 작은 손길이,<br />숲처럼 울창한 변화를 만들어냅니다.</p>
                <Image src="/images/FirstAmbient.jpg" alt="First ambient image" fill />
            </div>
        </div>
        <div className={styles.lastAmbientContainer}>
            <Image src="/images/LastAmbientBackground.png" alt="Last ambient background image" fill />
            <div className={styles.lastAmbientContent}>
                <h5>누군가의 내일이 당신 덕분에 달라진다면요?</h5>
                <p>지친 마음에 다시 햇살이 들고,<br />고요한 고립 속에 목소리가 생기고,<br />작은 씨앗이 자라 한 그루의 나무가 됩니다.<br />나무들은 모여 울창한 숲이 되어 서로를 지킵니다.<br />작은 씨앗을 지키는 씨즈 키퍼가 되어주세요.</p>
                <Image src="/images/LastAmbient.jpg" alt="Last ambient image" fill />
            </div>
        </div>
    </>;
}