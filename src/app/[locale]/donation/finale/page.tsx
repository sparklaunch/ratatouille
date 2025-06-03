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
                <blockquote>처음엔 공무원 시험 준비에 매달렸습니다.<br />지속되는 실패에 고립과 외로움을 경험했지요.<br />그런데, 씨즈 두더집을 만나며<br />고립에서 벗어나 조금씩 밝은 삶으로 나아가기 시작했어요.<br />그렇게 저는, 혼자가 아니란 걸 알게 되었습니다.</blockquote>
                <Image src="/images/FinaleMain.jpg" alt="Finale main image" fill />
            </div>
        </div>
        <div className={styles.hopeContainer}>
            <Image src="/images/Hope.png" alt="Hope image" fill />
            <div className={styles.hopeContent}>
                <p>그녀의 이야기는 단지 한 사람의 변화에 그치지 않습니다.</p>
                <h2>혜진의 변화처럼,<br />당신의 손길이 청년의 삶을 바꿉니다.<br />우리는 청년들이 혼자가 아닌 세상에서,<br />자신을 돌아보고 함께 성장할 수 있도록 돕습니다.<br />이 여정은 씨즈의 활동을 통해 이루어집니다.<br />집밥 모임, 제주 리트릿, 치유 프로그램, 비폭력 대화 등<br />다양한 프로그램이 바로 혜진처럼 많은 청년들에게 기회를 제공합니다.</h2>
                <p>당신의 연대가, 혜진과 같은 청년들에게 새로운 내일을 선물합니다.<br />오늘, 당신도 그 변화를 함께 만들어 갈 수 있습니다.</p>
            </div>
        </div>
    </>;
}