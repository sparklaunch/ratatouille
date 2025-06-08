import Image from "next/image";
import styles from "./style.module.scss";

export default async function PermissionDeniedPage() {
    return <div className={styles.container}>
        <Image src="/images/NoWalking.webp" alt="접근 거부 이미지" fill className={styles.noWalkingImage} />
        <h1 className={styles.header}>접근 거부</h1>
        <p className={styles.paragraph}>관리자 페이지에 접속하려면 먼저 로그인하세요</p>
    </div>
}