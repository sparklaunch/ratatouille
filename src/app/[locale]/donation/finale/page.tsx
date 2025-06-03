import { Link } from "@/i18n/routing";
import Image from "next/image";
import styles from "./style.module.scss";

export default async function FinalePage() {
    return <>
        <div className={styles.donateButton}>
            <Link href="#">후원하기</Link>
        </div>
        <div className={styles.finaleMainContainer}>
            <Image src="/images/FinaleMainBackground.png" alt="Finale main background image" fill />
            <Link href="/">
                <Image src="/logos/Logo.svg" alt="Seeds logo" fill className={styles.logo} />
            </Link>
            <div className={styles.finaleMainContent}>
                <h1>고립·은둔 청년인 혜진의 이야기</h1>
                <p>처음엔 공무원 시험 준비에 매달렸습니다.<br />지속되는 실패에 고립과 외로움을 경험했지요.<br />그런데, 씨즈 두더집을 만나며<br />고립에서 벗어나 조금씩 밝은 삶으로 나아가기 시작했어요.<br />그렇게 저는, 혼자가 아니란 걸 알게 되었습니다.</p>
                <Image src="/images/FinaleMain.jpg" alt="Finale main image" fill />
            </div>
        </div>
    </>;
}