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
            <h2>누군가의 '혼자가 아니야'라는 한마디가, 당신을 살린 적이 있나요?</h2>
        </div>
    </>;
}